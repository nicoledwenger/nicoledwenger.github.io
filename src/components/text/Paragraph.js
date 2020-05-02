import styled from "styled-components/macro";
import { breakpoints } from "../Breakpoints";
import "typeface-lato"

const Paragraph =  styled.p`
    font-family: "Lato";
    font-weight: 500;
    font-size: 1rem;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-left: 50px;
      }
    
      @media (min-width: ${breakpoints.tabletMax}) {
          margin-left: 0px;
        }
`;

export default Paragraph;
