import { Link } from "react-router-dom";

import "./post.css";

export default function Post({ post }) {
  //acceder a un solo elemento del array de posts por su indice post= [{id: 1, title: "Post 1", body: "Body 1"}]
  // console.table(JSON.stringify(post));
  return (
    <div className='container1'>
      <Link to={`/posts/${post._id}`} className='link'>
        <img className='postImg' src={post.img} alt='post' key={post._id} />
      </Link>

      <div>
        <span className='postDate'>
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
      {post.categories?.map((cats) => (
        <span className='postCat' key={cats.id}>
          {cats.name}
        </span>
      ))}
      <div>
        <span className='postTitle'>
          <Link to={`/posts/${post._id}`} className='link'>
            {post.title.substring(0, 51) + "..."}
          </Link>
        </span>
      </div>
    </div>
  );
}
