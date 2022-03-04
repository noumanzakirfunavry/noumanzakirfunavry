export class GenericResponseDto {
    statusCode;
    message;
    response
    constructor(
        statusCode,
        message,
        response?) {
        this.statusCode = statusCode
        this.message = message
        if (response) {
            this.response = response
        }
    }
}