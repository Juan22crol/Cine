import { configureStore } from '@reduxjs/toolkit'
import { movies} from './slices/slice'

export const store = configureStore({
  reducer: {

    pelis: movies.reducer
  },
})