import { IsArray, IsOptional, ArrayMinSize, IsString, IsNotEmpty } from 'class-validator';

export class SearchNewsRequestDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  tags: string[];

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  quotes: string[];

	@IsOptional()
  @IsString()
  @IsNotEmpty()
	//  if provided, default term will be used to search entire news entity
  default: string;

}
