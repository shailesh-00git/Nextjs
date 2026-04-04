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
npx prisma migrate reset (reset database tables)
npx prisma migrate dev --name user-created
npx generate prisma
