import { setBooks, setBooksLoadingStatus, setMoreBooks, setMoreBooksLoadingStatus, setQueryParams } from './actionCreators';
import { Dispatch } from "redux"
import { BooksActions } from "./contracts/actionsTypes"
import { LoadingStatus } from '../../types';
import { booksApi, QueryDataType } from '../../../services/api';
import { AppStateType } from '../../rootReducer';



export const getNewBooks = (queryData: QueryDataType) => {
    return async (dispatch: Dispatch<BooksActions>) => {
        dispatch(setBooksLoadingStatus(LoadingStatus.LOADING))
        const data = await booksApi.fetchBooks(queryData)
        if (data.totalItems === 0) {
            dispatch(setBooksLoadingStatus(LoadingStatus.ERROR))
        } else {
            dispatch(setBooks(data))
            dispatch(setQueryParams(queryData))
            dispatch(setBooksLoadingStatus(LoadingStatus.LOADED))
        }
    }
}

export const getMoreBooks = () => {
    return async (dispatch: Dispatch<BooksActions>, getState: () => AppStateType) => {
        const queryParams = getState().books.queryParams
        const booksIndex = getState().books.books.items.length
        dispatch(setMoreBooksLoadingStatus(LoadingStatus.LOADING))
        if (queryParams) {
            const data = await booksApi.fetchBooks({
                query: queryParams.query,
                category: queryParams.category,
                sortBy: queryParams.sortBy,
                startIndex: booksIndex
            })
            dispatch(setMoreBooks(data))
        }
        dispatch(setMoreBooksLoadingStatus(LoadingStatus.LOADED))
    }
}