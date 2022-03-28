import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { CommonStore } from 'src/app/store/common.store';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';


@Component({
    selector: `app-file-uploader`,
    template: `
    <form [formGroup]="demoForm">
        <file-upload  accept="{{fileTypes}}" formControlName="files" (ngModelChange)="onFileRead($event)" [multiple]="multiple" [animation]="animation"></file-upload>
        <!-- <input type="file" > -->
    </form>
    `
})
export class FileUploaderComponent {
    @Input() fileTypes: any = "video/mp4";
    @Input() fileLimit: number = 1;
    @Input() size:number;
    @Output() onFileSelection: EventEmitter<any> = new EventEmitter<any>();

    public animation: boolean = false;
    public multiple: boolean = false;

    private filesControl = new FormControl(null, FileUploadValidators.filesLimit(1));
    
    public demoForm = new FormGroup({
        files: this.filesControl
    });
    
    constructor(
        // public commonStore: CommonStore
        ) {
        this.filesControl = new FormControl(null, FileUploadValidators.filesLimit(this.fileLimit ? this.fileLimit:1));
        /**
         * pay attention, value type is Array<File>
         * this.filesControl.setValue([File])
         */
    }

    onFileRead(files) {
        // TODO check on file length
        if (files && files.length > 0 && this.fileTypes.match(files[0].type)) {
            console.log("size",((files[0].size/1024)/1024).toFixed(4))
            // if(parseInt(((files[0].size/1024)/1024).toFixed(4))>this.size){
            //     this.clear();
            //     this.onFileSelection.emit(null);
            //     // this.commonStore.notifier({ message: 'Please upload file with less than '+this.size+' MB', action: 'error' })
            // }else{
                this.onFileSelection.emit({ file: files[0] });
            // }
        } else if (files && files.length != 0) {
            this.clear()
            // this.commonStore.notifier({ message: 'Please select correct file format', action: 'error' })
        }
    }

    public toggleStatus(): void {
        this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
    }

    public toggleMultiple() {
        this.multiple = !this.multiple;
    }

    public clear(): void {
        this.demoForm.value.files=[]
        this.filesControl.setValue([]);
    }
}