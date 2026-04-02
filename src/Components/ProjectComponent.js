
import "./ProjectComponent.css";
import SwitchTheme from "./MyProject/SwitchTheme";
import WeatherApi from "./MyProject/WeatherApi";
import Counter from "./MyProject/Counter";
import UserProfiles from "./Navbar/UserProfile/UserProfiles";
import RandomGenerated from "./Navbar/ClassProject/Calculator/RandomGenerated";
import LettersCalculator from "./Navbar/ClassProject/Calculator/LettersCalculator";
import CassWithdraw from "./Navbar/ClassProject/CashWithdraw/CassWithdraw";
import CountEvenAndOdd from "./Navbar/ClassProject/EvenOdd/CountEvenAndOdd";
import Speedometer from "./Navbar/ClassProject/Project/Speedometer";
import FruitsCounter from "./Navbar/ClassProject/FruitsCounter/FruitsCounter";
//import HideComponent from "./Navbar/ClassProject/ShowHide/HideComponent";
//import LoginLogout from "./Navbar/ClassProject/Project/LoginLogout";
import SimpleTodoList from "./Navbar/ClassProject/TodoList/SimpleTodoList";
import GoogleSearch from "./Navbar/ClassProject/Serach/GoogleSearch";
import Feedback from "./Navbar/ClassProject/FeedBack/Feedback";


import React, { useState } from 'react';

const ProjectComponent = () => {
 
  const [activeTab, setActiveTab] = useState('Weather');

  const menuItems = [
    { id: 'Weather', component: <WeatherApi />, label: 'Weather' },
    { id: 'Profile', component: <UserProfiles />, label: 'Profile' },
    { id: 'Counter', component: <Counter />, label: 'Counter' },
    { id: 'Todo', component: <SimpleTodoList />, label: 'Tasks' },
    { id: 'Stats', component: <CountEvenAndOdd />, label: 'EvenOdd' },
    { id: 'Speed', component: <Speedometer />, label: 'Speed' },
    { id: 'Finance', component: <CassWithdraw />, label: 'Withdraw' },
    { id: 'Search', component: <GoogleSearch />, label: 'Search' },
    { id: 'Feedback', component: <Feedback />, label: 'Feedback' },
    { id: 'FruitEat', component: <FruitsCounter />, label: 'FruitEat' },
    { id: 'lettercount', component: <LettersCalculator />, label: 'letterCounter' },
    { id: 'RandomNumber', component: <RandomGenerated />, label: 'RandomNumber' }
    
  ];

  return (
    <div className="app-container">

      <nav className="top-nav">
        <div className="nav-scroll">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

    
      <main className="display-area">
        <div className="component-window">
          {menuItems.find((item) => item.id === activeTab)?.component}
        </div>
      </main>
      
    
      <div className="floating-theme">
        <SwitchTheme />
      </div>
    </div>
  );
};

export default ProjectComponent;