import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { fontFamily } from "@mui/system";

function TabPanel(props) {
  // el parametro props es un objeto que contiene el index y el children
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function WidgetTab() {
  const [posts, setPosts] = React.useState([]);
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts");
      console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "300px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='ROCK' {...a11yProps(0)} />
          <Tab label='TECNO' {...a11yProps(1)} />
          <Tab label='MÚSICA' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {posts.slice(0, 5).map((post) => (
          <Box
            sx={{
              p: 1,
              width: "200px",
              fontFamily: "EB Garamond, serif",
              fontSize: "20px",
              fontWeight: "",
            }}
            className='table'
          >
            <Link to={`/posts/${post._id}`} className='link'>
              {post.title}
            </Link>
          </Box>
        ))}
      </TabPanel>

      <TabPanel value={value} index={1}>
        {posts

          .filter((post) => post.username === "dario1")
          .slice(0, 5)

          .map((post) => (
            <Box
              sx={{
                p: 1,
                width: "200px",
                fontFamily: "EB Garamond, serif",
                fontSize: "20px",
                fontWeight: "500",
              }}
              className='table'
            >
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
            </Box>
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
