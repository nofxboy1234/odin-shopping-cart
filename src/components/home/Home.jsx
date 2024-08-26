import styles from './Home.module.css';
import Button from '../styledButton/StyledButton';
import { Wrapper, Title } from '../wrapperTitle/WrapperTitle';
import FancyButton, { TomatoButton } from '../fancyButton/FancyButton';
import PolyButton, {
  TomatoButton as PolyTomatoButton,
  ReversedButton,
} from '../polymorphicProp/PolymorphicProp';

const Home = () => {
  return (
    <>
      <h1 className={styles.heading}>Welcome to Shopping Cart!</h1>
      <Button $primary={true} onClick={() => console.log('Button!')}>
        I&apos;m a Button
      </Button>

      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>

      <FancyButton>Normal</FancyButton>
      <FancyButton $primary={true}>Primary</FancyButton>

      <TomatoButton>Tomato Button</TomatoButton>
      <TomatoButton $primary>Tomato Button</TomatoButton>

      <PolyButton>Normal Button</PolyButton>
      <PolyButton as="a" href="#">
        Link with Button styles
      </PolyButton>
      <PolyTomatoButton as={'a'} href="#">
        Link with Tomato Button styles
      </PolyTomatoButton>

      <PolyButton as={ReversedButton}>
        Custom Button with Normal Button styles
      </PolyButton>
    </>
  );
};

export default Home;
