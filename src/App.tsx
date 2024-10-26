import { useState } from 'react';

import './App.css';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { Button, Container, Grid, MantineProvider, TextInput } from '@mantine/core';

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

type MasterRelease = {
  videos?: VideoEntry[];
};

function App() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;
  const [releases, setReleases] = useState<Release[]>([]);
  const [videoUrls, setVideoUrls] = useState<string[][]>([]);

  async function getVideoUrls(release: Release): Promise<string[]> {
    const releaseUrl =
      release.basic_information.resource_url ?? release.basic_information.master_url;
    if (releaseUrl === undefined) {
      return [];
    }
    try {
      const response = await fetch(releaseUrl);
      const releaseMetadata: MasterRelease = await response.json();
      return releaseMetadata.videos?.map((v) => v.uri) ?? [];
    } catch {
      return [];
    }
  }

  async function getData(discogsUrl: string) {
    const username = new URL(discogsUrl).pathname.split('/')[2];
    const url = `https://api.discogs.com/users/${username}/collection/folders/0/releases?per_page=24`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const releases: Release[] = (await response.json()).releases;
      setReleases(releases);
      setVideoUrls(await Promise.all(releases.map(getVideoUrls)));
      console.log(releases);
    } catch (error: unknown) {
      console.error(error.message);
    }
  }

  return (
    <MantineProvider>
      <h1>Discogs to Youtube Playlist</h1>
      <Grid justify="center" align="flex-start">
        <Grid.Col span="auto">
          <TextInput
            placeholder="Link to Discogs Collection"
            labelProps={{ 'data-floating': floating }}
            classNames={{}}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
            }}
          ></TextInput>
        </Grid.Col>
        <Grid.Col span="content">
          <Button
            onClick={() => {
              getData(value);
            }}
          >
            Go
          </Button>
        </Grid.Col>
      </Grid>
      <div>
        {releases.map((rel, idx) => {
          return (
            <div>
              <div>
                {' '}
                {rel.basic_information.artists[0].name + ' ' + rel.basic_information.title}
              </div>
              {videoUrls.length > idx && (
                <Container>
                  {videoUrls[idx].map((v: string) => (
                    <div>{v}</div>
                  ))}
                </Container>
              )}
            </div>
          );
        })}
      </div>
    </MantineProvider>
  );
}

export default App;
