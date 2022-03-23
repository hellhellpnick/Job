import React from 'react';

import './app.scss';
import AppHeader from "../app-header"
import AppMain from "../app-main"
import AppFooter from "../app-footer"

import styled from "styled-components"


const CenterBlock = styled.div `
    margin: 0 auto;
    width: 1120px;
`;


function App() {
  return (
    <div className="app">
      <AppHeader CenterBlock={CenterBlock}/>
      <AppMain CenterBlock={CenterBlock}/>
      <AppFooter CenterBlock={CenterBlock}/>
    </div>
  )
}

export default App;
