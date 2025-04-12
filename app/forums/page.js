import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
const Topics = {
  Python: { text: "Python", img: "https://www.pngall.com/wp-content/uploads/5/Python-PNG-HD-Image.png", desc: "Let's discuss everything related to Python" ,slug: "python-chat-new" },
  JavaScript: { text: "JavaScript", img: "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png", desc: "Let's discuss everything related to JavaScript",slug: "javascript-chat-new" },
  Java: { text: "Java", img: "https://res.cloudinary.com/dtrmjjphv/image/upload/v1700221951/java-removebg-preview_r4lxpe.png", desc: "Let's discuss everything related to Java" ,slug: "java-chat-new" },
  CSharp: { text: "C#", img: "https://miro.medium.com/v2/resize:fit:1358/1*SZFopbBIpPiQT7rCOL2YlQ.png", desc: "Let's discuss everything related to C#" ,slug: "c#-chat-new" },
  Cpp: { text: "C++", img: "https://cdn3d.iconscout.com/3d/free/thumb/c-language-logo-6563484-5453029.png", desc: "Let's discuss everything related to C++"  ,slug: "cpp-chat-new"},
  PHP: { text: "PHP", img: "https://static.vecteezy.com/system/resources/previews/015/081/213/original/php-file-format-3d-rendering-isometric-icon-png.png", desc: "Let's discuss everything related to PHP" ,slug: "php-chat-new" },
  Ruby: { text: "Ruby", img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190902124355/ruby-programming-language.png", desc: "Let's discuss everything related to Ruby" ,slug: "ruby-chat-new" },
  Swift: { text: "Swift", img: "https://www.akshartechnologies.com/wp-content/uploads/2016/08/swift-image.png", desc: "Let's discuss everything related to Swift" ,slug: "swift-chat-new" },
  Kotlin: { text: "Kotlin", img: "https://richdale.de/wp-content/uploads/2018/02/kotlin-logo.png", desc: "Let's discuss everything related to Kotlin" ,slug: "kotlin-chat-new" }
};

const Forums = () => {
  return (
    <div className="container mx-auto my-16 p-6">
      <h1 className="text-3xl text-white font-bold text-center mb-6">Discussion Forums</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {Object.values(Topics).map((topic, index) => (
          <div key={index} className="bg-indigo-100 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img src={topic.img} alt={topic.text} className="w-16 h-16 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-center">{topic.text}</h2>
            <p className="text-gray-600 text-center mt-2">{topic.desc}</p>
            <Link href={`/forum/${topic.slug}`}>
            <center><Button variant={`destructive`} className={`cursor-pointer`}>Visit</Button></center>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;
