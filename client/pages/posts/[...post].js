import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar";
import GalleryGrid from "../../components/GalleryGrid";
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
      <Navbar />
      <main>
        <BlogPage data={data} />
        {data?.acf?.contain_blog_feed && (
          <BlogFeed
            limit={
              typeof data?.acf?.total_blog_feed_posts === "number"
                ? data?.acf?.total_blog_feed_posts
                : 100
            }
          />
        )}
        {data?.acf?.contain_gallery_grid && (
          <GalleryGrid data={getProperties(data?.acf)} />
        )}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost/wp-json/wp/v2/posts");
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

  const pageRes = await fetch("http://localhost/wp-json/wp/v2/posts");
  const pageData = await pageRes.json();
  const page = pageData.find((page) => page.slug === slug);
  const res = await fetch(`http://localhost/wp-json/wp/v2/posts/${page?.id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
