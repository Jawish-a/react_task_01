import React from 'react';
import './App.css';

function App() {
  const styles = {
    header: {
      textAlign:"center"
    },
    headerImage: {
      width:"80%"
    },
    listContainer: {
      display:"flex"
    },
    itemImage:{
      width:"50%"
    }
  }
  return (
    <div style={styles.header}>
      <h1> Bookstore</h1>    
      <h4>a demo bookstore</h4>
      <img style={styles.headerImage} alt="" src="https://images.adsttc.com/media/images/573c/90c0/e58e/ce1e/1600/0007/large_jpg/Here_is_a_theater_to_unfold_an_outstanding_drama__and_the_characters_are_book_lovers_sitting_on_the_soft_couch_or_standing_beside_the_bookshelves._0004.jpg?1463587001" />
      <div style={styles.listContainer}>
        <div>
          <h3>The Name of the Wind</h3>
          <img style={styles.itemImage} alt="" src="https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg" />
          <p>65 SAR</p>
        </div>
        <div>
          <h3>CSS Mug</h3>
          <img style={styles.itemImage} alt="" src="https://images-na.ssl-images-amazon.com/images/I/51graM2SdzL._AC_SL1000_.jpg" />
          <p>35 SAR</p>
        </div>
        <div>
          <h3>Node.JS Tshirt</h3>
          <img style={styles.itemImage} alt="" src="https://cdn.shopify.com/s/files/1/0984/4522/products/Node_JS_Men_s_Programming_T-shirt_men1_grande.jpg?v=1571501184" />
          <p>35 SAR</p>
        </div>
      </div>
    </div>
    );
}

export default App;
