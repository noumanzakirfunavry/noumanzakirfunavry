export class Pagination {
    limit: number;
    pageNo: number;
    isActive?: boolean;
    search?: string;
    status?: boolean;
    title?: string;
    newsType?: string;
    publishers?: Array<any>;
    publishedBy?: number;
    categoryId?: number;
    date?: any;

    constructor() {
        this.limit= 10;
        this.pageNo= 1;
    }
}