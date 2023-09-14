# ibana Coding Challenge

Welcome to the ibana coding challenge. This repository should be forked and be used as a starting point to the coding challenge.

Our goal is to hire someone that contributes to building apps in a productive and output driven way. We want to work by the principle of KISS - keep it stupid, simple. We think solutions designed to solve a problem in a direct manner are better than complex structures.

The goal of the challenge is to show your coding and product skills:

- Build intuitive user experiences.
- Use frameworks like NestJS, Vue3 and Typescript to build full-stack apps.
- Show you can work on your own with high-level requirements to create a working product.

The tutorial should also give you an insight into our tech stack:
- Frontend Framework: Vue3 with Typescript
- Frontend Styling: TailwindCSS
- Backend Framework: NestJS
- Database ORM: TypeORM
- Database: PostegreSQL

## Starting Point

To get started:
1. Navigate to the root folder of this repostiory in your terminal
2. Make sure you have Docker and docker-compose installed. 
3. Run ``npm install``
4. Run ``docker compose up -d`` to create the docker containers with the database
- _(optional)_ If the database creation was not successful make sure you have execution rights on the docker script: ``chmod +x .docker/db-postgresql/files/postgre-initialize.sh``
- The database runs at localhost port ``5430`` Username: ``user`` Password: ``secret`` DB-Name: ``ibana-challenge``
6. Start the API and frontend application by running ``npm run start``
- The frontend is served at http://localhost:42069
- The API is served at http://localhost:3000/api/
- Checkout the swagger API documentation at http://localhost:3000/api/internal/docs/
7. The frontend application is located at ``apps/frontend``
8. The backend API application is located at ``apps/api``
9. The database schema is defined at ``libs/backend-interfaces/src/entity-typeorm``

## Goal of the Challenge
The goal of the challenge is to build a simple giphy clone. Your application should accomplish the following tasks:
- Show the trending GIFs on the Overview page. Make sure it is paginated.
- Create a search input to let your users search for a specific GIF.
- Search inputs should be stored in our database to use for further data analysis. Make sure to store useful information.
- Make sure to have a usable interface. It does not have to be fancy but you'll get bonus points for an intuitive UI/UX.
- Feel free to add something special.

### Giphy setup
To access the giphy API do the following: 
1. Create an account at https://developers.giphy.com/
2. Create a new application and choose the API mode

Giphy Documentation: https://developers.giphy.com/docs/api/endpoint/#trending


## Further Info

### Database Migrations
If you change the database schema run the following to migrate your database:

```bash
npm run db:migration:generate
npm run db:migration:run
```

### Documentation on frameworks:
1. Vue3: https://vuejs.org/
2. NestJS: https://docs.nestjs.com/
3. TypeORM: https://typeorm.io/
4. TailwindCSS: https://tailwindcss.com/docs/installation
5. Typescript: https://www.typescriptlang.org/docs/
