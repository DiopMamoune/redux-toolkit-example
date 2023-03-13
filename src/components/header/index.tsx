import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clear } from "../../features/cart/cartSlice";
import { RootState } from "../../store";

const Header = () => {
  const count = useSelector((state: RootState) => state.cart.countProducts);

  const dispatch = useDispatch();

  const onClear = () => {
    dispatch(clear());
  };

  return (
    <Wrapper>
      <Logo>E-Commerce</Logo>
      <RightSection>
        <Cart>Panier: {count}</Cart>
        <Remove href="#remove" onClick={onClear}>
          x
        </Remove>
      </RightSection>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  height: 50px;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.section`
  font-size: 20px;
`;

const Cart = styled.section`
  font-size: 16px;
`;

const Remove = styled.a`
  font-size: 20px;
  color: red;
  text-decoration: none;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
