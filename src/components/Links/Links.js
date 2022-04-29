import { Wrapper, Container, Heading, Link } from "./Links.style.js";

const Links = () => {
  return (
    <Wrapper>
      <Container>
        <Heading color="blue">social</Heading>
        <Link href="https://www.youtube.com">youtube</Link>
        <Link href="https://www.twitch.tv/">twitch</Link>
        <Link href="https://www.reddit.com/">reddit</Link>
      </Container>

      <Container>
        <Heading color="red">idleon</Heading>
        <Link href="https://idleon.info/wiki/Main_Page">wiki</Link>
        <Link href="https://dechrissen.idleonefficiency.com/">
          idleonefficiency
        </Link>
        <Link href="https://idleoncompanion.com/tasks">companion</Link>
      </Container>

      <Container>
        <Heading color="green">etc</Heading>
        <Link href="https://github.com/">github</Link>
        <Link href="https://derekandersen.net">personal site</Link>
      </Container>
    </Wrapper>
  );
};

export default Links;
