import { AppShell, Button, Group, Image, Stack, Title } from '@mantine/core';
import faitDetroit from '../assets/fait_detroit.jpg'; // Tell webpack this JS file uses this image

export default function Home() {
  return (
    <>
      <Stack>
        <Title order={2}>About</Title>
        <Image fit="cover" src={faitDetroit} />
      </Stack>
    </>
  );
}
