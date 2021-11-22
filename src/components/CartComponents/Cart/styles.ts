import styled from "styled-components";
import { backgroundGreySave, greyBorderCart } from "src/shared/themes";

export const CartArea = styled.div`
  padding: 20px 50px;
`;

export const CartItemsArea = styled.div`
  padding: 25px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  max-width: 352px;
  max-height: 350px;
  overflow-y: auto;
  border-top: 2px solid ${greyBorderCart};
  border-bottom: 2px solid ${greyBorderCart};
  @media (max-width: 768px) {
    max-height: 350px;
    width: 100%;
    max-width: 100%;
  }
`;

export const ContainerCart = styled.div`
  width: 100%;
`;

export const CartTitleText = styled.h2`
  font-size: 24px;
  margin: 30px 20px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const TotalCartText = styled.h2`
  margin: 40px 20px;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const TotalCartPrice = styled.span`
  font-weight: 300;
  font-style: normal;
`;

export const AreaButtonSave = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 27px 0;
  width: 100%;
  background-color: ${backgroundGreySave};
  border-top: 2px solid ${greyBorderCart};
  text-align: center;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const EmptyCartArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const EmptyCartImg = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

export const EmptyCartText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`;
