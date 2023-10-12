import { createGlobalStyle } from "styled-components";

const CommonStyle = createGlobalStyle`
  :root {
    --primary: #a6e2f5;
    --black: black;
    --black-10: rgba(0, 0, 0, 0.1);
    --black-20: rgba(0, 0, 0, 0.2);
    --black-30: rgba(0, 0, 0, 0.3);
    --black-40: rgba(0, 0, 0, 0.4);
    --black-50: rgba(0, 0, 0, 0.5);
    --black-60: rgba(0, 0, 0, 0.6);
    --black-70: rgba(0, 0, 0, 0.7);
    --black-80: rgba(0, 0, 0, 0.8);
    --black-90: rgba(0, 0, 0, 0.9);
    --white: white;

    --border: var(--black-10);

    --text-default: #4d4d4d;
    --text-content: #555;
    --text-sub: #bbb;

    --header-bg: #ffffff77;
    --section-bg: #f1f1f1;
  }

  h2 {
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    color: var(--text-sub);
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
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    color: var(--text-content);

    a {
      color: blue;
    }
  }

  button {
    cursor: pointer;
  }
  
  .ico-btn {
    border: none;
    background-color: var(--white);
    border-radius: 25px;
    width: 50px;
    height: 50px;

    svg {
      font-size: 20px;
    }
  }
`;

export default CommonStyle;
