import React from 'react';
import Head from 'next/head';

const PageHead: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>OH Architecture — Timeless Residential &amp; Commercial Spaces in Brisbane</title>
      <meta
        name="description"
        content="We design residential and commercial spaces that feel good to be in, and stand the test of time. Discover how our award-winning, people-first approach to architecture helps you thrive."
      />
      <meta property="og:title" content="OH Architecture — Timeless Residential &amp; Commercial Spaces in Brisbane" />
      <meta
        property="og:description"
        content="We design residential and commercial spaces that feel good to be in, and stand the test of time. Discover how our award-winning, people-first approach to architecture helps you thrive."
      />
      <meta
        property="og:image"
        content="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/67d0fa2b4a815824924c8ecf_opengraph.jpg"
      />
      <meta property="twitter:title" content="OH Architecture — Timeless Residential &amp; Commercial Spaces in Brisbane" />
      <meta
        property="twitter:description"
        content="We design residential and commercial spaces that feel good to be in, and stand the test of time. Discover how our award-winning, people-first approach to architecture helps you thrive."
      />
      <meta
        property="twitter:image"
        content="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/67d0fa2b4a815824924c8ecf_opengraph.jpg"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/css/oharch.webflow.shared.30b52fcc0.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="css/index.css" rel="stylesheet" />
      <link
        href="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/6762bd133751c3b3ba34170a_Favicon.jpg"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/6762bd1922698f9d6a6a08b6_Web%20Clip.jpg"
        rel="apple-touch-icon"
      />
      <link href="https://www.oharchitecture.com.au/" rel="canonical" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-T1P8EGHDGZ"></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          } 
          gtag('js', new Date());
          gtag('set', 'developer_id.dZGVlNj', true);
          gtag('config', 'G-T1P8EGHDGZ');
        `,
        }}
      />
    </Head>
  );
};

export default PageHead;
