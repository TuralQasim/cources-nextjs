import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

type SliderDataItem = {
  id: number;
  bg_img: string;
  slider_text: string;
  title: string;
  total_courses: string;
  courses_text: string;
  students: string;
  st_text: string;
  review: string;
  review_text: string;
};
const slider_data: SliderDataItem[] = [
  {
    id: 1,
    bg_img: "/assets/img/slider/slider-bg-01.jpg",
    slider_text: "Learn New Skills & Popular Courses",
    title: "For Every Student, Every Classroom.",
    total_courses: "3.5k",
    courses_text: "Free Pro Courses",
    students: "235k",
    st_text: "Worldwide Students",
    review: "4.7",
    review_text: "Worldwide Review",
  },
  {
    id: 2,
    bg_img: "/assets/img/slider/slider-bg-02.jpg",
    slider_text: "Learn New Skills & Popular Courses",
    title: "For Every Student, Every Classroom.",
    total_courses: "3.5k",
    courses_text: "Free Pro Courses",
    students: "235k",
    st_text: "Worldwide Students",
    review: "4.7",
    review_text: "Worldwide Review",
  },
];

type settingsType = {
  dots: boolean;
  arrows: boolean;
};
type responsiveItem = {
  breakpoint: number;
  settings: settingsType;
};
type settingType = {
  autoplay: boolean;
  autoplaySpeed: number;
  dots: boolean;
  fade: boolean;
  arrows: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: responsiveItem[];
};

// slider setting
const setting: settingType = {
  autoplay: false,
  autoplaySpeed: 4000,
  dots: false,
  fade: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
      },
    },
  ],
};

const HeroSlider: React.FC = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <section className="slider-area">
        <div className="slider-active slider-arrow ">
          <Slider {...setting} ref={sliderRef}>
            {slider_data.map((item: SliderDataItem) => (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => sliderRef?.current?.slickNext()}
                  className="slick-prev slick-arrow"
                >
                  <i className="fi fi-ss-angle-left"></i>
                </button>
                <button
                  type="button"
                  onClick={() => sliderRef?.current?.slickPrev()}
                  className="slick-next slick-arrow"
                >
                  <i className="fi fi-ss-angle-right"></i>
                </button>

                <div
                  className="slider-item slider-bg-height d-flex align-items-center p-relative"
                  style={{ backgroundImage: `url(${item.bg_img})` }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-12">
                        <div className="slider-content">
                          <span className="slider-text mb-15">
                            {item.slider_text}
                          </span>
                          <h2 className="slider-title mb-65">{item.title}</h2>
                          <div className="slider-btn">
                            <Link className="tp-btn mr-5" href="/course-list">
                              Explore Courses
                            </Link>{" "}
                            <Link
                              className="tp-s-border-btn"
                              href="/course-list"
                            >
                              Watch Videos
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                        <div className="slider-info-list">
                          <ul>
                            <li>
                              <span>{item.total_courses}</span>{" "}
                              {item.courses_text}
                            </li>
                            <li>
                              <span>{item.students}</span>
                              {item.st_text}
                            </li>
                            <li>
                              <span>
                                {item.review} <i className="fi fi-ss-star"></i>
                              </span>
                              {item.review_text}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
