// Dependencies
import React from "react"

// Components
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const LayoutOne = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default LayoutOne;
