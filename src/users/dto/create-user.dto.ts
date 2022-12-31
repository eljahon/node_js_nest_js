import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'test@gmail.com', description: 'email'})
  readonly email: string;
  @ApiProperty({example: '123456789', description: 'password'})
  readonly password: string
}