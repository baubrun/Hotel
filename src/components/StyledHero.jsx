import styled from "styled-components";

const StyledHero = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  background: url(${(props) => (props.img ? props.img : "default.jpeg")})
    center/cover no-repeat;
  min-height: 60vh;
`;

export default StyledHero;
