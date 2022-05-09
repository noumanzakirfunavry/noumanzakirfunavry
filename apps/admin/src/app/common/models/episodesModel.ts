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

    populateFromServerModal(serverEpisodes: any) {
        this.title=serverEpisodes.title
        this.programId=serverEpisodes.programId
        this.description=serverEpisodes.description
        this.isActive=serverEpisodes.isActive
        this.seoDetails=serverEpisodes.seoDetail
        this.seoDetailId=serverEpisodes.seoDetailId;

        this.videoId=serverEpisodes.videoId || null;
        this.thumbnailId=serverEpisodes.thumbnailId || null;

        this.videoUrl=serverEpisodes.video ? serverEpisodes.video?.url:null;
        this.thumbnailUrl=serverEpisodes.thumbnail ? serverEpisodes.thumbnail?.url:null;
    }

    toServerModal(form: any, seoId?) {

        return {
            airedOn: form.airedOn,
            title: form.title,
            programId: form.programId,
            description: form.description,
            isActive: form.isActive || false,
            videoId:this.videoId,
            ...(this.videoId ? {videoId:this.videoId}:null),
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