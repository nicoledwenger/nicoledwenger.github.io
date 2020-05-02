import styled from "styled-components/macro";
import { breakpoints } from "../Breakpoints";
import "typeface-open-sans"

const WorkSubHeading = styled.h2`
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 2rem;
    color: #212529;
    width: 450px;
    margin-top: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-left: 50px;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 2.25rem;
  }

  @media (min-width: ${breakpoints.tabletMax}) {
      margin-left: 0px;
    }
`;

export default WorkSubHeading;
