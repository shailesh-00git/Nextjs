npm install prisma
npm install @prisma/client @prisma/adapter-pg dotenv
npx prisma init --datasource-provider mongodb --output ../generated/prisma
npx prisma db push

#betterauth
npm install better-auth
npm install @better-auth/mongo-adapter
npx auth@latest generate