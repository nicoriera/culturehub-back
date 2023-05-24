"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
async function seed() {
    const prisma = new client_1.PrismaClient();
    try {
        const types = [];
        for (const typeName of [
            'Actualités',
            'Tutoriels',
            'Critiques',
            'Musique',
            'Cinéma',
            'Jeux Vidéos',
            'Livres',
            'Séries',
            'Manga',
            'Anime',
            'Technologies',
            'Autres',
        ]) {
            const type = await prisma.type.create({
                data: {
                    name: typeName,
                },
            });
            types.push(type);
        }
        const article1 = await prisma.article.upsert({
            where: { title: 'Prisma Ajoute le Support pour MongoDB' },
            update: {},
            create: {
                title: 'Prisma Ajoute le Support pour MongoDB',
                body: "Le support pour MongoDB a été l'une des fonctionnalités les plus demandées depuis la première version de...",
                description: 'Nous sommes heureux de partager que la dernière version de Prisma ORM ajoute un support stable pour MongoDB !',
                published: false,
                author: 'Alice',
                typeId: types[0].id,
            },
        });
        const article2 = await prisma.article.upsert({
            where: { title: 'Quoi de Neuf dans Prisma ? (T1/22)' },
            update: {},
            create: {
                title: 'Quoi de Neuf dans Prisma ? (T1/22)',
                body: 'Nos ingénieurs ont travaillé dur, publiant de nouvelles versions avec de nombreuses améliorations...',
                description: "Découvrez tout ce qui s'est passé dans l'écosystème et la communauté Prisma de janvier à mars 2022.",
                published: true,
                author: 'Bob',
                typeId: types[1].id,
            },
        });
        console.log({ article1, article2 });
    }
    catch (error) {
        console.error("Erreur lors de l'ajout des données à la base de données :", error);
    }
    finally {
        await prisma.$disconnect();
    }
}
seed().catch((error) => {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map