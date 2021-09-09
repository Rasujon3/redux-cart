import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {name: 'Lenovo Laptop', id:1},
        {name: 'Asus Laptop', id:2},
        {name: 'Toshiba Laptop', id:3},
        {name: 'HP Laptop', id:4},
        {name: 'Dell Laptop', id:5},
    ]
    return (
        <div>
            <h2>This is Shop</h2>
            {
            products.map(pd => <Product product = {pd}></Product>)

            }
        </div>
    );
};

export default Shop;