import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-addBreakingNews',
    templateUrl: './addBreakingNews.component.html',
    styles: [
        `
          [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
            max-width: 600px;
          }
        `
      ]
})

export class AddBreakingNewsComponent {
    validateForm: FormGroup;

    submitForm(): void {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  
    get isHorizontal(): boolean {
      return this.validateForm.controls.formLayout?.value === 'horizontal';
    }
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        formLayout: ['horizontal'],
        fieldA: [null, [Validators.required]],
        filedB: [null, [Validators.required]]
      });
    }
}    
// import { Component } from '@angular/core'

// @Component({
//     selector: 'app-addquickLink',
//     templateUrl: './addQuickLinks.component.html'
// })

// export class AddQuickLinksComponent {
   
// }    