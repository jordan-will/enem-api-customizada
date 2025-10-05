import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import examRoutes from "./routes/examRoutes"
import questionRoutes from "./routes/questionRoutes"

dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` })

const app = express()
const port = process.env.PORT || 3000

// Origens allowed
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || []

// CORS Config
const corsOptions: cors.CorsOptions = {
  origin: (origin:any, callback:any) => {
    // Se não houver origin (ex.: Postman) ou se estiver na lista, permite
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true // se precisar enviar cookies/autenticação
}

app.use(cors(corsOptions))
app.use(express.json())

// Main routes
app.use("/api/v1/exams", examRoutes)
app.use("/api/v1/exams", questionRoutes)

// Init API
app.get("/health", (_req, res) => {
  res.json({ status: "ENEM Questions API", timestamp: Date.now() })
})

app.listen(port, () => {
  console.log(`Node running on PORT http://localhost:${port}`)
})
