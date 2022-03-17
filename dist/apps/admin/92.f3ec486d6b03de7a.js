"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[92],{9092:(lt,C,e)=>{e.r(C),e.d(C,{TagsModule:()=>rt});var m=e(9808),Q=e(1681),h=e(4521),i=e(2382),g=e(6928),t=e(5e3),S=e(8313),p=e(1731),d=e(3714),T=e(9095),c=e(8177),b=e(1575),x=e(2998),z=e(4138),y=e(5540),Z=e(7036);let U=(()=>{class a{constructor(n,o,r,u){this.fb=n,this.apiService=o,this.activatedRoute=r,this.message=u}ngOnInit(){this.tagsForm=this.fb.group({title:[null,[i.kI.required]],isActive:[!1]}),this.activatedRoute.paramMap.subscribe(n=>{this.tagId=+n.get("id"),this.tagId&&this.getTagById()})}tags(){for(const n in this.tagsForm.controls)this.tagsForm.controls[n].markAsDirty(),this.tagsForm.controls[n].updateValueAndValidity();this.tagsForm.valid&&this.apiService.sendRequest(this.tagId?g.E.updateTag+this.tagId:g.E.addNewTag,this.tagId?"put":"post",this.tagsForm.value).subscribe(n=>{console.log("TAGS",n),this.tagsForm.reset(),this.message.create("success",this.tagId?"Tag Updated Successfully":"Tag Added Successfully")})}getTagById(){this.apiService.sendRequest(g.E.getTagById+this.tagId,"get").subscribe(n=>{var o,r;this.tagById=n.tags,console.log("TAG-BY-ID",this.tagById),this.tagsForm=this.fb.group({title:[(null===(o=this.tagById)||void 0===o?void 0:o.title)||null,[i.kI.required]],isActive:[(null===(r=this.tagById)||void 0===r?void 0:r.isActive)||!1]})})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(i.qu),t.Y36(S.s),t.Y36(h.gz),t.Y36(p.dD))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-addTag"]],decls:18,vars:7,consts:[[1,"col-12"],["nz-form","",1,"tags-form",3,"formGroup","nzLayout","ngSubmit"],["nzRequired","","nzFor","text",3,"nzSpan"],["nzErrorTip","Please input your Title!",3,"nzSpan"],["nz-input","","formControlName","title","placeholder","Enter Title","dir","rtl"],[3,"nzSpan"],["formControlName","isActive",1,"mr-3"],["nz-button","",1,"tags-form-button","mr-3",3,"nzType"]],template:function(n,o){1&n&&(t.TgZ(0,"section"),t._UZ(1,"br"),t._UZ(2,"br"),t.TgZ(3,"div",0),t.TgZ(4,"form",1),t.NdJ("ngSubmit",function(){return o.tags()}),t.TgZ(5,"nz-form-item"),t.TgZ(6,"nz-form-label",2),t._uU(7,"Title"),t.qZA(),t.TgZ(8,"nz-form-control",3),t._UZ(9,"input",4),t.qZA(),t.qZA(),t.TgZ(10,"nz-form-item"),t.TgZ(11,"nz-form-control",5),t._UZ(12,"nz-switch",6),t._uU(13," Active "),t.qZA(),t.qZA(),t.TgZ(14,"nz-form-item"),t.TgZ(15,"nz-form-control",5),t.TgZ(16,"button",7),t._uU(17,"Save"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("formGroup",o.tagsForm)("nzLayout","vertical"),t.xp6(2),t.Q6J("nzSpan",6),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(3),t.Q6J("nzSpan",14),t.xp6(4),t.Q6J("nzSpan",14),t.xp6(1),t.Q6J("nzType","primary"))},directives:[i._Y,i.JL,d.Lr,i.sg,T.SK,d.Nx,T.t3,d.iK,d.Fd,c.Zp,i.Fj,i.JJ,i.u,b.Lv,x.i,z.ix,y.dQ,Z.w],styles:["[nz-form][_ngcontent-%COMP%]:not(.ant-form-inline):not(.ant-form-vertical){max-width:600px}"]}),a})();var O=e(8036),f=e(4471),v=e(9997);function Y(a,s){1&a&&t._UZ(0,"i",12)}let q=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["tag-filter"]],decls:15,vars:5,consts:[[1,"float-right"],[1,"d-flex"],[1,"mr-2"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Publisher","nzSpan","8"],["nzValue","Sample User 1",3,"nzLabel"],["nzValue","Sample User 2",3,"nzLabel"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Status","nzSpan","8"],["nzValue","Active",3,"nzLabel"],["nzValue","InActive",3,"nzLabel"],[3,"nzPrefix"],["nz-input","","placeholder","Search Title","nzSize","small"],["prefiXTemplate",""],["nz-icon","","nzType","search","theme","outline"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"nz-form-item",2),t.TgZ(3,"nz-select",3),t._UZ(4,"nz-option",4),t._UZ(5,"nz-option",5),t.qZA(),t.qZA(),t.TgZ(6,"nz-form-item",2),t.TgZ(7,"nz-select",6),t._UZ(8,"nz-option",7),t._UZ(9,"nz-option",8),t.qZA(),t.qZA(),t.TgZ(10,"nz-form-item"),t.TgZ(11,"nz-input-group",9),t._UZ(12,"input",10),t.qZA(),t.YNc(13,Y,1,0,"ng-template",null,11,t.W1O),t.qZA(),t.qZA(),t.qZA()),2&n){const r=t.MAs(14);t.xp6(4),t.Q6J("nzLabel","Sample User 1"),t.xp6(1),t.Q6J("nzLabel","Sample User 2"),t.xp6(3),t.Q6J("nzLabel","Active"),t.xp6(1),t.Q6J("nzLabel","InActive"),t.xp6(2),t.Q6J("nzPrefix",r)}},directives:[T.SK,d.Nx,f.Vq,f.Ip,Z.w,c.gB,c.ke,c.Zp,v.Ls],encapsulation:2}),a})();var I=e(1646),l=e(7336),F=e(4259);function M(a,s){1&a&&t._UZ(0,"nz-badge",13)}function D(a,s){1&a&&t._UZ(0,"nz-badge",14)}const B=function(a){return[a]};function N(a,s){if(1&a){const n=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",7),t.NdJ("nzCheckedChange",function(r){const A=t.CHM(n).$implicit;return t.oxw().onItemChecked(null==A?null:A.id,r)}),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t.YNc(12,M,1,0,"nz-badge",8),t.YNc(13,D,1,0,"nz-badge",9),t.qZA(),t.TgZ(14,"td"),t.TgZ(15,"div",10),t._UZ(16,"i",11),t.TgZ(17,"i",12),t.NdJ("click",function(){const u=t.CHM(n).$implicit;return t.oxw().deleteTags(null==u?null:u.id)}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const n=s.$implicit,o=t.oxw();t.xp6(1),t.Q6J("nzChecked",o.setOfCheckedId.has(null==n?null:n.id))("nzDisabled",n.disabled),t.xp6(1),t.Oqu(null==n?null:n.title),t.xp6(2),t.Oqu(t.xi3(5,9,null==n?null:n.createdAt,"dd-MM-YYYY")),t.xp6(3),t.Oqu(t.xi3(8,12,null==n?null:n.updatedAt,"dd-MM-YYYY")),t.xp6(3),t.Oqu(null==n?null:n.publishedBy),t.xp6(2),t.Q6J("ngIf",!0===(null==n?null:n.isActive)),t.xp6(1),t.Q6J("ngIf",!1===(null==n?null:n.isActive)),t.xp6(3),t.Q6J("routerLink",t.VKq(15,B,"/tags/add/"+(null==n?null:n.id)))}}const P=function(){return["/tags/add"]};let L=(()=>{class a{constructor(n,o){this.apiService=n,this.message=o,this.pagination={limit:10,pageNo:1},this.indeterminate=!1,this.checked=!1,this.loading=!0,this.setOfCheckedId=new Set,this.listOfCurrentPageData=[]}ngOnInit(){this.getAllTags()}getAllTags(){this.apiService.sendRequest(g.E.getAllTags,"get",this.pagination).subscribe(n=>{this.allTags=n.tags,console.log("ALL-TAGS",this.allTags),this.loading=!1})}updateCheckedSet(n,o){o?this.setOfCheckedId.add(n):this.setOfCheckedId.delete(n)}onItemChecked(n,o){this.updateCheckedSet(n,o),this.refreshCheckedStatus()}refreshCheckedStatus(){const n=this.listOfCurrentPageData.filter(({disabled:o})=>!o);this.checked=n.every(({id:o})=>this.setOfCheckedId.has(o)),this.indeterminate=n.some(({id:o})=>this.setOfCheckedId.has(o))&&!this.checked}deleteTags(n){this.apiService.sendRequest(g.E.deleteTags,"delete",{id:[n]}).subscribe(o=>{console.log("DELETE-TAG",o),this.getAllTags(),this.message.create("success","Tag Deleted Successfully")})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(S.s),t.Y36(p.dD))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tags"]],decls:26,vars:7,consts:[[1,"row"],[1,"col-md-2"],["nz-button","",3,"nzType","routerLink"],[1,"col-md-10"],[1,"col-lg-12","mt-3"],["nzShowSizeChanger","",1,"no-border-last",3,"nzShowPagination","nzLoading","nzData"],[4,"ngFor","ngForOf"],[3,"nzChecked","nzDisabled","nzCheckedChange"],["nzStatus","success",4,"ngIf"],["nzStatus","error",4,"ngIf"],[1,"d-flex","justify-content-between"],["nz-icon","","nzType","edit","nzTheme","outline",3,"routerLink"],["nz-icon","","nzType","delete","nzTheme","outline",3,"click"],["nzStatus","success"],["nzStatus","error"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t._uU(3,"Add Tag"),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"tag-filter"),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"nz-card"),t.TgZ(8,"div"),t.TgZ(9,"nz-table",5),t.TgZ(10,"thead"),t.TgZ(11,"tr"),t.TgZ(12,"th"),t._uU(13,"Title"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Created"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Modified"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Publisher"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Status"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"tbody"),t.YNc(25,N,18,17,"tr",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("nzType","primary")("routerLink",t.DdM(6,P)),t.xp6(7),t.Q6J("nzShowPagination",!0)("nzLoading",o.loading)("nzData",o.allTags),t.xp6(16),t.Q6J("ngForOf",o.allTags))},directives:[z.ix,y.dQ,Z.w,h.rH,O.QV,q,I.bd,l.N8,l.Om,l.$Z,l.Uo,l._C,l.p0,m.sg,l.h7,m.O5,v.Ls,F.x7],pipes:[m.uU],encapsulation:2}),a})();const R=[{path:"",component:L,data:{title:"Tags"}},{path:"list",component:L,data:{title:"Tags"}},{path:"add",component:U,data:{title:"Add Tag"}},{path:"add/:id",component:U,data:{title:"Update Tag"}}];let E=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[h.Bz.forChild(R)],h.Bz]}),a})();var V=e(3490),H=e(8732),G=e(7948),X=e(9908),j=e(1193),K=e(2192),$=e(285),W=e(2091),k=e(2553),w=e(6771),_=e(4592),tt=e(1863),J=e(8466),nt=e(8809),et=e(3295),at=e(1539),ot=e(8763),st=e(1235);const it=[z.sL,I.vh,G.Rt,X.Ju,F.mS,j.W,K.aF,l.HQ,$.b1,W.FT,k.we,w.X,_.Ph,tt.RQ,J.cg,nt.Wr,d.U5,x.m,i.u5,c.o7,f.LV,at.Fs,ot.Z,st.Hb,v.PV,J.cg,z.sL,p.gR];let rt=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[H.w],imports:[[m.ez,Q.m,E,V.Do,i.UX,i.u5,...it,et.l]]}),a})()}}]);