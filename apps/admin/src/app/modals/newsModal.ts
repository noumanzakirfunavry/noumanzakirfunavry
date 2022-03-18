import { SeoModal } from "src/app/modals/seo.modal";

export class NewsModal{
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

    toServerModal(form:any){
        this.title=form.title;
        this.content=form.content;
        this.isPro=form.isPro;
        this.visible=form.visible;
        this.contentType=form.contentType;
        this.authorName=form.authorName;
        this.newsType=form.newsType;
        this.showOnHomepage=form.showOnHomepage;
        this.isActive=form.isActive;
        this.categoryIds=form.categoryIds;
        this.tagsIds=form.tagsIds;
        this.quotesIds=form.quotesIds;
        this.seoDetails={
            title:form.seoTitle,
            description:form.description,
            keywords:form.keywords,
            slugLine:form.slugLine
        }
    }
}