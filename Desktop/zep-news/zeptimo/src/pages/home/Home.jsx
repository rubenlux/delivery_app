import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Logo from "../../components/logoArea/LogoArea";
import axios from "axios";
import Slider from "../../components/slider/Slider";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";

import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);

      setPosts(res.data);
      console.log(res.data);
      var posteos = res.data;
      // console.log(posteos[10].title);
      // console.log(posteos[10].desc);
      posteos.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setPosts(res.data);
    };

    fetchPosts();
  }, [search]);

  return (
    <div className='grid'>
      <div className='logoA'>
        <Logo />
      </div>
      <div>
        <Slider />
        <br />
        <h1 className='title-post'>
          ULTIMAS PUBLICACIONES
          <hr />
        </h1>
      </div>
      <div className='home'>
        <Posts posts={posts} />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
