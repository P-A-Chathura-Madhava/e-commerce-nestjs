import { Role } from "src/enums/role.enum";

export class CreateUserDto {
    username: string;
    password: string;
    roles: Role;
}
