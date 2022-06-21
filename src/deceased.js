import React, {useState} from "react";
import DeceasedTemplate from "./deceasedTemplate.js";
import {SERVER_URL} from "./App.js"
import axios from "axios";
import PageScroll from "./pageScroll";


const examplePosts =
  [
    {
      name: "Apple",
      sex: "Male",
      post_id: "#000001",
      timestamp: "3 hours ago",
      date_of_birth: "1972/05/05",
      date_found: "2022/05/28",
      location_found: "Solokhi",
    },
    {
      name: "Banana",
      sex: "Male",
      post_id: "#000002",
      timestamp: "12 hours ago",
      date_of_birth: "1992/05/19",
      date_found: "2022/06/12",
      location_found: "Solokhi",
    },
    {
      name: "Unknown",
      sex: "Female",
      post_id: "#000003",
      timestamp: "1 day ago",
      date_of_birth: "Unknown",
      date_found: "2022/05/28",
      location_found: "Solokhi",
    },
    {
      name: "Unknown",
      sex: "Female",
      post_id: "#000003",
      timestamp: "1 day ago",
      date_of_birth: "Unknown",
      date_found: "2022/05/28",
      location_found: "Solokhi",
    },
    {
      name: "Unknown",
      sex: "Female",
      post_id: "#000003",
      timestamp: "1 day ago",
      date_of_birth: "Unknown",
      date_found: "2022/05/28",
      location_found: "Solokhi",
    },
    // {
    //   name: "Unknown",
    //   sex: "Female",
    //   post_id: "#000003",
    //   timestamp: "1 day ago",
    //   date_of_birth: "Unknown",
    //   date_found: "2022/05/28",
    //   location_found: "Solokhi",
    // }
  ]

function Deceased() {

  const [hasMore, setHasMore] = useState(true);
  const [posts, setPosts] = useState(examplePosts);

  const items = posts.map((post, index) => <DeceasedTemplate {...adaptPost(post)} key={index}></DeceasedTemplate>)
  return <PageScroll items={items} fetchData={fetchMorePosts} hasMore={hasMore} refresh={refresh}/>

  function fetchMorePosts() {
    const url = `${SERVER_URL}/deceased_posts?start=${posts.length + 1}&end=${posts.length + 5}`
    console.log(url)
    axios.get(url)
      .then(response => {
        const new_posts = response.data
        if (new_posts && new_posts.length) {
          setPosts([...posts, ...new_posts])
        } else {
          setHasMore(false)
        }
      }).catch(e => console.log(e))
  }

  function refresh() {
    const url = `${SERVER_URL}/deceased_posts?start=1`
    console.log(url)
    axios.get(url)
      .then(response => {
        const new_posts = response.data
        if (new_posts && new_posts.length) {
          setPosts(new_posts)
        }
      }).catch(e => console.log(e))

  }

  function adaptPost(post) {
    return {
      name: post.name,
      sex: post.gender,
      post_id: post.id,
      timestamp: post.posting_time,
      date_of_birth: post.date_of_birth,
      date_found: post.date_found,
      location_found: post.location
    }
  }

}

export default Deceased;
