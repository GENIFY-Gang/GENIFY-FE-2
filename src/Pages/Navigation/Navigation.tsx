import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs } from "antd";
import logoImage from "../Home/logo.png";

const NavigationBar: React.FC<any> = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>("1");
  
  const logged = window.localStorage.getItem("isLoggedIn");
  const handleLogout = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("loggedData");
  };

  // Get the current location using useLocation hook from react-router-dom
  const location = useLocation();

  // Update the active tab key based on the current location
  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveTabKey("1");
        break;
      case "/prompt-generator":
        setActiveTabKey("2");
        break;
      case "/documentation":
        setActiveTabKey("3");
        break;
      case "/about-us":
        setActiveTabKey("4");
        break;
        case "/feed-back":
        setActiveTabKey("5");
        break;
      default:
        setActiveTabKey("1"); // Default to Home tab
        break;
    }
  }, [location.pathname]);

  return (
    <div className="bg-white flex ">
      <div className="bg-white px-4 py-2 fixed">
        <div className="flex items-center">
          <img
            src={logoImage}
            alt="Logo"
            className="h-8 w-auto mr-2 mb-5 ml-5"
          />
          <a href="/" className="text-3xl font-bold font-poppins mt-8">GENIFY</a>
        </div>
      </div>
      <div className="flex justify-center ml-96 mt-10 w-full fixed">
        <Tabs
          activeKey={activeTabKey}
          style={{ width: "100%", maxWidth: "850px" }}
          tabPosition="top"
          tabBarExtraContent={
            <div className="flex place-items-end ml-40">
              <div className="flex-grow"></div> {/* Spacer */}
              <div className="flex justify-end">
                  <Link to="/login" className="text-xl" onClick={handleLogout}>
                    Log Out
                  </Link>
              </div>
            </div>
          }
        >
          <Tabs.TabPane
            tab={
              <Link className="text-xl" to={"/"}>
                Home
              </Link>
            }
            key="1"
          ></Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <Link className="text-xl" to={"/prompt-generator"}>
                Generator
              </Link>
            }
            key="2"
          >
            {" "}
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <Link className="text-xl" to={"/documentation"}>
                Documentation
              </Link>
            }
            key="3"
          ></Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <Link className="text-xl" to={"/about-us"}>
                About Us
              </Link>
            }
            key="4"
          ></Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <Link className="text-xl" to={"/feed-back"}>
                FeedBack
              </Link>
            }
            key="5"
          ></Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default NavigationBar;
