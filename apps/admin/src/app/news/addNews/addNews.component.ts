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

    size='default';

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
            if(!this.newsId){
                this.initNewsForm();
            }else{
                this.getNews(this.newsId)
            }
        })

        this.getTags();
        this.getAllCategories();
        this.getAllQuotes()
    }
    getNews(newsId: number) {
       this.apiService.sendRequest(requests.getNewsById+this.newsId,'get').subscribe(res=>{
           console.log("news data",res);
           
       })
    }
    initNewsForm() {
        this.newsForm = this.fb.group({
            title: [null, [Validators.required]],
            content: [null, [Validators.required]],
            isPro: [null, [Validators.required]],
            visible: [null, [Validators.required]],
            contentType: [null, [Validators.required]],
            authorName: [null, [Validators.required]],
            newsType: ['NEWS', [Validators.required]],
            showOnHomepage: [true, [Validators.required]],
            isActive: [null, [Validators.required]],
            categoryIds: [null, [Validators.required]],
            tagsIds: [null, [Validators.required]],
            quotesIds: [null, [Validators.required]],
            seoTitle: [null, [Validators.required]],
            slugLine: [null, [Validators.required]],
            description: [null, [Validators.required]],
            keywords: [null, [Validators.required]]
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
        this.apiService.sendRequest(requests.addNews, 'post', this.newsModal.toServerModal(obj)).subscribe((res: any) => {
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
            debugger
            this.strucCategories = this.catToNodes(this.allCategories);
            console.log("structured nodes categories=>", this.strucCategories);

        })
    }

    addNewQuote(value?) {
        debugger
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