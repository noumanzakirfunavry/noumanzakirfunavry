import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-addCategory',
    templateUrl: './addCategory.component.html'
})

export class AddCategoryComponent implements OnInit {
    categoryForm: FormGroup;
   

    constructor(private fb: FormBuilder, private apiService: ApiService) {}

    ngOnInit(): void {
        this.categoryForm = this.fb.group({
            title: [null, [Validators.required]],
            parentCategoryId: [null, [Validators.required]],
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
        const obj= this.categoryForm.value;
        obj['parentCategoryId'] = null;
        // obj['parentCategoryId'] = parseInt(this.categoryForm.value.parentCategoryId);
        this.apiService.sendRequest(requests.addCategory, 'post', this.categoryForm.value).subscribe((res:any) => {
            console.log("CATEGORIES", res);
            this.categoryForm.reset();
        })
    }
}    