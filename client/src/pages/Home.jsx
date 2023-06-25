import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Embracing Elegance and Tradition: The Allure of Japanese Clothing Style",
      desc: "Japanese clothing style is renowned worldwide for its unique blend of elegance, simplicity, and respect for tradition. Rooted in centuries-old customs and aesthetics, Japanese fashion has captivated the global stage, inspiring designers and fashion enthusiasts alike.",
      img: "https://images.pexels.com/photos/5266503/pexels-photo-5266503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Sustainable Design: Shaping a Greener Future",
      desc: "In an era marked by environmental consciousness and the urgent need for sustainable practices, sustainable design has emerged as a powerful tool for creating a greener and more harmonious world. ",
      img: "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Unlocking the Power of Coding: A Guide to Learning in 2023",
      desc: "In the digital age, coding has become an essential skill that opens up a world of opportunities and empowers individuals to shape the future. Whether you aspire to become a software developer, enhance your problem-solving abilities, or simply gain a better understanding of the technology-driven world we live in.",
      img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Unleashing the Power of E-Sports: A Global Phenomenon",
      desc: "In the rapidly evolving landscape of digital entertainment, e-sports has emerged as a global phenomenon, captivating millions of fans and redefining the way we perceive competitive gaming.",
      img: "https://images.pexels.com/photos/7862625/pexels-photo-7862625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post=>(
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt='postImg'/>
            </div>
            <div className='content'>
              <Link to={`/post/${post.id}`} className='link'>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home