import styles from "../styles/Home.module.css";
import BlogFeed from "../components/organisms/BlogFeed";
import GalleryGrid from "../components/organisms/GalleryGrid";

export default function Page({ data }) {
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
      <main>
        <h1>{data?.title?.rendered}</h1>
        <p dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}></p>

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
  const res = await fetch(`${process.env.API_URL}/pages`);
  console.log("DATA", res);
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
  const slug = params.page?.[0];
  const pageRes = await fetch(`${process.env.API_URL}/pages`);
  const pageData = await pageRes.json();

  const page = pageData.find(
    (page) =>
      page.slug === slug ||
      ("undefined" === typeof slug && page.slug === "home")
  );

  const res = await fetch(`${process.env.API_URL}/pages/${page?.id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
