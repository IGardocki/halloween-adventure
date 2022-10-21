import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { HalloweenContext } from "./HalloweenContext";

export const GetStarted = () => {
    const navigate = useNavigate();
    const { placeOptions, setBackgroundImage, setChosenPlace} = useContext(HalloweenContext);

    return (
        <>
            <Card>
                <Card.Body>
                    It's Halloween! What an exciting time! You and a parent or other trusted adult are heading out for a fun night of trick-or-treating!

                    You live in a small neighborhood, and only have a few places to go.
                    Where shall we trick-or-treat first?
                </Card.Body>
            </Card>
            {/* <Card> */}
            <Container>
                {
                    placeOptions.map(place => {
                        return (
                            <Row>
                                <Card onClick={()=>{
                                    setBackgroundImage(place.backgroundImage);
                                    setChosenPlace(place);
                                    navigate('/walking');
                                }}>{place.name}</Card>
                            </Row>
                        )
                    })
                }
            </Container>
        </>

    )
}