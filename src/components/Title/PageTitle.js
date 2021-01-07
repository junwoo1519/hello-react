import React from "react";
import styled from "styled-components";

const PageTitle = (props) => {
    return (
        <Container>
            <h1>{props.text}</h1>
        </Container>
    )
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 30px;
  h1 {
    font-size: 40px;
    text-transform: uppercase;
  }
`

export default PageTitle;