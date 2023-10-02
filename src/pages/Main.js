import React from "react";
// import NavBar from "../components/main/NavBar";
import Features from "../components/main/Features";
import Landing from "../components/main/Landing";
import HowItWorks from "../components/main/HowItWorks";
// import Footer from "../components/main/Footer";
import ".././styles/styles.css";

const Main = () => {
  return (
    <>
      {/* <div>
        <NavBar />
      </div> */}
      <section>
        <Landing />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <HowItWorks />
      </section>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
};

export default Main;
