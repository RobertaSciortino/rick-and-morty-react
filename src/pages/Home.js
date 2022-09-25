import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/CharacterCard";
import { getCharactersPage } from '../api/characterApi';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [characters, setCharacters] = useState([]);

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
        getCharactersPage(currentPage).then(page => {
            setCharacters([...characters, ...page.items]);
        })
    }, [currentPage])

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);

        if(lastItemRef.current) {
            observer.observe(lastItemRef.current);
        }

        return () => {
            if(lastItemRef.current) {
                observer.unobserve(lastItemRef.current);
            }
        }
        
    }, [characters])


    return (
        <Container>
            <Row>
                {
                    characters.length > 0 && characters.map((character, i) => {
                        return (<Col xs={12} md={6} lg={4} xl={3} className="mb-4" key={character.id} ref={i === (characters.length - 1) ? lastItemRef : null}>
                                    <Card data={character}/>
                                </Col>)
                    })
                }
            </Row>
        </Container>
    )
}

export default Home;