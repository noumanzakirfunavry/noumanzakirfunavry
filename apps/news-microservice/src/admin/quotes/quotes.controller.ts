import { AddQuoteRequestDto, GetAllQuotesRequestDto, UpdateQuoteRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Get, Post, Put, Query, Req } from "@nestjs/common";
import { QuotesService } from "./quotes.service";


@Controller('news/api/admin/quotes')
export class QuotesController{
    constructor(private quotesService:QuotesService)
    {}   

    @Get('getAll')
    async getAllQuote(@Query() query:GetAllQuotesRequestDto){
        return await this.quotesService.getAll(query)
    }
    @Post('add')
    async addQuote(@Body() body:AddQuoteRequestDto){
        return await this.quotesService.addQuote(body)
    }

    @Put('update')
    async updateQuote(@Body() body:UpdateQuoteRequestDto){
        return await this.quotesService.updateQuote(body)
    }


}
