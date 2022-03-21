import { Component, OnInit } from '@angular/core'
import { NzUploadFile } from 'ng-zorro-antd/upload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsModal } from 'src/app/common/models/newsModal';
@Component({
    selector: 'app-addNews',
    templateUrl: './addNews.component.html'
})

export class AddNewsComponent implements OnInit {
    currentDate = new Date()
    newsModal: NewsModal;
    newsForm: FormGroup;

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

    nodes = [
        {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
                {
                    title: 'Child Node1',
                    value: '0-0-0',
                    key: '0-0-0',
                    isLeaf: true
                }
            ]
        },
        {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
                {
                    title: 'Child Node3',
                    value: '0-1-0',
                    key: '0-1-0',
                    isLeaf: true
                },
                {
                    title: 'Child Node4',
                    value: '0-1-1',
                    key: '0-1-1',
                    isLeaf: true
                },
                {
                    title: 'Child Node5',
                    value: '0-1-2',
                    key: '0-1-2',
                    isLeaf: true
                }
            ]
        }
    ];

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

    listOfOption: Array<{ label: string; value: string }> = [];
    size = 'default';
    singleValue = 'a10';
    multipleValue = ['a10', 'c12'];
    tagValue = ['a10', 'c12', 'tag'];
 


    constructor(private apiService: ApiService, private fb: FormBuilder) { }

    ngOnInit(): void {
        this.quotesForm = this.fb.group({
            name: [null, [Validators.required]]
        });
        this.tagForm = this.fb.group({
            title: [null, [Validators.required]]
        });
        // const children: Array<{ label: string; value: string }> = [];
        // for (let i = 10; i < 36; i++) {
        //     children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        // }
        // this.listOfOption = children;
        this.newsModal = new NewsModal()
        this.initNewsForm();

        this.getTags();
        this.getAllCategories();
        this.getAllQuotes()
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
        this.pagination.name=value ? value:'';
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
            this.strucCategories=this.catToNodes(this.allCategories);
            console.log("structured nodes categories=>",this.strucCategories);
            
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

    catToNodes(catorgories){
        let nodes=[];
        this.allCategories.forEach(cat=>{
            let parent={
                title:cat.title,
                value:cat.id,
                key:cat.id,
                children:[]
            }
            if(cat.sub){
                parent.children=cat.sub.map(x=>{
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