import React from "react";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import prompTHomePhoto from "./art-image-3.jpg";
import './Home.css';

const Home = () => {
  const logged = window.localStorage.getItem("isLoggedIn");
  
  return (
    <>
      <Navigation />
      <div className="flex items-center h-auto w-auto mt-40 bg-white px-40" >
        <div className="w-auto mx-auto flex justify-between">
          {/* Left side: Description */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-auto pr-40 text-left">
            <h1 className="text-5xl font-semibold">Introducing GENIFY</h1>
            <p className="text-md mt-10">
            Welcome to GENIFY, your go-to platform for effortless prompt generation. Simplify instructing Large Language Models with our user-friendly interface. Input vague prompts, and witness the magic as GENIFY transforms them into well-structured instructions. Tailor your models effortlessly, saving time and ensuring precise interactions. Whether you're a developer, content creator, or researcher, GENIFY empowers you to harness the full potential of Large Language Models with ease. Unlock the art of effective instruction at GENIFY.
            </p>
            {logged ? (
        <Link to="/prompt-generator">
          <Button
            className="bg-black rounded-full mt-5"
            type="primary"
            size="large"
          >
            Try GENIFY
          </Button>
        </Link>
      ) : (
        <Link to="/login">
          <Button
            className="bg-black rounded-full mt-5"
            type="primary"
            size="large"
          >
            Try GENIFY
          </Button>
        </Link>
      )}
            {/* Example prompt code */}
            {/* <Card className="mt-8">
              <h3 className="text-lg font-bold mb-4">Example Prompt Code:</h3>
              <div className="bg-gray-200 p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  const generatePrompt // Your prompt generation logic here
                </pre>
              </div>
            </Card> */}
            </div>
            
          </div>
          {/* Right side: Image */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={prompTHomePhoto}
              alt="GENIFY"
              className="w-4/5 h-auto"
            />
          </div>
          {/* Container showcasing modern technology */}
          {/* <div className="w-1/2 ml-32">
            <div className="bg-white mb-5 p-6 rounded-lg shadow-md mt-20 w-[720px]">
              <h2 className="text-2xl font-bold mb-4">
                Explore Modern Technology
              </h2>
              <p className="text-lg mb-4">
                Discover the latest advancements in AI, machine learning, and
                natural language processing.
              </p>
              <ul className="list-disc ml-6">
                <li>AI-powered applications</li>
                <li>Machine learning algorithms</li>
                <li>Deep learning frameworks</li>
                <li>Natural language processing tools</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;


