import { Controller, Get, Request, Post, UseGuards, Inject } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RolesGuard } from './users/roles.guard';
import { Roles } from './users/roles.decorator';
import { PublicPrismaService } from './prisma/public-prisma.service';
import { TENANT_PRISMA_SERVICE, TenantPrismaService } from './prisma/tenant-prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PublicPrismaService,
    @Inject(TENANT_PRISMA_SERVICE)
    private readonly tenantPrisma: TenantPrismaService
  ) {}

  @Get("/alltenants")
  async getAllTenants() {
    const tenant = await this.prisma.tenant.findMany();
    return {tenant};
  }

  @Get("/users")
  async getAllUsers() {
    const users = await this.prisma.tenant.findMany();
    return {users};
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('test1')
  testOne() {
    return 'Test One';
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get('test2')
  testTwo() {
    return 'Test Two';
  }
}