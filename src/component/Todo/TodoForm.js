import React, {useState} from "react";
import styled from "styled-components";
import {Button} from "../Button/Button.Styled";

const TodoForm = ({onSubmit}) => {

    const [data, setData] = useState({})

    const onClick = () => {
        onSubmit(data);
    }

    const onChange =(e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value()
        })
    }

    return (
        <Container>
            <label>
                <span>제목</span>
                <input type="text"
                       name={"title"}
                       value={data.title}
                       onChange={onChange}
                />
            </label>
            <label>
                <span>내용</span>
                <input type="text"/>
            </label>
            <Button onClick={onClick}>추가</Button>
        </Container>
    )
}

const Container = styled.div`

`;

export default TodoForm;