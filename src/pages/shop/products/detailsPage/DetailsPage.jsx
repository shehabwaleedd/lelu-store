import React, { useEffect, useState } from "react";
import "./DetailsPage.css";
import { useParams } from "react-router-dom";
import Data from "../Data";
import lelu1 from "../../../../assets/lelu3.jpg";
import SimilarProducts from "./similarProducts/SimilarProducts";
import TopPicks from "../../../topPicks/TopPicks";

const DetailsPage = () => {
  const { id } = useParams();
  const project = Data[id];
  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedImage, setSelectedImage] = useState(project.img);
  const [selectedSize, setSelectedSize] = useState(""); // New state for selected size

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleImageClick = (imageSrc) => {
    console.log("Clicked image:", imageSrc);
    setSelectedImage(imageSrc);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <section className="containerrr">
      <div className="product-wrapper">
        <div className="product-img">
          <div className="product__main_img">
            <img src={selectedImage} alt={project.name} />
          </div>
          <div className="image__thumbnails">
            <img
              src={project.img2}
              alt={project.name}
              onClick={() => handleImageClick(project.img2)}
            />
            <img
              src={project.img1}
              alt={project.title}
              onClick={() => handleImageClick(project.img1)}
            />
            <img
              src={project.img4}
              alt={project.name}
              onClick={() => handleImageClick(project.img4)}
            />
            <img
              src={project.img5}
              alt={project.name}
              onClick={() => handleImageClick(project.img5)}
            />
            <img
              src={project.img6}
              alt={project.name}
              onClick={() => handleImageClick(project.img6)}
            />
            <img
              src={project.img7}
              alt={project.name}
              onClick={() => handleImageClick(project.img7)}
            />
          </div>
        </div>
        <div className="product-info">
          <div className="product-description">
            <div className="product-title">{project.name}</div>
            <div className="product-price">EGP {project.price}</div>
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
            <div className="product-description">
              <p>{project.description}</p>
            </div>
          </div>
          <div className="product-add-to-cart">Add to bag</div>
        </div>
      </div>
      <TopPicks />
    </section>
  );
};

export default DetailsPage;
