import { Wrapper, Container, Heading, Link } from "./Links.style.js";

const Links = () => {
    return (
        <Wrapper>
        
            <Container>
                <Heading color="red">mail</Heading>
                <Link href="https://mail.google.com/mail/u/0/#inbox">gmail</Link>
                <Link href="https://mail.zoho.com/zm/#mail/folder/inbox">zoho mail</Link>
                
            </Container>

			<Container>
                <Heading color="blue">social</Heading>
                <Link href="https://www.youtube.com">youtube</Link>
                <Link href="https://www.twitch.tv/">twitch</Link>
                <Link href="https://www.reddit.com/">reddit</Link>
            </Container>

            <Container>
                <Heading color="green">etc</Heading>
                <Link href="https://github.com/">github</Link>
                <Link href="https://derekandersen.net">personal site</Link>
                <Link href="https://wiki.archlinux.org/">arch wiki</Link>
            </Container>

            
        </Wrapper>
    );
};

export default Links;
