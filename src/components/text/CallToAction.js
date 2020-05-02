import styled from "styled-components/macro";
import { breakpoints } from "../Breakpoints";
import "typeface-lato"

const CallToAction =  styled.h3`
    font-family: "Lato";
    font-weight: 800;
    font-size: 1.3rem;

    > a {
        color: #212529;
    }

    > a:hover {
        cursor: pointer;
        color: #0077ff;
        text-decoration: none;
        transition: 0.3s ease;
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-left: 50px;
    }

    @media (min-width: ${breakpoints.tabletMax}) {
        margin-left: 0px;
    }
`;

export default CallToAction;
