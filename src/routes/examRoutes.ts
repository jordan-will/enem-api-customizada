import { getExamDetail, getExams } from "../controllers/examController"
import { Router } from "express"

const router = Router()

// List all years
router.get("/", getExams)

// Detail about a specific year
router.get("/:year", getExamDetail)

export default router
