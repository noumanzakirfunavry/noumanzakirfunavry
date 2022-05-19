import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PageModel } from '../../common/models/pageModel';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'app-addPages',
    templateUrl: './addPages.component.html',
    styles: [
        `
          [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
            max-width: 600px;
          }
        `
      ]
})

export class AddPagesComponent implements OnInit{
  pagination: { limit: number, pageNo: number, name?: string, title?: string } = { limit: 15, pageNo: 1 }
    public Editor = ClassicEditor;
    pagesForm: FormGroup;
    quotesForm: FormGroup;
    tagForm: FormGroup;
    pageModel: PageModel;
    uploading = false;
    size = 'default';
    allQuotes: any = [];
    allTags: any = [];
  
    constructor(
      private fb: FormBuilder, 
      private route: Router, 
      private apiService: ApiService) {}
  
    ngOnInit(): void {
      this.initPagesForm();
      this.initQuoteForm();
      this.initTagForm();
      this.getTags();
      this.getAllQuotes();
      this.pageModel = new PageModel()
    }

    initPagesForm() {
      this.pagesForm = this.fb.group({
        title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        content: [null, [Validators.required]],
        showOnHomepage: [true, [Validators.required]],
        isActive: [true],
        // categoryIds: [null, [Validators.required]],
        tagsIds: [null, [Validators.required]],
        quotesIds: [null, [Validators.required]],
        seoTitle: [null, 
          // [Validators.required, Validators.minLength(3), Validators.maxLength(250)]
        ],
        slugLine: [null, 
          // [Validators.required, Validators.maxLength(250)]
        ],
        description: [null, 
          // [Validators.required, Validators.maxLength(250)]
        ],
        keywords: [null, 
          // [Validators.required]
        ],
      });
    }

    initQuoteForm() {
      this.quotesForm = this.fb.group({
          name: [null, [Validators.required, Validators.pattern('^(?:[a-zA-Z0-9\s!@,=%$#&*_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,250}$')]]
      });
  }

    initTagForm() {
      this.tagForm = this.fb.group({
          title: [null, [Validators.required]]
      });
  }

    pages(): void {
      for (const i in this.pagesForm.controls) {
        this.pagesForm.controls[i].markAsDirty();
        this.pagesForm.controls[i].updateValueAndValidity();
      }
    }

    getAllQuotes(value?) {
      this.pagination.name = value ? value : '';
      this.apiService.sendRequest(requests.getAllQuotes, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res: any) => {
          this.allQuotes = res.quotes;
          console.log("ALL-QUOTES", res.quotes);
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

    getCaptcha(e: MouseEvent): void {
      e.preventDefault();
  }

  cancel(): void {
      this.route.navigateByUrl('pages/list');
  }
    
}    
