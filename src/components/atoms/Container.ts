import styled from "vue3-styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #205caa, #276dac);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 30rem;
  height: 38rem;
  background: #f8f8f8;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.form`
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: -1.5rem 0 1.8rem 0;
  @media (min-width: 0) and (max-width: 767px) {
    width: 22rem;
  }
`;

export const IconContainer = styled.div`
  position: relative;
  top: 3.6rem;
  left: -11rem;
  @media (min-width: 0px) and (max-width: 767px) {
    left: -8.5rem;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 3rem;
  width: 73.4rem;
  height: 42.5rem;
  border-radius: 0.5rem;
  background: #f8f8f8;
  margin: 3rem 0 1rem 0;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.8);
  @media (min-width: 0) and (max-width: 767px) {
    width: 100vw;
    height: 1000rem;
    border-radius: 0;
    margin: 0;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 45rem;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 62rem;
  }
`;

export const TextContainer = styled.div`
  width: 67rem;
  height: 24rem;
  border-radius: 0.5rem;
  background: #f8f8f8;
  margin: 2rem 0 2rem 0;
  border: 1px solid #ccc;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
`;

export const MsgContainer = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  padding: 0 2rem;
  width: 30rem;
`;

export const MyMsgContainer = styled.div`
  background: #f1f1f1;
  border-radius: 0.5rem;
  width: 30rem;
  padding: 0 2rem;
  margin: 0 0 2rem 0;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.1rem 3rem;
  width: 25rem;
  height: 42.5rem;
  border-radius: 0.5rem;
  background: #f8f8f8;
  margin: 3rem 1rem 1rem 0;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.8);

  @media (min-width: 0) and (max-width: 767px) {
    width: 100vw;
    height: 1000rem;
    border-radius: 0;
    margin: 0;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 45rem;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 62rem;
  }
`;
