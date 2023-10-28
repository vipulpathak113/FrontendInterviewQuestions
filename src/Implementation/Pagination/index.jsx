import React, { useEffect, useState } from "react";
import PageItems from "./pageItems";
import PageNumber from "./pageNumber";

export default function Index() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((post) => setPosts(post));
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(posts.length/postPerPage);

  const changePage=(page)=>{setCurrentPage(page)}

  return (
    <>
      <PageItems posts={currentPosts} />
      <PageNumber totalPages={totalPages} paginate={changePage} />
    </>
  );
}
