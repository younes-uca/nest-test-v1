import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {Produit} from "src/app/controller/bean/core/commun/Produit";
import { User } from "../app/module/auth/bean/User";
import { Role } from "../app/module/auth/bean/Role";

const  databaseProperties : TypeOrmModuleOptions =    {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password:'',
    database: 'nest-purchase-v3',
    synchronize:true,
    entities: [  Produit ,  User, Role],

};
export  default databaseProperties;
