import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HalloweenContext } from "./HalloweenContext";
import { Card, Button } from "react-bootstrap";

export const TrickOrTreating = () => {
    const navigate = useNavigate();
    const { chosenPlace, placeOptions } = useContext(HalloweenContext);

    return (
        <>
            <img src={chosenPlace.monsterImage} />
            <Card>
                <Card.Body>
                    {chosenPlace.message}
                </Card.Body>
                <Button variant="danger" onClick={() => {
                    placeOptions.filter(place => place.visited === false).length === 0 ?
                    navigate('/end') : navigate('/start')
                }}>Next</Button>
            </Card>
        </>

    )
}