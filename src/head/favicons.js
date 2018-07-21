import React from 'react';

import { prefix } from '../../utils/customPrefixer';

const favicons = [
  <link
    href={prefix('/assets/apple-touch-icon.png')}
    rel='apple-touch-icon'
    sizes='180x180'
  />,
  <link
    href={prefix('/assets/favicon-32x32.png')}
    rel='icon'
    sizes='32x32'
    type='image/png'
  />,
  <link
    href={prefix('/assets/android-chrome-192x192.png')}
    rel='icon'
    sizes='192x192'
    type='image/png'
  />,
  <link
    href={prefix('/assets/favicon-16x16.png')}
    rel='icon'
    sizes='16x16'
    type='image/png'
  />,
  <link href={prefix('/assets/site.webmanifest')} rel='manifest' />,
  <link
    color='#006400'
    href={prefix('/assets/safari-pinned-tab.svg')}
    rel='mask-icon'
  />,
  <meta content='#006400' name='msapplication-TileColor' />,
  <meta content='/assets/mstile-144x144.png' name='msapplication-TileImage' />,
  <meta content='#006400' name='theme-color' />
];

export default favicons;
