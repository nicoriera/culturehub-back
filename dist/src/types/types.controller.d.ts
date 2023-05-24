import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type-dto';
export declare class TypesController {
    private readonly typesService;
    constructor(typesService: TypesService);
    create(createTypeDto: CreateTypeDto): import(".prisma/client").Prisma.Prisma__TypeClient<import(".prisma/client").Type, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Type[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TypeClient<import(".prisma/client").Type, never>;
    update(id: string, updateTypeDto: UpdateTypeDto): import(".prisma/client").Prisma.Prisma__TypeClient<import(".prisma/client").Type, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TypeClient<import(".prisma/client").Type, never>;
}
