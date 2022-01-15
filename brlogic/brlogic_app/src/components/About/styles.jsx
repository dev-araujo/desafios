import styled from "styled-components";
import { lightColorDefault } from "../../styles/colors";
import ShowMoreText from "react-show-more-text";


export const CardAbout = styled.div`
  display: block;
  line-height: 0;
  opacity: 0.7;
  @media screen and (max-width: 380px) {
    display: none;
  }
`;

export const AboutPodcast = styled(ShowMoreText)`
  overflow: auto;
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  width: 360px;
  height: 110px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ShowMoreLess = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-style: italic;
  color: ${lightColorDefault};
`;

