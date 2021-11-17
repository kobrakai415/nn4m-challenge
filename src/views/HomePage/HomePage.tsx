import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import SearchBar from '../../components/SearchBar/SearchBar';
import Products from '../../components/Products/Products';
import FilteredProducts from '../../components/FilteredProducts/FilteredProducts'

const HomePage = () => {
    const [products, setProducts] = useState<Product[] | []>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[] | []>([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [query, setQuery] = useState("")

    // load all products from api - there is no option for pagination
    useEffect(() => {
        fetchProducts()
    }, [])

    // filter products on search 
    useEffect(() => {

        // matching products found
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query))
        setFilteredProducts(filteredProducts)
    }, [query])

    // load products function
    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://static-r2.ristack-3.nn4maws.net/v1/plp/en_gb/2506/products.json`)

            if (response.status === 200) {
                const { Products } = await response.json()
                setProducts(Products)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }


    return (
        <>
            <Col className="position-relative">

                <SearchBar query={query} setQuery={setQuery} />

                {query.length === 0 ?
                    <Products products={products} />
                    : null}


                {filteredProducts.length > 0 && query.length > 0 ?
                    <FilteredProducts filteredProducts={filteredProducts} />
                    : null}

                {query.length > 0 && filteredProducts.length === 0 ?
                    <h3>No products were found, please search for another product!</h3>
                    : null}

                {error ? <h3 className="centered">An Error has occured, please try again!</h3> : null}

                {loading ? <img className="centered" src="/spinner.svg" height={300} width={300} alt="loading" /> : null}
            </Col >
        </>
    )
}


export default HomePage