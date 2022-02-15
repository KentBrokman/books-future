import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectBooks } from "../../store/ducks/books/selectors"
import styles from './BookPage.module.css'





export const BookPage: React.FC = () => {
    //global state
    const books = useSelector(selectBooks)
    //
    // local state
    const { id } = useParams()
    const book = books.items.find((item) => item.id === id)?.volumeInfo
    //

    return (
        <div className={styles.wrapper}>

            <div className={styles.bookCover}>
                {book?.imageLinks && <img src={book.imageLinks.thumbnail} className={styles.bookCover__image} />}
            </div>
            <div className={styles.bookInfo}>
                {book?.categories &&
                    <span className={styles.bookInfo__category}>
                        {book.categories.map((item, index, array) => index === array.length - 1 ? `${item}` : `${item}/`)}
                    </span>
                }
                {book?.title && <span className={styles.bookInfo__title}>{book?.title}</span>}
                {book?.authors &&
                    <span className={styles.bookInfo__authors}>{book?.authors.map(
                        (item, index, array) => index === array.length - 1 ? `${item}` : `${item}, `
                    )}</span>
                }
                {book?.description &&
                    <div className={styles.bookInfo__description}>{book?.description}</div>
                }
            </div>

        </div>
    )
}