import styled from "styled-components";

export const CartArea = styled.div`
  padding: 20px 50px;
`;

export const CartItemsArea = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ContainerCart = styled.div`
  max-width: 317px;
`;

export const CartTitleText = styled.h2`
  font-size: 24px;
`;

export const TotalCartText = styled.h2`
  margin: 25px 0;
  font-size: 24px;
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
  background-color: #f4f4f4;
  border-top: 2px solid #e2e2e2;
  text-align: center;
`;

export const EmptyCartArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;

export const EmptyCartImg = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

export const EmptyCartText = styled.p`
  text-align: center;
  font-weight: bold;
`;
