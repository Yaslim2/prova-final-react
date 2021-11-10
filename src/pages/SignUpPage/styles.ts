import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  color: #707070;
  letter-spacing: 0;
`;

export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DescriptionTextArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextDescription = styled.h1`
  font-size: 65px;
`;

export const TextDescriptionHigher = styled.h1`
  font-size: 83px;
`;

export const Button = styled.button`
  background-color: #b5c401;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 39px;
  font-family: "Poppins", sans-serif;
  font-style: italic;
  border: none;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  border-radius: 100px;
  color: #fff;
  margin: 15px 0px;
`;

export const RegistrationArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 352px;
`;

export const RegistrationText = styled.h1`
  font-size: 35px;
`;

export const FormArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #dddddd;
  border-radius: 14px;
  margin: 15px 0px;
`;

export const Form = styled.form`
  max-width: 352px;
`;

export const InputForm = styled.input`
  width: 100%;
  color: #9d9d9d;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: 17px;
  border: none;
  background: none;
  padding: 25px;
  border-bottom: 2px solid #ebebeb;
  &::placeholder {
    color: #9d9d9d;
  }
`;

export const ButtonRegister = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b5c401;
  border: none;
  background: none;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: italic;
  padding: 35px;
  width: 100%;
  text-align: center;
`;

export const ButtonRegisterText = styled.h1`
  font-size: 35px;
  margin-right: 10px;
`;

export const ButtonRegisterArrow = styled.img`
  height: 30px;
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  border: none;
  background: none;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: italic;
  width: 100%;
  text-align: center;
`;

export const ButtonBackArrow = styled.img`
  height: 30px;
`;

export const ButtonBackText = styled.h1`
  font-size: 35px;
  margin-left: 10px;
`;
