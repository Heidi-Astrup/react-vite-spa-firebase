import { useEffect, useState } from "react";
import PostCard from "../components/Postcard";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      // UDSKIFT [dit-projekt-navn] med dit faktiske Firebase projekt navn!
      const url =
        "https://firstfirebase-7cec2-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
      const response = await fetch(url);
      const data = await response.json();

      // Fra et objekt med objekter til et array med objekter
      const postsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setPosts(postsArray);
      console.log("Posts array:", postsArray);
    }

    getPosts();
  }, []);

  return (
    <section className="page">
      <h1>Homepage - Posts kommer her</h1>

      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </section>
  );
}
