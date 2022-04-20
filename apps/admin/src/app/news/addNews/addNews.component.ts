import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { NzUploadFile } from 'ng-zorro-antd/upload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsModal } from '../../common/models/newsModal';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentListData } from './mockComments';
import { environment } from '../../../environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

@Component({
    selector: 'app-addNews',
    templateUrl: './addNews.component.html',
    styleUrls: ['./addNews.component.scss']
})

export class AddNewsComponent implements OnInit {
    @ViewChild('myInput') myInputVariable: ElementRef;
    currentDate = new Date()
    newsModal: NewsModal;
    newsForm: FormGroup;

    size = 'default';

    quotesForm: FormGroup;
    tagForm: FormGroup;

    allQuotes: any = [];
    allTags: any = [];
    allCategories: any = [];
    strucCategories: any;

    pagination: { limit: number, pageNo: number, name?: string, title?: string } = { limit: 15, pageNo: 1 }
    public Editor = ClassicEditor;
    previewImage = '';
    previewVisible = false;
    value: string[] = ['0-0-0'];
    config:any;
    commentListData = CommentListData
    newsId: number;
    uploadProgress: number;
    file: any;
    fileType: string;
    submitted= false;
    selectedCat: any;
    loader: boolean=true;

    constructor(private apiService: ApiService,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private route: Router, 
        private message: NzMessageService) { }

    ngOnInit(): void {
        this.loader=true;
        const admin = JSON.parse(localStorage.getItem('admin') || '{}');
        this.config={
            // plugins: [CKFinder , ],
            // plugins: [SimpleUploadAdapter , ],
            language: 'ar',
            // simpleUpload: {
            //     // The URL that the images are uploaded to.
            //     uploadUrl: requests.addNewAttachment,
    
            //     // Enable the XMLHttpRequest.withCredentials property.
            //     withCredentials: true,
    
            //     // Headers sent along with the XMLHttpRequest to the upload server.
            //     headers: {
            //         'X-CSRF-TOKEN': 'CSRF-Token',
            //         Authorization: 'Bearer '+admin.token.access_token
            //     }
            // },
            ckfinder: {
                // uploadUrl: 'https://ckfinder.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json',

                openerMethod: 'popup',
                uploadUrl: 'http://157.90.67.186/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
                filebrowserBrowseUrl: 'http://157.90.67.186/ckfinder/userfiles',
                filebrowserImageBrowseUrl: 'http://157.90.67.186/ckfinder/userfiles?type=Images',
                filebrowserUploadUrl:'http://157.90.67.186/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
                filebrowserImageUploadUrl: 'http://157.90.67.186/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
                // uploadUrl: 'http://localhost:80/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
                // filebrowserBrowseUrl: 'http://localhost:80/ckfinder/userfiles',
                // filebrowserImageBrowseUrl: 'http://localhost:80/ckfinder/userfiles?type=Images',
                // filebrowserUploadUrl: 'http://localhost:80/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
                // filebrowserImageUploadUrl: 'http://localhost:80/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
    
                options: {
                    resourceType: 'Images'
                }
            },
            // toolbar: [ 'ckfinder','uploadImage', 'imageUpload', '|', 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo' ]
            toolbar: ['heading', '|',
                'fontfamily', 'fontsize',
                'alignment',
                'fontColor', 'fontBackgroundColor', '|',
                'bold', 'italic', 'custombutton', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                'link', '|',
                'outdent', 'indent', '|',
                'bulletedList', 'numberedList', '|',
                'code', 'codeBlock', '|',
                'insertTable', '|',
                'ckfinder', 'imageUpload', 'blockQuote', '|',
                'undo', 'redo', '|',
                'youtube',
                'mediaEmbed']
            // ckfinder: {
            //     // Open the file manager in the pop-up window.
            //     openerMethod: 'popup'
            // }
        }
       
        this.initQuoteForm();
        this.initTagForm();

        this.newsModal = new NewsModal()
        this.activatedRoute.params.subscribe(params => {
            this.newsId = parseInt(params.id);
            // if (!this.newsId) {
            //     this.initNewsForm();
            // } 
            if(this.newsId) {
                this.getNews()
            }else{
                this.initNewsForm();
                setTimeout(() => {
                    this.loader=false;
                }, 1000);
            }
        })
        // setTimeout(() => {
            this.getTags();
            this.getAllCategories();
            this.getAllQuotes()
        // }, 2000);
    }

