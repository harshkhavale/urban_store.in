import React, { useEffect, useState } from "react";
import women from "../assets/woman-wearing-high-heels-stocking.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Navbar from "../components/Navbar";
import { Announcement } from "@mui/icons-material";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../redux/cartRedux.js";
import { useDispatch } from "react-redux";
import GradeIcon from "@mui/icons-material/Grade";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Options from "../components/Options.jsx";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [displayImg, setDisplayImg] = useState();
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  const getProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products/find/` + id
      );
      console.log("res : ", res);
      setProduct(res.data);
      const index = 2;

      setDisplayImg(res.data.images[index]);
      console.log("product : ", product);
    } catch (error) {}
  };

  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <div>
      <div className="productpage  flex flex-col md:flex-row   w-full">
        <div className="showcase flex justify-center flex-2">
          <div className="showboxes  flex flex-col mt-20 gap-2">
            {product.images?.map((image, index) => (
              <div
                className="rounded-2xl shadow-lg border"
                key={index}
                onMouseEnter={() => setDisplayImg(image)}
              >
                <img
                  className=" h-16 cursor-pointer rounded-2xl w-16 object-contain  md:w-auto"
                  src={image}
                  alt="product_showcase"
                />
              </div>
            ))}
          </div>
          <img
            className="w-9/12 ms-5 object-contain"
            src={displayImg}
            alt={displayImg}
          />
        </div>
        <div className="info m-8 flex-1 flex flex-col text-start gap-4">
        <div className="title bg-red-400 text-white w-min px-2 rounded-md font-bold">
            {product.brand}
          </div>
          <div className="title text-xl  md:text-4xl font-bold">
            {product.title}
          </div>
          <div className="subtitle  text-[17px]">
            {product.sub_title}
          </div>

          <div className="desc ">{product.description}</div>
          <div className="rating flex items-center text-xl gap-2 border-2 rounded-md  w-min p-1">
            <p className="text-[17px]">rating: </p>
            <p> {product.ratings}</p>
            <GradeIcon className=" text-red-400" />
          </div>

          <div className="price font-bold">
            <p className=" line-through text-gray-500">
              {product.actual_price}
            </p>

            <p className="price text-2xl  w-full md:text-4xl font-black urbanist-font">
              {product.price} ₹
            </p>
          </div>
          <div className="flex flex-col gap-8">
          <div className="colors flex items-center gap-4">
      <p className="text-[17px]">Available Colors</p>
      {product.colors?.map((c) => (
        <div
          className={`color shadow-2xl border-4 cursor-pointer rounded-full p-4 ${
            color === c ? 'border-red-400' : '' // Highlight selected color
          }`}
          style={{ backgroundColor: `${c}` }}
          onClick={() => setColor(c)}
          key={c + '_key'}
        ></div>
      ))}
    </div>
            <></>
            <p className=" text-[17px]">select a size from SIZE CHART</p>

            <div className="size flex space-x-2">

              {product.sizes?.map((s) => (
                <div
                  key={s + "_key"}
                  className={`p-4 border-2 flex items-center justify-center rounded-full  border-slate-300 cursor-pointer ${
                    size === s
                      ? "bg-red-400 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </div>
              ))}
            </div>
            <div>
              <Options freeDelivery={product.free_delivery} return30Days={product.return30days} cashOnDelivery={product.cash_on_delivery}/>
            </div>
            <div className="options flex gap-4">
              <button
                className="border-2 bg-black hover:bg-gray-200 hover:text-black text-white  text-[17px]  p-2 my-2 w-full rounded-xl"
                onClick={handleClick}
              >
                <LocalMallOutlinedIcon /> add to cart
              </button>
              <button
                className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white  text-[17px]  p-2 my-2 w-full rounded-xl"
                onClick={handleClick}
              >
                <FavoriteBorderIcon /> wishlist
              </button>
            </div>
           
          </div>

          
        </div>
      </div>
     
    </div>
  );
};

export default Product;
