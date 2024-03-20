import React from "react";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import prompTHomePhoto from "./promptHome.png";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="flex items-center h-auto w-auto mt-8 bg-white" >
        <div className="max-w-4xl mx-auto flex justify-between">
          {/* Left side: Description */}
          <div className="w-1/2 mb-64">
            <div className="w-[420px] pr-28">
            <h1 className="text-4xl font-bold mt-44">Welcome to GENIFY</h1>
            <p className="text-lg mt-10">
              GENIFY is your AI Prompt Generating System. It uses advanced
              algorithms to generate creative prompts, sparking your imagination
              and inspiring your writing, storytelling, or creative endeavors.
            </p>
            <Link to="/prompt-generator">
              <Button
                className="bg-black rounded-full mt-5"
                type="primary"
                size="large"
              >
                Try GENIFY
              </Button>
            </Link>
            {/* Example prompt code */}
            <Card className="mt-8">
              <h3 className="text-lg font-bold mb-4">Example Prompt Code:</h3>
              <div className="bg-gray-200 p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  const generatePrompt // Your prompt generation logic here
                </pre>
              </div>
            </Card>
            </div>
            
          </div>
          {/* Right side: Image */}
          <div className="w-full ">
            <img
              src={prompTHomePhoto}
              alt="GENIFY"
              className="w-full h-auto rounded-full mt-44"
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


