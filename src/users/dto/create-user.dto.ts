import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ADMIN', 'SENIOR', 'JUNIOR'], {
    message:
      'Invalid role. Must be one of the following: INTERN, ADMIN, SENIOR, JUNIOR',
  })
  role: 'INTERN' | 'ADMIN' | 'SENIOR' | 'JUNIOR';
}
