import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import colors from "colors"
// import { reservation } from "./models/reservation.js"
import { dbConnection } from "./database/dbConnection.js"
// import ErrorHandler from "./Middlewares/error.js"    
import { errorMiddleware } from "./Middlewares/error.js"

import router from "./routes/reservationRoute.js"

const app = express()

dotenv.config( {path: "./config/config.env"})

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})
)

app.use(express.json())

app.use(express.urlencoded({ extended: true}))

app.use("/api/v1/reservation", router)

// app.get("/", (req, res, next) => {
//     return res.status(200).json({
//         success: true,
//         message: "Successfully Established"
//     })
// })

dbConnection();

app.use(errorMiddleware);

export default app;