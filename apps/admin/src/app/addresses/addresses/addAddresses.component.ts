import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

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
    loader= true;
  

    constructor(private fb: FormBuilder, 
      private apiService: ApiService, 
      private activatedRoute: ActivatedRoute, 
      private message: NzMessageService, 
      private route: Router
      ) {}
  
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
        this.branchId = + params.get('id');
        if (this.branchId) {
          this.getBranchById();
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
      this.addressForm = this.fb.group({
        title: [null, [Validators.required]],
        phone: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
        fax: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
        addressLine1: [null, [Validators.required]],
        addressLine2: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$')]],
        isActive: [false]
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
          this.route.navigateByUrl('addresses/list');
          if(this.branchId) {
            this.message.create('success', `Address Updated Successfully`);
          }
          else {
            this.message.create('success', `Address Added Successfully`);
          }
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
          email: [this.branchById?.email || null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$')]],
          isActive: [this.branchById?.isActive || false]
        });
        setTimeout(() => {
          this.loader=false
        }, 200);
      })
    }

    cancel() {
      this.route.navigateByUrl('addresses/list');
    }
    
}    
