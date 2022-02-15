import { AppStateType } from "../../rootReducer";



export const selectBooks = (state: AppStateType) => state.books.books
export const selectBooksLoadingStatus = (state: AppStateType) => state.books.loadingStatus
export const selectMoreBooksLoadingStatus = (state: AppStateType) => state.books.loadMoreBooksStatus
export const selectQueryParams = (state: AppStateType) => state.books.queryParams