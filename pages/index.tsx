import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Background = styled.div`
  &:first-child {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 0;
    top: 0;

    background: #38D9C0;
    filter: blur(200px);
  }

  &:last-child {
    position: absolute;
    width: 100px;
    height: 100px;
    right: 0;
    bottom: 0;

    background: #BC102D;
    filter: blur(500px);
  }
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  padding: 55px;

  background: #FFFFFF;
  box-shadow: 0px 4px 50px 10px rgba(255, 255, 255, 0.25);
  border-radius: 25px;
`;

export default function Home() {
  return (
    <Container>
      <Background />
      <Head>
        <title>🇨🇭swissDAO🏔️ - QR</title>
        <meta name="description" content="swissDAO QR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Join the 🇨🇭swissDAO🏔️ here 🚀:
      </h1>

      <ImageContainer>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src="/images/qr.png" fill alt="" />
        </div>
      </ImageContainer>
      <Background />
    </Container>
  )
}
