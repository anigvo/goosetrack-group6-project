import styled from 'styled-components';
import { media } from 'utils/queries';
// import { getRandomHexColor } from "./getRandomHexColor";

export const CircularAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${props => props.theme.userAvatarInsideBackground};
  //   border: 2px solid #3e85f3;
  position: absolute;

  ${media('tablet', '')`
        width: 124px;
        height: 130px;
        // position: static;
    `}
  border-radius: 50%;
`;

export const DefaultAvatar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// background-color: ${getRandomHexColor()};

export const Letter = styled.p`
  color: #fff;
  font-size: 40px;

  ${media('tablet', '')`
        font-size: 60px;
    `}
`;

// export const AddImageBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   background-color: ${props => props.theme.btnBackgroundColor};
//   overflow: hidden;
//   width: 14px;
//   height: 14px;
//   border-radius: 50%;
//   position: relative;
//   left: 43px;
//   bottom: 32px;

//   ${media('tablet', '')`
//         width: 24px;
//         height: 24px;
//         left: 79px;
//         bottom: 20px;
//     `}
// `;

// export const AddImage = styled.img`
//   width: 8px;
//   height: 8px;

//   ${media('tablet', '')`
//         width: 18px;
//         height: 18px;
//     `}
// `;

export const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.userAvatarBorder};
  background-color: ${props => props.theme.userAvatarInsideBackground};
  overflow: hidden;
  bottom: 99px;

  ${media('tablet', '')`
        width: 124px;
        height: 124px;
        position: static;
    `}
`;

export const AvatarImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  fill: ${props => props.theme.userFillCollor};

  ${media('tablet', '')`
        width: 48px;
        height: 48px;
    `}
`;
