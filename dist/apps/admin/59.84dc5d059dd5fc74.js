"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[59],{2059:(ot,Z,e)=>{e.r(Z),e.d(Z,{TVScheduleModule:()=>nt});var z=e(9808),D=e(1681),T=e(4521),t=e(5e3),p=e(8732),m=e(4138),v=e(5540),f=e(7036),g=e(9095),i=e(3714);let F=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tvSchedule-filter"]],decls:6,vars:0,consts:[[1,"float-right"],[1,"d-flex"],[1,"mr-2"],["nz-button","","nzType","default"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"nz-form-item",2),t.TgZ(3,"nz-form-control"),t.TgZ(4,"button",3),t._uU(5,"Update Schedule"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[g.SK,i.Nx,g.t3,i.Fd,m.ix,v.dQ,f.w],encapsulation:2}),o})();var C=e(1646),d=e(7336),A=e(9020),S=e(9997),l=e(2382),V=e(1235),h=e(4471),y=e(3271),x=e(8177),b=e(1575);function J(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",12),t.NdJ("nzCheckedChange",function(s){const u=t.CHM(n).$implicit;return t.oxw().onItemChecked(u.id,s)}),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4,"Sunday"),t.qZA(),t.TgZ(5,"td"),t._uU(6,"10:30"),t.qZA(),t.TgZ(7,"td"),t._uU(8,"Program Description"),t.qZA(),t.TgZ(9,"td"),t.TgZ(10,"div",13),t.TgZ(11,"i",14),t.NdJ("click",function(){return t.CHM(n),t.oxw().showModal()}),t.qZA(),t._UZ(12,"i",15),t.qZA(),t.qZA(),t.qZA()}if(2&o){const n=r.$implicit,a=t.oxw();t.xp6(1),t.Q6J("nzChecked",a.setOfCheckedId.has(n.id))("nzDisabled",n.disabled),t.xp6(1),t.Oqu(n.date)}}function O(o,r){1&o&&t._uU(0," Edit TV Schedule ")}function q(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",16),t.TgZ(1,"form",17),t.TgZ(2,"div",0),t.TgZ(3,"div",16),t.TgZ(4,"div",16),t.TgZ(5,"nz-form-item"),t.TgZ(6,"nz-form-label",18),t._uU(7,"Date"),t.qZA(),t.TgZ(8,"nz-form-control"),t._UZ(9,"nz-date-picker",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",20),t.TgZ(11,"nz-form-item"),t.TgZ(12,"nz-form-label"),t._uU(13,"Day"),t.qZA(),t.TgZ(14,"nz-select",21),t._UZ(15,"nz-option",22),t._UZ(16,"nz-option",23),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",20),t.TgZ(18,"nz-form-item"),t.TgZ(19,"nz-form-label",24),t._uU(20,"Time"),t.qZA(),t.TgZ(21,"nz-form-control"),t.TgZ(22,"nz-time-picker",25),t.NdJ("ngModelChange",function(s){return t.CHM(n),t.oxw().time=s}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",20),t.TgZ(24,"nz-form-item"),t.TgZ(25,"nz-form-label",24),t._uU(26,"Description"),t.qZA(),t.TgZ(27,"nz-form-control"),t._UZ(28,"input",26),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"div",20),t.TgZ(30,"nz-form-item"),t.TgZ(31,"nz-form-control"),t.TgZ(32,"button",27),t._uU(33,"Save"),t.qZA(),t.TgZ(34,"button",28),t.NdJ("click",function(){return t.CHM(n),t.oxw().handleCancel()}),t._uU(35,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const n=t.oxw(),a=t.MAs(31);t.xp6(1),t.Q6J("nzLayout","vertical"),t.xp6(8),t.Q6J("nzDateRender",a),t.xp6(6),t.Q6J("nzLabel","Saturday"),t.xp6(1),t.Q6J("nzLabel","Sunday"),t.xp6(6),t.Q6J("ngModel",n.time)("nzUse12Hours",!0)}}function L(o,r){if(1&o&&(t.TgZ(0,"div",29),t._uU(1),t.qZA()),2&o){const n=r.$implicit;t.ekj("border",1===n.getDate()),t.xp6(1),t.hij(" ",n.getDate()," ")}}let U=(()=>{class o{constructor(n){this.colorConfig=n,this.time=null,this.isVisible=!1,this.isConfirmLoading=!1,this.indeterminate=!1,this.checked=!1,this.setOfCheckedId=new Set,this.listOfCurrentPageData=[],this.ordersList=[{id:5331,name:"Erin Gonzales",avatar:"assets/images/avatars/thumb-1.jpg",date:"8 May 2019",amount:137,status:"approved",checked:!1},{id:5375,name:"Darryl Day",avatar:"assets/images/avatars/thumb-2.jpg",date:"6 May 2019",amount:322,status:"approved",checked:!1},{id:5762,name:"Marshall Nichols",avatar:"assets/images/avatars/thumb-3.jpg",date:"1 May 2019",amount:543,status:"approved",checked:!1},{id:5865,name:"Virgil Gonzales",avatar:"assets/images/avatars/thumb-4.jpg",date:"28 April 2019",amount:876,status:"pending",checked:!1},{id:5213,name:"Nicole Wyne",avatar:"assets/images/avatars/thumb-5.jpg",date:"28 April 2019",amount:241,status:"approved",checked:!1},{id:5311,name:"Riley Newman",avatar:"assets/images/avatars/thumb-6.jpg",date:"19 April 2019",amount:872,status:"rejected",checked:!1}],this.productsList=[{name:"Gray Sofa",avatar:"assets/images/others/thumb-9.jpg",category:"Home Decoration",growth:18.3},{name:"Beat Headphone",avatar:"assets/images/others/thumb-10.jpg",category:"Eletronic",growth:12.7},{name:"Wooden Rhino",avatar:"assets/images/others/thumb-11.jpg",category:"Home Decoration",growth:9.2},{name:"Red Chair",avatar:"assets/images/others/thumb-12.jpg",category:"Home Decoration",growth:7.7},{name:"Wristband",avatar:"assets/images/others/thumb-13.jpg",category:"Eletronic",growth:5.8}]}updateCheckedSet(n,a){a?this.setOfCheckedId.add(n):this.setOfCheckedId.delete(n)}onItemChecked(n,a){this.updateCheckedSet(n,a),this.refreshCheckedStatus()}refreshCheckedStatus(){const n=this.listOfCurrentPageData.filter(({disabled:a})=>!a);this.checked=n.every(({id:a})=>this.setOfCheckedId.has(a)),this.indeterminate=n.some(({id:a})=>this.setOfCheckedId.has(a))&&!this.checked}showModal(){this.isVisible=!0}handleOk(){this.isConfirmLoading=!0,setTimeout(()=>{this.isVisible=!1,this.isConfirmLoading=!1},3e3)}handleCancel(){this.isVisible=!1}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p.w))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tvSchedule"]],decls:32,vars:8,consts:[[1,"row"],[1,"col-md-3"],["nz-button","",3,"nzType"],[1,"col-md-9"],[1,"col-lg-12","mt-3"],[1,"no-border-last",3,"nzData","nzShowPagination"],["ordersListTable",""],[4,"ngFor","ngForOf"],[3,"nzVisible","nzTitle","nzContent","nzFooter","nzVisibleChange","nzOnCancel"],["modalTitle",""],["modalContent",""],["tplRender",""],[3,"nzChecked","nzDisabled","nzCheckedChange"],[1,"d-flex","justify-content-between"],["nz-icon","","nzType","edit","nzTheme","outline",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline"],[1,"col-12"],["nz-form","",3,"nzLayout"],["nzFor","date"],[1,"w-100",3,"nzDateRender"],[1,"col-md-12"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Choose Day"],["nzValue","Saturday",3,"nzLabel"],["nzValue","Sunday",3,"nzLabel"],["nzFor","text"],["nzFormat","h:mm a",1,"w-100",3,"ngModel","nzUse12Hours","ngModelChange"],["nz-input","","placeholder","Enter Description","dir","rtl"],["nz-button","","nzType","primary",1,"mr-3"],["nz-button","","nzType","default",3,"click"],[1,"ant-picker-cell-inner"]],template:function(n,a){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t._uU(3,"Upload CSV"),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"tvSchedule-filter"),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"nz-card"),t.TgZ(8,"div"),t.TgZ(9,"nz-table",5,6),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t.TgZ(13,"th"),t._uU(14,"Date"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Day"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Time"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Description"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"tbody"),t.YNc(24,J,13,3,"tr",7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"nz-modal",8),t.NdJ("nzVisibleChange",function(c){return a.isVisible=c})("nzOnCancel",function(){return a.handleCancel()}),t.YNc(26,O,1,0,"ng-template",null,9,t.W1O),t.YNc(28,q,36,6,"ng-template",null,10,t.W1O),t.qZA(),t.YNc(30,L,2,3,"ng-template",null,11,t.W1O)),2&n){const s=t.MAs(10),c=t.MAs(27),u=t.MAs(29);t.xp6(2),t.Q6J("nzType","primary"),t.xp6(7),t.Q6J("nzData",a.ordersList)("nzShowPagination",!0),t.xp6(15),t.Q6J("ngForOf",s.data),t.xp6(1),t.Q6J("nzVisible",a.isVisible)("nzTitle",c)("nzContent",u)("nzFooter",null)}},directives:[m.ix,v.dQ,f.w,F,C.bd,d.N8,d.Om,d.$Z,d.Uo,d._C,d.p0,z.sg,A.du,d.h7,S.Ls,l._Y,l.JL,l.F,i.Lr,g.SK,i.Nx,g.t3,i.iK,i.Fd,V.uw,h.Vq,h.Ip,y.m4,l.JJ,l.On,x.Zp,b.Lv],encapsulation:2}),o})();const j=[{path:"",component:U,data:{title:"TV Schedule"}},{path:"list",component:U,data:{title:"TV Schedule"}}];let N=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[T.Bz.forChild(j)],T.Bz]}),o})();var Q=e(3490),_=e(7948),H=e(9908),R=e(4259),I=e(1193),E=e(2192),P=e(285),W=e(2091),Y=e(2553),k=e(6771),B=e(4592),X=e(1863),M=e(8466),$=e(8809),G=e(2998),K=e(6586),w=e(1539),tt=e(8763);const et=[m.sL,C.vh,_.Rt,H.Ju,R.mS,I.W,E.aF,d.HQ,P.b1,W.FT,Y.we,k.X,B.Ph,X.RQ,M.cg,$.Wr,i.U5,G.m,l.u5,x.o7,h.LV,w.Fs,tt.Z,V.Hb,S.PV,M.cg,m.sL];let nt=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[p.w],imports:[[z.ez,D.m,N,Q.Do,l.UX,l.u5,...et,K.l,A.Qp,y.wY]]}),o})()}}]);