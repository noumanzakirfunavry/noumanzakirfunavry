import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'user-filter',
    templateUrl: './user-filter.component.html'
})

export class UserFilterComponent {
    @Output() statusEmitter = new EventEmitter (); 
    @Output() filterEmitter = new EventEmitter (); 
    filterModel : {isActive: boolean, search: string} = {isActive: null, search: null}

    search() {
        this.statusEmitter.emit(this.filterModel);
    }

    clear() {
        this.filterModel= { isActive : null, search : null};
        this.filterEmitter.emit(this.filterModel)
    }
   
}    