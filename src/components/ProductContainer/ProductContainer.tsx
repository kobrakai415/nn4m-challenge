import React from 'react';

interface Props {
    product: Product
}
const ProductContainer = ({ product }: Props) => {

    return (

        <div>
            <h3>{product.name}</h3>
            <img src={product.altImage} alt="product-image" />
            <span>£{product.cost}</span>
            <h4>{product.prodid}</h4>
        </div>
    )
}


export default ProductContainer