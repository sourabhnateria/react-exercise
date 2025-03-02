import React from 'react';

const ItemList = React.memo (({items}) =>{
  console.log ('Rendering ItemList...');

  return (
    <ul>
      {items.map ((item) => (<li key= {item.id} >{item.name}</li>))}
    </ul>
  );
} ) ;

export default ItemList ;