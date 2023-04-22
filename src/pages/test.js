import React from "react";
import styled from "styled-components";
import Layout from "../components/siteLayout";
import { Helmet } from "react-helmet";
import Slider from "../components/Slider";

const CustomBox = styled.div``;

const Test = () => {
  return (
    <CustomBox>
      <Layout>
        <Helmet>
          <body id="body" className="test" />
        </Helmet>

        <Slider>
          <img src="/assets/Slider1.webp" alt="slide 1" />
          <img src="/assets/Slider2.webp" alt="slide 2" />
          <img src="/assets/Slider3.webp" alt="slide 3" />
        </Slider>

      </Layout>
    </CustomBox>
  );
}

export default Test;
