import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
