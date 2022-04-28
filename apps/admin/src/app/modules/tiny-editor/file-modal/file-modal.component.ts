import {EventEmitter, Component, Input, OnInit, Output } from "@angular/core";
import { requests } from "../../../shared/config/config";
import { ApiService } from "../../../shared/services/api.service";

@Component({
    selector: 'tiny-file-modal',
    templateUrl: './file-modal.component.html',
})

export class FileModalComponent implements OnInit {
    // @Input() $isVisible: Observable<any>;
    @Input() isVisible = false;
    @Output() closeModal: EventEmitter<any>=new EventEmitter();
    @Output() onSelectFile: EventEmitter<any>=new EventEmitter();
    files: any=[];
    selctedFile:any={}


    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
            this.apiService.sendRequest(requests.getAllAttachments,'get',{limit:25,pageNo:1}).subscribe((res:any)=>{
                console.log("files",res);
                this.files=res.response.attachments;
                console.log("files",this.files);
            })
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

    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
        this.closeModal.emit(this.isVisible);
    }

}