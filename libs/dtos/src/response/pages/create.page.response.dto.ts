import { Pages } from "@cnbc-monorepo/entity"

export class CreatePageResponseDto {
	statusCode: number
	message: string
	data: Pages
	constructor(statusCode: number, message: string, page: Pages) {
		this.statusCode = statusCode
		this.message = message
		this.data = page
	}
}