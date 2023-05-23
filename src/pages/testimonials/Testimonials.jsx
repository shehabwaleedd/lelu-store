import React from "react";
// Import Swiper React components
import "./Testimonials.css"
import { Data } from './Data'
import { useTranslation } from 'react-i18next'


const Testimonials = () => {
  const { t } = useTranslation()
  return (
    <section className="testimonial section">
      <h2 className="section__title">Our Clients' Testimonials</h2>
      <div className="testimonials__container containered">
        {Data.map(({ id, image, title, comment, job, url, location }) => {
          return (
            <div className="testimonial__grid" key={id}>
              <div className="testimonial__card">
                <div className="testimonial__card_combined_img_title-combined">
                  <a href={url} target="_blank" rel="noreferrer">
                    <img src={image} className="testimonial__img" alt="" />
                  </a>
                  <div className="testimonial__card_combined_title_job-combined">
                    <h3 className="testimonial__name">
                      {title}, <span className="testimonial__job">{job}</span>
                    </h3>
                    <span className="testimonial__location">{location}</span>
                  </div>
                </div>
                <p className="testimonial__description">{comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Testimonials