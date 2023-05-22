import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false })
  author?: string;

  @ApiProperty({ required: false })
  image?: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;

  @ApiProperty({ default: 1 })
  typeId: number;
}
