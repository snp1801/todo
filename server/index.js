import express from "express";
import cors from 'cors';
import Connection from "./database/db.js";
import route from "./routes/routes.js";

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/', route);

Connection();

app.listen(8000, () => console.log("Server is running"))