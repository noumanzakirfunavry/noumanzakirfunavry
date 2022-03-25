import { Component, OnInit } from '@angular/core'
import { NzUploadFile } from 'ng-zorro-antd/upload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsModal } from 'src/app/common/models/newsModal';
import { ActivatedRoute } from '@angular/router';
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

    pagination: { limit: number, pageNo: number, name?: string } = { limit: 10, pageNo: 1 }
    public Editor = ClassicEditor;
    previewImage = '';
    previewVisible = false;
    value: string[] = ['0-0-0'];

    commentListData = [
        {
            name: 'Lillian Stone',
            img: 'assets/images/avatars/thumb-8.jpg',
            date: '6 hours ago.',
            likes: 43,
            comment: 'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.'
        },
        {
            name: 'Victor Terry',
            img: 'assets/images/avatars/thumb-9.jpg',
            date: '8 hours ago.',
            likes: 18,
            comment: 'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.'
        },
        {
            name: 'Wilma Young',
            img: 'assets/images/avatars/thumb-10.jpg',
            date: '2 days ago.',
            likes: 95,
            comment: 'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.'
        }
    ];
    newsId: number;
    uploadProgress: number;
    file: any;

    constructor(private apiService: ApiService,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.quotesForm = this.fb.group({
            name: [null, [Validators.required]]
        });
        this.tagForm = this.fb.group({
            title: [null, [Validators.required]]
        });

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
    getNews(newsId: number) {
        this.apiService.sendRequest(requests.getNewsById + this.newsId, 'get').subscribe((res:any) => {
            console.log("news data", res.response.news);
            // this.newsModal=new NewsModal();
            this.newsModal.populateFromServerModal(res.response.news);
            this.newsModal.seoDetailId=res.response.news.seoDetailId;
            console.log("view modal",this.newsModal);
            
            this.populateNewsForm(res.response.news);

        })
    }
    populateNewsForm(news:any){
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
            categoryIds: [news?.categories.map(x=>x.id) || null, [Validators.required]],
            tagsIds: [news?.tags.map(x=>x.id) || null, [Validators.required]],
            quotesIds: [news?.quotes.map(x=>x.id) || null, [Validators.required]],
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
        this.apiService.sendRequest(this.newsId ? requests.updateNews+this.newsId :requests.addNews, this.newsId ? 'put':'post', {...this.newsModal.toServerModal(obj,this.newsModal.seoDetailId),...this.newsId ? {id:this.newsId}:null}).subscribe((res: any) => {
            console.log("News", res);
            this.newsForm.reset();
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

    uploadFile() {
        this.apiService.uploadFileProgress(this.file, this.newsForm.value.description).subscribe((res: any) => {
            // saving files on upload so that no need to load from s3.

            if (res?.type == 1 && res?.loaded && res?.total) {
                this.uploadProgress = Math.round(100 * (res.loaded / res.total));
                console.log("file progress", this.uploadProgress);
            }
            else if(res?.body){
                console.log("Data Uploaded");
                console.log(res.body);
                this.newsModal.imageId=res.body.response.id
                console.log("news modal with image id",this.newsModal);
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
    getTags() {
        this.apiService.sendRequest(requests.getAllTags, 'get', this.pagination).subscribe((res: any) => {
            console.log("ALL-tags", res);
            this.allTags = res.tags;
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
            console.log("ADD-TAG", this.allQuotes);
        })
    }
    addNewTag() {
        this.apiService.sendRequest(requests.addNewTag, 'post', this.tagForm.value).subscribe((res: any) => {
            this.allQuotes = res.quote;
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