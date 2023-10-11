import { createGlobalStyle } from "styled-components";

const CommonStyle = createGlobalStyle`
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #aaa;
  }

  h3 {
    font-size: 30px;
    font-weight: 700;
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
    margin-bottom: 30px;

    a {
      color: blue;
    }
  }
`;

export default CommonStyle;
