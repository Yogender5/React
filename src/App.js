import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
    <Counter></Counter>
  <Greet name ="Bruce" heroName ="Batman"> 
  <p>This is children props</p>
  </Greet>
    <Greet name ="steve" heroName ="Superman">
    <button >Action</button>
    </Greet>
    <Greet name="Diana" heroName ="Wonder Woman"/>
    <Welcome name ="Bruce" heroName ="Batman"></Welcome>
    <Welcome name ="steve" heroName ="Superman"></Welcome>
    <Welcome name="Diana" heroName ="Wonder Woman"></Welcome> 
     <Hello></Hello>
    <Message></Message> 
    <EventBind></EventBind>
    <ClassClick></ClassClick> 
    <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
