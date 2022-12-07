import {
  FirstImg,
  Span,
  Wrapper,
  MidleWrapper,
  SecondImg,
} from "./comicsBannerStyle";
import avengers from "../../resources/img/Avengers.png";
import avengerLogo from "../../resources/img/Avengers_logo.png";

const ComicsBanner = () => {
  return (
    <Wrapper>
      <div>
        <FirstImg src={avengers} />
      </div>
      <MidleWrapper>
        <Span>New comics every week! Stay tuned!</Span>
      </MidleWrapper>
      <div>
        <SecondImg src={avengerLogo} />
      </div>
    </Wrapper>
  );
};
export default ComicsBanner;
