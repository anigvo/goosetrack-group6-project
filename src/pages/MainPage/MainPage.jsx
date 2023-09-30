import AuthSection from "components/AuthSection/AuthSection";
import Description from "components/Description/Description";
import ReviewSlider from "components/ReviewsSlider/ReviewsSlider";
import { MainPageContainer } from "./MainPage.styled";

const MainPage = () => {
    return (
        <>
        <AuthSection/>
        <MainPageContainer>
            <Description />
            <ReviewSlider/>
        </MainPageContainer>
        </>
        
    )
}

export default MainPage;