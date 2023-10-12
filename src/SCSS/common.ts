import { createGlobalStyle } from "styled-components";

const CommonStyle = createGlobalStyle`
  h2 {
    font-size: 16px;
    font-weight: 700;
    color: #ccc;
  }

  h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    line-height: 20px;

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
