import {forwardRef, Inject, Injectable} from "@nestjs/common";
import {AbstractConverter} from "src/app/zynerator/converter/AbstractConverter";

import {Achat} from "src/app/controller/bean/core/achat/Achat";
import {AchatDto} from "src/app/controller/dto/achat/AchatDto";

import {AchatItemConverter} from "src/app/controller/converter/achat/AchatItemConverter";
import {ClientConverter} from "src/app/controller/converter/commun/ClientConverter";
import {ProduitConverter} from "src/app/controller/converter/commun/ProduitConverter";

@Injectable()
export class AchatConverter extends AbstractConverter<Achat, AchatDto> {

    client: boolean;
    achatItems: boolean;

    constructor(
        @Inject(forwardRef(() => AchatItemConverter)) readonly achatItemConverter: AchatItemConverter,
        @Inject(forwardRef(() => ClientConverter)) readonly clientConverter: ClientConverter,
        @Inject(forwardRef(() => ProduitConverter)) readonly produitConverter: ProduitConverter,
        ) {
            super();
            this.init(true);
    }

    toItem(dto: AchatDto): Achat {
        if (!dto) {
            return null;
        }
        const item =new Achat();
        if (dto.id) {
            item.id = dto.id;
        }
        if (dto.reference) {
            item.reference = dto.reference;
        }
        if (dto.dateAchat) {
            item.dateAchat = dto.dateAchat;
        }
        if (dto.total) {
            item.total = dto.total;
        }
        if (dto.tota