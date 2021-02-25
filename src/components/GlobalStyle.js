import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size: 112.5%;
  margin: 0 auto;
  max-width: 600px;
  height: 100vh;
  background: rgb(25,50,81);
  background: linear-gradient(354deg, rgba(25,50,81,1) 22%, rgba(95,177,221,1) 83%);

  @media (min-width: 400px) {
    background-color: cornflowerblue;
  }
}

input,
button {
  font-size: inherit;
  padding: 5px;
}

`
