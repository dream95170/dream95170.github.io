var posts=["2024/09/22/hello-world/","2024/09/22/新文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };