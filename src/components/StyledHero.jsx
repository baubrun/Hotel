import styled from "styled-components";
import defaultImg from "../images/default.jpeg";

const StyledHero = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  min-height: 60vh;
`;

export default StyledHero;
