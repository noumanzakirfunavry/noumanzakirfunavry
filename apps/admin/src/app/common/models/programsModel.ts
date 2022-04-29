import { SeoModal } from "./seo.modal";

export class ProgramsModel {
    title: string;
    content: string;
    isActive: boolean;
    seoDetails: SeoModal;
    seoDetailId: number;

    promoId : number
    thumbnailFile:File;
    thumbnailId : number;
    thumbanailUrl:string;
    mainFile: any;
    videoUrl:string;
    thumbnailUrl:string;

    constructor() {
        this.title = ""
        this.content = ""
        this.isActive = false
        this.seoDetails = new SeoModal();
        this.seoDetailId = null
    }

    populateFromServerModal(serverPrograms: any) {
        this.title=serverPrograms.title
        this.content=serverPrograms.content
        this.isActive=serverPrograms.isActive
        this.seoDetails=serverPrograms.seoDetail
        this.seoDetailId=serverPrograms.seoDetailId;

        this.promoId=serverPrograms.promoId || null;
        this.thumbnailId=serverPrograms.thumbnailId || null;

        this.videoUrl=serverPrograms.video ? serverPrograms.video?.url:null;
        this.thumbnailUrl=serverPrograms.thumbnail ? serverPrograms.thumbnail?.url:null;
    }

    toServerModal(form: any, seoId?) {

        return {
            firstAiredOn: form.firstAiredOn,
            title: form.title,
            description: form.description,
            orders: form.orders,
            producedBy: form.producedBy,
            isActive: form.isActive || false,
            promoId:this.promoId,
            // ...(this.promoId ? {promoId:this.promoId}:null),
            ...(this.thumbnailId ? {thumbnailId:this.thumbnailId}:null),
            seoDetails: {
                title: form.seoTitle,
                description: form.seoDescription,
                keywords: form.keywords,
                slugLine: form.slugLine,
                ...(seoId ? { id: seoId } : null)
            }
        }
    }
}