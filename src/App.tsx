import {
  Footer,
  Header,
  Possibility,
  Features,
  WhatGPT3,
  Blog,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

import "./styles/global.css";

export default function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div className="container">
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
      </div>
      <Footer />
    </>
  );
}
