import { Public } from "@cnbc-monorepo/auth-module";
import { AddQuoteRequestDto, GetAllQuotesRequestDto, UpdateQuoteRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
import { QuotesService } from "./quotes.service";


@Controller('news/api/admin/quotes')
export class QuotesController{
    constructor(private quotesService:QuotesService)
    {}   

    @Public()
    @Get('getAll')
    async getAllQuote(@Query() query:GetAllQuotesRequestDto){
        return await this.quotesService.getAll(query)
    }
    @Public()
    @Post('add')
    async addQuote(@Body() body:AddQuoteRequestDto){
        return await this.quotesService.addQuote(body)
    }

    @Public()
    @Put('update/:id')
    async updateQuote(@Param('id') id:number,@Body() body:UpdateQuoteRequestDto){
        return await this.quotesService.updateQuote(id,body)
    }


}
