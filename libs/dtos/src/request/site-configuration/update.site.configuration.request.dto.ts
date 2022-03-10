import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class UpdateSiteConfiguration {
    @IsNumber()
    @IsNotEmpty()
    trendingNewsCount: number

    @IsNumber()
    @IsNotEmpty()
    quickLinksCount: number

    @IsNumber()
    @IsNotEmpty()
    featuredNewsCount: number

    @IsNumber()
    @IsNotEmpty()
    editorsChoiceCount: number

    @IsNotEmpty()
    @IsEmail()
    cnbcEmail : string

    @IsNotEmpty()
    @IsEmail()
    hrEmail : string

    @IsNotEmpty()
    @IsEmail()
    departmentEmail : string

}