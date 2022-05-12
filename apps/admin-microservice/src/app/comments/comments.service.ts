import { AddCommentRequestDto, GenericResponseDto } from '@cnbc-monorepo/dtos';
import { Comments } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
	constructor(@Inject('COMMENTS_REPOSITORY') private commentsRepository: typeof Comments) { }

	async getAllComments() {
		const res = await this.commentsRepository.findAndCountAll();
		if (res.count === 0) {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			)
		}

		return new GenericResponseDto(HttpStatus.OK, 'Request Successful', { comments: res.rows, totalCount: res.count })
	}

	async getCommentById(id: number) {
		const comment = await this.commentsRepository.findOne({ where: { id } });
		if (!comment) {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			)
		}

		return new GenericResponseDto(HttpStatus.OK, 'Request Successful', { comment })
	}

	async addComment(addCommentDto: AddCommentRequestDto, userObject) {
		const comment = await this.commentsRepository.create({ ...addCommentDto, userId: userObject.data.id, sessionId: userObject.sessionId });
		console.log("🚀 ~ file: comments.service.ts ~ line 36 ~ CommentsService ~ addComment ~ comment", comment)

		return new GenericResponseDto(HttpStatus.CREATED, 'Created Successfully', { comment })
	}


	// async deleteComment(id: number) {
	// 	const deleteResult = await this.commentsRepository.destroy({ where: { id } })

	// 	if (!deleteResult) {
	// 		throw new CustomException(
	// 			Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
	// 			Exceptions[ExceptionType.RECORD_NOT_FOUND].status
	// 		)
	// 	}

	// 	return new GenericResponseDto(HttpStatus.OK, `Comment with id: ${id} has been deleted successfully`)
	// }

}