    private initQuoteForm() {
        this.quotesForm = this.fb.group({
            name: [null, [Validators.required, Validators.pattern('^(?:[a-zA-Z0-9\s!@,=%$#&*_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,250}$')]]
        });
    }

    private initTagForm() {
        this.tagForm = this.fb.group({
            title: [null, [Validators.required]]
        });
    }

    getNews() {
        this.apiService.sendRequest(requests.getNewsById + this.newsId, 'get').subscribe((res: any) => {
            console.log("news data", res.response.news);
            // this.newsModal=new NewsModal();
            this.newsModal.populateFromServerModal(res.response.news);
            this.newsModal.seoDetailId = res.response.news.seoDetailId;
            console.log("view modal", this.newsModal);
            this.populateNewsForm(res.response.news);
            setTimeout(() => {
                this.loader=false;
            }, 1000); 
        })
    }

    populateNewsForm(news: any) {
        this.newsForm = this.fb.group({
            date: [new Date(news.updatedAt), []],
            title: [news.title || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
            content: [news?.content || null, [Validators.required, Validators.maxLength(1500)]],
            isPro: [news.isPro || false],
            visible: [news.visible || true, [Validators.required]],
            contentType: [news.contentType || 'TEXT', [Validators.required]],
            // authorName: [news?.authorName || 'CNBC News', [Validators.required, Validators.maxLength(250)]],
            newsType: [news?.newsType || 'NEWS',],
            showOnHomepage: [news.showOnHomepage || true, [Validators.required]],
            isActive: [news.isActive || true,],
            categoryIds: [news?.categories.map(x => x.id) || null, [Validators.required]],
            tagsIds: [news?.tags.map(x => x.id) || null, [Validators.required]],
            quotesIds: [news?.quotes.map(x => x.id) || null, [Validators.required]],
            seoTitle: [news?.seoDetail?.title || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
            slugLine: [news?.seoDetail?.slugLine || null, [Validators.required, Validators.maxLength(250)]],
            description: [news?.seoDetail?.description || null, [Validators.required, Validators.maxLength(250)]],
            keywords: [news?.seoDetail?.keywords || null, [Validators.required]],
            file: [null],
        });
    }

    initNewsForm() {
        this.newsForm = this.fb.group({
            date: [new Date(), []],
            title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
            content: [null, [Validators.required, Validators.maxLength(1500)]],
            isPro: [false],
            visible: [true, [Validators.required]],
            contentType: ['TEXT', [Validators.required]],
            // authorName: ['CNBC News', [Validators.required, Validators.maxLength(250)]],
            newsType: ['NEWS',],
            showOnHomepage: [true, [Validators.required]],
            isActive: [true],
            categoryIds: [null, [Validators.required]],
            tagsIds: [null, [Validators.required]],
            quotesIds: [null, [Validators.required]],
            seoTitle: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
            slugLine: [null, [Validators.required, Validators.maxLength(250)]],
            description: [null, [Validators.required, Validators.maxLength(250)]],
            keywords: [null, [Validators.required]],
            file: [null],
        });
    }

    onChange($event: string[]): void {
        this.selectedCat= $event;
        console.log("SEL-CAT", this.selectedCat);
    }

    saveNews() {
        for (const i in this.newsForm.controls) {
            this.newsForm.controls[i].markAsDirty();
            this.newsForm.controls[i].updateValueAndValidity();
        }
        this.submitted= true;
        if (this.newsForm.valid) {
            const obj = this.newsForm.value;
        if(this.file) {
            obj['newsType']= 'ARTICLE';
        }
        // obj['parentCategoryId'] = parseInt(this.newsForm.value.parentCategoryId);
        this.apiService.sendRequest(this.newsId ? requests.updateNews + this.newsId : requests.addNews, this.newsId ? 'put' : 'post', { ...this.newsModal.toServerModal(obj, this.newsModal.seoDetailId), ...this.newsId ? { id: this.newsId } : null }).subscribe((res: any) => {
            console.log("News", res);
            this.initNewsForm();
            this.route.navigateByUrl('news/list')
            if(this.newsId) {
                this.message.create('success', `News Updated Successfully`)
            }
            else {
                this.message.create('success', `News Added Successfully`)
            }
        })
        }
        console.log("form", this.newsForm.value);
    }

    getCaptcha(e: MouseEvent): void {
        e.preventDefault();
    }

    cancel(): void {
        this.route.navigateByUrl('news/list');
    }

    fileSelection(fileObject) {

        // this.isRecodedFile=fileObject.recorded ? fileObject.recorded:false;
        if (fileObject.file) {
            this.fileType = 'file';
            this.newsModal.mainFile = fileObject.file;
            this.file = fileObject.file;
        } else if (fileObject.link) {
            this.fileType = 'link';
            this.file = fileObject.link;
        } else if (fileObject.fileId) {
            this.fileType = 'fileId';
            this.file = fileObject.fileId;
        } else {
            this.file = null
        }
    }

    uploadFile(mainFile=true) {
        this.apiService.uploadFileProgress(this.file, this.newsForm.value.description).subscribe((res: any) => {
            // saving files on upload so that no need to load from s3.

            if (res?.type == 1 && res?.loaded && res?.total) {
                this.uploadProgress = Math.round(100 * (res.loaded / res.total));
                console.log("file progress", this.uploadProgress);
            }
            else if (res?.body) {
                console.log("Data Uploaded");
                console.log(res.body);
                if(mainFile){
                    this.newsModal.imageId = res.body.response.id;
                    this.newsModal.fileUrl = environment.fileUrl+ res.body.response.path
                }else{
                    this.newsModal.thumbnailId = res.body.response.id;
                    this.newsModal.thumbnailUrl = environment.fileUrl + res.body.response.path

                }
                console.log("news modal with image id", this.newsModal);
            }
        })
    }

    reset() {
        this.file= null;
        this.newsModal.imageId= null;
        this.newsModal.fileUrl= null;
        this.newsModal.thumbnailId= null;
        this.newsModal.thumbnailUrl= null;
        this.uploadProgress= null;
        this.myInputVariable.nativeElement.value = "";
    }

    fileRead($event) {
        this.file = $event.target.files[0];
    }

    handlePreview = (file: NzUploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }

    log(value: string[]): void {
        console.log(value);
    }

    getAllQuotes(value?) {
        this.pagination.name = value ? value : '';
        this.apiService.sendRequest(requests.getAllQuotes, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res: any) => {
            console.log("ALL-QUOTES", res.quotes);
            this.allQuotes = res.quotes;
        })
    }

    clean(obj:any) {
        for (const propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
            delete obj[propName];
          }
        }
        return obj
    }

