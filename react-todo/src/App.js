import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    
    const text = `당신은 어썸한가요?`;
    const condition = true;
    const textStyle = { color: 'red'};
    const style = {
      backgroundColor : 'grey',
      border: '1px solid #000',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all',
    };


    return (
       <div className="my-div">
          {/* 주석 */}
          <h1 style={textStyle}>리애트 안녕!</h1>
          <h2>{text}</h2>
          { condition && '보여주세요' }
          <div style={style}
            //주석1
            //주석2
            /* 주석 3*/
          ></div>
        </div>
    );
  }
}

export default App;
