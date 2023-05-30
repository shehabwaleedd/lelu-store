import React, { useEffect } from "react";
import gsap from "gsap";
import "./DetailsPage.css";
import { useParams } from "react-router-dom";
import Data from "../Data";
import lelu1 from "../../../../assets/lelu3.jpg";

const DetailsPage = () => {

  const { id } = useParams();
  const project = Data[id];


  return (
    <div className="containerrr">
      <div className="product-wrapper">
        <div className="product-img">
          <img src={project.img} alt={project.title} />
        </div>
        <div className="product-info">
          <div className="product-description">
            <div className="product-title">{project.name}</div>
            <div className="product-price">€{project.price}</div>
            <div className="product-colors">
              <label><input type="radio" name="select" /><span className="red"></span></label>
              <label><input type="radio" name="select" /><span className="blue"></span></label>
              <label><input type="radio" name="select" /><span className="yellow"></span></label>
              <label><input type="radio" name="select" /><span className="mint"></span></label>
              <label><input type="radio" name="select" /><span className="black"></span></label>
            </div>
            <div className="product-color">Color: Combat Khaki</div>
            <div className="product-size">Product Size: </div>
            <div className="product-size">
              <label><input type="radio" name="select" /><span>42</span></label>
              <label><input type="radio" name="select" /><span>44</span></label>
              <label><input type="radio" name="select" /><span>46</span></label>
              <label><input type="radio" name="select" /><span>48</span></label>
              <label><input type="radio" name="select" /><span>50</span></label>
            </div>
            <div className="product-description">
              <p>{project.description}</p>
            </div>
          </div>
          <div className="product-add-to-cart">Add to bag</div>
        </div>
      </div>
    </div>
  );
};


export default DetailsPage;
