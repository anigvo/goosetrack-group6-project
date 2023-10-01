import { AccentWord, DescriptionList, DescriptionSectionStyled, FeatureDescription, FeatureImg, FeatureTitle, ItemNumber } from "./Description.styled";
import image1 from '../../assets/images/mainpage-img1-375.png'
import image1Tablet from '../../assets/images/mainpage-img1-768.png'
import image1Desktop from '../../assets/images/mainpage-img1-1440.png'
import image2 from '../../assets/images/mainpage-img2-375.png'
import image2Tablet from '../../assets/images/mainpage-img2-768.png'
import image2Desktop from '../../assets/images/mainpage-img2-1440.png'
import image3 from '../../assets/images/mainpage-img3-375.png'
import image3Tablet from '../../assets/images/mainpage-img3-768.png'
import image3Desktop from '../../assets/images/mainpage-img3-1440.png'


const Description = () => {
    return (
      <DescriptionSectionStyled>
        <DescriptionList>
          <li>
            <div>
              <ItemNumber>
                1.
              </ItemNumber>
              <FeatureTitle>
                <AccentWord>Calendar</AccentWord>
                View
              </FeatureTitle>
              <FeatureDescription>
                GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.
              </FeatureDescription>
            </div>
            <FeatureImg>
              <source
                  srcset={`${image1} 375w,
                          ${image1Tablet} 768w,
                          ${image1Desktop} 1440w`}
                  sizes="(max-width: 768px) 375px,
                        (max-width: 1440px) 768px,
                        1440px"/>
              <img src={image1} alt="Calendar"/>
            </FeatureImg>
          </li>
          <li>
            <div>
              <ItemNumber>
                2.
              </ItemNumber>
              <FeatureTitle>
                Sidebar
              </FeatureTitle>
              <FeatureDescription>
                GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.
              </FeatureDescription>
            </div>
            <FeatureImg>
              <source
                  srcset={`${image2} 375w,
                          ${image2Tablet} 768w,
                          ${image2Desktop} 1440w`}
                  sizes="(max-width: 768px) 375px,
                        (max-width: 1440px) 768px,
                        1440px"/>
              <img src={image2} alt="Own account"/>
            </FeatureImg>
          </li>
          <li>
            <div>
              <ItemNumber>
                3.
              </ItemNumber>
              <FeatureTitle>
                <AccentWord>All in</AccentWord>
                One
                
              </FeatureTitle>
              <FeatureDescription>
                GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.
              </FeatureDescription>
            </div>
            <FeatureImg>
              <source
                  srcset={`${image3} 375w,
                          ${image3Tablet} 768w,
                          ${image3Desktop} 1440w`}
                  sizes="(max-width: 768px) 375px,
                        (max-width: 1440px) 768px,
                        1440px"/>
              <img src={image3} alt="Productivity tool"/>
            </FeatureImg>
          </li>
        </DescriptionList>
      </DescriptionSectionStyled>
    )
}

export default Description;