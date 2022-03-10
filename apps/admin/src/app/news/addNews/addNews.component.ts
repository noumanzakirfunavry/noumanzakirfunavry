import { Component, OnInit } from '@angular/core'
import { NzUploadFile } from 'ng-zorro-antd/upload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-addNews',
    templateUrl: './addNews.component.html'
})

export class AddNewsComponent implements OnInit {
    quotesForm: FormGroup;
    allQuotes: any;
    pagination: {limit: number, pageNo: number, name?: string} = {limit: 10, pageNo: 1}
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
    fileList = [
        {
            uid: -1,
            name: 'product-1.jpg',
            status: 'done',
            url: 'assets/images/others/product-1.jpg'
        },
        {
            uid: 0,
            name: 'product-2.jpg',
            status: 'done',
            url: 'assets/images/others/product-2.jpg'
        },
        {
            uid: 1,
            name: 'product-3.jpg',
            status: 'done',
            url: 'assets/images/others/product-3.jpg'
        }
    ];

    listOfOption: Array<{ label: string; value: string }> = [];
    size = 'default';
    singleValue = 'a10';
    multipleValue = ['a10', 'c12'];
    tagValue = ['a10', 'c12', 'tag'];

    constructor(private apiService: ApiService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.quotesForm = this.fb.group({
            name: [ null, [ Validators.required ] ]
        });
        this.getAllQuotes();
        const children: Array<{ label: string; value: string }> = [];
        for (let i = 10; i < 36; i++) {
            children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }
        this.listOfOption = children;
    }
    onChange($event: string[]): void {
        console.log($event);
    }

    handlePreview = (file: NzUploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }

    log(value: string[]): void {
        console.log(value);
    }

    getAllQuotes() {
        this.apiService.sendRequest(requests.getAllQuotes, 'get', this.pagination).subscribe((res:any) => {
            console.log("ALL-QUOTES", res);
        })
    }

    addNewQuote() {
        this.apiService.sendRequest(requests.addNewQuote, 'post', this.quotesForm.value).subscribe((res:any) => {
            this.allQuotes= res.quote;
            console.log("ADD-TAG", this.allQuotes);
        })
    }
}    