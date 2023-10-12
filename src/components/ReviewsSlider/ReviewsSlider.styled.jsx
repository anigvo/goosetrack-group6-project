import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mainPageColors } from 'utils/colors';
import { ReactComponent as prevIcon} from "../../assets/icons/nextslide-icon.svg"
import { ReactComponent as nextIcon} from "../../assets/icons/pevslide-icon.svg"

export const ReviewSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ReviewSectionHeader = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  text-transform: uppercase;
  margin-bottom: 40px;
  color: ${mainPageColors.secondFontColor};

`

export const PrevIconArrow = styled(prevIcon)`
  margin-right: 25px;
  cursor: pointer;

`
export const NextIconArrow = styled(nextIcon)`

  cursor: pointer;
`

export const MissedReviewsMessage = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`

