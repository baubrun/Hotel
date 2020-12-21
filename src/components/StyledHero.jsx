import styled from "styled-components";

const StyledHero = styled.header`
  align-items: center;
  display: ${(props) => (props.imgLoaded ? "flex" : "none")};
  justify-content: center;
  background: url(${(props) => (props.img ? props.img : "default.jpeg")})
    center/cover no-repeat;
  min-height: 60vh;
`;

export default StyledHero;
