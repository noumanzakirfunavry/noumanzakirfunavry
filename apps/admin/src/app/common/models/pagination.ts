export class Pagination {
    limit: number;
    pageNo: number;
    isActive?: boolean;
    search?: string;
    status?: boolean;
    title?: string;
    name?: string;
    newsType?: string;
    publishers?: Array<any>;
    branchId?: Array<any>;
    publishedBy?: number;
    categoryId?: number;
    date?: any;
    includeNews?: any; 
    newsLImit?: any;

    constructor() {
        this.limit= 10;
        this.pageNo= 1;
    }
}