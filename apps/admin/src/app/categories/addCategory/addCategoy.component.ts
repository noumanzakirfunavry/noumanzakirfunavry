import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-addCategory',
    templateUrl: './addCategory.component.html'
})

export class AddCategoryComponent implements OnInit {
    categoryForm: FormGroup;
    categoryId: number
    categoryById: any;
   

    constructor(private fb: FormBuilder, 
        private apiService: ApiService, 
        private message: NzMessageService, 
        private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.categoryForm = this.fb.group({
            title: [null, [Validators.required]],
            parentCategoryId: [null, [Validators.required]],
            isActive: [false],
            displayInCategoryMenu: [false],
            displayInHomePage: [false]
          });
          this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
            this.categoryId = + params.get('id');
            if (this.categoryId) {
              this.getCategoryById();
            }
          });
    }

    categories() {
        for (const i in this.categoryForm.controls) {
            this.categoryForm.controls[i].markAsDirty();
            this.categoryForm.controls[i].updateValueAndValidity();
        }
        if(this.categoryForm.valid) {
            const obj= this.categoryForm.value;
            obj['parentCategoryId'] = null;
            // obj['parentCategoryId'] = parseInt(this.categoryForm.value.parentCategoryId);
            this.apiService.sendRequest(requests.addCategory, 'post', this.categoryForm.value).subscribe((res:any) => {
                console.log("CATEGORIES", res);
                this.categoryForm.reset();
            })
        }
    }

    getCategoryById() {
        this.apiService.sendRequest(requests.getCategoryById + this.categoryId, 'get').subscribe((res:any) => {
            this.categoryById= res.response.category;
            console.log("CATEGORY-BY-ID", this.categoryById);
            this.categoryForm = this.fb.group({
                title: [this.categoryById?.title || null, [Validators.required]],
                parentCategoryId: [this.categoryById?.parentCategoryId || null, [Validators.required]],
                isActive: [this.categoryById?.isActive || false],
                displayInCategoryMenu: [this.categoryById?.displayInCategoryMenu || false],
                displayInHomePage: [this.categoryById?.displayInHomePage || false]
              });
        })
    }
}    