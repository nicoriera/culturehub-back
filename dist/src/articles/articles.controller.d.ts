import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Article[]>;
    findAllUnpublished(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Article[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    findByType(typeId: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Article[]>;
    update(id: string, updateArticleDto: UpdateArticleDto): Promise<import(".prisma/client").Article>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
}
