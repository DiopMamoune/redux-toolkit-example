/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../../features/cart/cartSlice";

const Product = () => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart());
  };

  return (
    <Wrapper>
      <Image src="https://placehold.co/300x300" height="300" />
      <Button onClick={onAddToCart}>Ajouter au panier</Button>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
`;

const Image = styled.img`
  display: block;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #00a753;
  color: white;
  height: 40px;
  border: 0;
  padding: 0 20px;
  border-radius: 10px;
  cursor: pointer;
`;
