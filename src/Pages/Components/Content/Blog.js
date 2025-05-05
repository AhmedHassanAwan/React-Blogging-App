import { createContext } from "react";


export  const BlogContext = createContext()



import React from 'react'

function Blog({children}) {
    const [blogs, setBlogs] = useState([]);
  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  )
}

export default Blog