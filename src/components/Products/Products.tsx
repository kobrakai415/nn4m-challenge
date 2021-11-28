import { useEffect, useState } from 'react';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import InfiniteScroll from "react-infinite-scroll-component";
import { Dropdown, Row } from 'react-bootstrap';

interface Props {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const Products = ({ products, setProducts }: Props) => {

    const [productsToDisplay, setProductsToDisplay] = useState<Product[]>([])
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        console.log("rendered")
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

    const sortItemsAscending = () => {
        const ascending = products.slice().sort((a, b) => {
            return parseFloat(a.cost) - parseFloat(b.cost)
        })
        setProducts(ascending)
    }

    const sortItemDescending = () => {
        const descending = products.slice().sort((a, b) => {
            return parseFloat(b.cost) - parseFloat(a.cost)
        })

        setProducts(descending)
    }

    return (
        <>
            <Dropdown className="mx-3">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Sort
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={sortItemsAscending}>Ascending</Dropdown.Item>
                    <Dropdown.Item onClick={sortItemDescending}>Descending</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>


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
                    {productsToDisplay.map((product, index) => <ProductContainer key={product.prodid} product={product} />)}
                </Row>
            </InfiniteScroll>
        </>
    )
}

export default Products
