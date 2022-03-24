import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'quick-filter',
    templateUrl: 'filter.component.html'
})

export class FilterComponent {
    @Output() statusEmitter = new EventEmitter <boolean> (); 
    status: boolean;
    // allQuickLinks: any;
    // loading= true;


    constructor( private apiService: ApiService ) {
    }


    // getAllQuickLinks() {
    //     this.apiService.sendRequest(requests.getAllQuickLinks, 'get', this.pagination).subscribe((res:any) => {
    //         this.allQuickLinks= res.quickLinks;
    //         console.log("ALL-QUICK-LINKS", this.allQuickLinks);
    //         this.loading = false;
    //     })
    // }

    onChangeStatus() {
        // this.status= status;
        this.statusEmitter.emit(this.status);
        console.log("STATUS", this.status);
    }
   
   
}    