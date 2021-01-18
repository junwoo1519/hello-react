import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import PhotoList from "../../component/Photo/PhotoList";
import SearchBox from "../../component/SearchBox";

const List = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        getPhotos()
    }, [])

    const getPhotos = async () => {
        const result = await axios.get(`https://api.unsplash.com/photos`, {
            params: {
                client_id: "Beb3DvOszHNZhGauHt6LdPWtoo1OrvDzIdbluYmIZDs",
                per_page: 10
            }
        })
        setPhotos(result.data)
    }

    return (
        <Container>
            <SearchBox/>
            <PhotoList photos={photos}/>
        </Container>
    )
}


const Container = styled.div`

`;

export default List;


