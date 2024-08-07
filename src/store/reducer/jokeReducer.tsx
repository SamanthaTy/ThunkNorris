import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

interface StateType {
  joke: string;
}

const initialState: StateType = {
  joke: "Chargement...",
};

export const getRandomJoke = createAsyncThunk("GET_RANDOM_JOKE", async () => {
  const response = await axios.get("https://api.chucknorris.io/jokes/random");
  return response.data.value;
});

const jokeReducer = createReducer(initialState, (builder) => {
  builder
    /* .addCase(getRandomJoke.pending, (state) => {
      state.joke = "Chargement d'une super blague";
    }) */
    .addCase(getRandomJoke.fulfilled, (state, action) => {
      state.joke = action.payload;
    })
    .addCase(getRandomJoke.rejected, (state) => {
      state.joke = "Une erreur est survenue, veuillez réessayer";
    });
});

export default jokeReducer;
