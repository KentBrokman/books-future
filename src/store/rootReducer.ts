import { combineReducers } from "redux";
import { booksReducer } from "./ducks/books/reducer";




export const rootReducer = combineReducers({
    books: booksReducer
})


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>