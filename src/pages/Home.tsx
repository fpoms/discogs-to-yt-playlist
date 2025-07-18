import { Image, Stack } from '@mantine/core';
import quadraWide from '../assets/quadra_wide.jpg'; // Tell webpack this JS file uses this image

export default function Home() {
  return (
    <>
      <Stack>
        <Image fit="cover" src={quadraWide} />
      </Stack>
    </>
  );
}
