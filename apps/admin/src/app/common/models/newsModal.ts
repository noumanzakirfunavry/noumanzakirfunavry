import { SeoModal } from "src/app/common/models/seo.modal";

export class NewsModal {
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
        this.seoDetails = new SeoModal()
    }

    toServerModal(form: any) {

        return {
            title: form.title,
            content: form.content,
            isPro: form.isPro,
            visible: form.visible || true,
            contentType: form.contentType || 'TEXT',
            authorName: form.authorName || 'CNBC News',
            newsType: form.newsType || 'NEWS',
            showOnHomepage: form.showOnHomepage || false,
            isActive: form.isActive,
            // this.categoryIds=form.categoryIds;
            categoryIds : [1],
            // this.tagsIds=form.tagsIds;
           tagsIds : [1],
            // this.quotesIds=form.quotesIds;

           seoDetails : {
                title: form.seoTitle,
                description: form.description,
                keywords: form.keywords,
                slugLine: form.slugLine
            }
        }
    }
}