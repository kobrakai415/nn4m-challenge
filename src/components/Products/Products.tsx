import { useEffect, useState } from 'react';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import InfiniteScroll from "react-infinite-scroll-component";
import { Row } from 'react-bootstrap';

interface Props {
    products: Product[];
}

const Products = ({ products }: Props) => {

    const [productsToDisplay, setProductsToDisplay] = useState<Product[] | []>([])
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        setProductsToDisplay(products.slice(0, 9))
    }, [products])

    // load more products on scroll handler

    const loadMoreProducts = () => {
   
        if (productsToDisplay.length === products.length) {
            setHasMore(false)
        } else {
            const nextProducts = products.slice(productsToDisplay.length, productsToDisplay.length + 9)

            //mimic an api call 
            setTimeout(() => {
                setProductsToDisplay([...productsToDisplay, ...nextProducts])
            }, 1000)
        }
    }

    return (
        <InfiniteScroll
            dataLength={productsToDisplay.length}
            next={loadMoreProducts}
            hasMore={hasMore}
            loader={<h4 className="bottom-loader">Loading...</h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <Row>
                {productsToDisplay.map(product => <ProductContainer key={product.prodid} product={product} />)}
            </Row>
        </InfiniteScroll>
    )
}

export default Products
