export class SnakbarModel{
    isOpen?:boolean;
    data?:any;
    id?:string;
    case ='';
    message?:string;
    type?:string;
    user?:any;
    local?:boolean;
    uniqueId?:string;

    constructor(){
        this.isOpen=false;
    }
}