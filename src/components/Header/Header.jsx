import { AddFeedbackBtn } from "buttons/AddFeedbackBtn/AddFeedbackBtn";
import { ThemeToggler } from "components/ThemeToggler/ThemeToggler";
import { UserInfo } from "components/UserInfo/UserInfo";
import { BurgerIcon, HeaderWrapper, InfoWrapper, MobileMenuBtn, PageTitle } from "./Header.styled";
import { useMediaQuery } from "hooks/useMediaQuery";

export const Header = ({ openMethod }) => {
    const isNotDesktop = useMediaQuery("(max-width: 1439px)");
    
    return (
        <HeaderWrapper>
            {isNotDesktop ? <MobileMenuBtn onClick={openMethod}>
                <BurgerIcon/>
            </MobileMenuBtn> : <PageTitle>Page Title</PageTitle>}
            <InfoWrapper>
                <AddFeedbackBtn />
                <ThemeToggler />
                <UserInfo />
            </InfoWrapper>
        </HeaderWrapper>)
};
