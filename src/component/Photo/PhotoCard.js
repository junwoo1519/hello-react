import React from "react";
import styled from "styled-components";
import {AiOutlineHeart} from "react-icons/ai";

const PhotoCard = (props) => {

    const {
        id,
        created_at,
        likes,
        description,
        user,
        urls
    } = props;

    return (
        <Container>
            <Thumb>
                <img src={urls.regular} alt=""/>
            </Thumb>
            <Desc>
                <Avatar>
                    <img src={user.profile_image.medium} alt=""/>
                </Avatar>
                <Info>
                    <p>{user.username}</p>
                </Info>
            </Desc>
            <Likes>
                <AiOutlineHeart/> {likes}
            </Likes>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`;

const Thumb = styled.div`
  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.23) 100%);
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 16px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  margin-right: 10px;

  img {
    width: 30px;
    height: 30px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  p {
    color: #fff;
    font-size: 13px;
    font-weight: 400;
  }
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  padding: 6px 9px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  font-size: 13px;
  background-color: #f1f1f1;
  color: #b31515;

  svg {
    margin-right: 3px;
    font-size: 14px;
  }
`;

export default PhotoCard;