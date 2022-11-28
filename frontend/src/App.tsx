import './App.css';
import { Room } from './components/room/Room';
import { useEffect, useState } from 'react';
import React from 'react';
import  {Nav} from './components/nav/nav';
import  {Footer} from './components/footer/footer';
import CSS from 'csstype';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const waveStyles: CSS.Properties = {
  background: 'url(' + process.env.PUBLIC_URL + 'SVG/wave.svg) center center/cover no-repeat',
  height: '20rem',
};
const waveDownStyles: CSS.Properties = {
  background: 'url(' + process.env.PUBLIC_URL + 'SVG/wave_down.svg) center center/cover no-repeat',
  height: '20rem',
};
const wave2Styles: CSS.Properties = {
  background: 'url(' + process.env.PUBLIC_URL + 'SVG/wave2.svg) center center/cover no-repeat',
  height: '22rem',
};
const wave2DownStyles: CSS.Properties = {
  background: 'url(' + process.env.PUBLIC_URL + 'SVG/wave2_down.svg) center center/cover no-repeat',
  height: '22rem',
};
const row1Styles: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  height: '40rem',
}
const row1DivStyles: CSS.Properties = {
  flexGrow: '1',
  textAlign: 'center',
  flex: '1',
  background: '#FFE779',
  lineHeight: '6'
}
const row3Styles: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  height: '40rem',
}
const row3DivStyles: CSS.Properties = {
  flexGrow: '1',
  textAlign: 'center',
  flex: '1',
  background: '#6DAFA7',
  lineHeight: '6'
}

const row1DivImgStyle: CSS.Properties = {
  flexGrow: '1',
  textAlign: 'center',
  background: 'url(' + process.env.PUBLIC_URL + 'SVG/6.svg) center center/cover no-repeat #FFE779',

  // height: '40rem',
  flex: '1',
  backgroundSize: 'cover',
}
const row3DivImgStyle: CSS.Properties = {
  flexGrow: '1',
  textAlign: 'center',
  background: 'url(' + process.env.PUBLIC_URL + 'SVG/4.svg) center center/cover no-repeat #6DAFA7',

  // height: '40rem',
  flex: '1',
  backgroundSize: 'cover',
}
const Home = () => {
  return (

    <div className='home' style={{width:'100%'}}>
        <div className='main'>
          
          <div style={waveStyles}></div>
              <div className='row-1' style={row1Styles}>
                <div style={waveStyles}></div>
                <div style={row1DivStyles}>
                  <h1>Use your Imagination!</h1>
                  <p>Lorem ipsum dolor sit amet, dadpeas elrjlka el al.</p>
                </div>
                <div style={row1DivImgStyle}></div>
              </div>
          <div style={waveDownStyles}></div>

          <div className='row-2'>
            <div><img src={process.env.PUBLIC_URL + 'SVG/5.svg'} alt="" /></div>
            <div><p>MARVELOUS ECO-SYSTEM & COMMUNITY</p></div>
          </div> 
          <div style={wave2Styles}></div>
          <div className='row-3' style={row3Styles}>
            <div style={row3DivStyles}><p>Lorem ipsum</p></div>
            <div style={row3DivImgStyle}></div>
          </div> 
          <div style={wave2DownStyles}></div>

          <div className='row-4'>
            <div>
              <h1>HASSLEFREE!</h1>
              <h2>Fund your goals in a Secure & Safe way!</h2>
              <p>Creating & contributing to campagns is easy!</p>
            </div>
            <div><img src={process.env.PUBLIC_URL + 'SVG/3.svg'} alt="" /></div>
          </div> 
        </div>
    </div>
  );
}
const App = ({ contract, currentUser, nearConfig, wallet}: any) => {  
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(Boolean);

  useEffect(() => {

    const initNear = async () => {
      const c = await contract.getRooms();
      // console.log(c,"TOTO");
      // if (!c) {
      //   c = {};
      // }
      // /*  DEBUG */
      // console
      Object.keys(data).map((k:any)=>{
        console.log(c[k]);
      });
      setData(c);    
    }
   
    initNear();
  }, []);
    
    return (
      <Router >
        
        <Nav data={{}}/>
        <div className='App'>
          <Routes>
            <Route path="/rooms/" element={Room({data})}></Route>
            <Route path="/about" /*element={<Home/>}*/></Route>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    );
}


export default App;
