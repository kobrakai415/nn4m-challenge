import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
    product: Product
}
const ProductContainer = ({ product }: Props) => {

    return (

        <Col md={4}>
            <Link className="no-decoration" to={`/product/${product.prodid}`}>
                <div className="p-3 product-thumbnail">
                    <img height="85%" width="100%" src={product.allImages[0]} alt="product" />
                    <h6>{product.name}</h6>
                    <strong>£{product.cost}</strong>
                </div>
            </Link>
        </Col>
    )
}


export default ProductContainer