import { Body, Controller, Get, Post,UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import {User} from './users.model'
import { JwtAuthGuard } from "../auth/jwt-auth-guard";
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }
  @ApiOperation({summary: 'user create to api'})
  @ApiResponse({status: 200 ,type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    const sendData = this.userService.createUser(userDto);
    return sendData;
  }
  @ApiOperation({summary: 'user all list'})
  @ApiResponse({status: 200 ,type: [User]})
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllUser()
  }
}
