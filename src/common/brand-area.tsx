import React from "react";
import Slider from "react-slick";
import brands_data from "../data/brands-data";

type blandDataItem = {
  img: string;
};
// slider setting
type settingsType = {
  slidesToShow: number;
  slidesToScroll: number;
  infinite?: boolean;
};
type responsiveItem = {
  breakpoint: number;
  settings: settingsType;
};
type settingType = {
  dots: boolean;
  infinite: boolean;
  autoplaySpeed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  arrows: boolean;
  responsive: responsiveItem[];
};
const setting: settingType = {
  dots: false,
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
type BrandAreaProps = {
  style_2: boolean;
  style_3: boolean;
  style_1: boolean;
  style_about: boolean;
};
const BrandArea: React.FC<BrandAreaProps> = ({
  style_2,
  style_3,
  style_1,
  style_about,
}) => {
  return (
    <>
      <section
        className={`brand-area ${style_1 ? "pb-110" : ""} ${
          style_2 ? "pt-110" : ""
        }  ${style_3 ? "pt-110 " : ""} ${
          style_about ? "pb-115" : ""
        } wow fadeInUp`}
        data-wow-duration="1s"
        data-wow-delay=".4s"
      >
        <div className="container">
          {style_about ? (
            ""
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title mb-65 text-center">
                  <h2 className="tp-section-title mb-20">Our Key Supporters</h2>
                </div>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-xl-12">
              <div className="brand-area tp-brand-active">
                <Slider {...setting}>
                  {brands_data.map((item: blandDataItem, i: number) => (
                    <div key={i} className="brand-item">
                      <a href="#">
                        <img src={item.img} alt="brand-logo" />
                      </a>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandArea;
