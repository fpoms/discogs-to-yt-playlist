import { useCallback, useState } from 'react';

import './App.css';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import * as _ from 'lodash';
import { Button, Container, Grid, MantineProvider, TextInput } from '@mantine/core';
import useDiscogsFetch from './discogsFetch';

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
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;
  const [releases, setReleases] = useState<Release[]>([]);
  const [videoUrls, setVideoUrls] = useState<string[][]>([]);
  const [videoUrlsLeft, setVideoUrlsLeft] = useState<number>(0);
  const decrementVideoUrlsLeft = useCallback(() => {
    setVideoUrlsLeft(videoUrlsLeft - 1);
    console.log(videoUrlsLeft);
  }, [videoUrlsLeft]);

  const discogsFetch = useDiscogsFetch();

  async function getVideoUrls(release: Release): Promise<string[]> {
    const releaseUrl =
      release.basic_information.resource_url ?? release.basic_information.master_url;
    if (releaseUrl === undefined) {
      return [];
    }
    try {
      const releaseMetadata = await discogsFetch<MasterReleaseResponse, null>(releaseUrl);
      if ('error' in releaseMetadata) {
        throw new Error(`Response status: ${releaseMetadata.error}`);
      }
      decrementVideoUrlsLeft();
      return releaseMetadata.videos?.map((v) => v.uri) ?? [];
    } catch {
      return [];
    }
  }

  async function getData(discogsUrl: string) {
    const username = new URL(discogsUrl).pathname.split('/')[2];
    const url = `https://api.discogs.com/users/${username}/collection/folders/0/releases?per_page=${RELEASES_PER_PAGE}`;
    try {
      const resp = await discogsFetch<ReleasesResponse, null>(url);
      if ('error' in resp) {
        throw new Error(`Response status: ${resp.error}`);
      }
      const releases: Release[] = resp.releases;
      setReleases(releases);
      setVideoUrlsLeft(releases.length);
      setVideoUrls(await Promise.all(releases.map(getVideoUrls)));
      console.log(releases);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
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
