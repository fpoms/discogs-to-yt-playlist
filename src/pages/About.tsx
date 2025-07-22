import { Grid, Image, Stack, Text, Title } from '@mantine/core';
import faitDetroit from '../assets/fait_detroit.jpg'; // Tell webpack this JS file uses this image

export default function Home() {
  return (
    <>
      <Stack>
        <Title order={2}>About</Title>
        <Grid grow>
          <Grid.Col span={{ base: 12, sm: 6, lg: 9 }}>
            <Image fit="cover" radius="md" src={faitDetroit} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <p>
              Faited Systems - a loudspeaker design and manufacturing studio based in Oakland, CA,
              USA - owned and operated by Fait Poms.
            </p>
            <p></p>
            <p>
              All loudspeakers are designed, simulated, and manufactured by Fait at the Faited
              Systems workshop in Oakland.
            </p>
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
}
