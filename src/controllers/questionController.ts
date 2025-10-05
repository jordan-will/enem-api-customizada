import { Request, Response } from "express"
import fs from "fs"
import path from "path"

// Auxiliary function for shuffling
function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5)
}

// List questions by filters
export const getQuestions = (req: Request, res: Response) => {
  const { year } = req.params
  const { discipline, language, limit = 45, shuffle } = req.query

  const questionsDir = path.join(__dirname, "..", "..", "public", year, "questions")

  if (!fs.existsSync(questionsDir)) {
    return res.status(404).json({ error: "Ano não encontrado" })
  }

  const files = fs.readdirSync(questionsDir)
  
  let questions = files.map(file => {
    const detailPath = path.join(questionsDir, file, "details.json")
    return JSON.parse(fs.readFileSync(detailPath, "utf-8"))
  })

  // Filter by discipline
  if (discipline) {
    questions = questions.filter(q => q.discipline === discipline)
  }

  // Filter by languade (ingles or espanhol) (if discipline equals linguagens)
  if (discipline === "linguagens" && language) {
    questions = questions.filter(q => q.language === language)
  }

  // Shuffle the questions if the user wants
  if (shuffle === "true") {
    questions = shuffleArray(questions)
  }

  // Limit the number of questions returned
  const limited = questions.slice(0, Number(limit))

  res.json({
    year,
    discipline,
    language: language || null,
    count: limited.length,
    questions: limited
  })
}

// Details about a specific question
export const getQuestionDetail = (req: Request, res: Response) => {
  const { year, index } = req.params
  const detailPath = path.join(__dirname, "..", "..", "public", year, "questions", index, "details.json")

  if (!fs.existsSync(detailPath)) {
    return res.status(404).json({ error: "Questão não encontrada" })
  }

  const detail = JSON.parse(fs.readFileSync(detailPath, "utf-8"))
  res.json(detail)
}
