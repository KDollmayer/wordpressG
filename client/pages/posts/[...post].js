import styles from "../../styles/Home.module.css";
import GalleryGrid from "../../components/organisms/GalleryGrid";
import BlogFeed from "../../components/organisms/blogFeed";
import BlogPage from "../../components/organisms/blogPage";

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
      <main>{data && <BlogPage data={data} />}</main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost/wp-json/wp/v2/posts`);
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

  const pageRes = await fetch(`http://localhost/wp-json/wp/v2/posts`);
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
