import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';
import { WhiteSpaceValidator } from '../../shared/services/whiteSpaceValidator';

@Component({
    selector: 'app-addCategory',
    templateUrl: './addCategory.component.html'
})

export class AddCategoryComponent implements OnInit {
    pagination: {
        limit: number, 
        pageNo: number, 
        parentCategoryId?:Array<any>, 
        publishers?:Array<any>, 
        status?: string, 
        title?: string, 
        includeNews?: any, 
        newsLImit?: any 
    } = {limit: 1000, pageNo: 1}
    allCategories: any;
    categoryForm: FormGroup;
    categoryId: number;
    categoryById: any;
    loader= true;
    isLoading= false;
    

    constructor(
        private fb: FormBuilder, 
        private apiService: ApiService, 
        private message: NzMessageService, 
        private activatedRoute: ActivatedRoute, 
        private route: Router) {}

    ngOnInit(): void {
        this.getAllCategories();
          this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
            this.categoryId = + params.get('id');
            if (this.categoryId) {
              this.getCategoryById();
            }
            else {
                this.initForm();
                setTimeout(() => {
                    this.loader=false
                  }, 200);
            }
          });
    }

    initForm() {
        this.categoryForm = this.fb.group({
            title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), WhiteSpaceValidator.noWhitespaceValidator]],
            parentCategoryId: [null],
            isActive: [false],
            displayInCategoryMenu: [false],
            displayInHomePage: [false]
          });
    }

    categories() {
        for (const i in this.categoryForm.controls) {
            this.categoryForm.controls[i].markAsDirty();
            this.categoryForm.controls[i].updateValueAndValidity();
        }
        if(this.categoryForm.valid) {
            this.isLoading= true;
            setTimeout(() => {
                this.isLoading= false;
            }, 2000);
            const obj= this.categoryForm.value;
            obj['title']= this.categoryForm.value.title.trim();
            obj['parentCategoryId'] = parseInt(this.categoryForm.value.parentCategoryId);
            this.apiService.sendRequest(this.categoryId ? requests.updateCategory + this.categoryId : requests.addCategory, this.categoryId ? 'put' : 'post', obj).subscribe((res:any) => {
                console.log("CATEGORIES", res);
                this.categoryForm.reset();
                this.route.navigateByUrl('category/list');
                if(this.categoryId) {
                    this.message.create('success', `Category Updated Successfully`)
                }
                else {
                    this.message.create('success', `Category Added Successfully`)
                }
            })
        }
    }

    getCategoryById() {
        this.apiService.sendRequest(requests.getCategoryById + this.categoryId, 'get').subscribe((res:any) => {
            this.categoryById= res.response.category;
            console.log("CATEGORY-BY-ID", this.categoryById);
            this.categoryForm = this.fb.group({
                title: [this.categoryById?.title || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), WhiteSpaceValidator.noWhitespaceValidator]],
                parentCategoryId: [this.categoryById?.parentCategoryId || null],
                isActive: [this.categoryById?.isActive],
                displayInCategoryMenu: [this.categoryById?.displayInCategoryMenu],
                displayInHomePage: [this.categoryById?.displayInHomePage]
              });
              setTimeout(() => {
                this.loader=false
              }, 200);
        })
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.pagination).subscribe((res:any) => {
            this.allCategories= res.response.categories;
            console.log("ALL-CATEGORIES", this.allCategories);
        })
    }

    getOtherCategories() {
        return this.allCategories && this.allCategories.filter((x:any) => x.id != this.categoryId)
    }    

    cancel() {
        this.route.navigateByUrl('category/list');
    }
}    