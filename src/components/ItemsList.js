import React from 'react';

import items from "../items"
import Item from "./Item"

const itemsList = items.map( (item) => <Item item={item} key={item.id} /> )

const ItemList = () => {
    return (
        itemsList
    );
};

export default ItemList;