"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[526],{6526:(G,T,a)=>{a.r(T),a.d(T,{InfographicsModule:()=>K});var c=a(9808),C=a(1681),u=a(4521),h=a(520),l=a(2382),y=a(9300),t=a(5e3),x=a(1731),d=a(3714),Z=a(9095),A=a(1235),p=a(8177),v=a(5820),q=a(4138),U=a(5540),z=a(7036),f=a(9997),s=a(7336),S=a(2998),m=a(4471),I=a(1575);function L(n,i){if(1&n&&t._UZ(0,"nz-option",33),2&n){const e=i.$implicit;t.Q6J("nzLabel",e.label)("nzValue",e.value)}}function F(n,i){if(1&n&&t._UZ(0,"nz-option",33),2&n){const e=i.$implicit;t.Q6J("nzLabel",e.label)("nzValue",e.value)}}function O(n,i){if(1&n&&(t.TgZ(0,"div",34),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.ekj("border",1===e.getDate()),t.xp6(1),t.hij(" ",e.getDate()," ")}}let D=(()=>{class n{constructor(e,o,r){this.fb=e,this.http=o,this.msg=r,this.uploading=!1,this.fileList=[],this.listOfOption=[],this.size="default",this.singleValue="a10",this.multipleValue=["a10","c12"],this.tagValue=["a10","c12","tag"],this.editorConfig={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{size:["small",!1,"large","huge"]}],[{align:[]}],["link","image"],[{direction:"rtl"}],[{font:[]}],[{align:[]}]]},this.beforeUpload=g=>(this.fileList=this.fileList.concat(g),!1)}submitForm(){for(const e in this.validateForm.controls)this.validateForm.controls[e].markAsDirty(),this.validateForm.controls[e].updateValueAndValidity()}get isHorizontal(){var e;return"horizontal"===(null===(e=this.validateForm.controls.formLayout)||void 0===e?void 0:e.value)}ngOnInit(){this.validateForm=this.fb.group({formLayout:["horizontal"],fieldA:[null,[l.kI.required]],filedB:[null,[l.kI.required]]});const e=[];for(let o=10;o<36;o++)e.push({label:o.toString(36)+o,value:o.toString(36)+o});this.listOfOption=e}handleUpload(){const e=new FormData;this.fileList.forEach(r=>{e.append("files[]",r)}),this.uploading=!0;const o=new h.aW("POST","https://www.mocky.io/v2/5cc8019d300000980a055e76",e,{});this.http.request(o).pipe((0,y.h)(r=>r instanceof h.Zn)).subscribe(()=>{this.uploading=!1,this.fileList=[],this.msg.success("upload successfully.")},()=>{this.uploading=!1,this.msg.error("upload failed.")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.qu),t.Y36(h.eN),t.Y36(x.dD))},n.\u0275cmp=t.Xpm({type:n,selectors:[["add-infographics"]],decls:125,vars:10,consts:[[1,"col-12"],["nz-form","",3,"nzLayout"],[1,"row"],[1,"col-6"],[1,"col-md-11"],["nzFor","date"],[1,"w-100",3,"nzDateRender"],["type","text","nz-input","","placeholder","Enter Title"],[3,"nzFileList","nzBeforeUpload","nzFileListChange"],["nz-button",""],["nz-icon","","nzType","upload"],[1,"no-border-last",3,"nzShowPagination"],[1,"d-flex","justify-content-between"],["nz-icon","","nzType","link","nzTheme","outline"],["nz-icon","","nzType","delete","nzTheme","outline"],[1,"mr-3"],[1,"mb-2"],["nz-button","","nzType","default",1,"mr-3"],["nzMode","multiple","nzPlaceHolder","Please select",3,"nzSize"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[1,"d-flex"],["type","text","placeholder","Enter Tag","dir","rtl","nz-input",""],["type","text","placeholder","Enter Quote","dir","rtl","nz-input",""],[1,"mb-4"],["type","text","placeholder","Enter Slug Line","dir","rtl","nz-input",""],["type","text","placeholder","Enter Title","dir","rtl","nz-input",""],["rows","4","type","text","placeholder","Enter Description","dir","rtl","nz-input",""],["nzExtra","Enter keywords seperated by a comma (,) ."],["type","text","placeholder","Enter Keywords","dir","rtl","nz-input",""],[3,"nzSpan"],["nz-button","","nzType","primary",1,"mr-3"],["nz-button","","nzType","default"],["tplRender",""],[3,"nzLabel","nzValue"],[1,"ant-picker-cell-inner"]],template:function(e,o){if(1&e&&(t.TgZ(0,"section"),t._UZ(1,"br"),t._UZ(2,"br"),t.TgZ(3,"div",0),t.TgZ(4,"form",1),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"div",2),t.TgZ(8,"div",4),t.TgZ(9,"nz-form-item"),t.TgZ(10,"nz-form-label",5),t._uU(11,"Date"),t.qZA(),t.TgZ(12,"nz-form-control"),t._UZ(13,"nz-date-picker",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",4),t.TgZ(15,"nz-form-item"),t.TgZ(16,"nz-form-label"),t._uU(17,"Title"),t.qZA(),t.TgZ(18,"nz-form-control"),t._UZ(19,"input",7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",2),t.TgZ(21,"div",4),t.TgZ(22,"nz-form-item"),t.TgZ(23,"h4"),t._uU(24,"Infographics Images"),t.qZA(),t.TgZ(25,"nz-upload",8),t.NdJ("nzFileListChange",function(g){return o.fileList=g}),t.TgZ(26,"button",9),t._UZ(27,"i",10),t._uU(28," Select File "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"div",2),t.TgZ(30,"div",4),t.TgZ(31,"nz-form-item"),t.TgZ(32,"nz-table",11),t.TgZ(33,"thead"),t.TgZ(34,"tr"),t.TgZ(35,"th"),t._uU(36,"Reorder"),t.qZA(),t._UZ(37,"th"),t.TgZ(38,"th"),t._uU(39,"File Size"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"tbody"),t.TgZ(43,"tr"),t._UZ(44,"td"),t._UZ(45,"td"),t.TgZ(46,"td"),t._uU(47,"240kb"),t.qZA(),t.TgZ(48,"td"),t.TgZ(49,"div",12),t._UZ(50,"i",13),t._UZ(51,"i",14),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(52,"div",3),t.TgZ(53,"h4"),t._uU(54,"General Settings"),t.qZA(),t.TgZ(55,"nz-form-item"),t.TgZ(56,"nz-form-control"),t._UZ(57,"nz-switch",15),t._uU(58," Active "),t.qZA(),t.qZA(),t.TgZ(59,"div"),t.TgZ(60,"h4",16),t._uU(61,"Sharing Settings"),t.qZA(),t.TgZ(62,"nz-form-item"),t.TgZ(63,"nz-form-control"),t.TgZ(64,"button",17),t._uU(65,"Push Notification"),t.qZA(),t.TgZ(66,"button",17),t._uU(67,"Twitter"),t.qZA(),t.TgZ(68,"button",17),t._uU(69,"Facebook"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(70,"div"),t.TgZ(71,"nz-form-item"),t.TgZ(72,"nz-form-label"),t._uU(73,"Tags"),t.qZA(),t.TgZ(74,"nz-form-control"),t.TgZ(75,"nz-select",18),t.YNc(76,L,1,2,"nz-option",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(77,"div",20),t.TgZ(78,"nz-form-item"),t._UZ(79,"input",21),t.TgZ(80,"button",17),t._uU(81,"Create"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(82,"div"),t.TgZ(83,"nz-form-item"),t.TgZ(84,"nz-form-label"),t._uU(85,"Related Quotes"),t.qZA(),t.TgZ(86,"nz-form-control"),t.TgZ(87,"nz-select",18),t.YNc(88,F,1,2,"nz-option",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(89,"div",20),t.TgZ(90,"nz-form-item"),t._UZ(91,"input",22),t.TgZ(92,"button",17),t._uU(93,"Create"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(94,"div",23),t.TgZ(95,"h4",16),t._uU(96,"SEO Settings"),t.qZA(),t.TgZ(97,"nz-form-item"),t.TgZ(98,"nz-form-label"),t._uU(99,"Slug Line"),t.qZA(),t.TgZ(100,"nz-form-control"),t._UZ(101,"input",24),t.qZA(),t.qZA(),t.TgZ(102,"nz-form-item"),t.TgZ(103,"nz-form-label"),t._uU(104,"Title"),t.qZA(),t.TgZ(105,"nz-form-control"),t._UZ(106,"input",25),t.qZA(),t.qZA(),t.TgZ(107,"nz-form-item"),t.TgZ(108,"nz-form-label"),t._uU(109,"Description"),t.qZA(),t.TgZ(110,"nz-form-control"),t._UZ(111,"textarea",26),t.qZA(),t.qZA(),t.TgZ(112,"nz-form-item"),t.TgZ(113,"nz-form-label"),t._uU(114,"Keyords"),t.qZA(),t.TgZ(115,"nz-form-control",27),t._UZ(116,"input",28),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(117,"nz-form-item"),t.TgZ(118,"nz-form-control",29),t.TgZ(119,"button",30),t._uU(120,"Save"),t.qZA(),t.TgZ(121,"button",31),t._uU(122,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(123,O,2,3,"ng-template",null,32,t.W1O)),2&e){const r=t.MAs(124);t.xp6(4),t.Q6J("nzLayout","vertical"),t.xp6(9),t.Q6J("nzDateRender",r),t.xp6(12),t.Q6J("nzFileList",o.fileList)("nzBeforeUpload",o.beforeUpload),t.xp6(7),t.Q6J("nzShowPagination",!0),t.xp6(43),t.Q6J("nzSize",o.size),t.xp6(1),t.Q6J("ngForOf",o.listOfOption),t.xp6(11),t.Q6J("nzSize",o.size),t.xp6(1),t.Q6J("ngForOf",o.listOfOption),t.xp6(30),t.Q6J("nzSpan",14)}},directives:[l._Y,l.JL,l.F,d.Lr,Z.SK,d.Nx,Z.t3,d.iK,d.Fd,A.uw,p.Zp,v.FY,q.ix,U.dQ,z.w,f.Ls,s.N8,s.Om,s.$Z,s.Uo,s._C,s.p0,S.i,m.Vq,c.sg,I.Lv,m.Ip],encapsulation:2}),n})();var b=a(8732);function J(n,i){1&n&&t._UZ(0,"i",14)}function Q(n,i){if(1&n&&(t.TgZ(0,"div",15),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.ekj("border",1===e.getDate()),t.xp6(1),t.hij(" ",e.getDate()," ")}}let k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["infographics-filter"]],decls:20,vars:6,consts:[[1,"float-right"],[1,"d-flex"],[1,"mr-2"],[3,"nzDateRender"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Publisher"],["nzValue","Sample User 1",3,"nzLabel"],["nzValue","Sample User 2",3,"nzLabel"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Status"],["nzValue","Active",3,"nzLabel"],["nzValue","InActive",3,"nzLabel"],[3,"nzPrefix"],["nz-input","","placeholder","Search Title","nzSize","small"],["prefiXTemplate",""],["tplRender",""],["nz-icon","","nzType","search","theme","outline"],[1,"ant-picker-cell-inner"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"nz-form-item",2),t.TgZ(3,"nz-form-control"),t._UZ(4,"nz-date-picker",3),t.qZA(),t.qZA(),t.TgZ(5,"nz-form-item",2),t.TgZ(6,"nz-select",4),t._UZ(7,"nz-option",5),t._UZ(8,"nz-option",6),t.qZA(),t.qZA(),t.TgZ(9,"nz-form-item",2),t.TgZ(10,"nz-select",7),t._UZ(11,"nz-option",8),t._UZ(12,"nz-option",9),t.qZA(),t.qZA(),t.TgZ(13,"nz-form-item"),t.TgZ(14,"nz-input-group",10),t._UZ(15,"input",11),t.qZA(),t.YNc(16,J,1,0,"ng-template",null,12,t.W1O),t.qZA(),t.qZA(),t.qZA(),t.YNc(18,Q,2,3,"ng-template",null,13,t.W1O)),2&e){const r=t.MAs(17),g=t.MAs(19);t.xp6(4),t.Q6J("nzDateRender",g),t.xp6(3),t.Q6J("nzLabel","Sample User 1"),t.xp6(1),t.Q6J("nzLabel","Sample User 2"),t.xp6(3),t.Q6J("nzLabel","Active"),t.xp6(1),t.Q6J("nzLabel","InActive"),t.xp6(2),t.Q6J("nzPrefix",r)}},directives:[Z.SK,d.Nx,Z.t3,d.Fd,A.uw,m.Vq,m.Ip,z.w,p.gB,p.ke,p.Zp,f.Ls],encapsulation:2}),n})();var j=a(1646),w=a(7948),M=a(4259);function N(n,i){1&n&&t._UZ(0,"nz-badge",21)}function V(n,i){1&n&&t._UZ(0,"nz-badge",22)}function E(n,i){1&n&&t._UZ(0,"nz-badge",23)}function P(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",8),t.NdJ("nzCheckedChange",function(r){const X=t.CHM(e).$implicit;return t.oxw().onItemChecked(X.id,r)}),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"div",9),t._UZ(5,"nz-avatar",10),t.TgZ(6,"h6",11),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13,"Sample User"),t.qZA(),t.TgZ(14,"td"),t._uU(15,"12k"),t.qZA(),t.TgZ(16,"td"),t.YNc(17,N,1,0,"nz-badge",12),t.YNc(18,V,1,0,"nz-badge",13),t.YNc(19,E,1,0,"nz-badge",14),t.qZA(),t.TgZ(20,"td"),t.TgZ(21,"div",15),t._UZ(22,"i",16),t._UZ(23,"i",17),t._UZ(24,"i",18),t._UZ(25,"i",19),t._UZ(26,"i",20),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=i.$implicit,o=t.oxw();t.xp6(1),t.Q6J("nzChecked",o.setOfCheckedId.has(e.id))("nzDisabled",e.disabled),t.xp6(1),t.Oqu(e.id),t.xp6(3),t.Q6J("nzSize",30)("nzSrc",e.avatar),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.date),t.xp6(6),t.Q6J("ngIf","approved"===e.status),t.xp6(1),t.Q6J("ngIf","rejected"===e.status),t.xp6(1),t.Q6J("ngIf","pending"===e.status)}}const R=function(){return["/infographics/add"]};let _=(()=>{class n{constructor(e){this.colorConfig=e,this.indeterminate=!1,this.checked=!1,this.setOfCheckedId=new Set,this.listOfCurrentPageData=[],this.ordersList=[{id:5331,name:"Erin Gonzales",avatar:"assets/images/avatars/thumb-1.jpg",date:"8 May 2019",amount:137,status:"approved",checked:!1},{id:5375,name:"Darryl Day",avatar:"assets/images/avatars/thumb-2.jpg",date:"6 May 2019",amount:322,status:"approved",checked:!1},{id:5762,name:"Marshall Nichols",avatar:"assets/images/avatars/thumb-3.jpg",date:"1 May 2019",amount:543,status:"approved",checked:!1},{id:5865,name:"Virgil Gonzales",avatar:"assets/images/avatars/thumb-4.jpg",date:"28 April 2019",amount:876,status:"pending",checked:!1},{id:5213,name:"Nicole Wyne",avatar:"assets/images/avatars/thumb-5.jpg",date:"28 April 2019",amount:241,status:"approved",checked:!1},{id:5311,name:"Riley Newman",avatar:"assets/images/avatars/thumb-6.jpg",date:"19 April 2019",amount:872,status:"rejected",checked:!1}],this.productsList=[{name:"Gray Sofa",avatar:"assets/images/others/thumb-9.jpg",category:"Home Decoration",growth:18.3},{name:"Beat Headphone",avatar:"assets/images/others/thumb-10.jpg",category:"Eletronic",growth:12.7},{name:"Wooden Rhino",avatar:"assets/images/others/thumb-11.jpg",category:"Home Decoration",growth:9.2},{name:"Red Chair",avatar:"assets/images/others/thumb-12.jpg",category:"Home Decoration",growth:7.7},{name:"Wristband",avatar:"assets/images/others/thumb-13.jpg",category:"Eletronic",growth:5.8}]}updateCheckedSet(e,o){o?this.setOfCheckedId.add(e):this.setOfCheckedId.delete(e)}onItemChecked(e,o){this.updateCheckedSet(e,o),this.refreshCheckedStatus()}refreshCheckedStatus(){const e=this.listOfCurrentPageData.filter(({disabled:o})=>!o);this.checked=e.every(({id:o})=>this.setOfCheckedId.has(o)),this.indeterminate=e.some(({id:o})=>this.setOfCheckedId.has(o))&&!this.checked}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b.w))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-infographics"]],decls:30,vars:6,consts:[[1,"row"],[1,"col-md-2"],["nz-button","",3,"nzType","routerLink"],[1,"col-md-10"],[1,"col-lg-12","mt-3"],[1,"no-border-last",3,"nzData","nzShowPagination"],["ordersListTable",""],[4,"ngFor","ngForOf"],[3,"nzChecked","nzDisabled","nzCheckedChange"],[1,"d-flex","align-items-center"],["nzIcon","user",3,"nzSize","nzSrc"],[1,"m-l-10","m-b-0"],["nzStatus","success",4,"ngIf"],["nzStatus","error",4,"ngIf"],["nzStatus","processing",4,"ngIf"],[1,"d-flex","justify-content-between"],[1,"fas","fa-external-link-alt"],["nz-icon","","nzType","edit","nzTheme","outline"],["nz-icon","","nzType","bell","nzTheme","outline"],["nz-icon","","nzType","link","nzTheme","outline"],["nz-icon","","nzType","delete","nzTheme","outline"],["nzStatus","success"],["nzStatus","error"],["nzStatus","processing"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t._uU(3,"Add Infographics"),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"infographics-filter"),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"nz-card"),t.TgZ(8,"div"),t.TgZ(9,"nz-table",5,6),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t._UZ(13,"th"),t.TgZ(14,"th"),t._uU(15,"Title"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Created"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Modified"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Publisher"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Views"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Status"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(28,"tbody"),t.YNc(29,P,27,11,"tr",7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const r=t.MAs(10);t.xp6(2),t.Q6J("nzType","primary")("routerLink",t.DdM(5,R)),t.xp6(7),t.Q6J("nzData",o.ordersList)("nzShowPagination",!0),t.xp6(20),t.Q6J("ngForOf",r.data)}},directives:[q.ix,U.dQ,z.w,u.rH,k,j.bd,s.N8,s.Om,s.$Z,s.Uo,s._C,s.p0,c.sg,s.h7,w.Dz,c.O5,f.Ls,M.x7],encapsulation:2}),n})();const Y=[{path:"",component:_,data:{title:"Infographics"}},{path:"list",component:_,data:{title:"Infographics"}},{path:"add",component:D,data:{title:"Add Infographics"}}];let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(Y)],u.Bz]}),n})();var B=a(3490),$=a(6163),W=a(722);let K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[b.w],imports:[[c.ez,C.m,H,B.Do,l.UX,l.u5,...$.v,v.cS,W.fi.forRoot()]]}),n})()}}]);