import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/CharacterCard";
import { getCharactersPage } from '../api/characterApi';
import Loader from "../components/Loader";
import useObserver, { useInterceptor } from "../hooks/useObserver";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const lastItemRef = useRef(null);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        if(entry.isIntersecting) {
            setCurrentPage(currentPage + 1);
        }
    }

    const options = {
        root: null,
        threshold: 1,
        rootMargin: "0px",
    }

    useEffect(() => {
        setIsLoading(true)
        getCharactersPage(currentPage).then(page => {
            setCharacters([...characters, ...page.items]);
            setIsLoading(false);
        })
    }, [currentPage])

    const interceptor = useInterceptor(callbackFunction, options, lastItemRef, characters)


    return (
        <Container>
            <Row>
                {isLoading && <Loader />}
                {
                    characters.map((character, i) => { 
                        return  <Col xs={12} md={6} lg={4} xl={3} className="mb-4" key={character.id} ref={i === (characters.length - 1) ? lastItemRef : null}>
                                    <Card data={character}/>
                                </Col>
                    })
                }
            </Row>
        </Container>             
    )
}

export default Home;