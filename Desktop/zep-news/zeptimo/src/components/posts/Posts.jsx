import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  var posteos = posts; // posts es un array de objetos con un solo elemento que es el post que se esta mostrando
  // console.log(posteos);
  // console.log(posteos[10].title);

  return (
    <div className='posts'>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
