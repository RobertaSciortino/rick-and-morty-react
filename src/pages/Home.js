import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/CharacterCard";
import Loader from "../components/Loader";
import { useHomePage } from "../hooks/useHomePage";

const Home = () => {
    const { characters, lastItemRef, isLoading } = useHomePage();
    
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