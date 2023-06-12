import mongoose from "mongoose";
import { Contact } from "../model/contactModel.js";
import "dotenv/config.js";

mongoose.connect(process.env.DB);

// Kontakt NEU anlegen

// const user = new Contact();
// user.name = "Lemon Ade";
// user.email = "lemon@tree.com";
// await user.save();

await Contact.create({
    name: "Lara Laus",
    email: "lara@laus.com",
    phone: "+3973873988"
})

console.log("New contact created");



mongoose.disconnect();