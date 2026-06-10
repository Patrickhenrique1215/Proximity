import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes";
import photoRoutes from "./routes/photoRoutes";
import preferenceRoutes from "./routes/preferenceRoutes";
import messageRoutes from "./routes/messageRoutes";
import likeRoutes from "./routes/likeRoutes";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use("/photos", photoRoutes);

app.use("/preferences", preferenceRoutes);

app.use("/messages", messageRoutes);

app.use("/likes", likeRoutes);

app.listen(3000, () => {
    console.log("Servidor iniciado.");
});