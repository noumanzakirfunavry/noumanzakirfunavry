import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-addTag',
    templateUrl: './addTag.component.html',
    styles: [
        `
          [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
            max-width: 600px;
          }
        `
      ]
    // styleUrls:['./addTag.scss']
})

export class AddTagComponent {
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