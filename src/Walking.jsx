import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import { HalloweenContext } from "./HalloweenContext";


export const Walking = () => {
    const navigate = useNavigate();
    const { chosenPlace } = useContext(HalloweenContext)


    return (
        <Container>
            <Card>
                <Card.Body>
                    {chosenPlace.walkingMessage}
                </Card.Body>
                <Button onClick={()=>{
                                   
                                   navigate('/trickortreat!');
                               }}>Next</Button>
            </Card>
           

        </Container>

    )
}