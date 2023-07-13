import { createGlobalStyle } from 'styled-components';

const CommonStyle = createGlobalStyle`
  h2.main-text {
    font-size: 18px;
    font-weight: 600;
    color: #aaa;
  }

  h3.main-text {
    font-size: 30px;
    font-weight :700;
  }

  p.title-description {
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
