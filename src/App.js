import React from 'react';
import './App.css';

import styles from "./styles"
import ItemList from "./components/ItemsList"

function App() {
  return (
    <div style={styles.header}>
      <h1> Bookstore</h1>    
      <h4>a demo bookstore</h4>
      <img style={styles.headerImage} alt="" src="https://images.adsttc.com/media/images/573c/90c0/e58e/ce1e/1600/0007/large_jpg/Here_is_a_theater_to_unfold_an_outstanding_drama__and_the_characters_are_book_lovers_sitting_on_the_soft_couch_or_standing_beside_the_bookshelves._0004.jpg?1463587001" />
      <div style={styles.listContainer}>
      <ItemList/>
      </div>
    </div>
    );
}

export default App;
