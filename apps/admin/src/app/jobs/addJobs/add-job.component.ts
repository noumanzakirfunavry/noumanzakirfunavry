import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../../common/models/pagination';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'add-job',
    templateUrl: './add-job.component.html'
})

export class AddJobComponent implements OnInit {
    pagination: Pagination = new Pagination();
    jobForm: FormGroup;
    jobId: any;
    jobById: any;
    allBranches: any;
    loader= true;
    isLoading= false;
    public Editor = ClassicEditor;

    constructor(private fb: FormBuilder, 
        private apiService: ApiService, 
        private message: NzMessageService, 
        private activatedRoute: ActivatedRoute,
        private route: Router) {}


    ngOnInit(): void {
        this.getAllBranches();
          this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
            this.jobId = + params.get('id');
            if (this.jobId) {
              this.getJobById();
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
        this.jobForm = this.fb.group({
            title: [null, [Validators.required]],
            branchId: [null, [Validators.required]],
            description: [null, [Validators.required, Validators.maxLength(1500)]],
            isActive: [false]
          });
    }

    jobs() {
        for (const i in this.jobForm.controls) {
            this.jobForm.controls[i].markAsDirty();
            this.jobForm.controls[i].updateValueAndValidity();
        }
        if(this.jobForm.valid) {
            this.isLoading= true;
            const obj= this.jobForm.value;
            obj['departments']= [1,2,3];
            obj['totalOpenings']= 1;
            obj['closingDate']= "2022-03-11T12:24:03.207Z";
            this.apiService.sendRequest(this.jobId ? requests.updateJob + this.jobId : requests.createNewJob, this.jobId ? 'put' : 'post', obj).subscribe((res:any) => {
                console.log("JOBS", res);
                this.jobForm.reset();
                this.route.navigateByUrl('jobs/list');
                setTimeout(() => {
                    this.isLoading= false;
                }, 2000);
                if(this.jobId) {
                    this.message.create('success', `Job Updated Successfully`)
                }
                else {
                    this.message.create('success', `Job Added Successfully`)
                }
            })
        }
    }

    getAllBranches() {
        this.apiService.sendRequest(requests.getAllBranches, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allBranches= res.response.branches;
            console.log("ALL-BRANCHES", this.allBranches);
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

    getJobById() {
        this.apiService.sendRequest(requests.getJobById + this.jobId, 'get').subscribe((res:any) => {
            this.jobById= res.response.job;
            console.log("JOB-BY-ID", this.jobById)
            this.jobForm = this.fb.group({
                title: [this.jobById?.title || null, [Validators.required]],
                branchId: [this.jobById?.branchId || null, [Validators.required]],
                description: [this.jobById?.description || null, [Validators.required, Validators.maxLength(1500)]],
                isActive: [this.jobById?.isActive || false]
              });
              setTimeout(() => {
                this.loader=false
              }, 200);
        })
    }

    cancel() {
        this.route.navigateByUrl('jobs/list');
      }
   
}    