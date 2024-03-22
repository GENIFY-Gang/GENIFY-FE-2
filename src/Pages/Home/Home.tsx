import React from "react";
import { Button, Card, Layout } from "antd";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import prompTHomePhoto from "./art-image-3.jpg";
import './Home.css';
import NavigationBar from "../Navigation/NavigationBar";
import { Content } from "antd/es/layout/layout";

const Home = () => {
  return (
    <>
     <Layout style={{background:"white" }}>
      <NavigationBar /> {/* NavigationBar as header */}
      <Content style={{ marginTop: '64px',background:"white" }}>
      <div className="home-container">
        <div className="home-container-left">
          <h1>Introducing  <span className="violet">Genify</span></h1>
          <p>
          Welcome to GENIFY, your go-to platform for effortless prompt generation. Simplify instructing Large Language Models with our user-friendly interface. Input vague prompts, and witness the magic as GENIFY transforms them into well-structured instructions. Tailor your models effortlessly, saving time and ensuring precise interactions. Whether you're a developer, content creator, or researcher, GENIFY empowers you to harness the full potential of Large Language Models with ease. Unlock the art of effective instruction at GENIFY.
          </p>
        </div>
        <div className="home-container-right">
          <img src={prompTHomePhoto} alt="home-image" />
        </div>
      </div>
      </Content>
      <Footer  />
    </Layout>
    </>
  );
};

export default Home;


