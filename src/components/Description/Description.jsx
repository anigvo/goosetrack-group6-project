import { motion } from 'framer-motion';
import { AccentWord, DescriptionList, DescriptionSectionStyled, FeatureDescription, FeatureImg, FeatureTitle, ItemNumber } from "./Description.styled";
import image1 from '../../assets/images/mainpage-img1-375.png'
import image1Tablet from '../../assets/images/mainpage-img1-768.png'
import image1Desktop from '../../assets/images/mainpage-img1-1440.png'
import image1x2 from '../../assets/images/mainpage-img1-375@2x.png'
import image1Tabletx2 from '../../assets/images/mainpage-img1-768@2x.png'
import image1Desktopx2 from '../../assets/images/mainpage-img1-1440@2x.png'
import image2 from '../../assets/images/mainpage-img2-375.png'
import image2Tablet from '../../assets/images/mainpage-img2-768.png'
import image2Desktop from '../../assets/images/mainpage-img2-1440.png'
import image2x2 from '../../assets/images/mainpage-img2-375@2x.png'
import image2Tabletx2 from '../../assets/images/mainpage-img2-768@2x.png'
import image2Desktopx2 from '../../assets/images/mainpage-img2-1440@2x.png'
import image3 from '../../assets/images/mainpage-img3-375.png'
import image3Tablet from '../../assets/images/mainpage-img3-768.png'
import image3Desktop from '../../assets/images/mainpage-img3-1440.png'
import image3x2 from '../../assets/images/mainpage-img3-375@2x.png'
import image3Tabletx2 from '../../assets/images/mainpage-img3-768@2x.png'
import image3Desktopx2 from '../../assets/images/mainpage-img3-1440@2x.png'


const Description = () => {
  
    return (
      <DescriptionSectionStyled>
        <DescriptionList>
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
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
              <picture>
                <source
                  media="(min-width:1440px)"
                  srcSet={`${image1Desktop} 1x, ${image1Desktopx2} 2x`}
                  type="image/png"
                />
                <source
                  media="(min-width:768px)"
                  srcSet={`${image1Tablet} 1x, ${image1Tabletx2} 2x`}
                  type="image/png"
                />
                <source
                  media="(max-width:767px)"
                  srcSet={`${image1} 1x, ${image1x2} 2x`}
                  type="image/png"
                />
                <img
                  className="about-apartment__img"
                  src={image1}
                  alt="Calendar"
                />
              </picture>
            </FeatureImg>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
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
               <picture>
                <source
                  media="(min-width:1440px)"
                  srcSet={`${image2Desktop} 1x, ${image2Desktopx2} 2x`}
                  type="image/png"
                />
                <source
                  media="(min-width:768px)"
                  srcSet={`${image2Tablet} 1x, ${image2Tabletx2} 2x`}
                  type="image/png"
                />
                <source
                  media="(max-width:767px)"
                  srcSet={`${image2} 1x, ${image2x2} 2x`}
                  type="image/png"
                />
                <img
                  className="about-apartment__img"
                  src={image2}
                  alt="Own account"
                />
              </picture>
            </FeatureImg>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
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
              <picture>
                <source
                  media="(min-width:1440px)"
                  srcSet={`${image3Desktop} 1x, ${image3Desktopx2} 2x`}
                  type="image/png"
                />
                <source
                  media="(min-width:768px)"
                  srcSet={`${image3Tablet} 1x, ${image3Tabletx2} 2x`}
                  type="image/png"
                />
                <source
                  media="(max-width:767px)"
                  srcSet={`${image3} 1x, ${image3x2} 2x`}
                  type="image/png"
                />
                <img
                  className="about-apartment__img"
                  src={image3}
                  alt="Productivity tool"
                />
              </picture>
            </FeatureImg>
          </motion.li>
        </DescriptionList>
      </DescriptionSectionStyled>
    )
}

export default Description;