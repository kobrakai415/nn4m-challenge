import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import InfiniteScroll from "react-infinite-scroll-component";

const HomePage = ({ }) => {
    const [products, setProducts] = useState<Product[] | []>([])
    const [productsToDisplay, setProductsToDisplay] = useState<Product[] | []>([])
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://static-r2.ristack-3.nn4maws.net/v1/plp/en_gb/2506/products.json`)
            console.log(response)

            if (response.status === 200) {
                const { Products } = await response.json()
                console.log(Products)
                setProducts(Products)
                setProductsToDisplay(Products.slice(0, 10))
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    const loadMoreProducts = () => {
        console.log("load more initiated")
        if (productsToDisplay.length === products.length) setHasMore(false)

        const nextTenProducts = products.slice(productsToDisplay.length, productsToDisplay.length + 10)
        console.log(nextTenProducts)
        setProductsToDisplay([...productsToDisplay, ...nextTenProducts])
    }

    return (
        <>
            <Col xs={12}>
                <InfiniteScroll
                    dataLength={productsToDisplay.length}
                    next={() => loadMoreProducts()}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {productsToDisplay.length > 0 ?
                        productsToDisplay.map(product => <ProductContainer key={product.prodid} product={product} />) : null}
                </InfiniteScroll>
            </Col >
        </>
    )
}


export default HomePage