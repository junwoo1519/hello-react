import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {HiOutlineChevronLeft, HiOutlineChevronRight} from "react-icons/hi";
import qs from "qs";

import SearchBox from "../../component/SearchBox";
import PhotoList from "../../component/Photo/PhotoList";

const Search = ({match, location, history}) => {

    const query = match.params.query;
    const qsValues = qs.parse(location.search, {ignoreQueryPrefix: true})
    const page = Number(qsValues.page || 1);

    const [data, setData] = useState();

    console.log("location", location);
    useEffect(() => {
        searchPhotos();
    }, [query])

    const searchPhotos = async () => {
        const result = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
                client_id: "Beb3DvOszHNZhGauHt6LdPWtoo1OrvDzIdbluYmIZDs",
                query,
                page,
                per_page: 30
            }
        })

        setData(result.data);
    }

    const handlePage = (page) => {
        history.push(`/photo/search/${query}?${qs.stringify({
            ...qsValues,
            page
        })}`)
    }

    if (!data) return "loading....."

    console.log("data", data);

    return (
        <Container>
            <SearchBox/>
            <PageContainer>
                <PagePrev onClick={() => handlePage(page - 1)}>
                    <HiOutlineChevronLeft/>
                </PagePrev>
                {
                    [page, page + 1, page + 2, page + 3].map((num) => (
                        <PageItem key={num} onClick={() => {handlePage(num)}}>
                            {num}
                        </PageItem>
                    ))
                }
                <PageNext onClick={() => handlePage(page + 1)}>
                    <HiOutlineChevronRight/>
                </PageNext>
            </PageContainer>
            <PhotoList photos={data.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

const PageContainer = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: center;
`;

const PageItem = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #777;
  font-size: 14px;
  cursor: pointer;
`;

const PageNext = styled(PageItem)`

`;

const PagePrev = styled(PageItem)`

`;

export default Search;