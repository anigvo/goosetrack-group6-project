import AuthSection from "components/AuthSection/AuthSection";
import Description from "components/Description/Description";
import ReviewSlider from "components/ReviewsSlider/ReviewsSlider";
import { MainPageContainer, MainPageWrapper } from "./MainPage.styled";
// import './mainpage.css';

const MainPage = () => {
    return (
        <>
        <AuthSection/>
        <MainPageWrapper>
            <MainPageContainer>
                <Description />
                <ReviewSlider/>
            </MainPageContainer>
        </MainPageWrapper>
        
        </>
        
    )
}

export default MainPage;