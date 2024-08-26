import styles from './Home.module.css';
import Button from '../styledButton/StyledButton';
import { Wrapper, Title } from '../wrapperTitle/WrapperTitle';

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
    </>
  );
};

export default Home;
