import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'tiny-file-modal',
    templateUrl: './file-modal.component.html',
})

export class FileModalComponent implements OnInit {
   @Input() isVisible = false;
    constructor() {

    }
    ngOnInit(): void {

    }



    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }

    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }

}