import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        // what is the required role?
        const requiredRoles = this.reflector.getAllAndOverride<string>('role', [
            context.getHandler(),
            context.getClass()
        ]);

        // check if the roles required for a function
        if (!requiredRoles) {
            return true;
        }

        // does the current user making the request have those required role(s)?

        // get the user from the context
        const {user} = context.switchToHttp().getRequest();  // this is the way when there is authentication

        // dummy admin
        // const user: User = {
        //     name: "Kasun",
        //     roles: [Role.ADMIN]
        // }

        // dummy user
        // const user: User = {
        //     name: "Kasun",
        //     roles: [Role.USER]
        // }

        // if user have access return true otherwise return false
        // return requiredRoles.some(role => user.roles.includes(role));
        // console.log('required role : ', requiredRoles);        
        // console.log('actual role : ', user);
        // console.log(requiredRoles === user.role);
            
        return (requiredRoles === user.role);
    }
}