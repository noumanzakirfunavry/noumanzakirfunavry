import { environment } from "../../../environments/environment";
import { SeoModal } from "../../common/models/seo.modal";

export class NewsModel {
    title: string;
    content: string;
    isPro: boolean;
    visible: boolean;
    contentType: string;
    authorName: string;
    newsType: "ARTICLE" | "NEWS";
    showOnHomepage: boolean;
    isActive: boolean;
    categoryIds: Array<string | number>;
    tagsIds: Array<string | number>;
    quotesIds: Array<string | number>;
    seoDetails: SeoModal;
    seoDetailId: number;

    videoId : number
    thumbnailId : number;
    thumbnailFile: File;
    imageId : number
    mainFile: any;
    fileUrl: string;
    videoUrl: string;
    thumbnailUrl: string;
    id?:number | string;

    constructor() {
        this.title = ""
        this.content = ""
        this.isPro = false
        this.visible = false
        this.contentType = ""
        this.authorName = ""
        this.newsType = "NEWS"
        this.showOnHomepage = false
        this.isActive = false
        this.categoryIds = []
        this.tagsIds = []
        this.quotesIds = []
        this.seoDetails = new SeoModal();
        this.seoDetailId = null
    }

    populateFromServerModal(serverNews: any) {
        this.title=serverNews.title
        this.content=serverNews.content
        this.isPro=serverNews.isPro
        this.visible=serverNews.visible
        this.contentType=serverNews.contentType
        this.authorName=serverNews.authorName
        this.newsType=serverNews.newsType
        this.showOnHomepage=serverNews.showOnHomepage
        this.isActive=serverNews.isActive
        this.categoryIds=serverNews?.categories.map(x=>x.id);
        this.tagsIds=serverNews?.tags.map(x=>x.id);
        this.quotesIds=serverNews?.quotes ? serverNews?.quotes.map(x=>x.quoteTickerId):[];
        this.seoDetails=serverNews?.seoDetail
        this.seoDetailId=serverNews?.seoDetailId;

        this.videoId=serverNews.videoId || null;
        this.imageId=serverNews.imageId || null;
        this.thumbnailId=serverNews.thumbnailId || null;

        this.fileUrl=serverNews.image  ? environment.fileUrl + serverNews.image?.path:null;
        this.videoUrl=serverNews.video ? environment.fileUrl +  serverNews.video?.path:null;
        this.thumbnailUrl=serverNews.thumbnail ? environment.fileUrl +  serverNews.thumbnail?.path:null;
        // this.fileUrl=serverNews.image  ? serverNews.image?.url:null;
        // this.videoUrl=serverNews.video ? serverNews.video?.url:null;
        // this.thumbnailUrl=serverNews.thumbnail ? serverNews.thumbnail?.url:null;
        this.id=serverNews.id || null;
    }

    toServerModal(form: any, seoId?) {

        return {
            title: form.title,
            content: form.content,
            isPro: form.isPro || false,
            visible: form.visible || true,
            contentType: form.contentType || 'TEXT',
            authorName: form.authorName || 'CNBC News',
            newsType: form.newsType || 'NEWS',
            showOnHomepage: form.showOnHomepage || false,
            isActive: form.isActive || false,
            categoryIds:form.categoryIds,
            // categoryIds: [1],
            tagsIds:form.tagsIds,
            // tagsIds: [1],
            quotesIds: form.quotesIds,
            quotes:form.quotes,
            // imageId:this.imageId,
            ...(this.imageId ? {imageId:this.imageId}:null),
            ...(this.videoId ? {videoId:this.videoId}:null),
            ...(this.thumbnailId ? {thumbnailId:this.thumbnailId}:null),
            seoDetails: {
                title: form.seoTitle,
                description: form.description,
                keywords: form.keywords,
                slugLine: form.slugLine,
                ...(seoId ? { id: seoId } : null)
            }
        }
    }
}