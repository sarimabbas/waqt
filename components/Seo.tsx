import Head from "next/head";

const Seo = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} key="title" />
      <meta name="description" content={description} key="description" />

      <meta property="og:type" content="website" key="og-website" />
      <meta property="og:title" content={title} key="og-title" />
      <meta
        property="og:description"
        content={description}
        key="og-description"
      />
      <meta property="og:image" content={image} key="og-image" />

      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twitter-card"
      />
      <meta property="twitter:title" content={title} key="twitter-title" />
      <meta
        property="twitter:description"
        content={description}
        key="twitter-description"
      />
      <meta property="twitter:image" content={image} key="twitter-image" />
    </Head>
  );
};

export default Seo;
