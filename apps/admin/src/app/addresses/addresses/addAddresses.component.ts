import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-addAddresses',
    templateUrl: './addAddresses.component.html',
    styles: [
        `
          [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
            max-width: 600px;
          }
        `
      ]
})

export class AddAddressesComponent implements OnInit {
    addressForm: FormGroup;
    branchId: any;
    branchById: any;
  

    constructor(private fb: FormBuilder, private apiService: ApiService, private activatedRoute: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.addressForm = this.fb.group({
        title: [null, [Validators.required]],
        phone: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
        fax: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
        addressLine1: [null, [Validators.required]],
        addressLine2: [null, [Validators.required]],
        email: [null, [Validators.email, Validators.required]],
        isActive: [false]
      });
      this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
        this.branchId = + params.get('id');
        if (this.branchId) {
          this.getBranchById();
        }
      });
    }

    branches(): void {
      for (const i in this.addressForm.controls) {
        this.addressForm.controls[i].markAsDirty();
        this.addressForm.controls[i].updateValueAndValidity();
      }
      if(this.addressForm.valid) {
        const obj= this.addressForm.value;
        obj['zipCode']= "12345"
        this.apiService.sendRequest(this.branchId ? requests.updateBranch + this.branchId: requests.addNewBranch, this.branchId ? 'put' : 'post', obj).subscribe((res:any) => {
          console.log("BRANCHES", res);
          this.addressForm.reset();
        })
      }
    }

    getBranchById() {
      this.apiService.sendRequest(requests.getBranchById + this.branchId, 'get').subscribe((res:any) => {
        this.branchById= res.response.branch;
        console.log("BRANCH-BY-ID", this.branchById);
        this.addressForm = this.fb.group({
          title: [this.branchById?.title || null, [Validators.required]],
          phone: [this.branchById?.phone || null, [Validators.required, Validators.pattern("^[0-9]*$")]],
          fax: [this.branchById?.fax || null, [Validators.required, Validators.pattern("^[0-9]*$")]],
          addressLine1: [this.branchById?.addressLine1 || null, [Validators.required]],
          addressLine2: [this.branchById?.addressLine2 || null, [Validators.required]],
          email: [this.branchById?.email || null, [Validators.email, Validators.required]],
          isActive: [this.branchById?.isActive || false]
        });
      })
    }
    
}    
