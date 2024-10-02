'use client';
import Image from "next/image";
import {motion} from 'framer-motion'
import project from '../assets/project.jpg'
import project1 from '../assets/proj1.jpg'
import project2 from '../assets/proj2.jpg'
import project3 from '../assets/proj3.png'
import project4 from '../assets/proj4.jpg'

const projects = [
    {
        title: 'E-commerce Website',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perferendis esse cupiditate praesentium repellat natus, tempore voluptatum dolor, possimus quidem tenetur vel. Nostrum perferendis sit laborum assumenda laboriosam possimus maxime!',
        devStack: ['Next.js', 'React', 'Tailwind CSS', 'Redux'],
        link: 'https://github.com/vercel/next-learn-demo',
        git: 'https://github.com/vercel/next-learn-demo',
        src: project,
    },
    {
        title: 'Personal Website',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur quam consequuntur atque ab totam minima rerum accusantium, facilis consequatur pariatur quis omnis? Odit nam repellendus corrupti magni laborum a.',
        devStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        link: 'https://github.com/vercel/next-learn-demo',
        git: 'https://github.com/vercel/next-learn-demo',
        src: project1,
    },
    {
        title: 'Blog Website',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima deserunt sed autem, corporis modi a! Sunt, dolorum corporis! Officia minima harum deleniti beatae nisi iusto eos, iste consectetur ducimus velit.',
        devStack: ['Next.js', 'React', 'Tailwind CSS', 'Redux'],
        link: 'https://github.com/vercel/next-learn-demo',
        git: 'https://github.com/vercel/next-learn-demo',
        src: project2,
    },
    {
        title: 'E-commerce Website 2',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem minima optio, at eligendi corrupti recusandae doloribus. Reprehenderit nobis similique, in dolorum delectus vel fuga veniam facere inventore nulla beatae porro.',
        devStack: ['Next.js', 'React', 'Tailwind CSS', 'Redux', 'TypeScript'],
        link: 'https://github.com/vercel/next-learn-demo',
        git: 'https://github.com/vercel/next-learn-demo',
        src: project3,
    },
    {
        title: 'E-commerce Website 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, reprehenderit? Perspiciatis fugiat labore, dolorem nam assumenda ex officiis? Hic vero nesciunt obcaecati voluptates ab ad fuga voluptatibus omnis nihil accusantium.',
        devStack: ['Next.js', 'React', 'Tailwind CSS', 'Redux', 'TypeScript'],
        link: 'https://github.com/vercel/next-learn-demo',
        git: 'https://github.com/vercel/next-learn-demo',
        src: project4,
    },
];



const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
            Selected <span className="text-orange-400">Projects</span>
        </h1>

        <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
            {projects.map((project, index) => (
                <motion.div key={index}
                initial={{opacity:0, y:75}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration: 0.5, delay:0.25}}
                className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}>
                    <div className="space-y-2 max-w-[550px]">
                        <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                        <h2 className="text-4xl">{project.title}</h2>
                        <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                        <ul className="flex space-x-2 text-xl text-orange-400 font-semibold">
                            {project.devStack.map((stack, index) => (
                                <li key={index}>{index !== project.devStack.length - 1 ? `${stack} •` : `${stack}`}</li>
                            ))}
                        </ul>
                        <div className="w-64 h-[1px] bg-gray-400 my-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mr-6">Link</a>
                            <a href={project.git} target="_blank" rel="noopener noreferrer">Git</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-5">
                        <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover
                        border rounded border-gray-700"/>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio