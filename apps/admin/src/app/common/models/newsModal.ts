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
    thumbnailId : number
    imageId : number
    mainFile: any;
    fileUrl:string;
    thumbnailUrl:string;

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
        this.categoryIds=serverNews.categories.map(x=>x.id);
        this.tagsIds=serverNews.tags.map(x=>x.id);
        this.quotesIds=serverNews.quotes.map(x=>x.id);
        this.seoDetails=serverNews.seoDetail
        this.seoDetailId=serverNews.seoDetailId;
        this.fileUrl=environment.fileUrl+serverNews.image?.path;
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
            imageId:this.imageId,

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