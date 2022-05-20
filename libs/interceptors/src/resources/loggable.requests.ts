import { News } from "@cnbc-monorepo/entity"

export const loggableRequests = {
	news: {
		PUT: {
			
		},
		POST: {
			add: {
				entity: News.name,
				action: 'Added new news'
			}
		}
	}
}