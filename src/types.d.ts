export type Genre = 'Ciencia ficción' | 'Comedia' | 'Acción' | 'Fantasía' | 'Animacion'
export type Rating = 'Excelente' | 'Buena' | 'Regular' | 'Mala' | 'Malisima'

export interface DiaryEntry {
  id: number
  date: string
  movie: string
  movieDate: number
  genre: Genre
  rating: Rating
  comment: string
}

// creando NonSensitiveInfoDiaryEntry buenas practicas

// EVITAR REPETIR TIPOS, CUANTO MENOS TIPOS MEJOR

// export interface NonSensitiveInfoDiaryEntry {
//     id: number
//     date: string
//     movie: string
//     movie_date: number
//     genre: Genre
//     rating: Rating
//   }

// alternativa con pick

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'movie' | 'movie_date' | 'genre' | 'rating'>

// alternativa usando omit

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
