import React, { useEffect } from 'react';
import styles from './App.module.css'
import { BookPage } from './components/BookPage/BookPage';
import { BooksPage } from './components/BooksPage/BooksPage';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBooksLoadingStatus } from './store/ducks/books/selectors';
import { LoadingStatus } from './store/types';

function App() {
  // global state
  const loadingStatus = useSelector(selectBooksLoadingStatus)
  //
  // utils
  const navigate = useNavigate()
  //
  useEffect(() => {
    if (loadingStatus === LoadingStatus.NEVER) {
      navigate('/main')
    }
  }, [])
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <SearchBar />
        <Routes>
          <Route path="/main" element={<BooksPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/" element={<Navigate to='/main' />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
