import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'quick-filter',
    templateUrl: 'filter.component.html'
})

export class FilterComponent {
    @Output() statusEmitter = new EventEmitter <boolean> (); 
    status: boolean;


    onChangeStatus() {
        this.statusEmitter.emit(this.status);
        console.log("STATUS", this.status);
    }
   
}    