import React from "react";
import { Container, Row, Col, Button, Card, Stack } from "react-bootstrap";
import startBackground from "./images/backgroundImages/startBackground.jpg"
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const Home = () => {

const navigate = useNavigate();
    return (
        <>
            <Card>
                <Card.Body style={{ textAlign: "center" }}>
                    <Card.Text>
                        Ready for a spooky Halloween adventure?
                    </Card.Text>
                    <Button variant="danger" onClick={()=>{
                        navigate('/start')
                    }

                    }>Click to get started!</Button>
                </Card.Body>
            </Card>
        </>



    )
}