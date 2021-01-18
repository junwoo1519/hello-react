import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";

const PhotoList = ({photos}) => {
    return (
        <Container>
            <Row>
                {
                    photos.map((item, index) => (
                        <Col key={index}>
                            <PhotoCard {...item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const Col = styled.div`
  width: 33.333333%;
  padding: 15px;
`;

export default PhotoList;