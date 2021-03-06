import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import bgImage from './img/bg.jpg';
import App from './App';


const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    height: 100vh;
    font-family: Arial,Helvetica,sans-serif;
  }
`;


ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);

