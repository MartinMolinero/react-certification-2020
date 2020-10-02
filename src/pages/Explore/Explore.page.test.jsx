import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ExplorePage from './Explore.page';
import { VideosProvider } from '../../providers/Videos/videosProvider';

jest.mock('../../utils/hooks/usePopularVideos', () => ({
  usePopularVideos: () => [
    {
      kind: 'youtube#searchResult',
      etag: 'qTtZNL0lYW0zWZCHMtnW1Zu1Sfs',
      id: {
        kind: 'youtube#video',
        videoId: 'SiDYFCd9SH4',
      },
      snippet: {
        publishedAt: '2020-09-26T02:26:02Z',
        channelId: 'UCXIJgqnII2ZOINSWNOGFThA',
        title: 'Hannity slams the left&#39;s attacks on Judge Amy Coney Barrett',
        description:
          'President Trump expected to nominate appeals court judge to the Supreme Court Saturday. #FoxNews #Hannity Subscribe to Fox News! https://bit.ly/2vBUvAS ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/SiDYFCd9SH4/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/SiDYFCd9SH4/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/SiDYFCd9SH4/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Fox News',
        liveBroadcastContent: 'none',
        publishTime: '2020-09-26T02:26:02Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'rk64pdHo_kvd3E4eYbGjC5LDg6Y',
      id: {
        kind: 'youtube#video',
        videoId: 'WRoZgfjzGNQ',
      },
      snippet: {
        publishedAt: '2020-09-20T04:00:00Z',
        channelId: 'UCLkAepWjdylmXSltofFvsYQ',
        title: 'BTS (방탄소년단) &#39;Dynamite&#39; (&#39;70s remix) MV',
        description:
          'BTS #방탄소년단 #BTS_Dynamite Connect with BTS: https://ibighit.com/bts http://twitter.com/BTS_bighit http://twitter.com/BTS_twt ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/WRoZgfjzGNQ/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/WRoZgfjzGNQ/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/WRoZgfjzGNQ/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'BANGTANTV',
        liveBroadcastContent: 'none',
        publishTime: '2020-09-20T04:00:00Z',
      },
    },
  ],
}));
describe('ExplorePage', () => {
  it('Renders the content correctly', () => {
    render(
      <BrowserRouter>
        <VideosProvider>
          <ExplorePage />
        </VideosProvider>
      </BrowserRouter>
    );
    expect(screen.getByTestId('explore-page-container')).toBeInTheDocument()
    expect(screen.getByTestId('row-videos-container')).toBeInTheDocument();
    expect(screen.getAllByTestId('video-item').length).toEqual(2);
  });
});
