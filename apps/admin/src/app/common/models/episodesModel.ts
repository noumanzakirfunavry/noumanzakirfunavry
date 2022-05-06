import { SeoModal } from "./seo.modal";

export class EpisodesModel {
    title: string;
    programId: number;
    description: string;
    isActive: boolean;
    seoDetails: SeoModal;
    seoDetailId: number;

    videoId : number
    thumbnailFile:File;
    thumbnailId : number;
    thumbanailUrl:string;
    mainFile: any;
    videoUrl:string;
    thumbnailUrl:string;

    constructor() {
        this.title = ""
        this.programId= null
        this.description = ""
        this.isActive = false
        this.seoDetails = new SeoModal();
        this.seoDetailId = null
    }

    populateFromServerModal(serverPrograms: any) {
        this.title=serverPrograms.title
        this.programId=serverPrograms.programId
        this.description=serverPrograms.description
        this.isActive=serverPrograms.isActive
        this.seoDetails=serverPrograms.seoDetail
        this.seoDetailId=serverPrograms.seoDetailId;

        this.videoId=serverPrograms.videoId || null;
        this.thumbnailId=serverPrograms.thumbnailId || null;

        this.videoUrl=serverPrograms.video ? serverPrograms.video?.url:null;
        this.thumbnailUrl=serverPrograms.thumbnail ? serverPrograms.thumbnail?.url:null;
    }

    toServerModal(form: any, seoId?) {

        return {
            airedOn: form.airedOn,
            title: form.title,
            programId: form.programId,
            description: form.description,
            isActive: form.isActive || false,
            videoId:this.videoId,
            // ...(this.videoId ? {videoId:this.videoId}:null),
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