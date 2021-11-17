import React from 'react';
import { useParams } from 'react-router';

const ProductPage = () => {

    const { productId } = useParams<{ productId: string }>()

    return (
        <>

            <div className="d-flex justify-content-center align-items-center">
                <img src={`http://riverisland.scene7.com/is/image/RiverIsland/${productId}_main`} alt="product" />
            </div>

        </>
    )
}


export default ProductPage