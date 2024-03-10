import { configureStore } from '@reduxjs/toolkit'
import {topMovies} from './slices/Cartelera/topMovies'

export const store = configureStore({
  reducer: {
    topPelis: topMovies.reducer
  },
})