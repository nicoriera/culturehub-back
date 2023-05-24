import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type-dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TypesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTypeDto: CreateTypeDto): import(".prisma/client").Prisma.Prisma__TypeClient<import(".prisma/client").Type, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Type[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TypeClient<import(".prisma/client").Type, never>;
    update(id: number, updateTypeDto: UpdateTypeDto): import(".prisma/client").Prisma.Prisma__TypeClient<import(".prisma/client").Type, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TypeClient<import(".prisma/client").Type, never>;
}
