"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React & React Native</li>
        <li>Node.js & Express</li>
        <li>MongoDB & Firebase</li>
        <li>Tailwind CSS</li>
        <li>Next.js</li>
        <li>Appwrite</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Codetrain - Software Engineering Instructor</li>
        <li>Self-Taught & Continuous Learning</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full-Stack Web Development (Codetrain)</li>
        <li>Google Mobile Web Specialist</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();


  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack software developer and instructor passionate about building 
            efficient and user-friendly applications. With expertise in modern web and mobile 
            technologies, I specialize in React, React Native, Node.js, and Firebase.  
            <br /><br />
            As an instructor at Codetrain, I enjoy mentoring aspiring developers and sharing 
            knowledge about best coding practices. I am always eager to explore new technologies 
            and collaborate on innovative projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map(({ title, id }) => (
              <TabButton key={id} selectTab={() => handleTabChange(id)} active={tab === id}>
                {title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
