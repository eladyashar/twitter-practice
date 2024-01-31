import express from 'express';
import activityLogger from './middlewares/activityLogger';
import authRoute from './routes/authRoute'
import usersRoute from './routes/usersRoute';
import postsRoute from './routes/postsRoute';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());

app.use(activityLogger);
app.use(express.json());
const port = process.env.PORT || 3000;


app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })