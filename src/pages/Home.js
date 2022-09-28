import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/CharacterCard";
import Loader from "../components/Loader";
import { useHomePage } from "../hooks/useHomePage";

const Home = () => {
    const homePage = useHomePage();
    
    return (
        <Container>
            <Row>
                {homePage.isLoading && <Loader />}
                {
                    homePage.characters.map((character, i) => { 
                        return  <Col xs={12} md={6} lg={4} xl={3} className="mb-4" key={character.id} ref={i === (homePage.characters.length - 1) ? homePage.lastItemRef : null}>
                                    <Card data={character}/>
                                </Col>
                    })
                }
            </Row>
        </Container>             
    )
}

export default Home;