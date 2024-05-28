import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    //CREATE USER

    const user = await prisma.user.create({
        data: {
            name: "Harish", 
            email: "Harish@gmail.com"
        }
    })


}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })

