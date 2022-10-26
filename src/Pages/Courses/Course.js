import React from "react";
import "./Course.css";
import { BsStopwatch, BsBookmark } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Course = ({ course }) => {
  const {
    author,
    lecture,
    section,
    duration,
    price,
    level,
    rating,
    courseImg,
    title,
  } = course;
  return (
    <div>
      <div className="course-card ">
        <div className="card-image">
          <img src={courseImg} alt="img" />
        </div>
        <div className="px-3">
          <h2 className="cart-title"> {title}</h2>
          <div className="coures-duration py-2">
            <p className="flex  items-center">
              {" "}
              <span className="pr-2">
                <BsStopwatch />
              </span>{" "}
              <span>{duration}</span>
            </p>
            <p className="flex items-center">
              <span className="pr-2">
                <MdTrendingUp />{" "}
              </span>{" "}
              <span>{level}</span>
            </p>
          </div>
          <div>
            <p className="text-orange-400 flex  items-center pb-3">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStarHalfAlt />
              </span>
              <span className="pl-5">{rating}</span>
            </p>
          </div>
          <div className="flex justify-between items-center card-footer-container ">
            <div className="flex  card-footer items-center">
              <img src={author.thumnailImg} alt="img" />
              <p className="pl-2">{author.name}</p>
            </div>
            <p className="text-orange-400">
              <BsBookmark />
            </p>
          </div>
        </div>
      </div>
      {/* <div className="card  bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                </div> */}
    </div>
  );
};

export default Course;
