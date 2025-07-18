import { InstagramEmbed } from 'react-social-media-embed';
import { Container, Stack, Title } from '@mantine/core';
import quadraWide from '../assets/quadra_wide.jpg'; // Tell webpack this JS file uses this image

export default function Contact() {
  return (
    <Container fluid className="contact-page">
      <Stack>
        <Title order={2}>Contact</Title>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/faited.systems/" width={'100%'} />
        </div>
      </Stack>
    </Container>
  );
}
