import {
  Box,
  Button,
  Divider,
  Grid,
  Image,
  Paper,
  Stack,
  Table,
  TableData,
  Text,
  Title,
} from '@mantine/core';
import quadraTall from '../assets/quadra_tall.jpg'; // Tell webpack this JS file uses this image
import quadraWide from '../assets/quadra_wide.jpg'; // Tell webpack this JS file uses this image

const quadraStats: Array<[string, string]> = [
  ['Sensitivity', 'Text'],
  ['Frequency Response', 'Text'],
  ['Dimensions', 'text'],
  ['Weight', 'Text'],
  ['Price', 'text'],
];

export default function Home() {
  return (
    <Stack justify="center">
      <Text
        size="xl"
        variant="gradient"
        ta="center"
        fw={700}
        gradient={{ from: '#aeaeae', to: 'white', deg: 360 }}
      >
        <Title ta="center">Mobility and sub-30hz bass in an efficient horn subwoofer.</Title>
      </Text>
      <Image fit="contain" w="100%" radius="sm" visibleFrom="sm" src={quadraWide} />
      <Image fit="contain" h="800pxs" radius="sm" hiddenFrom="sm" src={quadraTall} />
      <Divider></Divider>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, lg: 6 }}>
          <Paper shadow="md" p="xl" withBorder>
            <Text
              size="xl"
              variant="gradient"
              ta="center"
              fw={700}
              gradient={{ from: 'gray', to: 'white', deg: 160 }}
            >
              <Title order={3} size="h1">
                Quadra
              </Title>
            </Text>
            <Text>
              <p>
                The first subwoofer from Faited Systems: the horn-loaded, highly transportable
                Quadra.
              </p>
              <p>
                The Quadra is a compact front loaded horn designed to hit 29hz with authority.
                Inspired by countless days dragging over sized 200+lb subwoofers down dirt paths
                into forests and up stairs into warehouses.
              </p>
              <p>
                The design consists of two to four mirrored cabinets optimized to work together by
                joining their horn paths earlier than possible with stand-alone subs. The horn also
                extends along the outer face in the "cathedral" configuration to achieve sub 30hz
                extension. A unique thermal dissipation system, inspired by high temperature
                electronics cooling, manages heat to ensure high outputs levels over long periods.
              </p>
              {/* <Table variant="vertical" withTableBorder>
                  {quadraStats.map((o) => (
                    <Table.Tr>
                      <Table.Th>{o[0]}</Table.Th>
                      <Table.Td>{o[1]}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table> */}
              <p>
                <Text fw={700} c="bright" span>
                  Frequency response (-3db): {''}
                </Text>
                <span style={{ whiteSpace: 'pre' }}>29hz (quad) / 32hz (pair) - 100hz </span>
              </p>
              <p>
                <Text fw={700} c="bright" span>
                  Sensitivity: {''}
                </Text>
                <span style={{ whiteSpace: 'pre' }}>111db (quad) / 106db (pair)</span>
              </p>
              <p>
                <Text fw={700} c="bright" span>
                  Dimensions: {''}
                </Text>
                45" x 30" x 22.5"
              </p>
              <p>
                <Text fw={700} c="bright" span>
                  Weight: {''}
                </Text>
                170 lbs
              </p>
              <p>
                <Text fw={700} c="bright" span>
                  Price: {''}
                </Text>
                <Button component="a" href="contact" radius="lg" size="sm" color="green">
                  Contact for a quote
                </Button>
              </p>
            </Text>
            <Table></Table>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, lg: 6 }}>
          <Image fit="contain" h="800pxs" radius="sm" visibleFrom="sm" src={quadraTall} />
          <Image fit="contain" w="100%" radius="sm" hiddenFrom="sm" src={quadraWide} />
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
