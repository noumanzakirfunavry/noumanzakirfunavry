"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[808],{8808:(K,f,i)=>{i.r(f),i.d(f,{JobsModule:()=>$});var u=i(9808),I=i(1681),h=i(4521),s=i(2382),U=i(6170),p=i(6928),t=i(5e3),A=i(8313),T=i(1731),g=i(3714),Z=i(9095),m=i(8177),j=i(1575),z=i(4471),J=i(7651),y=i(2998),v=i(4138),C=i(5540),b=i(7036);function B(e,l){if(1&e&&t._UZ(0,"nz-option",14),2&e){const n=l.$implicit;t.Q6J("nzValue",null==n?null:n.id)("nzLabel",null==n?null:n.title)}}function L(e,l){1&e&&(t.TgZ(0,"button",15),t._uU(1,"Save"),t.qZA())}function O(e,l){1&e&&(t.TgZ(0,"button",15),t._uU(1,"Update"),t.qZA())}let S=(()=>{class e{constructor(n,o,r,a){this.fb=n,this.apiService=o,this.message=r,this.activatedRoute=a,this.pagination={limit:10,pageNo:1},this.Editor=U}ngOnInit(){this.getAllBranches(),this.jobForm=this.fb.group({title:[null,[s.kI.required]],branchId:[null,[s.kI.required]],description:[null,[s.kI.required]],isActive:[!1]}),this.activatedRoute.paramMap.subscribe(n=>{this.jobId=+n.get("id"),this.jobId&&this.getJobById()})}jobs(){for(const n in this.jobForm.controls)this.jobForm.controls[n].markAsDirty(),this.jobForm.controls[n].updateValueAndValidity();if(this.jobForm.valid){const n=this.jobForm.value;n.departments=[1,2,3],n.totalOpenings=1,n.closingDate="2022-03-11T12:24:03.207Z",this.apiService.sendRequest(this.jobId?p.E.updateJob+this.jobId:p.E.createNewJob,this.jobId?"put":"post",n).subscribe(o=>{console.log("JOBS",o),this.jobForm.reset(),this.message.create("success",this.jobId?"Job Updated Successfully":"Job Added Successfully")})}}getAllBranches(){this.apiService.sendRequest(p.E.getAllBranches,"get",this.pagination).subscribe(n=>{this.allBranches=n.response.branches,console.log("ALL-BRANCHES",this.allBranches)})}getJobById(){this.apiService.sendRequest(p.E.getJobById+this.jobId,"get").subscribe(n=>{var o,r,a,c;this.jobById=n.response.job,console.log("JOB-BY-ID",this.jobById),this.jobForm=this.fb.group({title:[(null===(o=this.jobById)||void 0===o?void 0:o.title)||null,[s.kI.required]],branchId:[(null===(r=this.jobById)||void 0===r?void 0:r.branchId)||null,[s.kI.required]],description:[(null===(a=this.jobById)||void 0===a?void 0:a.description)||null,[s.kI.required]],isActive:[(null===(c=this.jobById)||void 0===c?void 0:c.isActive)||!1]})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.qu),t.Y36(A.s),t.Y36(T.dD),t.Y36(h.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["add-job"]],decls:35,vars:14,consts:[[1,"col-12"],["nz-form","",3,"formGroup","nzLayout","ngSubmit"],[1,"row"],[1,"col-md-6"],["nzRequired","","nzFor","text",3,"nzSpan"],[3,"nzSpan"],["nz-input","","formControlName","title","placeholder","Enter Title","dir","rtl"],["nzRequired","",3,"nzSpan"],["nzShowSearch","","nzAllowClear","","formControlName","branchId","nzPlaceHolder","Choose Branch"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"col-md-12"],["formControlName","description",3,"editor"],["formControlName","isActive",1,"mr-3"],["class","mr-3","nz-button","","nzType","primary",4,"ngIf"],[3,"nzValue","nzLabel"],["nz-button","","nzType","primary",1,"mr-3"]],template:function(n,o){1&n&&(t.TgZ(0,"section"),t._UZ(1,"br"),t._UZ(2,"br"),t.TgZ(3,"div",0),t.TgZ(4,"form",1),t.NdJ("ngSubmit",function(){return o.jobs()}),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"nz-form-item"),t.TgZ(8,"nz-form-label",4),t._uU(9,"Title"),t.qZA(),t.TgZ(10,"nz-form-control",5),t._UZ(11,"input",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",3),t.TgZ(13,"nz-form-item"),t.TgZ(14,"nz-form-label",7),t._uU(15,"Branch"),t.qZA(),t.TgZ(16,"nz-form-control",5),t.TgZ(17,"nz-select",8),t.YNc(18,B,1,2,"nz-option",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",10),t.TgZ(20,"nz-form-item"),t.TgZ(21,"nz-form-label",7),t._uU(22,"Description"),t.qZA(),t.TgZ(23,"nz-form-control",5),t._UZ(24,"ckeditor",11),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",10),t.TgZ(26,"nz-form-item"),t.TgZ(27,"nz-form-control",5),t._UZ(28,"nz-switch",12),t._uU(29," Active "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",10),t.TgZ(31,"nz-form-item"),t.TgZ(32,"nz-form-control",5),t.YNc(33,L,2,0,"button",13),t.YNc(34,O,2,0,"button",13),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("formGroup",o.jobForm)("nzLayout","vertical"),t.xp6(4),t.Q6J("nzSpan",6),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(4),t.Q6J("nzSpan",6),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(2),t.Q6J("ngForOf",o.allBranches),t.xp6(3),t.Q6J("nzSpan",6),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(1),t.Q6J("editor",o.Editor),t.xp6(3),t.Q6J("nzSpan",14),t.xp6(5),t.Q6J("nzSpan",14),t.xp6(1),t.Q6J("ngIf",!o.jobId),t.xp6(1),t.Q6J("ngIf",o.jobId))},directives:[s._Y,s.JL,g.Lr,s.sg,Z.SK,g.Nx,Z.t3,g.iK,g.Fd,m.Zp,s.Fj,s.JJ,s.u,j.Lv,z.Vq,u.sg,J.u,y.i,u.O5,z.Ip,v.ix,C.dQ,b.w],encapsulation:2}),e})();var q=i(9997);function Q(e,l){1&e&&t._UZ(0,"i",15)}let F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["job-filter"]],decls:19,vars:7,consts:[[1,"float-right"],[1,"d-flex"],[1,"mr-2"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Branch","nzSpan","8"],["nzValue","Branch 1",3,"nzLabel"],["nzValue","Branch 2",3,"nzLabel"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Publisher","nzSpan","8"],["nzValue","Sample User 1",3,"nzLabel"],["nzValue","Sample User 2",3,"nzLabel"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Status","nzSpan","8"],["nzValue","Active",3,"nzLabel"],["nzValue","InActive",3,"nzLabel"],[3,"nzPrefix"],["nz-input","","placeholder","Search Title","nzSize","small"],["prefiXTemplate",""],["nz-icon","","nzType","search","theme","outline"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"nz-form-item",2),t.TgZ(3,"nz-select",3),t._UZ(4,"nz-option",4),t._UZ(5,"nz-option",5),t.qZA(),t.qZA(),t.TgZ(6,"nz-form-item",2),t.TgZ(7,"nz-select",6),t._UZ(8,"nz-option",7),t._UZ(9,"nz-option",8),t.qZA(),t.qZA(),t.TgZ(10,"nz-form-item",2),t.TgZ(11,"nz-select",9),t._UZ(12,"nz-option",10),t._UZ(13,"nz-option",11),t.qZA(),t.qZA(),t.TgZ(14,"nz-form-item"),t.TgZ(15,"nz-input-group",12),t._UZ(16,"input",13),t.qZA(),t.YNc(17,Q,1,0,"ng-template",null,14,t.W1O),t.qZA(),t.qZA(),t.qZA()),2&n){const r=t.MAs(18);t.xp6(4),t.Q6J("nzLabel","Branch 1"),t.xp6(1),t.Q6J("nzLabel","Branch 2"),t.xp6(3),t.Q6J("nzLabel","Sample User 1"),t.xp6(1),t.Q6J("nzLabel","Sample User 2"),t.xp6(3),t.Q6J("nzLabel","Active"),t.xp6(1),t.Q6J("nzLabel","InActive"),t.xp6(2),t.Q6J("nzPrefix",r)}},directives:[Z.SK,g.Nx,z.Vq,z.Ip,b.w,m.gB,m.ke,m.Zp,q.Ls],encapsulation:2}),e})();var _=i(1646),d=i(7336),Y=i(4259);function N(e,l){1&e&&t._UZ(0,"nz-badge",13)}function D(e,l){1&e&&t._UZ(0,"nz-badge",14)}const M=function(e){return[e]};function k(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",7),t.NdJ("nzCheckedChange",function(r){const c=t.CHM(n).$implicit;return t.oxw().onItemChecked(null==c?null:c.id,r)}),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t.YNc(16,N,1,0,"nz-badge",8),t.YNc(17,D,1,0,"nz-badge",9),t.qZA(),t.TgZ(18,"td"),t.TgZ(19,"div",10),t._UZ(20,"i",11),t.TgZ(21,"i",12),t.NdJ("click",function(){const a=t.CHM(n).$implicit;return t.oxw().deleteJobs(null==a?null:a.id)}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=l.$implicit,o=t.oxw();t.xp6(1),t.Q6J("nzChecked",o.setOfCheckedId.has(null==n?null:n.id))("nzDisabled",n.disabled),t.xp6(1),t.Oqu(null==n?null:n.id),t.xp6(2),t.Oqu(null==n?null:n.title),t.xp6(2),t.Oqu(null==n?null:n.branchId),t.xp6(2),t.Oqu(t.xi3(9,11,null==n?null:n.createdAt,"dd-MM-YYYY")),t.xp6(3),t.Oqu(t.xi3(12,14,null==n?null:n.updatedAt,"dd-MM-YYYY")),t.xp6(3),t.Oqu(null==n?null:n.publishedBy),t.xp6(2),t.Q6J("ngIf",!0===(null==n?null:n.isActive)),t.xp6(1),t.Q6J("ngIf",!1===(null==n?null:n.isActive)),t.xp6(3),t.Q6J("routerLink",t.VKq(17,M,"/jobs/add/"+(null==n?null:n.id)))}}const E=function(){return["/jobs/add"]};let x=(()=>{class e{constructor(n,o){this.apiService=n,this.message=o,this.pagination={pageNo:1,limit:10},this.indeterminate=!1,this.checked=!1,this.loading=!0,this.setOfCheckedId=new Set,this.listOfCurrentPageData=[]}ngOnInit(){this.getAllJobs()}getAllJobs(){this.apiService.sendRequest(p.E.getAllJobs,"get",this.pagination).subscribe(n=>{this.allJobs=n.response.jobs,console.log("ALL-JOBS",this.allJobs),this.loading=!1})}deleteJobs(n){this.apiService.sendRequest(p.E.deleteJobs,"delete",{ids:[n]}).subscribe(o=>{console.log("DELETE-JOBS",o),this.getAllJobs(),this.message.create("success","Job Deleted Successfully")})}updateCheckedSet(n,o){o?this.setOfCheckedId.add(n):this.setOfCheckedId.delete(n)}onItemChecked(n,o){this.updateCheckedSet(n,o),this.refreshCheckedStatus()}refreshCheckedStatus(){const n=this.listOfCurrentPageData.filter(({disabled:o})=>!o);this.checked=n.every(({id:o})=>this.setOfCheckedId.has(o)),this.indeterminate=n.some(({id:o})=>this.setOfCheckedId.has(o))&&!this.checked}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(A.s),t.Y36(T.dD))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-jobs"]],decls:30,vars:7,consts:[[1,"row"],[1,"col-md-2"],["nz-button","",3,"nzType","routerLink"],[1,"col-md-10"],[1,"col-lg-12","mt-3"],["nzShowSizeChanger","",1,"no-border-last",3,"nzShowPagination","nzLoading","nzData"],[4,"ngFor","ngForOf"],[3,"nzChecked","nzDisabled","nzCheckedChange"],["nzStatus","success",4,"ngIf"],["nzStatus","error",4,"ngIf"],[1,"d-flex","justify-content-between"],["nz-icon","","nzType","edit","nzTheme","outline",3,"routerLink"],["nz-icon","","nzType","delete","nzTheme","outline",3,"click"],["nzStatus","success"],["nzStatus","error"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t._uU(3,"Add Job"),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"job-filter"),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"nz-card"),t.TgZ(8,"div"),t.TgZ(9,"nz-table",5),t.TgZ(10,"thead"),t.TgZ(11,"tr"),t.TgZ(12,"th"),t._uU(13,"ID"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Title"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Branch"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Created"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Modified"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Publisher"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Status"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(28,"tbody"),t.YNc(29,k,22,19,"tr",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("nzType","primary")("routerLink",t.DdM(6,E)),t.xp6(7),t.Q6J("nzShowPagination",!0)("nzLoading",o.loading)("nzData",o.allJobs),t.xp6(20),t.Q6J("ngForOf",o.allJobs))},directives:[v.ix,C.dQ,b.w,h.rH,F,_.bd,d.N8,d.Om,d.$Z,d.Uo,d._C,d.p0,u.sg,d.h7,u.O5,q.Ls,Y.x7],pipes:[u.uU],encapsulation:2}),e})();const R=[{path:"",component:x,data:{title:"All Jobs"}},{path:"list",component:x,data:{title:"All Jobs"}},{path:"add",component:S,data:{title:"Add Job"}},{path:"add/:id",component:S,data:{title:"Update Job"}}];let V=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[h.Bz.forChild(R)],h.Bz]}),e})();var P=i(3490),H=i(8732),w=i(6163),X=i(722);let $=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[H.w],imports:[[u.ez,I.m,V,P.Do,...w.v,s.UX,s.u5,J.d,X.fi.forRoot()]]}),e})()}}]);