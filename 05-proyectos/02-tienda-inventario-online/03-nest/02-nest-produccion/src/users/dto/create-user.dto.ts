export class CreateUserDto {
  id: number;
  username: string;
  userpass: string;
  role: string;
  state: number;
  createdAt: Date;
  updatedAt: Date;
}
