// import { Component, OnInit } from '@angular/core';

// @Component({
//     selector: 'app-dashboard',
//     templateUrl: './dashboard.component.html',
// })

// export class DashboardComponent implements OnInit {
//     constructor() { }

//     ngOnInit(): void { }
// }


import { Component } from '@angular/core'
import { ThemeConstantService } from '../shared/services/theme-constant.service';
// import { ThemeConstantService } from '../../shared/services/theme-constant.service';

export interface Data {
    id: number;
    name: string;
    age: number;
    address: string;
    disabled: boolean;
}

@Component({
       selector: 'app-jobs',
    templateUrl: './jobs.component.html',
})

export class JobsComponent {

    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: Data[] = [];


    constructor( private colorConfig:ThemeConstantService ) {}

    
    ordersList = [
        {
            id: 5331,
            name: 'Erin Gonzales',
            avatar: 'assets/images/avatars/thumb-1.jpg',
            date: '8 May 2019',
            amount: 137,
            status: 'approved',
            checked : false
        },
        {
            id: 5375,
            name: 'Darryl Day',
            avatar: 'assets/images/avatars/thumb-2.jpg',
            date: '6 May 2019',
            amount: 322,
            status: 'approved',
            checked : false
        },
        {
            id: 5762,
            name: 'Marshall Nichols',
            avatar: 'assets/images/avatars/thumb-3.jpg',
            date: '1 May 2019',
            amount: 543,
            status: 'approved',
            checked : false
        },
        {
            id: 5865,
            name: 'Virgil Gonzales',
            avatar: 'assets/images/avatars/thumb-4.jpg',
            date: '28 April 2019',
            amount: 876,
            status: 'pending',
            checked : false
        },
        {
            id: 5213,
            name: 'Nicole Wyne',
            avatar: 'assets/images/avatars/thumb-5.jpg',
            date: '28 April 2019',
            amount: 241,
            status: 'approved',
            checked : false
        },
        {
            id: 5311,
            name: 'Riley Newman',
            avatar: 'assets/images/avatars/thumb-6.jpg',
            date: '19 April 2019',
            amount: 872,
            status: 'rejected',
            checked : false
        }
    ]    

    productsList = [
        {
            name: 'Gray Sofa',
            avatar: 'assets/images/others/thumb-9.jpg',
            category: 'Home Decoration',
            growth: 18.3
        },
        {
            name: 'Beat Headphone',
            avatar: 'assets/images/others/thumb-10.jpg',
            category: 'Eletronic',
            growth: 12.7
        },
        {
            name: 'Wooden Rhino',
            avatar: 'assets/images/others/thumb-11.jpg',
            category: 'Home Decoration',
            growth: 9.2
        },
        {
            name: 'Red Chair',
            avatar: 'assets/images/others/thumb-12.jpg',
            category: 'Home Decoration',
            growth: 7.7
        },
        {
            name: 'Wristband',
            avatar: 'assets/images/others/thumb-13.jpg',
            category: 'Eletronic',
            growth: 5.8
        }
    ]    

    updateCheckedSet(id: number, checked: boolean): void {
        if (checked) {
            this.setOfCheckedId.add(id);
        } else {
            this.setOfCheckedId.delete(id);
        }
    }

    onItemChecked(id: number, checked: boolean): void {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
}    