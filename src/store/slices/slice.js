import { createSlice } from '@reduxjs/toolkit'


export const movies = createSlice({
  name: 'pelis',
  initialState: {
    allPelis: [],
    topPelis: []
  },
  reducers: {
    setAllPelis: (state, action) => {
        console.log(state)
        console.log(action)
        state.allPelis = action.payload.allPelis
    },

    setTopPelis: (state, action) => {
        state.topPelis = action.payload.topPelis
      },
    
  },
})

// Action creators are generated for each case reducer function
export const { setAllPelis, setTopPelis} = movies.actions