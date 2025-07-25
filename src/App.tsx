import './App.css';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import * as _ from 'lodash';
import { Link, Route, Routes } from 'react-router-dom';
import { AppShell, Button, Container, Group, Image, MantineProvider, Stack } from '@mantine/core';
import { useDisclosure, useFavicon, useViewportSize } from '@mantine/hooks';
import favicon from './assets/faited_favicon.png';
import logo from './assets/faited_logo_gray.png'; // Tell webpack this JS file uses this image

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Theme from './theme';
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
  useFavicon(favicon); // Replace with your favicon path

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
  const { width: viewportWidth } = useViewportSize();
  const headerIdealWidth = 1200;
  const headerPadding = Math.max((viewportWidth - headerIdealWidth) / 2, 30);

  return (
    <MantineProvider defaultColorScheme="dark" theme={Theme()}>
      <AppShell
        header={{ height: 80 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="15px"
      >
        <AppShell.Header
          className="fs-appshell-header"
          margin-lef
          pl={headerPadding}
          pr={headerPadding}
        >
          <Group justify="space-between" style={{ height: '100%' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#DEE2E6' }}>
              <Group h="100%" gap={'xs'} className="faited-logo">
                <Image h={35} src={logo} />
                <Stack align="flex-start" justify="center" style={{ gap: '0' }}>
                  <div>Faited</div>
                  <div>Systems</div>
                </Stack>
              </Group>
            </Link>
            <Group gap="xs">
              <Link to="/contact">
                <Button variant="subtle">Contact</Button>
              </Link>
              <Link to="/about">
                <Button variant="subtle">About</Button>
              </Link>
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Container fluid style={{ '--container-size': 'calc(90rem * var(--mantine-scale))' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
