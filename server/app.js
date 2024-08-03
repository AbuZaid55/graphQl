import express from 'express'
import cors from 'cors'
import { errorMiddleware } from './middlewares/error.js'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server'
import {expressMiddleware} from '@apollo/server/express4'
import { connectToDb } from './lib/db.js'
import {schema} from './graphql/schema.js'
import {resolvers} from './graphql/resolvers.js'

dotenv.config({ path: './.env', });
connectToDb()

export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs:schema,
  resolvers:resolvers
})


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ' http://localhost:5173 ', credentials: true }));
app.use(morgan('dev'))

await server.start()


app.get('/', (req, res) => {
  res.status(202).json({success:true,message:"Server is running..."});
});
app.use('/graphql',expressMiddleware(server))


app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Page not found'
  });
});

app.use(errorMiddleware);


app.listen(port, () => console.log('Server is working on Port:' + port + ' in ' + envMode + ' Mode.'));