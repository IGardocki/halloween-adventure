import React, { useContext } from 'react';
import { HalloweenContext } from './HalloweenContext';
import { Container, Row, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export const PlaceOptions = () => {
    const navigate = useNavigate();
    const { placeOptions, setPlaceOptions, chosenPlace, setChosenPlace } = useContext(HalloweenContext);


    return (
        <Container>
            {placeOptions.map(place => {
                return (
                    <Row onClick={()=>{
                        setChosenPlace(place);
                        navigate('/trickortreat!');
                    }

                    }>{place}</Row>
                )
            }

            )}
        </Container>

    )
}
