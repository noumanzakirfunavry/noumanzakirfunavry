import { IsBoolean, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class UpdateGoogleAnalyticsRequestDto{
    @IsBoolean()
    @IsNotEmpty()
    enableAnalytics: boolean

    @IsUrl()
    @IsNotEmpty()
    googleEmbeddedLink : string

    @IsString()
    @IsNotEmpty()
    googleSecretkey : string

    @IsString()
    @IsNotEmpty()
    googleSiteKey : string


}