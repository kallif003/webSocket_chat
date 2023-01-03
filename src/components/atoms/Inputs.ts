import styled from "vue3-styled-components";

export const Input = styled.input`
  background: #ffff;
  border: 1px solid #ccc;
  border-radius: 1.25rem;
  padding: 0.2rem 3.5rem;
  font-size: 1.1rem;
  width: 26.3125rem;
  height: 4.5rem;
  outline-color: #b4b4b4;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c0c0c0;
  }
  :-ms-input-placeholder {
    color: #c0c0c0;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    -moz-appearance: textfield;
  }

  @media (min-width: 0) and (max-width: 767px) {
    width: 19rem;
  } ;
`;

export const InputChat = styled.textarea`
  background: #ffff;
  border: 1px solid #ccc;
  border-radius: 1.25rem;
  padding: 1rem;
  font-size: 1.1rem;
  width: 40rem;
  height: 5rem;
  outline-color: #b4b4b4;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c0c0c0;
  }
  :-ms-input-placeholder {
    color: #c0c0c0;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    -moz-appearance: textfield;
  }

  @media (min-width: 0) and (max-width: 767px) {
    width: 19rem;
  } ;
`;
