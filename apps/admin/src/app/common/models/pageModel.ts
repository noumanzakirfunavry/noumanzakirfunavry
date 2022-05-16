import { SeoModal } from "./seo.modal";

export class PageModel {
    title: string;
    content: string;
    showSideBar: boolean;
    isActive: boolean;
    // categoryIds: Array<string | number>;
    tagsIds: Array<string | number>;
    quotesIds: Array<string | number>;
    seoDetails: SeoModal;
    seoDetailId: number;


    constructor() {
        this.title = ""
        this.content = ""
        this.showSideBar = false
        this.isActive = false
        // this.categoryIds = []
        this.tagsIds = []
        this.quotesIds = []
        this.seoDetails = new SeoModal();
        this.seoDetailId = null
    }

    populateFromServerModal(serverNews: any) {
        this.title=serverNews.title
        this.content=serverNews.content
        this.showSideBar=serverNews.showSideBar
        this.isActive=serverNews.isActive
        // this.categoryIds=serverNews.categories.map(x=>x.id);
        this.tagsIds=serverNews.tags.map(x=>x.id);
        this.quotesIds=serverNews.quotes.map(x=>x.id);
        this.seoDetails=serverNews.seoDetail
        this.seoDetailId=serverNews.seoDetailId;
    }

    toServerModal(form: any, seoId?) {

        return {
            title: form.title,
            content: form.content,
            showSideBar: form.showSideBar || false,
            isActive: form.isActive || false,
            // categoryIds:form.categoryIds,
            tagsIds:form.tagsIds,
            quotesIds: form.quotesIds,

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