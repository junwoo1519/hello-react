import React from "react";
import styled from "styled-components";

const PageTitle = (props) => {
    return (
        <Container>
            <h2>{props.text}</h2>
        </Container>
    )
}

const Container = styled.div`
  text-align: center;
  margin: 30px;
  
  h2 {
    font-size: 40px;
    text-transform: uppercase;
  }
`

export default PageTitle;