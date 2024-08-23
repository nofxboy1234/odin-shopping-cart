import styles from './Home.module.css';
import Button from '../styledButton/StyledButton';

const Home = () => {
  console.log('rendering Home');

  return (
    <>
      <h1 className={styles.heading}>Welcome to Shopping Cart!</h1>
      <Button primary={true}>I'm a Button</Button>
    </>
  );
};

export default Home;
