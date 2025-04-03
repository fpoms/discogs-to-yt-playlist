import { useCallback, useState } from 'react';

import './App.css';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import * as _ from 'lodash';
import {
  AppShell,
  Burger,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  MantineProvider,
  Stack,
  Title,
} from '@mantine/core';
import logo from './assets/faited_logo_white.png'; // Tell webpack this JS file uses this image

import useDiscogsFetch from './useDiscogsFetch';

type ReleaseArtist = {
  name: string;
};

type ReleaseBasicInformation = {
  artists: ReleaseArtist[];
  cover_image: string;
  formats: object[];
  genres: string[];
  id: number;
  labels: object[];
  master_id: number;
  master_url: string | undefined;
  resource_url: string | undefined;
  styles: string[];
  thumb: string;
  title: string;
  year: number;
};

type Release = {
  basic_information: ReleaseBasicInformation;
  date_added: string;
  id: number;
  instance_id: number;
  rating: 0;
};

type VideoEntry = {
  uri: string;
  title: string;
};

type MasterReleaseResponse = {
  videos?: VideoEntry[];
};

type ReleasesResponse = {
  pagination: object;
  releases: Release[];
};

const RELEASES_PER_PAGE = 50;

function App() {
  const [opened, setOpened] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group justify="space-between" style={{ height: '100%' }}>
            <Group h="100%" px="md" gap={'xs'}>
              <Image h={35} src={logo} />
              <Stack align="flex-start" justify="center" style={{ gap: '0' }}>
                <div>Faited</div>
                <div>Systems</div>
              </Stack>
            </Group>
            <Group>
              <Button variant="subtle">Products</Button>
              <Button variant="subtle">About</Button>
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Stack>
            <Title order={2}>Quadra</Title>
            <Image src="" />
          </Stack>
        </AppShell.Main>
      </AppShell>
      <h1>Faited Systems</h1>
    </MantineProvider>
  );
}

export default App;
