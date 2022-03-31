import {
	IsArray,
	IsNotEmpty
} from 'class-validator';

export class DeleteMenuRequestDto {
  @IsArray()
  @IsNotEmpty({
    each: true,
  })
  id: number[];
}
