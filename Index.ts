import express, {Request, Response} from 'express';
import activityLogger from './middlewares/activityLogger';
import InMemoryDB from './utils/InMemoryDB';
import usersRoute from './routes/usersRoute';
import postsRoute from './routes/postsRoute';

const app = express();
app.use(express.json());
app.use(activityLogger);
const port = 3000;
const db = InMemoryDB.getInstance();

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })