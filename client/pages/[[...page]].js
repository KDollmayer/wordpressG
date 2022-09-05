import styles from "../styles/Home.module.css";
import BlogFeed from "../components/organisms/BlogFeed";

export default function Page({ data }) {
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
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`);
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
  const pageRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`);
  const pageData = await pageRes.json();

  const page = pageData.find(
    (page) =>
      page.slug === slug ||
      ("undefined" === typeof slug && page.slug === "home")
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages/${page?.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
