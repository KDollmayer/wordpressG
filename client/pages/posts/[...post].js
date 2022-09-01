import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Layout/Navbar";
import GalleryGrid from "../../components/Organism/GalleryGrid";
import BlogPage from "../../components/BlogPage";

export default function Post({ data }) {
  const getProperties = (data) => {
    let propertyList = [];
    for (var property in data) {
      if (/^gallery_image\d+$/.test(property)) {
        propertyList.push(data[property]);
      }
    }
    return propertyList;
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>MKDS</title>
        <meta name="description" content="Our wordpress page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{data && <BlogPage data={data} />}</main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const data = await res.json();
  const pathList = data.map((path) => {
    return path.id.toString();
  });
  return {
    paths: [{ params: { post: pathList } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // Ber om ursäkt this looks like shit... but it works
  const slug = params.post[0];

  const pageRes = await fetch(`${process.env.API_URL}/posts`);
  const pageData = await pageRes.json();
  const page = pageData.find((page) => page.slug === slug);
  const res = await fetch(`${process.env.API_URL}/posts/${page?.id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
