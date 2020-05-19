import styled from "styled-components/macro";
import { breakpoints } from "../Breakpoints";
import "typeface-open-sans"

const WorkSubHeading = styled.h2`
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 4rem;
    color: #d2d2d2;
    width: 450px;
    line-height: 90px;

  @media (max-width: ${breakpoints.mobileMax}) {
    font-size: 2.25rem;
  }
`;

export default WorkSubHeading;
