import { Divider, Grid, Image, Stack, Text, Title } from '@mantine/core';
import quadraTall from '../assets/quadra_tall.jpg'; // Tell webpack this JS file uses this image
import quadraWide from '../assets/quadra_wide.jpg'; // Tell webpack this JS file uses this image

export default function Home() {
  return (
    <>
      <Stack justify="center">
        <Title>Introducing: Faited Systems' Quadra</Title>
        <Image fit="contain" w="100%" h="810px" radius="sm" src={quadraWide} />
        <Divider></Divider>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, lg: 6 }}>
            <Text>Lorem ipsum</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 6 }}>
            <Image fit="contain" h="800pxs" radius="sm" src={quadraTall} />
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
}
