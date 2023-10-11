import Image from '../../assets/images/notfoundpage-goose-rocket.png';
import ImageX2 from '../../assets/images/notfoundpage-goose-rocket@2x.png';
import {
  Box404,
  GooseImage,
  Container,
  Number,
  Apologize,
  Button,
  Wrapper,
} from './NotFount.styled';

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Box404>
          <Number>4</Number>
          <GooseImage alt="goose" srcSet={`${Image} 1x, ${ImageX2} 2x`} />
          <Number>4</Number>
        </Box404>
        <Apologize>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </Apologize>
        <Button to="/">Back to home</Button>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
