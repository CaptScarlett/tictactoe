import styled from "styled-components";

interface StyleProps {
  disabled: boolean;
}

export const StyledTile = styled.div<StyleProps>`
  color: black;

  background-color: white;
  height: 5rem;
  width: 5rem;
  border-radius: 10%;
  margin: 0.5rem;

  pointer-events:  ${({ disabled }: StyleProps) =>
    disabled ? "none" : "auto"};
  }

  :hover {
  color: grey;
}


`;

export const StyledTileText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0.5rem;
`;
