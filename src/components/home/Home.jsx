import styles from './Home.module.css';

const Home = () => {
  console.log('rendering Home');

  return (
    <>
      <h1 className={styles.heading}>Welcome to Shopping Cart!</h1>
    </>
  );
};

export default Home;
