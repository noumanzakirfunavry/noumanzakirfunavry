import {EventEmitter, Component, Input, OnInit, Output } from "@angular/core";
import { Pagination } from "../../../common/models/pagination";
import { requests } from "../../../shared/config/config";
import { ApiService } from "../../../shared/services/api.service";
export class Data extends Pagination {
    title?: string;

    constructor() {
        super();
        this.title= "";
    }
}
@Component({
    selector: 'tiny-file-modal',
    templateUrl: './file-modal.component.html',
})

export class FileModalComponent implements OnInit {
    pagination: Data ={limit:25,pageNo:1};
    newsCount: any;
    // @Input() $isVisible: Observable<any>;
    @Input() isVisible = false;
    @Output() closeModal: EventEmitter<any>=new EventEmitter();
    @Output() onSelectFile: EventEmitter<any>=new EventEmitter();
    files: any=[];
    selctedFile:any={}
    loading: boolean;
    totalCount: any;


    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
            this.fetchAttachments();
    }

    private fetchAttachments() {
        this.apiService.sendRequest(requests.getAllAttachments, 'get', this.pagination).subscribe((res: any) => {
            console.log("files", res);
            this.files = res.response.attachments;
            this.totalCount=res.responsetotalCount
            console.log("files", this.files);
        });
    }

    onSelect(file){
        console.log("SELECTED FILE:",file);
        this.selctedFile=Object.assign({},file);
    }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        console.log('Button ok clicked!');
        this.onSelectFile.emit(this.selctedFile)
        this.isVisible = false;
    }
    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.fetchAttachments();
    }
    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.fetchAttachments();
    }

    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
        this.closeModal.emit(this.isVisible);
    }
    confirm(item){
       this.apiService.sendRequest(requests.deleteAttachment,'delete',{id:[item.id]}).subscribe
    }
    cancel(){

    }

}