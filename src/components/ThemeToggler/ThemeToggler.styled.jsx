import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { media } from 'utils/queries';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import { motion } from 'framer-motion';

export const ThemeWrapper = styled.button`
    margin-left: 20px;
    margin-right: 10px;
    padding: 0;
    background-color: transparent;
    padding: 0;
    border: none;
    ${media('tablet', '')`
        margin-right: 14px;
        margin-left: 24px;
    `}
`

const styledIcon = css`
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: all 0ms cubic-bezier(0.4, 0, 0.2, 1);
    ${media('tablet', '')`
        width: 32px;
        height: 32px;
    `}
`

export const SunIcon = styled(motion(Sun))`
    ${styledIcon}
`

export const MoonIcon = styled(motion(Moon))`
    ${styledIcon}
`