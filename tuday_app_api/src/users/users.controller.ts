import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { CrearUserDTO } from './Dto/create-user.dto';
import { UsersService } from './users.service';
import { updateUserDTO } from './Dto/update-user.dto';
import { loginUserDto } from './Dto/login-user.dto';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        console.log(typeof id)
        return this.userService.getUser(id);
    }

    @Post()
    CrearUser(@Body() newUser: CrearUserDTO) {
        return this.userService.CrearUser(newUser)
    }


    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id)
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: updateUserDTO) {
        return this.userService.updateUser(id, user)
    }

    //Puede ser get

    @Get('login')
    loginUser(@Body() newUser: loginUserDto) {
        console.log(newUser)
        return this.userService.loginUser(newUser)
    }

    
}
