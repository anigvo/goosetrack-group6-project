import {  MoonIcon, SunIcon, ThemeWrapper } from './ThemeToggler.styled';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';
import { THEME } from 'redux/theme/constants';
import { setTheme } from 'redux/theme/slice';

const btnChangeVars = {
    initial: { y: '-50%' },
    isOn: { y: '0%', transition: { type: "spring", stiffness: 100 } },
    exit: { y: '100%' }
}

export const ThemeToggler = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector(selectTheme);

    const changeTheme = () => {
        currentTheme === THEME.LIGHT 
        ? dispatch(setTheme(THEME.DARK)) 
        : dispatch(setTheme(THEME.LIGHT))
    }

    return (<ThemeWrapper onClick={changeTheme} aria-label='theme changer'>
        <AnimatePresence mode='wait'>
            {currentTheme === THEME.DARK ? <SunIcon
                initial={"initial"}
                animate={"isOn"}
                exit={"exit"}
                variants={btnChangeVars}
            /> : <MoonIcon initial={"initial"}
                animate={"isOn"}
                exit={"exit"}
                variants={btnChangeVars} />}
        </AnimatePresence>
    </ThemeWrapper>)
}