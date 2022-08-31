import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Page({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main>
        <h1>{data?.title?.rendered}</h1>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost/wp-json/wp/v2/pages");
  const data = await res.json();
  const pathList = data.map((path) => {
    return path.id.toString();
  });
  return {
    paths: [{ params: { page: pathList } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // Ber om ursäkt this looks like shit... but it works
  const slug = params.page[0];
  const pageRes = await fetch("http://localhost/wp-json/wp/v2/pages");
  const pageData = await pageRes.json();
  const page = pageData.find((page) => page.slug === slug);
  const res = await fetch(`http://localhost/wp-json/wp/v2/pages/${page?.id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
