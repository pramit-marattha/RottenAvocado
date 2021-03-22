import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInput, setBlogData } from "../../features/userSlice";

const BlogPosts = () => {
  const searchInput = useSelector(selectUserInput);
  const apiToken = process.env.REACT_APP_BLOG_API_TOKEN;
  const blogAPI = `https://gnews.io/api/v4/search?q=${searchInput}&token=${apiToken}`;
  const dispatch = useDispatch();
  const [blogPost, setBlogPost] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blogAPI)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);
  return (
    <div className="blogpost">
      <h1 className="blogpost__head__section">BLOG</h1>
      {loading ? <h1 className="loading">loading....</h1> : ""}
      <div className="blog___posts">
        {blogPost?.articles?.map((blog) => (
          <a className="blog__card" target="_blank" href={blog.url}>
            <img src={blog.image} />
            <div>
              <h4 className="blogpost__title">
                <span>{blog.source.name}</span>
                <span>{blog.publishedAt}</span>
              </h4>
              <h1>{blog.title}</h1>
              <p>{blog.descripton}</p>
            </div>
          </a>
        ))}
        {blogPost?.totalArticles == 0 && (
          <h1 className="blogSearch__error">NO Blogs Found</h1>
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
