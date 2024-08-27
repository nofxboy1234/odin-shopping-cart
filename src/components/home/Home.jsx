import styles from './Home.module.css';

// import Button from '../styledButton/StyledButton';
// import { Wrapper, Title } from '../wrapperTitle/WrapperTitle';
// import FancyButton, { TomatoButton } from '../fancyButton/FancyButton';
// import PolyButton, {
//   TomatoButton as PolyTomatoButton,
//   ReversedButton,
// } from '../polymorphicProp/PolymorphicProp';
// import StyledCustomLink, {
//   CustomLink,
// } from '../styledCusomComponent/StyledCustomComponent';
// import Input, { PasswordInput } from '../styledComponentsAttrs/input';
// import Rotate from '../rotate/Rotate';
// import Thing from '../thing/Thing';

// import { Input, Label, LabelText } from '../label/Label';
// import { GlobalStyle, Thing } from '../thingGlobal/Thing';
import Thing from '../thingWithChildren/Thing';

const Home = () => {
  return (
    <>
      {/* <h1 className={styles.heading}>Welcome to Shopping Cart!</h1>
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

      <PolyButton>Normal PolyButton</PolyButton>
      <PolyButton as="a" href="#">
        Link with Button styles
      </PolyButton>
      <PolyTomatoButton as={'a'} href="#">
        Link with Tomato Button styles
      </PolyTomatoButton>

      <PolyButton as={ReversedButton}>
        Custom Button with Normal Button styles
      </PolyButton>

      <CustomLink href={'#'}>Unstyled, boring CustomLink</CustomLink>
      <br />
      <StyledCustomLink href={'#'} greeting={'hello'}>
        Styled, exciting CustomLink
      </StyledCustomLink>

      <br />

      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue={'@geelen'} type="text" $inputColor="rebeccapurple" /> */}

      {/* <Input placeholder="A small text input" />
      <br />
      
      <Input placeholder="A bigger text input" $size="2em" />
      <br />
      <PasswordInput placeholder="A bigger password input" $size="2em" /> */}
      {/* <Rotate>&lt; - &gt; </Rotate> */}

      {/* <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div> */}

      {/* <Label>
        <Input defaultChecked />
        <LabelText>Foo</LabelText>
      </Label>
      <Label>
        <Input />
        <LabelText $mode="dark">Foo</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText>Foo</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText $mode="dark">Foo</LabelText>
      </Label> */}

      {/* <GlobalStyle />
      <Thing>I'm blue, da ba dee da ba daa</Thing> */}

      <Thing>
        <label htmlFor="foo-button" className="something">
          Mystery button
        </label>
        <button id="foo-button">What do I do?</button>
      </Thing>
      <label htmlFor="foo-button" className="something">
        Mystery button
      </label>
    </>
  );
};

export default Home;
