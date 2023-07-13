import styled from 'styled-components';

const MainContactWrapper = styled.section`
  border-top: 1px solid #ddd;
  height: 100vh;
  padding: 30px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  .form-row {
    padding-bottom: 20px;

    & > div {
      display: flex;
      align-items: flex-start;
      margin: 10px 0;
    }

    label {
      display: inline-block;
      width: 200px;
      font-size: 14px;
      font-weight: 600;-
      line-height: 30px;
    }

    input,
    textarea {
      display: block;
      width: 100%;
      height: 30px;
      line-height: 30px;
      border: 0;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 10px;

      &:focus {
        outline: 0;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
      }

      &.error {
        box-shadow: 0 0 15px rgba(255, 0, 0, 0.4);
      }
    }

    textarea {
      height: 90px;
      resize: none;
      overflow: auto;
    }

    p {
      margin-bottom: -30px;
      margin-left: 170px;
      font-size: 12px;
      line-height: 20px;
      padding-bottom: 10px;
      color: #f00;  
    }
  }

  .form-row.button-group {
    padding-top: 20px;
    padding-left: 170px;

    button {
      width: calc(50% - 10px);
      border: none;
      background-color: #444;
      color: #fff;
      border-radius: 5px;
      height: 48px;
      line-height: 48px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;

      &:first-child {
        margin-right: 20px;
        border: 1px solid #999;
        background-color: #fff;
        color: #444;
      }
    }
  }
`;

export { MainContactWrapper, FormWrapper };
