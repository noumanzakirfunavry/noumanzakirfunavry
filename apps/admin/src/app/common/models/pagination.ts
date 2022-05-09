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
    publisher?: number;
    branchId?: Array<any>;
    publishedBy?: number;
    categoryId?: number;
    date?: any;
    includeNews?: any; 
    newsLImit?: any;
    position?: string;
    programId?: number

    constructor() {
        this.limit= 10;
        this.pageNo= 1;
    }
}