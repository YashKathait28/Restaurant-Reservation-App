import ErrorHandler from "../Middlewares/error.js";
import { reservation } from "../models/reservation.js";

export const send_reservation = async (req, res, next) => {
    const { firstName, lastName, email, date, time, phone } = req.body;

    if (!firstName || !lastName || !email || !date || !time || !phone) {
        return next(new ErrorHandler("Please fill full reservation form!", 400));
    }

    try {
        await reservation.create({
            firstName,
            lastName,
            email,
            date,
            time,
            phone,
        });

        res.status(201).json({
            success: true,
            message: "Reservation Sent Successfully!",
        });
    } catch (error) {
        next(error);
    }
};
