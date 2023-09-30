import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { media } from '../../utils/queries';

export const Container = styled.div`
  display: flex;
  min-width: 375px;
  height: 100vh;
  justify-content: center;
  align-items: center;

  ${media('', 'mobileSmallMax')`
    padding: 0 47px;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const GooseImage = styled.img`
  width: 81px;
  height: 188px;
  transform: translateY(10px) rotate(-31deg);

  ${media('tablet', '')`
    width: 178px;
    height: 414px;
    transform: translateY(20px) rotate(-31deg);
  `}
`;

export const Number = styled.p`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  ${media('tablet', '')`
    font-size: 200px;
    line-height: 125%;
  `}
`;

export const Apologize = styled.p`
  width: 281px;
  margin-bottom: 24px;
  color: ${props => props.theme.apologizeTextColor};
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 128.571%;

  ${media('tablet', '')`
    width: 387px;
    margin-bottom: 32px;
  `}
`;

export const Button = styled(Link)`
  display: inline-flex;
  padding: 14px 32px;
  border-radius: 16px;
  border-width: 0;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128.571%;
  letter-spacing: -0.28px;

  &:hover,
  &:focus {
    background: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }

  ${media('tablet', '')`
    padding: 16px 48px;
    font-size: 18px;
    line-height: 133.333%;
    letter-spacing: -0.36px;
  `}
`;
