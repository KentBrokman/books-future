
import styles from './BookCard.module.css'
import { Link } from 'react-router-dom'


interface BookCardPropsType {
    id: string,
    title?: string,
    img?: string,
    category?: string,
    authors?: string[]
}

export const BookCard: React.FC<BookCardPropsType> = ({ id, title, img, category, authors }) => {
    const authorsString = authors?.map(
        (item, index, array) => index === array.length - 1 ? `${item}` : `${item}, `
    ).join('')
    console.log(authorsString)
    return (
        <Link to={`/book/${id}`}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.bookCover}>
                        {img && <img src={img} className={styles.bookCover__image} />}
                    </div>
                    <div className={styles.bookInfo}>
                        {category && <span className={styles.bookInfo__category}>{category}</span>}
                        {title && <span className={styles.bookInfo__title}>
                            {title.length > 42 ? `${title.substring(0, 41)}...` : title}
                        </span>}
                        {authors && <span className={styles.bookInfo__authors}>{authorsString && (authorsString.length > 44 ?
                            authorsString.substring(0, 45) + '...' :
                            authorsString)
                        }</span>}
                    </div>
                </div>
            </div>
        </Link>
    )
}