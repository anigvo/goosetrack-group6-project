import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const UserInfoWrapper = styled.div`
display: flex;
gap: 8px;
align-items: center;
    ${media('tablet', '')`
        gap: 14px;
    `}
`;

export const Username = styled.p`
color: ${props => props.theme.headerUsernameText};
font-family: 'Inter';
font-size: 14px;
font-weight: 700;
line-height: 1.28;
    ${media('tablet', '')`
    font-size: 18px;
    line-height: normal;
    `}
`;

export const UserPhotoWrapper = styled.div`
border: 1.8px solid ${props => props.theme.userAvatarBorder};
border-radius: 50%;
width: 32px;
height: 32px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
    ${media('tablet', '')`
    width: 44px;
    height: 44px;
    `}
`;

export const UserPhoto = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
display: block;
`

export const UserL = styled.p`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
`
