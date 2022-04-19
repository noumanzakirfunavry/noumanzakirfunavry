import { Pages } from "@cnbc-monorepo/entity"

export class GetAllPagesResponseDto {
	statusCode: number
	message: string
	data?: Pages[]
	constructor(statusCode: number, message: string, pages?: Pages[]) {
		this.statusCode = statusCode
		this.message = message
		if (pages) {
			this.data = pages
		}
	}
}