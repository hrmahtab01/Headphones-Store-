import React from "react";
import blog1 from "../assets/blogs/blog1.jpg";
import blog2 from "../assets/blogs/blog2.jpg";
import blog3 from "../assets/blogs/blog3.jpg";
import blog4 from "../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";

const BlogData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias laudantium soluta ducimus corrupti reprehenderit eaque dolorem ea facilis quos?",
    link: "#",
    img: blog2,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias laudantium soluta ducimus corrupti reprehenderit eaque dolorem ea facilis quos?",
    link: "#",
    img: blog3,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias laudantium soluta ducimus corrupti reprehenderit eaque dolorem ea facilis quos?",
    link: "#",
    img: blog4,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias laudantium soluta ducimus corrupti reprehenderit eaque dolorem ea facilis quos?",
    link: "#",
    img: blog1,
  },
];

const Blog = () => {
  return (
    <UpdateFollower
      mouseOptions={{
        backgroundColor: "black",
        zIndex: 999,
        followSpeed: 1.5,
        text: "read",
        textFontSize: "3px",
        scale: 5,
      }}
    >
      <div>
        <section className="bg-gray-50 p-0">
          <div className="container py-14">
            <h1 className="text-3xl font-bold text-center pb-8 font-Poppins">
              Blog
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {BlogData.map((data) => (
                <div
                  key={data.id}
                  className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300 cursor-pointer"
                >
                  <img src={data.img} alt={data.title} className="w-full h-auto" />
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold font-Poppins line-clamp-2">
                      {data.title}
                    </h2>
                    <p className="line-clamp-2">{data.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </UpdateFollower>
  );
};

export default Blog;