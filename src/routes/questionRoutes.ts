import { getQuestionDetail, getQuestions } from "../controllers/questionController"
import { Router } from "express"

const router = Router()

// Lista questões filtradas por disciplina, idioma, limite
router.get("/:year/questions", getQuestions)

// Detalhe de uma questão específica
router.get("/:year/questions/:index", getQuestionDetail)

export default router
