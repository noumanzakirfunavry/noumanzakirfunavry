import { ArrayNotEmpty, IsArray, IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateAdminRequestDto {
	@IsString()
	@IsNotEmpty()
	name: string

	@IsNumber()
	@IsNotEmpty()
	rolesId: number

	@IsString()
	@IsNotEmpty()
	userName: string

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	password: string

	@IsEmail()
	@IsNotEmpty()
	email: string

	@IsBoolean()
	@IsNotEmpty()
	isActive: boolean

	@IsArray()
	@ArrayNotEmpty()
	rights = []
}