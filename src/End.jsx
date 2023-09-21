import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const End = () => {
    const navigate = useNavigate();
    return (
        <>
                 <Card>
                <Card.Body>
                    You and your parent or other trusted adult return home after a FANTASTIC night of trick-or-treating. They check your candy to make sure it's safe, and then you watch your favorite halloween movie together. What a memorable time! Thank you for joining us on this halloween adventure!
                </Card.Body>
                <Button onClick={() => navigate('/')}>Restart The Adventure!</Button>
        </Card>

        </>

    )
}