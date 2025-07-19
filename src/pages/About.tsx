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
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
              corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
              non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
              veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
              perspiciatis.
            </Text>
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
}
