import AppHeader from "../appHeader/AppHeader";
import ComicsBanner from "../comicsBanner/comicsBanner";

import {
  Back,
  ImgWrapper,
  Pages,
  Price,
  Text,
  Title,
  Wrapper,
} from "./singleComicsPageStyled";

const SingleComicsPage = () => {
  return (
    <>
      <AppHeader />
      <ComicsBanner />

      <Wrapper>
        <ImgWrapper />
        <div>
          <Title>X-Men: Days of Future Past</Title>
          <Text>
            Re-live the legendary first journey into the dystopian future of
            2013 - where Sentinels stalk the Earth, and the X-Men are humanity's
            only hope...until they die! Also featuring the first appearance of
            Alpha Flight, the return of the Wendigo, the history of the X-Men
            from Cyclops himself...and a demon for Christmas!?
          </Text>
          <Pages>144 pages</Pages>
          <Price>9.99$</Price>
        </div>

        <div>
          <Back>Back to all</Back>
        </div>
      </Wrapper>
    </>
  );
};

export default SingleComicsPage;
