import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <header className="header__container">
        <div className="header__description">
          <h1>USA's most awarded online Library platform</h1>
          <h2>
            Find your dream book with<span className="purple">Library</span>
          </h2>
          <Link to="#features">
            <button className="btn">Browse Books</button>
          </Link>
        </div>
        <figure className="header__ing--wrapper">
          <img src={UndrawBooks} alt="" />
        </figure>
      </header>
    </section>
  );
};

export default Landing;
