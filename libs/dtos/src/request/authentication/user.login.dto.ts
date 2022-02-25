import { IsString, IsNotEmpty, IsUUID, IsEnum } from 'class-validator';
import {DeviceTypes} from '@cnbc-monorepo/enums'
export class UserLoginDto{
    
    @IsString()
    @IsNotEmpty()
    userName : string

    @IsString()
    @IsNotEmpty()
    password : string

    @IsUUID()
    @IsNotEmpty()
    deviceId : string

    @IsEnum(DeviceTypes)
    @IsNotEmpty()
    deviceType : DeviceTypes

    
}