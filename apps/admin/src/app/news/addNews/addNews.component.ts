import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core'
import { NzUploadFile } from 'ng-zorro-antd/upload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsModel } from '../../common/models/newsModal';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentListData } from './mockComments';

import { NzMessageService } from 'ng-zorro-antd/message';
import { QuotesMockData } from './mock-quotes';
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
    newsModel: NewsModel;
    newsForm: FormGroup;
    tempFile: { colName: string, value: any, label: string, showDelBtn: boolean } = { 'colName': 'file', value: null, label: 'Video Or Image Upload', showDelBtn: false }
    tempThumbanilFile: { colName: string, value: any, label: string, showDelBtn: boolean } = { 'colName': 'thumbnail', value: null, label: 'Thumbnail Image Upload', showDelBtn: false }
    // $isVisible:BehaviorSubject<boolean>=new BehaviorSubject(false);
    size = 'default';

    // quotesForm: FormGroup;
    tagForm: FormGroup;
    allQuotes: any = [];
    newTags: any = [];
    allTags: any = [];
    allCategories: any = [];
    strucCategories: any;

    pagination: { limit: number, pageNo: number, name?: string, title?: string } = { limit: 15, pageNo: 1 }
    public Editor = ClassicEditor;
    previewImage = '';
    previewVisible = false;
    value: string[] = ['0-0-0'];
    config: any;
    
    newsId: number;
    uploadProgress: number;
    file: any;
    fileType: string;
    selectedCat: any;
    loader = true;
    tinyConfig: any;
    isVisible: boolean;
    isLoading= false;

    constructor(private apiService: ApiService,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private route: Router,
        private zone: NgZone,
        private message: NzMessageService) { }

    ngOnInit(): void {
        const admin = JSON.parse(localStorage.getItem('admin') || '{}');
        let selfp = this;
        this.tinyConfig = {
            apiKey: "pl277auj2y5uqk3nkk28sz4d32vimlj6ezd5b6t6vee325u4",
            base_url: '/tinymce',
            suffix: '.min',
            'plugins':
                'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',

            // 'code print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
            // "advlist autolink link image lists charmap print preview hr anchor pagebreak",
            // "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking",
            // "table contextmenu directionality emoticons paste textcolor responsivefilemanager code",
            // "advlist autolink lists link image charmap print preview anchor",
            // "searchreplace visualblocks code fullscreen",
            // "insertdatetime media table contextmenu paste qrcode youtube twitter"

            directionality: 'rtl',
            menubar: 'file edit view insert format custom tools table help',
            toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
            'image_advtab': true,
            menu: {
                custom: { title: 'Custom', items: 'myCustomMenuItem' }
            },
            // menubar: 'file edit view insert table custom format tools',
            setup: function (editor) {
                const self = selfp;
                editor.ui.registry.addMenuItem('myCustomMenuItem', {
                    text: 'Upload',
                    onAction:
                        (function () {
                            self.toggleModal();
                        }).bind(this)
                })

            },
            images_upload_url: requests.addNewAttachment,
            automatic_uploads: true,
            file_picker_callback: function (callback, value, meta) {
                // Provide file and text for the link dialog
                if (meta.filetype == 'file') {
                    callback('mypage.html', { text: 'My text' });
                }

                // Provide image and alt text for the image dialog
                if (meta.filetype == 'image') {
                    callback('myimage.jpg', { alt: 'My alt text' });
                }

                // Provide alternative source and posted for the media dialog
                if (meta.filetype == 'media') {
                    callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
                }
            }
        }


        // this.initQuoteForm();
        this.initTagForm();

        this.newsModel = new NewsModel()
        this.activatedRoute.params.subscribe(params => {
            this.newsId = parseInt(params.id);
            // if (!this.newsId) {
            //     this.initNewsForm();
            // } 
            if (this.newsId) {
                this.getNews();
            }    
            else {
                this.initNewsForm();
                setTimeout(() => {
                    this.loader = false;
                }, 1000);
            }
        })
        this.getTags();
        this.getAllCategories();
        this.getAllQuotes();
    }

    toggleModal() {
        // setTimeout(() => {
        this.zone.run(e => {

            this.isVisible = true
        })
        // }, 400);
    }

    closeModal(data) {
        this.isVisible = false
    }

    fileFromModal(file) {
        this.isVisible = false;
        debugger
        if(file.attachmentType!='VIDEO'){
            this.newsForm.patchValue({
                content: this.newsForm.value.content ? this.newsForm.value.content + `<img src="${file.url}">` : `<img src="${file.url}">`,
            });
        }else{
            this.newsForm.patchValue({
                content: this.newsForm.value.content ? this.newsForm.value.content + 
                `<video><sourse src="${file.url} constrols"></video>` : 
                `<video><sourse src="${file.url} constrols"></video>`,
            });
        }
    }

    private initQuoteForm() {
        // this.quotesForm = this.fb.group({
        //     name: [null, [Validators.required, Validators.pattern('^(?:[a-zA-Z0-9\s!@,=%$#&*_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,250}$')]]
        // });
    }

    private initTagForm() {
        this.tagForm = this.fb.group({
            title: [null, [Validators.required]]
        });
    }

    getNews() {
        this.apiService.sendRequest(requests.getNewsById + this.newsId, 'get').subscribe((res: any) => {
            console.log("news data", res.response.news);
            this.newsModel.populateFromServerModal(res.response.news);
            if(this.newsModel.fileUrl || this.newsModel.videoUrl) {
                this.tempFile.showDelBtn = true;
            }
            if(this.newsModel.thumbnailUrl) {
                this.tempThumbanilFile.showDelBtn = true;
            }
            this.newsModel.seoDetailId = res.response.news.seoDetailId;
            console.log("view modal", this.newsModel);
            this.populateNewsForm(res.response.news);
            setTimeout(() => {
                this.loader = false;
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
            quotesIds: [news?.quotes && news?.quotes.map(x => x.quoteTickerId) || [], [Validators.required]],
            seoTitle: [news?.seoDetail?.title || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
            slugLine: [news?.seoDetail?.slugLine || null, [Validators.required, Validators.maxLength(250)]],
            description: [news?.seoDetail?.description || null, [Validators.required, Validators.maxLength(250)]],
            keywords: [news?.seoDetail?.keywords || null, [Validators.required]],
            file: [null],
            thumbnail: [null],
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
            thumbnail: [null]
        });
    }

    onChange($event: string[]): void {
        this.selectedCat = $event;
        console.log("SEL-CAT", this.selectedCat);
    }

    saveNews() {
        for (const i in this.newsForm.controls) {
            this.newsForm.controls[i].markAsDirty();
            this.newsForm.controls[i].updateValueAndValidity();
        }
        if (this.newsForm.valid) {
            this.isLoading= true;
            setTimeout(() => {
                this.isLoading = false;
              }, 2000);
            const obj = this.newsForm.value;
            obj['newsType'] = this.newsModel.videoId ? 'NEWS' : 'ARTICLE';
            obj['contentType'] = this.newsModel.imageId ? 'IMAGE' : this.newsModel.videoId ? 'VIDEO' : 'TEXT';
            obj['quotes'] = this.allQuotes.filter(x => {
                if (this.newsForm.value.quotesIds.some(z => z == x.quoteTickerId)) {
                    return x
                }
            })
            // // obj['parentCategoryId'] = parseInt(this.newsForm.value.parentCategoryId);
            this.apiService.sendRequest(this.newsId ? requests.updateNews + this.newsId : requests.addNews, this.newsId ? 'put' : 'post', { ...this.newsModel.toServerModal(obj, this.newsModel.seoDetailId), ...this.newsId ? { id: this.newsId } : null }).subscribe((res: any) => {
                console.log("News", res);
                this.initNewsForm();
                this.route.navigateByUrl('news/list')
                if (this.newsId) {
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

    mainFileUploaded(file) {
        if (file.attachmentType == 'IMAGE') {
            this.newsModel.imageId = file.id;
            this.newsModel.fileUrl = file.url;
            this.tempFile.showDelBtn = true;
        } 
        else {
            this.newsModel.videoId = file.id;
            this.newsModel.videoUrl = file.url;
            this.tempFile.showDelBtn = true;
        }
    }

    thumbnailUploaded(file) {
        this.newsModel.thumbnailId = file.id;
        this.newsModel.thumbnailUrl = null;
        this.tempThumbanilFile.showDelBtn = false;
        setTimeout(() => {
            this.newsModel.thumbnailUrl = file.url;
            this.tempThumbanilFile.showDelBtn = true;
        }, 400);
    }


    reset(data) {
        this.file = null;
        this.newsModel.imageId = null;
        this.newsModel.fileUrl = null;
        this.newsModel.videoId = null;
        this.newsModel.videoUrl = null;
        this.newsModel.thumbnailId = null;
        this.newsModel.thumbnailUrl = null;
        this.newsModel.contentType = null;
        this.tempFile.showDelBtn = false;
        this.tempThumbanilFile.value = null;
        this.tempThumbanilFile.showDelBtn = false;
    }

    resetThumbnail(data) {
        this.newsModel.thumbnailId = null;
        this.newsModel.thumbnailUrl = null;
        this.tempThumbanilFile.showDelBtn = false;
    }

    mainFileSelection(event) {
        console.log("file selected", event);
        this.newsModel.contentType = event?.value?.name.match(/\.(jpg|jpeg|png|gif)$/) ? 'IMAGE' : 'VIDEO'
        this.newsModel.fileUrl = null;
        this.newsModel.videoUrl = null;
        this.tempFile.showDelBtn = event?.value ? true : false;
    }

    thumbnailFileSelection(event) {
        console.log("thubnail file selected", event);
        this.newsModel.thumbnailUrl = null;
        this.tempThumbanilFile.showDelBtn = event?.value ? true : false;
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
        // zag trader api 
        // this.apiService.sendRequest(requests.getAllQuotes, 'get', this.clean(Object.assign({ ...this.pagination }))).subscribe((res: any) => {
        //     console.log("ALL-QUOTES", res.quotes);
        this.allQuotes = QuotesMockData;
        // })
    }

    clean(obj: any) {
        for (const propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
                delete obj[propName];
            }
        }
        return obj
    }

    getTags(value?) {
        this.pagination.title = value ? value : '';
        this.apiService.sendRequest(requests.getAllTags, 'get', this.clean(Object.assign({ ...this.pagination }))).subscribe((res: any) => {
            this.allTags = res.response.tags;
            console.log("ALL-TAGS", this.allTags);
        })
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.clean(Object.assign({ ...this.pagination }))).subscribe((res: any) => {
            console.log("ALL-CAT", res);
            this.allCategories = res.response.categories;
            this.strucCategories = this.catToNodes(this.allCategories);
            console.log("structured nodes categories=>", this.strucCategories);
        })
    }

    // addNewQuote(value?) {
    //     for (const i in this.quotesForm.controls) {
    //         this.quotesForm.controls[i].markAsDirty();
    //         this.quotesForm.controls[i].updateValueAndValidity();
    //     }
    //     if (this.quotesForm.valid) {
    //         this.apiService.sendRequest(requests.addNewQuote, 'post', this.quotesForm.value).subscribe((res: any) => {
    //             this.allQuotes = res.quote;
    //             this.initQuoteForm();
    //             this.getAllQuotes();
    //             console.log("ADD-TAG", this.allQuotes);
    //         })
    //     }
    // }

    addNewTag() {
        for (const i in this.tagForm.controls) {
            this.tagForm.controls[i].markAsDirty();
            this.tagForm.controls[i].updateValueAndValidity();
        }
        if (this.tagForm.valid) {
            this.apiService.sendRequest(requests.addNewTag, 'post', { ...this.tagForm.value, isActive: true }).subscribe((res: any) => {
                this.newTags = res.response;
                this.initTagForm();
                this.getTags();
                console.log("ADD-TAG", this.newTags);
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