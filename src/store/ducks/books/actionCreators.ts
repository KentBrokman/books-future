
import { QueryDataType } from "../../../services/api";
import { LoadingStatus } from "../../types";
import { BooksActionTypes, SetBooksActionType, SetBooksLoadingStatusActionType, SetBooksMoreBooksActionType, SetMoreBooksLoadingStatusActionType, SetQueryParamsActionType } from "./contracts/actionsTypes";
import { BooksStateType } from "./contracts/stateTypes";




export const setBooks = (payload: BooksStateType['books']): SetBooksActionType => ({
    type: BooksActionTypes.SET_BOOKS,
    payload
})

export const setBooksLoadingStatus = (payload: LoadingStatus): SetBooksLoadingStatusActionType => ({
    type: BooksActionTypes.SET_BOOKS_LOADING_STATUS,
    payload
})

export const setMoreBooks = (payload: BooksStateType['books']): SetBooksMoreBooksActionType => ({
    type: BooksActionTypes.SET_MORE_BOOKS,
    payload
})

export const setMoreBooksLoadingStatus = (payload: LoadingStatus): SetMoreBooksLoadingStatusActionType => ({
    type: BooksActionTypes.SET_MORE_BOOKS_LOADING_STATUS,
    payload
})

export const setQueryParams = (payload: QueryDataType): SetQueryParamsActionType => ({
    type: BooksActionTypes.SET_QUERY_PARAMS,
    payload
})