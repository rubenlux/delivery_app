import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import WidgetTab from "../widgetTab/WidgetTab";

import "./sidebar.css";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");

      setCategories(res.data);
    };
    getCategories();
  }, []);
  return (
    <div className='sidebar'>
      <div>
        <WidgetTab />
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {categories.map((category) => (
            <Link to={`/categories/${category.name}`} className='link'>
              <li className='sidebarListItem' key={category.id}>
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>SEGUINOS</span>

        <div className='sidebarSocial'>
          <a href='#' className='sidebarSocialItem1'>
            <i className='fa-brands fa-facebook-square fa-2x'></i>
          </a>
          <a href='#' className='sidebarSocialItem2'>
            <i class='fa-brands fa-instagram-square fa-2x'></i>
          </a>
          <a href='#' className='sidebarSocialItem3'>
            <i className='fa-brands fa-tiktok fa-2x'></i>
          </a>
          <a href='#' className='sidebarSocialItem4'>
            <i className='fa-brands fa-twitter-square fa-2x'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
