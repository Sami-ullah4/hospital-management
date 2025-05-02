import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Main from "./components/Main";

const Article = () => {
  return (
    <>
      <section className="bg-[#F8F9FC]">
        <Navbar />
        <Main />

        <Footer />
      </section>
    </>
  );
};

export default Article;
