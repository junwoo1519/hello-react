import React from "react";
import styled from "styled-components";

const Detail = ({match}) => {

    console.log("match", match);

    const id = match.params.id

    return (
        <Container>
            {id}
        </Container>
    )
}

const Container = styled.div`

`;

export default Detail;