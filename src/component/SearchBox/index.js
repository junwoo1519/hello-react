import React, {useState} from "react";
import styled from "styled-components";
import {ImSearch} from "react-icons/im";
import {useHistory} from "react-router-dom";

const SearchBox = () => {

    const history = useHistory();

    const [query, setQuery] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        history.push(`/photo/search/${query}`)
    }

    const onChange = (event) => {
        setQuery(event.target.value)
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Label>
                    <Input type="text"
                           value={query}
                        onChange={onChange}
                    />
                </Label>
                <Button>
                    <ImSearch/>
                </Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  max-width: 700px;
  margin: 30px auto;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const Label = styled.label`
  flex: 1;
  display: flex;
  height: 40px;
  border: 1px solid #aaa;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 8px;
  border: none;
  background-color: transparent;
  color: #333;

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100px;
  color: #fff;
  background-color: #aaa;
  font-size: 20px;
  cursor: pointer;
  border: 0;
`;

export default SearchBox;