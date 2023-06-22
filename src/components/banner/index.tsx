import { StyledBanner } from "./styles";
import { BannerProps } from "./types";

const Banner = ({ children }: BannerProps): JSX.Element => {
  return <StyledBanner>{children}</StyledBanner>;
};

export default Banner;
