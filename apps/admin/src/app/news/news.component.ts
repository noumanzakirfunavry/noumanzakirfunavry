import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


export interface Data {
    id: number;
    name: string;
    age: number;
    address: string;
    disabled: boolean;
}

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
})

export class NewsComponent implements OnInit {
    pagination: {pageNo: number, limit: number, status?: string, title?: string, branchId?:Array<any>, publishers?:Array<any>} = {pageNo: 1, limit: 10}
    allNews: any;
    indeterminate = false;
    checked = false;
    loading = true;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: Data[] = [];


    constructor(private apiService: ApiService, private message: NzMessageService ) {}

    ngOnInit(): void {
        this.getAllJobs()
    }

    getAllJobs() {
        this.apiService.sendRequest(requests.getAllNews, 'get', this.pagination).subscribe((res:any) => {
            this.allNews= res.response.news;
            
            
            console.log("ALL-JOBS", this.allNews);
            this.loading= false;
        },err => {
            this.loading = false;
          })
    }
    onCurrentPageDataChange(listOfCurrentPageData: Data[]): void {
        this.listOfCurrentPageData = listOfCurrentPageData;
        this.refreshCheckedStatus();
    }
    deleteJobs(jobId: number) {
        this.apiService.sendRequest(requests.deleteJobs, 'delete', {ids:[jobId]}).subscribe((res:any) => {
            console.log("DELETE-JOBS", res);
            this.getAllJobs();
            this.message.create('success', `Job Deleted Successfully`)
        })
    }

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

        onAllChecked(checked: boolean): void {
        this.listOfCurrentPageData.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
}    



// import { Component, OnInit } from '@angular/core'
// import { ThemeConstantService } from '../shared/services/theme-constant.service';
// // import { ThemeConstantService } from '../../shared/services/theme-constant.service';
// export interface Data {
//     id: number;
//     name: string;
//     age: number;
//     address: string;
//     disabled: boolean;
// }
// @Component({
//     selector: 'app-news',
//     templateUrl: './news.component.html',
// })

// export class NewsComponent {

//     constructor(private colorConfig: ThemeConstantService) { }

//     ordersList = [
//         {
//             id: 5331,
//             name: 'Erin Gonzales',
//             avatar: 'assets/images/avatars/thumb-1.jpg',
//             date: '8 May 2019',
//             amount: 137,
//             status: 'approved',
//             checked: false
//         },
//         {
//             id: 5375,
//             name: 'Darryl Day',
//             avatar: 'assets/images/avatars/thumb-2.jpg',
//             date: '6 May 2019',
//             amount: 322,
//             status: 'approved',
//             checked: false
//         },
//         {
//             id: 5762,
//             name: 'Marshall Nichols',
//             avatar: 'assets/images/avatars/thumb-3.jpg',
//             date: '1 May 2019',
//             amount: 543,
//             status: 'approved',
//             checked: false
//         },
//         {
//             id: 5865,
//             name: 'Virgil Gonzales',
//             avatar: 'assets/images/avatars/thumb-4.jpg',
//             date: '28 April 2019',
//             amount: 876,
//             status: 'pending',
//             checked: false
//         },
//         {
//             id: 5213,
//             name: 'Nicole Wyne',
//             avatar: 'assets/images/avatars/thumb-5.jpg',
//             date: '28 April 2019',
//             amount: 241,
//             status: 'approved',
//             checked: false
//         },
//         {
//             id: 5311,
//             name: 'Riley Newman',
//             avatar: 'assets/images/avatars/thumb-6.jpg',
//             date: '19 April 2019',
//             amount: 872,
//             status: 'rejected',
//             checked: false
//         }
//     ]

//     checked = false;
//     loading = false;
//     indeterminate = false;
//     listOfData: Data[] = [];
//     listOfCurrentPageData: Data[] = [];
//     setOfCheckedId = new Set<number>();

//     updateCheckedSet(id: number, checked: boolean): void {
//         if (checked) {
//             this.setOfCheckedId.add(id);
//         } else {
//             this.setOfCheckedId.delete(id);
//         }
//     }

//     onCurrentPageDataChange(listOfCurrentPageData: Data[]): void {
//         this.listOfCurrentPageData = listOfCurrentPageData;
//         this.refreshCheckedStatus();
//     }

//     refreshCheckedStatus(): void {
//         const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
//         this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
//         this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
//     }

//     onItemChecked(id: number, checked: boolean): void {
//         this.updateCheckedSet(id, checked);
//         this.refreshCheckedStatus();
//     }

//     onAllChecked(checked: boolean): void {
//         this.listOfCurrentPageData.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
//         this.refreshCheckedStatus();
//     }

//     sendRequest(): void {
//         this.loading = true;
//         const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.id));
//         console.log(requestData);
//         setTimeout(() => {
//             this.setOfCheckedId.clear();
//             this.refreshCheckedStatus();
//             this.loading = false;
//         }, 1000);
//     }

//     ngOnInit(): void {
//         this.listOfData = new Array(100).fill(0).map((_, index) => {
//             return {
//                 id: index,
//                 name: `Edward King ${index}`,
//                 age: 32,
//                 address: `London, Park Lane no. ${index}`,
//                 disabled: index % 2 === 0
//             };
//         });
//     }
// }    