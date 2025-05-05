





import React, { useEffect, useState } from 'react'

function Card() {

    const [array , setarray] = useState([]);



    useEffect(()=>{

        const Data = []

        Data.push(  {
            title: "The Power of Storytelling in Blogging",
            description: "Discover how storytelling can engage readers, make content memorable, and boost your blog’s impact.",
            image: "https://contentwriters.com/blog/wp-content/uploads/2021/10/The-Power-of-Storytelling-in-Content-Marketing.png"
          },
          {
            title: "10 Tips for Writing Engaging Blog Posts",
            description: "Learn the secrets of crafting compelling blog posts that keep readers hooked and coming back for more.",
            image: "https://i.ytimg.com/vi/go4wo4WenQQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCKWqH5bhb-0EzSJymOE8BNWXbE-A"
          },
          {
            title: "Why Blogging is Essential for Your Business",
            description: "Blogging helps build brand authority, improve SEO, and connect with your audience in a meaningful way.",
            image: "https://digitalsolutions.com.pk/wp-content/uploads/2022/12/Blogging-for-Your-Business.jpg"
          },
          {
            title: "Mastering SEO: A Blogger’s Guide",
            description: "SEO can make or break a blog. Learn how to optimize your posts for search engines and attract more visitors.",
            image: "https://media.licdn.com/dms/image/v2/C4E12AQEL0_JQa2N2lg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1607599106278?e=2147483647&v=beta&t=iH0kj8lv4AROMB4T0PO0oll7pX4xzAHbscAZcWnojww"
          },
            {
              title: "Top 10 Programming Languages in 2023",
              description: "Discover the most popular programming languages this year and why they are dominating the tech world.",
              image: "https://motivitylabs.com/wp-content/uploads/2022/12/Top-10-Programming-Language-Trends-for-Developers-to-Follow-in-2023.jpeg"
            },
            {
              title: "Getting Started with Web Development",
              description: "A beginner's guide to web development, covering HTML, CSS, JavaScript,& more",
              image: "https://www.binpress.com/wp-content/uploads/2019/08/starting-web-development-business.jpg"
            },)
            console.log(Data);
            setarray(Data)
            
       
            
            

    } , [])
    

 
 
    
  return (

    <>

    


 


<div   className="max-w-6xl mx-auto px-4 py-10  ">
  <h3 className="text-3xl font-bold text-purple mb-8 text-center">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ALL BLOGS</span>{' '}
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {array.map((item, index) => (
      <div
        key={index}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-5 hover:scale-105 transition-transform duration-300 border border-white/20"
      >
        <img
          src={item.image}
          alt="Blog"
          className="w-full h-70 object-cover rounded-xl mb-4 shadow-md"
        />
        <h2 className="text-Black text-xl font-semibold mb-2">
          {item.title}
        </h2>
        <p className="text-gray-800 text-sm mb-4">
          {item.description}
        </p>
      
      </div>
    ))}
  </div>
</div>


   
    </>
  )
}

export default Card