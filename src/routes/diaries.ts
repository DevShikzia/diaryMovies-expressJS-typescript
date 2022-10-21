import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})
router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const { date, movie, genre, movieDate, comment, rating } = req.body
    const newDiaryEntry = diaryServices.addDiary({
      date,
      movie,
      genre,
      movieDate,
      comment,
      rating
    })
    res.json(newDiaryEntry)
  } catch (error) {
    res.status(400).send(error)
  }
})

export default router
