import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/CharacterCard";
import { getCharactersPage } from '../api/characterApi';

const Home = () => {
    let currentPage = 1;
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharactersPage(currentPage).then(page => {
            setCharacters([...page.items]);
        })
    }, [])

    return (
        <Container>
            <Row>
                {
                    characters.map(character => {
                        return  <Col xs={12} md={6} lg={4} xl={3} className="mb-4" key={character.id}>
                                    <Card data={character}/>
                                </Col>
                    })
                }
            </Row>
        </Container>
    )
}

export default Home;