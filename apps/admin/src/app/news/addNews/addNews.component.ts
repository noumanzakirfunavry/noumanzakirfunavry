import { Component, OnInit } from '@angular/core'
import { NzUploadFile } from 'ng-zorro-antd/upload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsModal } from '../../common/models/newsModal';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentListData } from './mockComments';
import { environment } from '../../../environments/environment';
import { Location } from '@angular/common';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';

@Component({
    selector: 'app-addNews',
    templateUrl: './addNews.component.html'
})

export class AddNewsComponent implements OnInit {
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

    pagination: { limit: number, pageNo: number, name?: string, title?: string } = { limit: 10, pageNo: 1 }
    public Editor = ClassicEditor;
    previewImage = '';
    previewVisible = false;
    value: string[] = ['0-0-0'];
    config = {
        // plugins: [CKFinder , ],
        language: 'ar',
        ckfinder: {
            openerMethod: 'popup',
            // uploadUrl: 'http://157.90.67.186/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
            // filebrowserBrowseUrl: 'http://157.90.67.186/ckfinder/userfiles',
            // filebrowserImageBrowseUrl: 'http://157.90.67.186/ckfinder/userfiles?type=Images',
            // filebrowserUploadUrl:'http://157.90.67.186/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
            // filebrowserImageUploadUrl: 'http://157.90.67.186/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
            uploadUrl: 'http://localhost:80/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
            filebrowserBrowseUrl: 'http://localhost:80/ckfinder/userfiles',
            filebrowserImageBrowseUrl: 'http://localhost:80/ckfinder/userfiles?type=Images',
            filebrowserUploadUrl: 'http://localhost:80/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
            filebrowserImageUploadUrl: 'http://localhost:80/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',

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
    commentListData = CommentListData
    newsId: number;
    uploadProgress: number;
    file: any;
    fileType: string;

    constructor(private apiService: ApiService,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private route: Router) { }

    ngOnInit(): void {
        this.initQuoteForm();
        this.initTagForm();

        this.newsModal = new NewsModal()
        this.activatedRoute.params.subscribe(params => {
            this.newsId = parseInt(params.id);
            if (!this.newsId) {
                this.initNewsForm();
            } else {
                this.getNews(this.newsId)
            }
        })
        setTimeout(() => {
            this.getTags();
            this.getAllCategories();
            this.getAllQuotes()
        }, 2000);
    }
    private initQuoteForm() {
        this.quotesForm = this.fb.group({
            name: [null, [Validators.required]]
        });
    }

    private initTagForm() {
        this.tagForm = this.fb.group({
            title: [null, [Validators.required]]
        });
    }

    getNews(newsId: number) {
        this.apiService.sendRequest(requests.getNewsById + this.newsId, 'get').subscribe((res: any) => {
            console.log("news data", res.response.news);
            // this.newsModal=new NewsModal();
            this.newsModal.populateFromServerModal(res.response.news);
            this.newsModal.seoDetailId = res.response.news.seoDetailId;
            console.log("view modal", this.newsModal);

            this.populateNewsForm(res.response.news);
        })
    }
    populateNewsForm(news: any) {
        this.newsForm = this.fb.group({
            title: [news.title || null, [Validators.required]],
            content: [news?.content || null, [Validators.required]],
            isPro: [news.isPro || false],
            visible: [news.visible, [Validators.required]],
            contentType: [news.contentType || 'TEXT', [Validators.required]],
            authorName: [news?.authorName || 'CNBC News',],
            newsType: [news?.newsType || 'NEWS',],
            showOnHomepage: [news.showOnHomepage || true, [Validators.required]],
            isActive: [news.isActive || true,],
            categoryIds: [news?.categories.map(x => x.id) || null, [Validators.required]],
            tagsIds: [news?.tags.map(x => x.id) || null, [Validators.required]],
            quotesIds: [news?.quotes.map(x => x.id) || null, [Validators.required]],
            seoTitle: [news?.seoDetail?.title || null, [Validators.required]],
            slugLine: [news?.seoDetail?.slugLine || null, [Validators.required]],
            description: [news?.seoDetail?.description || null, [Validators.required]],
            keywords: [news?.seoDetail?.keywords || null, [Validators.required]],
            // seoTitle: [ null, [Validators.required]],
            // slugLine: [ null, [Validators.required]],
            // description: [ null, [Validators.required]],
            // keywords: [ null, [Validators.required]],
            file: [null],
        });
    }
    initNewsForm() {
        this.newsForm = this.fb.group({
            title: [null, [Validators.required]],
            content: [null, [Validators.required]],
            isPro: [false,],
            visible: [null, [Validators.required]],
            contentType: ['TEXT', [Validators.required]],
            authorName: [null,],
            newsType: ['NEWS',],
            showOnHomepage: [true, [Validators.required]],
            isActive: [true,],
            categoryIds: [null, [Validators.required]],
            tagsIds: [null, [Validators.required]],
            quotesIds: [null, [Validators.required]],
            seoTitle: [null, [Validators.required]],
            slugLine: [null, [Validators.required]],
            description: [null, [Validators.required]],
            keywords: [null, [Validators.required]],
            file: [null],
        });

    }
    onChange($event: string[]): void {
        console.log($event);
    }

    saveNews() {
        for (const i in this.newsForm.controls) {
            this.newsForm.controls[i].markAsDirty();
            this.newsForm.controls[i].updateValueAndValidity();
        }
        // if (this.newsForm.valid) {
        const obj = this.newsForm.value;
        ;
        // obj['parentCategoryId'] = parseInt(this.newsForm.value.parentCategoryId);
        this.apiService.sendRequest(this.newsId ? requests.updateNews + this.newsId : requests.addNews, this.newsId ? 'put' : 'post', { ...this.newsModal.toServerModal(obj, this.newsModal.seoDetailId), ...this.newsId ? { id: this.newsId } : null }).subscribe((res: any) => {
            console.log("News", res);
            this.newsForm.reset();
            this.route.navigateByUrl('news/list')
            // if(this.categoryId) {
            //     this.message.create('success', `Category Updated Successfully`)
            // }
            // else {
            //     // this.message.create('success', `Category Added Successfully`)
            // }
        })
        // }
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
                    this.newsModal.fileUrl = environment.fileUrl + res.body.response.path
                }else{
                    this.newsModal.thumbnailId = res.body.response.id;
                    this.newsModal.thumbnailUrl = environment.fileUrl + res.body.response.path

                }
                console.log("news modal with image id", this.newsModal);
            }
        })
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
        this.apiService.sendRequest(requests.getAllQuotes, 'get', this.pagination).subscribe((res: any) => {
            console.log("ALL-QUOTES", res.quotes);
            this.allQuotes = res.quotes;
        })
    }

    getTags(value?) {
        this.pagination.title = value ? value : '';
        this.apiService.sendRequest(requests.getAllTags, 'get', this.pagination).subscribe((res: any) => {
            console.log("ALL-tags", res.response.tags);
            this.allTags = res.response.tags;
        })
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.pagination).subscribe((res: any) => {
            console.log("ALL-cat", res);
            this.allCategories = res.response.categories;
            this.strucCategories = this.catToNodes(this.allCategories);
            console.log("structured nodes categories=>", this.strucCategories);

        })
    }

    addNewQuote(value?) {
        this.apiService.sendRequest(requests.addNewQuote, 'post', this.quotesForm.value).subscribe((res: any) => {
            this.allQuotes = res.quote;
            this.initQuoteForm();
            this.getAllQuotes();
            console.log("ADD-TAG", this.allQuotes);
        })
    }
    addNewTag() {
        this.apiService.sendRequest(requests.addNewTag, 'post', { ...this.tagForm.value, isActive: true }).subscribe((res: any) => {
            this.allQuotes = res.quote;
            this.initTagForm();
            this.getTags();
            console.log("ADD-TAG", this.allQuotes);
        })
    }

    catToNodes(catorgories) {
        let nodes = [];
        this.allCategories.forEach(cat => {
            let parent = {
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
}    