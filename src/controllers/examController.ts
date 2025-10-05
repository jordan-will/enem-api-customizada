import { Request, Response } from "express"
import fs from "fs"
import path from "path"

// List exams available by year
export const getExams = (_req: Request, res: Response) => {
  const publicDir = path.join(__dirname, "..", "..", "public")
  const years = fs.readdirSync(publicDir).filter(item => /^\d{4}$/.test(item))
  res.json(years.map(year => ({ year })))
}

// Exam detail
export const getExamDetail = (req: Request, res: Response) => {
  const { year } = req.params
  const detailPath = path.join(__dirname, "..", "..", "public", year, "details.json")

  if (!fs.existsSync(detailPath)) {
    return res.status(404).json({ error: "Prova não encontrada" })
  }

  const detail = JSON.parse(fs.readFileSync(detailPath, "utf-8"))
  res.json(detail)
}
