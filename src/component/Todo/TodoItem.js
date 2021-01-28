import React from "react";
import styled from "styled-components";
import cn from "classnames";

const TodoItem = ({title, description, completed, created_at, _id, navigate}) => {
    return (
        <Container className={cn("TodoItem", {completed})}
                   onClick={() => navigate(`/todo/detail/${_id}`)}>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{created_at}</span>
        </Container>
    )
}

const Container = styled.div`
  background-color: #f7f8f9;
  margin: 20px;
  padding: 25px;
  box-shadow: 1px 1px 6px rgba(0,0,0,.15);

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    color: #777;
    font-weight: 400;
    line-height: 1.6;
  }

  span {
    font-size: 12px;
    color: #777;
    font-weight: 400;
    margin-top: 15px;
  }
`;

export default TodoItem;