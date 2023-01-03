import styled from "vue3-styled-components";

export const AcessButton = styled.button`
  width: 26.31rem;
  height: 4.5rem;
  background-image: linear-gradient(to right, #00dcd9, #059da6);
  border-radius: 1.25rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 0) and (max-width: 767px) {
    width: 18.9rem;
  }
  :active {
    transform: scale(0.9);
  }
`;

export const SendButton = styled.button`
  width: 20rem;
  height: 5rem;
  background-image: linear-gradient(to right, #00dcd9, #059da6);
  border-radius: 1.25rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 0) and (max-width: 767px) {
    width: 18.9rem;
  }
  :active {
    transform: scale(0.9);
  }
`;

export const ContactButton = styled.button`
  width: 15rem;
  height: 5rem;
  background-image: linear-gradient(to right, #00dcd9, #059da6);
  border-radius: 1.25rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  @media (min-width: 0) and (max-width: 767px) {
    width: 18.9rem;
  }
  :active {
    transform: scale(0.9);
  }
`;
