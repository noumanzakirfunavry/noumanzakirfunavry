import { Component, EventEmitter, Output } from '@angular/core'
import { Pagination } from '../../common/models/pagination';

@Component({
    selector: 'menus-filter',
    templateUrl: 'filter.component.html'
})

export class FilterComponent {
    @Output() statusEmitter = new EventEmitter (); 
    @Output() filterEmitter = new EventEmitter (); 
    filterModel : {isActive: boolean, title: string, position: string} = {isActive: null, title: null, position: ''}
    pagination : Pagination = new Pagination();

    search() {
        this.statusEmitter.emit(this.filterModel);
    }

    clear() {
        this.filterModel= { isActive : null, title : null, position: ''};
        this.filterEmitter.emit(this.filterModel);
    }
   
}    