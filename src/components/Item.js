import React from 'react';

import styles from "../styles"

const Item = ({item}) => {
    return (
    <div>
      <h3>{item.name}</h3>
      <img style={styles.itemImage} alt="" src={item.image} />
      <p>{item.price} SAR</p>
    </div>
    );
};


export default Item;