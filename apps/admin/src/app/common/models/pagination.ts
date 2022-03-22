export class Pagination {
    limit: number;
    pageNo: number;
    status?: boolean;

    constructor() {
        this.limit= 10;
        this.pageNo= 1;
    }
}