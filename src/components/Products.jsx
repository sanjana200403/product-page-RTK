import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { STATUSES, fetchProducts } from '../store/productSlice';
import ClipLoader from "react-spinners/ClipLoader";


const Products = () => {
    const dispatch = useDispatch();
    const { data, status } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleClick = (product) => {
        dispatch(add(product));
    };

    return (
        <div className="products">
            {/* Show loading spinner if status is loading */}
            {status === "loading" && <ClipLoader
  show={true}
  color="red"
 

/>}

            {/* Render products if status is success */}
            {status === "idle" && (
                data.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt="Product Image" className="product-image" />
                        <div className="product-info">
                            <h2 className="product-name">{`${product.title}`.slice(0, 10)}</h2>
                            <p className="product-description">{`${product.description}`.slice(0, 50)}</p>
                            <p className="product-price">${product.price}</p>
                            <button onClick={() => handleClick(product)}>Add to cart</button>
                        </div>
                    </div>
                ))
            )}

            {/* Show error message if status is error */}
            {status === STATUSES.ERROR && <h1 style={{ color: "red" }}>Error fetching products</h1>}
        </div>
    );
};

export default Products;