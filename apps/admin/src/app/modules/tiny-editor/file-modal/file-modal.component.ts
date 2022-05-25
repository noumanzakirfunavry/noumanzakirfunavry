import { EventEmitter, Component, Input, OnInit, Output } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Pagination } from "../../../common/models/pagination";
import { requests } from "../../../shared/config/config";
import { ApiService } from "../../../shared/services/api.service";


export class Data extends Pagination {
    title?: string;
    attachmentType?: 'VIDEO' | 'IMAGE';

    constructor() {
        super();
    }
}


@Component({
    selector: 'tiny-file-modal',
    templateUrl: './file-modal.component.html',
    styleUrls: ['./file-modal.component.css']
})

export class FileModalComponent implements OnInit {
    @Input() isVisible = false;
    @Output() closeModal: EventEmitter<any> = new EventEmitter();
    @Output() onSelectFile: EventEmitter<any> = new EventEmitter();
    pagination: Data = { limit: 25, pageNo: 1, attachmentType: 'IMAGE' };
    searchTitle: string;

    files: any = [];
    selctedFile: any = {};
    loading: boolean;
    totalCount: any;
    filePath: any;
    disabled= true;


    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.fetchAttachments();
    }

    private fetchAttachments() {
        this.apiService.sendRequest(requests.getAllAttachments, 'get', this.pagination).subscribe((res: any) => {
            this.files = res.response.attachments;
            this.totalCount = res.response.totalCount;
            this.filePath= environment.fileUrl;
            console.log("files", this.files);
        });
    }

    onSearch() {
        this.pagination= {...this.pagination, title: this.pagination.title};
        this.pagination.pageNo= 1;
        this.fetchAttachments();
    }

    onClear() {
        this.pagination= { limit: 25, pageNo: 1, attachmentType: this.pagination.attachmentType };
        this.pagination.pageNo= 1;
        this.fetchAttachments();
    }

    onSelect(file) {
        console.log("SELECTED FILE:", file);
        this.selctedFile = Object.assign({}, file);
        this.disabled= false;
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
        this.loading = true;
        this.pagination = Object.assign({ ...this.pagination, limit: limit })
        this.fetchAttachments();
    }

    onPageIndexChange(pageNo: number) {
        this.loading = true;
        this.pagination = Object.assign({ ...this.pagination, pageNo: pageNo })
        this.fetchAttachments();
    }

    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
        this.closeModal.emit(this.isVisible);
    }

    confirm(item) {
        console.log("delete", item);
        this.apiService.sendRequest(requests.deleteAttachment, 'delete', { id: [item.id] }).subscribe(res => {
            this.fetchAttachments();
        })
    }

    next() {
        this.pagination.pageNo = this.pagination.pageNo + 1;
        this.fetchAttachments();
    }

    prev() {
        if (this.pagination.pageNo > 1) {
            this.pagination.pageNo = this.pagination.pageNo - 1;
            this.fetchAttachments();
        }
    }

    filterFiles(fileType) {
        this.pagination.attachmentType = fileType;
        this.fetchAttachments()
    }

    cancel() {
        console.log("TASK-NOT-DELETED");
    }

}