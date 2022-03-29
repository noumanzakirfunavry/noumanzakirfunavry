export class Pagination {
    limit: number;
    pageNo: number;
    isActive?: boolean;
    search?: string;

    constructor() {
        this.limit= 10;
        this.pageNo= 1;
    }
}