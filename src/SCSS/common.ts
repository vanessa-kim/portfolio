import { createGlobalStyle } from "styled-components";

const CommonStyle = createGlobalStyle`
  h2 {
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    color: #ccc;
    letter-spacing: 2px;
  }

  h3 {
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 20px;
  }

  h4 {
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 500;
    font-size: 18px;
  }

  p {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;

    a {
      color: blue;
    }
  }

  button {
    cursor: pointer;
  }
  
  .ico-btn {
    border: none;
    background-color: #fff;
    border-radius: 25px;
    width: 50px;
    height: 50px;

    svg {
      font-size: 20px;
    }
  }
`;

export default CommonStyle;
