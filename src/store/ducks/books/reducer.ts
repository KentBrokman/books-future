
import { LoadingStatus } from "../../types"
import { BooksActions, BooksActionTypes } from "./contracts/actionsTypes"
import { BooksStateType } from "./contracts/stateTypes"




const initialState: BooksStateType = {
    books: {
        totalItems: 0,
        items: []
    },
    loadingStatus: LoadingStatus.NEVER,
    loadMoreBooksStatus: LoadingStatus.NEVER,
    queryParams: null
}
type InitialStateType = typeof initialState

export const booksReducer = (state = initialState, action: BooksActions): InitialStateType => {

    switch (action.type) {
        case BooksActionTypes.SET_BOOKS:
            return {
                ...state,
                books: {
                    totalItems: action.payload.totalItems,
                    items: [
                        ...action.payload.items
                    ]
                }
            }
        case BooksActionTypes.SET_BOOKS_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.payload
            }
        case BooksActionTypes.SET_MORE_BOOKS:
            return {
                ...state,
                books: {
                    totalItems: action.payload.totalItems,
                    items: [
                        ...state.books.items,
                        ...action.payload.items
                    ]
                }
            }
        case BooksActionTypes.SET_MORE_BOOKS_LOADING_STATUS:
            return {
                ...state,
                loadMoreBooksStatus: action.payload
            }
        case BooksActionTypes.SET_QUERY_PARAMS:
            return {
                ...state,
                queryParams: action.payload
            }
        default:
            return state;
    }
}

