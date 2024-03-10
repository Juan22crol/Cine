import { createSlice } from '@reduxjs/toolkit'


export const topMovies = createSlice({
  name: 'peliculas',
  initialState: {
    peliculas: [],
  },
  reducers: {
    setPelis: (state, action) => {
      state.peliculas = action.payload.peliculas
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setPelis } = topMovies.actions

// export default topMovies.reducer