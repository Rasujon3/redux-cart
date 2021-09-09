import React from 'react';

const Product = (props) => {
    const {addToCart,product} = props;

    return (
        <div style={{border:'1px solid tomato',margin:'10px',padding:'10px'}}>
            <h5>{product.name}</h5>
            <button onClick={()=>addToCart(product.id)}>add to cart</button>
        </div>
    );
};

export default Product;