import express from "express";
import upload from "./config/multer.js";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/upload", upload.array("gambar"), async (req, res) => {
    return res.status(200).json({ succes: true });
});

app.delete("/delete/:nama", (req, res) => {
    const nama = req.params.nama;
    fs.unlink(`../my-react/src/assets/gambar/${nama}`, (err) => {
        console.log(err);
    });
});

const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
