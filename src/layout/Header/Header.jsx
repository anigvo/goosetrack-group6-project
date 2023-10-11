import { AddFeedbackBtn } from "buttons/AddFeedbackBtn/AddFeedbackBtn";
import { ThemeToggler } from "components/ThemeToggler/ThemeToggler";
import { UserInfo } from "components/UserInfo/UserInfo";
import { HeaderWrapper, InfoWrapper, Motivation, MotivationImg, MotivationWrapper, PageTitle, TitleWrapper } from "./Header.styled";
import { useMediaQuery } from "hooks/useMediaQuery";
import { forwardRef } from "react";
import { MobileMenuBtn } from "buttons/MobileMenuBtn/MobileMenuBtn";
import { useSelector } from "react-redux";
import { selectCategoryTasks } from "redux/selectors";
import { useLocation } from "react-router";
import img1 from '../../assets/images/choosedday-1.png';
import img2 from '../../assets/images/choosedday-2.png';

export const Header = forwardRef(({ openMethod, title, isOpenSidebar }, ref) => {
    const isNotDesktop = useMediaQuery("(max-width: 1439px)");
    const { todo, inProgress } = useSelector(selectCategoryTasks);
    const { pathname } = useLocation();
    const isDayPage = pathname.includes('/calendar/day') ? true : false;
    const isUndone = todo.length > 0 || inProgress.length > 0 ? true : false

    return (
        <HeaderWrapper>
            {isNotDesktop ? <MobileMenuBtn ref={ref} onClick={openMethod} disabled={isOpenSidebar && true} />
                : <TitleWrapper>
                    {isUndone && isDayPage && <MotivationImg 
                    srcSet={`${img1} 1x, ${img2} 2x`}
                    src={img1} 
                    alt="motivation image to do undone tasks"
                    width={64} />}
                    <MotivationWrapper>
                        <PageTitle>{title}</PageTitle>
                        {isUndone && isDayPage && <Motivation><span>Let go</span> of the past and focus on the present!</Motivation>}
                    </MotivationWrapper>
                </TitleWrapper>}
            <InfoWrapper>
                <AddFeedbackBtn />
                <ThemeToggler />
                <UserInfo />
            </InfoWrapper>
        </HeaderWrapper>)
});
