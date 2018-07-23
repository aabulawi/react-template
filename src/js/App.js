import React, { Component } from "react";
import styled, { css } from 'react-emotion'

export default function App(){
    return (
      <StyledDiv>
          Cheese
      </StyledDiv>
    );
}

const StyledDiv = styled.div`
    margin: 0 auto;
    display: flex;;
    background-color: red
`;