import { useContext } from "react";
import { HalloweenContext } from "./HalloweenContext";

export const TrickOrTreating = () => {

    const {chosenPlace} = useContext(HalloweenContext);

    return(
        <h1>{chosenPlace}</h1>
    )
}