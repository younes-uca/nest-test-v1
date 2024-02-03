import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produit } from "src/app/controller/bean/core/commun/Produit";
import { ProduitDao } from "src/app/controller/dao/facade/core/commun/ProduitDao";
import { ProduitConverter } from "src/app/controller/converter/commun/ProduitConverter";
import { ProduitAdminRest } from "src/app/module/admin/ws/commun/ProduitAdminRest";
import { ProduitAdminServiceImpl } from "src/app/module/admin/service/commun/ProduitAdminServiceImpl";

@Module({
    imports: [TypeOrmModule.forFeature([  Produit , ])],
    controllers: [ ProduitAdminRest ,  ],
    providers: [  ProduitAdminServiceImpl ,   ProduitDao , ProduitConverter ,
                  ],
})
export class AdminModule {}
