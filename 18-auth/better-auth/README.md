npm install prisma @types/node --save-dev
npm install @prisma/client @prisma/adapter-pg dotenv
npx prisma init --output ../generated/prisma
neon datbase setup
generate model
model User {
id Int @id @default(autoincrement())
email String @unique
name String?
posts Post[]
}

npx prisma generate (generate prisam client)

npx prisma migrate reset (reset database tables)
npx prisma migrate dev --name user-created (migrate table to db)
npx prisma generate

//better-auth
