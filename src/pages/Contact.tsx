import { InstagramEmbed } from 'react-social-media-embed';
import { AppShell, Button, Container, Group, Image, Stack, Title } from '@mantine/core';
import quadraWide from '../assets/quadra_wide.jpg'; // Tell webpack this JS file uses this image
import InstagramProfileEmbed from '../components/InstagramProfileEmbed';

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
