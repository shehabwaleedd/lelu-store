import React, { useEffect, useState, useRef } from "react";
import "./DetailsPage.css";
import { useParams } from "react-router-dom";
import Data from "../Data";
import { AnimatePresence, motion } from "framer-motion";
import TopPicks from "../../../topPicks/TopPicks";
import Loading from "../../../../components/loading/Loading.tsx";

const DetailsPage = ({ closeModal }) => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    const getProductById = () => {
      const foundProduct = Data.find((item) => item.id === Number(id));
      setProduct(foundProduct);
    };

    getProductById();
  }, [id]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.img);
    }
  }, [product]);

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!product) {
    return <Loading height={100} />;
  }


  return (

      <motion.section className="containerrr show"
        initial={{ opacity: 0, y: 165, height: "50vh", x: 0 }}
        animate={{ opacity: 1, y: 0, height: "140vh", x: -10, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
        exit={{ opacity: 0, y: 365, height: "50vh", x: -10,transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}

        ref={scrollRef}>
        <div className="product-wrapper">
          <div className="product-img">
            <div className="product__main_img">
              <img src={selectedImage} alt={product.name} />
            </div>
          </div>
          <div className="product-info">
            <div className="product-description">
              <div className="product-title">{product.name}</div>
              <div className="product-price">EGP {product.price}</div>
              <div className="product-colors">
                <label>
                  <input
                    type="radio"
                    name="select"
                    value="Red"
                    onChange={handleColorChange}
                    checked={selectedColor === "Red"}
                  />
                  <span className="red"></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="select"
                    value="Blue"
                    onChange={handleColorChange}
                    checked={selectedColor === "Blue"}
                  />
                  <span className="blue"></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="select"
                    value="Yellow"
                    onChange={handleColorChange}
                    checked={selectedColor === "Yellow"}
                  />
                  <span className="yellow"></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="select"
                    value="Mint"
                    onChange={handleColorChange}
                    checked={selectedColor === "Mint"}
                  />
                  <span className="mint"></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="select"
                    value="Black"
                    onChange={handleColorChange}
                    checked={selectedColor === "Black"}
                  />
                  <span className="black"></span>
                </label>
              </div>
              <div className="product-color">Color: {selectedColor}</div>
              <div className="product-size">Product Size: </div>
              <div className="product-size">
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="42"
                    onChange={handleSizeChange}
                    checked={selectedSize === "42"}
                  />
                  <span>42</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="44"
                    onChange={handleSizeChange}
                    checked={selectedSize === "44"}
                  />
                  <span>44</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="46"
                    onChange={handleSizeChange}
                    checked={selectedSize === "46"}
                  />
                  <span>46</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="48"
                    onChange={handleSizeChange}
                    checked={selectedSize === "48"}
                  />
                  <span>48</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="50"
                    onChange={handleSizeChange}
                    checked={selectedSize === "50"}
                  />
                  <span>50</span>
                </label>
              </div>
              <div className="product-descriptionn">
                <p>{product.description}</p>
              </div>
            </div>
            <div className="product-add-to-cart">
              Add to bag
              <div className="product__dash"></div>
            </div>
          </div>
        </div>
      </motion.section>

  );
};

export default DetailsPage;
