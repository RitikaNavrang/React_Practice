import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Screen from './Screen';
import reportWebVitals from './reportWebVitals';
import PlayButton from './PlayButtons';
import EventHandlerButton from './EventHandlerButton';
import SmashButton from './SmashButton';
import Gallery from './Gallery';
import Snapshot1 from './Snapshot1';
import Mutation1 from './Mutation1';
import Mutation2 from './Mutation2';
import Arrays from './UpdatingArray1';
import Arrays2 from './UpdatingArrays2';
import UseImmerfunction from './UseImmer';
import IMSPage from './IMSPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Screen />
    <PlayButton/>
    <EventHandlerButton/>
    <SmashButton/> 
    <Gallery/>
    <Snapshot1/>
    <Mutation1/>
    <Mutation2/>
    <Arrays/>
    <Arrays2/> 
    <UseImmerfunction/>*/}
    <IMSPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
