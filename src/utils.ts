import { NewDiaryEntry } from './types'
import { Genre, Rating } from './enums'

// Parseos

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrent or missing date')
  }
  return dateFromRequest
}
const parseMovieDate = (movieDateFromRequest: any): number => {
  if (!isNumber(movieDateFromRequest)) {
    throw new Error('Incorrect or missing movie')
  }

  return movieDateFromRequest
}

const parseGenre = (genreFromRequest: any): Genre => {
  if (!isString(genreFromRequest) || !isGenre(genreFromRequest)) {
    throw new Error('Incorrent or missing genre')
  }
  return genreFromRequest
}

const parseRating = (ratingFromRequest: any): Rating => {
  if (!isString(ratingFromRequest) || !isRating(ratingFromRequest)) {
    throw new Error('Incorrent or missing rating')
  }
  return ratingFromRequest
}

// Utilidades

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

const isGenre = (param: any): boolean => {
  return Object.values(Genre).includes(param)
}
const isRating = (param: any): boolean => {
  return Object.values(Rating).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    movie: parseComment(object.movie),
    movieDate: parseMovieDate(object.movieDate),
    genre: parseGenre(object.genre),
    rating: parseRating(object.rating)
  }
  return newEntry
}

export default toNewDiaryEntry
