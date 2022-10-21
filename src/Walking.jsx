import { useContext } from "react"
import { Card, Container } from "react-bootstrap"
import { HalloweenContext } from "./HalloweenContext"


export const Walking = () => {
    const { chosenPlace } = useContext(HalloweenContext)


    return (
        <Container>
            <Card>
                <Card.Body>
                    {chosenPlace.walkingMessage}
                </Card.Body>
            </Card>
            <Card>
                Next
            </Card>

        </Container>

    )
}