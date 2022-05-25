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
import { WhiteSpaceValidator } from '../../shared/services/whiteSpaceValidator';
import { environment } from '../../../environments/environment';
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
    isVisible: boolean;
    isLoading= false;

    constructor(private apiService: ApiService,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private route: Router,
        private zone: NgZone,
        private message: NzMessageService) { }

    ngOnInit(): void {
        this.initTagForm();
        this.newsModel = new NewsModel()
        this.activatedRoute.params.subscribe(params => {
            this.newsId = parseInt(params.id);
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
        this.zone.run(e => {
            this.isVisible = true
        })
    }

    closeModal(data) {
        this.isVisible = false
    }

    fileFromModal(file) {
        this.isVisible = false;
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
            title: [news.title || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), WhiteSpaceValidator.noWhitespaceValidator]],
            content: [news?.content || null, [Validators.required]],
            isPro: [news.isPro],
            visible: [news.visible || true, [Validators.required]],
            contentType: [news.contentType, [Validators.required]],
            // authorName: [news?.authorName || 'CNBC News', [Validators.required, Validators.maxLength(250)]],
            newsType: [news?.newsType],
            showOnHomepage: [news.showOnHomepage || true, [Validators.required]],
            isActive: [news.isActive],
            categoryIds: [news?.categories.map(x => x.id) || null, [Validators.required]],
            tagsIds: [news?.tags.map(x => x.id) || null, [Validators.required]],
            quotesIds: [news?.quotes && news?.quotes.map(x => x.quoteTickerId) || []],
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
            title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), WhiteSpaceValidator.noWhitespaceValidator]],
            content: [null, [Validators.required]],
            isPro: [false],
            visible: [true, [Validators.required]],
            contentType: ['TEXT', [Validators.required]],
            // authorName: ['CNBC News', [Validators.required, Validators.maxLength(250)]],
            newsType: ['NEWS'],
            showOnHomepage: [true, [Validators.required]],
            isActive: [true],
            categoryIds: [null, [Validators.required]],
            tagsIds: [null, [Validators.required]],
            quotesIds: [null],
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
            obj['title'] = this.newsForm.value.title.trim();
            obj['newsType'] = this.newsModel.videoId && this.newsModel.videoUrl ? 'NEWS' : 'ARTICLE';
            obj['contentType'] = this.newsModel.imageId && this.newsModel.fileUrl ? 'IMAGE' : this.newsModel.videoId && this.newsModel.videoUrl ? 'VIDEO' : 'TEXT';
            obj['quotes'] = this.allQuotes.filter(x => {
                if (this.newsForm.value.quotesIds?.some(z => z == x.quoteTickerId)) {
                    return x
                }
            })
            this.apiService.sendRequest(this.newsId ? requests.updateNews + this.newsId : requests.addNews, this.newsId ? 'put' : 'post', { ...this.newsModel.toServerModal(obj, this.newsModel.seoDetailId), ...this.newsId ? { id: this.newsId } : null }).subscribe((res: any) => {
                console.log("NEWS", res);
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
            this.newsModel.fileUrl = environment.fileUrl + file.path;
            // this.newsModel.fileUrl = file.url;
            this.tempFile.showDelBtn = true;
        } 
        else {
            this.newsModel.videoId = file.id;
            // this.newsModel.videoUrl = file.url;
            this.newsModel.videoUrl = environment.fileUrl + file.path;
            this.tempFile.showDelBtn = true;
        }
    }

    thumbnailUploaded(file) {
        this.newsModel.thumbnailId = file.id;
        this.newsModel.thumbnailUrl = null;
        this.tempThumbanilFile.showDelBtn = false;
        setTimeout(() => {
            // this.newsModel.thumbnailUrl = file.url;
            this.newsModel.thumbnailUrl = environment.fileUrl + file.path;
            this.tempThumbanilFile.showDelBtn = true;
        }, 400);
    }


    reset(data) {
        if(this.newsModel.thumbnailId && this.newsModel.thumbnailUrl) {
            this.resetThumbnail()
        }
        this.apiService.sendRequest(requests.deleteAttachment, 'delete', {id:[this.newsModel.contentType == 'IMAGE' ? this.newsModel.imageId : this.newsModel.videoId]}).subscribe((res:any) => {
            console.log("DEL-ATTACHMENT", res);
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
        })
    }

    resetThumbnail(data?) {
        this.apiService.sendRequest(requests.deleteAttachment, 'delete', {id:[this.newsModel.thumbnailId]}).subscribe((res:any) => {
            console.log("DEL-THUMBNAIL", res);
            this.newsModel.thumbnailId = null;
            this.newsModel.thumbnailUrl = null;
            this.tempThumbanilFile.showDelBtn = false;
        })
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
        this.allQuotes = QuotesMockData;
        // this.clean(Object.assign({ ...this.pagination }))
        this.apiService.sendRequest(requests.getAllQuotes, 'get',{st:value} ).subscribe((res: any) => {
            console.log("ALL-QUOTES", res);
        this.allQuotes = QuotesMockData;
        })
    }

    clean(obj: any) {
        for (const propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || (obj[propName] && obj[propName].length==0)) {
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