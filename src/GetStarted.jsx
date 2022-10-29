import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { HalloweenContext } from "./HalloweenContext";

export const GetStarted = () => {
    const navigate = useNavigate();
    const { placeOptions, setBackgroundImage, setChosenPlace, firstTrickOrTreat, setFirstTrickOrTreat } = useContext(HalloweenContext);

    return (
        <>
            <Card>
                <Card.Body>
                    {firstTrickOrTreat ? "It\'s Halloween! What an exciting time! You and a parent or other trusted adult are heading out for a fun night of trick-or-treating! You live in a small neighborhood, and only have a few places to go. Where shall we trick-or-treat first?" : "Where should we go next?"}

                </Card.Body>
            </Card>
            <Container>
                {
                        placeOptions.filter(place => place.visited === false).map(place => {
                            return (
                                <Row>
                                    <Button onClick={() => {
                                        setBackgroundImage(place.backgroundImage);
                                        setChosenPlace(place);
                                        place.visited = true;
                                        setFirstTrickOrTreat(false);
                                        console.log(place);
                                        navigate('/walking');
                                    }}>{place.name}</Button>
                                </Row>
                            )
                        })
                }
            </Container>
        </>

    )
}