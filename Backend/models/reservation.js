import mongoose from "mongoose"
import validator from "validator"

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be of at least 3 Characters."],
        maxLength: [15, "First name cannot excess 15 Characters."],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must be of at least 3 Characters."],
        maxLength: [15, "Last name cannot exceed 15 Characters."],
    },
    date: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
    },
    time: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 Digits."],
        maxLength: [10, "Phone number must contain 10 Digits."],
    },
})

export const reservation = mongoose.model("Reservation", reservationSchema)