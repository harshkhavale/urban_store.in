import React, { useEffect, useState } from 'react'
import Product from './Product';
import axios from 'axios';
import { products } from '../assets';
const Products = ({ cat, filters, sort }) => {
   console.log("product section : ", cat, filters, sort)
   const [allproducts, setAllProducts] = useState([]);
   const [filterdProducts, setFilterdProducts] = useState([]);
   useEffect(() => {
      const getProducts = async () => {
         try {
            const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : `http://localhost:5000/api/products`);
            console.log("res : ", res);
            setAllProducts(res.data);
         } catch (error) {
            console.log("error :", error);
         }
      };
      getProducts();

   }, [cat]);

   useEffect(() => {

      if (sort === "newest") {
         setFilterdProducts((prev) => [
            ...prev
         ].sort((a, b) => a.createdAt - b.createdAt));
      }
      else if (sort === "asc") {
         setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
      }
      else {
         setFilterdProducts((prev) => [...prev].sort((a, b) => b.createdAt - a.createdAt));
      }
   }, [sort]);

   useEffect(() => {
      cat && setFilterdProducts(allproducts.filter((item) => Object.entries(filters).every(([key, value]) => {
         item[key].includes(value);
      })))
   }, [allproducts, cat, filters]);

   return (
      <div className="products flex flex-wrap justify-center">
         {
            cat ?
               filterdProducts.map((product) =>
                  <Product product={product} key={product.id} />
               ) : allproducts.slice(0, 8).map((product) => <Product product={product} key={product.id} />)


         }
      </div>
   )
}

export default Products
