

import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { getNewBooks } from '../../store/ducks/books/thunks';
import styles from './SearchBar.module.css'



export const SearchBar: React.FC = () => {
    // utils
    const dispatch = useDispatch()
    //
    // local state
    const [inputValue, setInputValue] = useState('')
    const [categoryValue, setCategoryValue] = useState('all')
    const [sortByValue, setSortByValue] = useState('relevance')
    //
    // handlers
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }
    const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryValue(event.currentTarget.value)
    }
    const onSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortByValue(event.currentTarget.value)
    }
    const onSearchClick = () => {
        if (inputValue.length > 0) {
            dispatch(getNewBooks({
                query: inputValue,
                startIndex: 0,
                category: categoryValue,
                sortBy: sortByValue
            }))
        }
    }
    //
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Search for books</div>
            <div className={styles.searchBar}>
                <Form.Control
                    value={inputValue}
                    onChange={onInputChange}
                    size="lg"
                    type="text"
                    placeholder="Book title"
                />
                <Button
                    onClick={onSearchClick}
                    className='ms-2'
                >Search</Button>
            </div>
            <div className={styles.filterBar}>
                <div>
                    <span>Categories</span>
                    <Form.Select
                        value={categoryValue}
                        onChange={onCategoryChange}
                        className='w-50'
                        aria-label="Default select example"
                    >
                        <option value="all">all</option>
                        <option value="art">art</option>
                        <option value="biography">biography</option>
                        <option value="computers">computers</option>
                        <option value="history">history</option>
                        <option value="medical">medical</option>
                        <option value="poetry">poetry</option>
                    </Form.Select>
                </div>
                <div>
                    <span>Sorting by</span>
                    <Form.Select
                        value={sortByValue}
                        onChange={onSortByChange}
                        className='w-50'
                        aria-label="Default select example"
                    >
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </Form.Select>
                </div>
            </div>
        </div>
    )
}