    getTags(value?) {
        this.pagination.title = value ? value : '';
            this.apiService.sendRequest(requests.getAllTags, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res: any) => {
            this.allTags = res.response.tags;
            console.log("ALL-TAGS", this.allTags);
        })
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res: any) => {
            console.log("ALL-CAT", res);
            this.allCategories = res.response.categories;
            this.strucCategories = this.catToNodes(this.allCategories);
            console.log("structured nodes categories=>", this.strucCategories);
        })
    }

    addNewQuote(value?) {
        for (const i in this.quotesForm.controls) {
            this.quotesForm.controls[i].markAsDirty();
            this.quotesForm.controls[i].updateValueAndValidity();
        }
        if(this.quotesForm.valid) {
            this.apiService.sendRequest(requests.addNewQuote, 'post', this.quotesForm.value).subscribe((res: any) => {
                this.allQuotes = res.quote;
                this.initQuoteForm();
                this.getAllQuotes();
                console.log("ADD-TAG", this.allQuotes);
            })
        }
    }

    addNewTag() {
        for (const i in this.tagForm.controls) {
            this.tagForm.controls[i].markAsDirty();
            this.tagForm.controls[i].updateValueAndValidity();
        }
        if(this.tagForm.valid) {
            this.apiService.sendRequest(requests.addNewTag, 'post', { ...this.tagForm.value, isActive: true }).subscribe((res: any) => {
                this.allQuotes = res.quote;
                this.initTagForm();
                this.getTags();
                console.log("ADD-TAG", this.allQuotes);
            })
        }
    }

    catToNodes(catorgories) {
        const nodes = [];
        this.allCategories.forEach(cat => {
            const parent = {
                title: cat.title,
                value: cat.id,
                key: cat.id,
                children: []
            }
            if (cat.sub) {
                parent.children = cat.sub.map(x => {
                    return {
                        title: x.title,
                        value: x.id,
                        key: x.id,
                        isLeaf: true
                    }

                })
            }
            nodes.push(parent);
        })
        return nodes;
    }

    addNewCategory() {
        this.route.navigateByUrl('category/add');
    }

}    