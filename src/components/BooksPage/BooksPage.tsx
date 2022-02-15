import { useDispatch, useSelector } from "react-redux"
import { selectBooks, selectBooksLoadingStatus, selectMoreBooksLoadingStatus, selectQueryParams } from "../../store/ducks/books/selectors"
import { LoadingStatus } from "../../store/types"
import styles from './BooksPage.module.css'

import Spinner from 'react-bootstrap/Spinner'
import { BookCard } from "../BookCard/BookCard"
import Button from 'react-bootstrap/Button';
import { getMoreBooks } from "../../store/ducks/books/thunks"





export const BooksPage: React.FC = () => {
    // utils
    const dispatch = useDispatch()
    //
    // global state
    const books = useSelector(selectBooks)
    const loadingStatus = useSelector(selectBooksLoadingStatus)
    const moreBooksLoadingStatus = useSelector(selectMoreBooksLoadingStatus)
    //
    // handlers
    const onLoadMoreClick = () => {
        dispatch(getMoreBooks())
    }
    //
    if (loadingStatus === LoadingStatus.LOADING) {
        return (
            <div className={styles.loader}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    return (
        <div className={styles.wrapper}>
            {books.totalItems > 0 &&
                <span className={styles.booksCount}>Found {books.totalItems} books</span>
            }
            {books.totalItems === 0 && loadingStatus === LoadingStatus.ERROR && <span>No such books found</span>}
            <div className={styles.books}>
                {books.items.map((item) => <BookCard
                    key={item.id}
                    id={item.id}
                    title={item.volumeInfo.title}
                    img={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail}
                    category={item.volumeInfo.categories && item.volumeInfo.categories[0]}
                    authors={item.volumeInfo.authors}
                />)}
            </div>
            {books.totalItems > 0 &&
                <div className={styles.moreBooksLoader}>
                    {moreBooksLoadingStatus === LoadingStatus.LOADING ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> :
                        <Button
                            onClick={onLoadMoreClick}
                        // className="mt-3 mb-4"
                        >Load more...</Button>}
                </div>
            }
        </div>
    )
}