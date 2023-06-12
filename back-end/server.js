import express from "express";
import mongoose from "mongoose";
import { Contact } from "./model/contactModel.js";
import "dotenv/config.js";

mongoose.connect(process.env.DB);

const PORT = process.env.PORT || "3008";
const app = express();

app.use(express.json());

app.get("/contact", async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts)
});

app.post("/contact", async (req, res) => {
    try {
        const newContact = await Contact.create(req.body);
        res.send({ newEntry: newContact, errors: null })
    } catch (error) {
        res.send({ newEntry: null, errors: error.errors })
    }
})

app.listen(PORT, () => {
    console.log("Server runs on PORT:", PORT);
})

