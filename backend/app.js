import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";


const app  = express();
app.use(cors());

app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);

mongoose.connect('mongodb+srv://admin:RX5YEwikOqsQh4fL@cluster0.blxayut.mongodb.net/Blog?retryWrites=true&w=majority')
.then(() => app.listen(5000))
.then(() => 
    console.log("Connected to database and listening to localhost 5000")
    )
    .catch((err) => console.log(err));
