import mongoose, { Schema } from "mongoose";
// const mongooseIntlPhoneNumber = require('mongoose-intl-phone-number').mongooseIntlPhoneNumber;



const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Mail is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
    }

    // phone: {

    //     type: Number,
    // }

})

// contactSchema.plugin(mongooseIntlPhoneNumber, {
//     hook: 'validate',
//     phoneNumberField: 'phoneNumber',
//     nationalFormatField: 'nationalFormat',
//     internationalFormat: 'internationalFormat',
//     countryCodeField: 'countryCode',
// });

// contactSchema.plugin(mongooseIntlPhoneNumber, {
//     hook: 'validate',
//     phoneNumberField: 'phoneNumber',
//     nationalFormatField: 'nationalFormat',
//     internationalFormatField: 'internationalFormat',
//     countryCodeField: 'countryCode',
// });

// module.exports = mongoose.model("Contact", contactSchema);


export const Contact = mongoose.model("Contact", contactSchema)