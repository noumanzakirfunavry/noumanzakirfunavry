import { AddQuoteRequestDto, UpdateQuoteRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Get, Post, Put, Req } from "@nestjs/common";
import { QuotesService } from "./quotes.service";


@Controller('news/api/admin/quotes')
export class QuotesController{
    constructor(private quotesService:QuotesService)
    {}   

    @Get('getAll')
    async getAllQuote(){
        return await this.quotesService.getAll()
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
