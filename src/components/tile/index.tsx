import { useState } from "react";
import { StyledTile, StyledTileText } from "./styles";
import { TileProps } from "./types";

const Tile = ({
  value,
  hoverValue,
  onClick,
  disabled,
}: TileProps): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <StyledTile
      onClick={() => onClick()}
      disabled={disabled}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <StyledTileText>{hovered ? hoverValue : value}</StyledTileText>
    </StyledTile>
  );
};

export default Tile;
