import { Pages } from "@cnbc-monorepo/entity"

export class GetPageResponseDto {
	statusCode: number
	message: string
	data?: Pages
	constructor(statusCode: number, message: string, page?: Pages) {
		this.statusCode = statusCode
		this.message = message
		if (page) {
			this.data = page
		}
	}
}