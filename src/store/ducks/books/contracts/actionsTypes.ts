import { Action } from "redux";
import { QueryDataType } from "../../../../services/api";
import { LoadingStatus } from "../../../types";
import { BooksStateType } from "./stateTypes";


export enum BooksActionTypes {
    SET_BOOKS = 'books/SET_BOOKS',
    SET_BOOKS_LOADING_STATUS = 'books/SET_BOOKS_LOADING_STATUS',
    SET_MORE_BOOKS = 'books/SET_MORE_BOOKS',
    SET_MORE_BOOKS_LOADING_STATUS = 'books/SET_MORE_BOOKS_LOADING_STATUS',
    SET_QUERY_PARAMS = 'books/SET_QUERY_PARAMS'
}

export interface SetBooksActionType extends Action<BooksActionTypes> {
    type: BooksActionTypes.SET_BOOKS,
    payload: BooksStateType['books']
}

export interface SetBooksLoadingStatusActionType extends Action<BooksActionTypes> {
    type: BooksActionTypes.SET_BOOKS_LOADING_STATUS,
    payload: LoadingStatus
}

export interface SetBooksMoreBooksActionType extends Action<BooksActionTypes> {
    type: BooksActionTypes.SET_MORE_BOOKS,
    payload: BooksStateType['books']
}

export interface SetMoreBooksLoadingStatusActionType extends Action<BooksActionTypes> {
    type: BooksActionTypes.SET_MORE_BOOKS_LOADING_STATUS,
    payload: LoadingStatus
}

export interface SetQueryParamsActionType extends Action<BooksActionTypes> {
    type: BooksActionTypes.SET_QUERY_PARAMS,
    payload: QueryDataType
}



export type BooksActions = SetBooksActionType | SetBooksLoadingStatusActionType 
| SetBooksMoreBooksActionType | SetMoreBooksLoadingStatusActionType | SetQueryParamsActionType