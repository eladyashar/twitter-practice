import express from 'express';
import activityLogger from './middlewares/activityLogger';
import usersRoute from './routes/usersRoute';
import postsRoute from './routes/postsRoute';

const app = express();
app.use(express.json());
app.use(activityLogger);
const port = 3000;

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })