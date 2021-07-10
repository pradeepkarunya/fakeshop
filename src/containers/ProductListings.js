import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';

export default function ProductListings() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch(err=>console.log('Error --> ',err));
        dispatch(setProducts(response.data));
    };

    useEffect(()=>{
        fetchProducts();
        console.log('PRODUCTS.........',products);
    },[]);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}
