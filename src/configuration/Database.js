import {PrismaClient} from '../../generated/prisma/index.js'
export const prismaClient = new PrismaClient ({
  log: [
    {emit: 'event', level: 'query'},
    {emit: 'event', level: 'info'},
    {emit: 'event', level: 'warn'},
    {emit: 'event', level: 'error'},
  ],
})

prismaClient.$on('query', (e) => {
  console.log('Query: ' + e.query)
});
prismaClient.$on('query', (e) => {
  console.log('Query: ' + e.query);
});
prismaClient.$on('query', (e) => {
  console.log('Query: ' + e.query);
});
prismaClient.$on('query', (e) => {
  console.log('Query: ' + e.query);
});
prismaClient.$on('query', (e) => {
  console.log('Query: ' + e.query);
});