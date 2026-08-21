import React from 'react'
import { Box, Typography } from '@mui/material'
import bgImg from "/src/assets/expertiseBg.jpg"

// React Icons Imports
import {
    SiReact,
    SiJavascript,
    SiVite,
    SiReactrouter,
    SiRedux,
    SiTailwindcss,
    SiMui,
    SiBootstrap,
    SiHtml5,


    SiGit
} from "react-icons/si"
import { FaCss } from "react-icons/fa6";

import { TbApi, TbDatabaseExport, TbRefresh } from "react-icons/tb"
import Badge from '../Badge';

export default function Skills() {

    const skillCategories = [
        {
            id: "01",
            category: "FRONTEND & FRAMEWORKS",
            title: "Core Web Architecture",
            skills: [
                { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
                { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
                { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> },
                { name: "JSX & DOM Logic", icon: <SiReact className="text-[#61DAFB]" /> }
            ]
        },
        {
            id: "02",
            category: "STYLING & DESIGN SYSTEMS",
            title: "UI Engineering & Styling",
            skills: [
                { name: "Tailwind CSS v4", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "Material UI (MUI)", icon: <SiMui className="text-[#007FFF]" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
                { name: "HTML5 / CSS3", icon: <SiHtml5 className="text-[#E34F26]" /> },
                { name: "Responsive Layouts", icon: <FaCss className="text-[#1572B6]" /> },

            ]
        },
        {
            id: "03",
            category: "LOGIC & STATE MANAGEMENT",
            title: "APIs & Client Workflow",
            skills: [
                { name: "RESTful APIs", icon: <TbApi className="text-[#A2798F]" /> },
                { name: "Async Fetching", icon: <TbRefresh className="text-[#A2798F]" /> },
                { name: "Context API", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "LocalStorage", icon: <TbDatabaseExport className="text-[#A2798F]" /> },
                { name: "Git & GitHub", icon: <SiGit className="text-[#F05032]" /> },
                { name: "SPAs Logic", icon: <SiReactrouter className="text-[#CA4245]" /> }
            ]
        }
    ];

    return (
        <section
            id="skills"
            className="w-full min-h-screen flex flex-col justify-center items-center py-20 px-6 lg:px-10 overflow-hidden"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <Box className="max-w-7xl w-full flex flex-col gap-12 lg:gap-16"
            >

                {/* HEADER */}
                <Box className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6" >
                    <Box className="flex flex-col items-start" data-aos="fade-right"  >
                        <Badge
                            label="TECHNICAL STACK"
                            sx={{
                                color: "var(--clr-purple)",
                                backgroundColor: " #f5e3ec",


                                letterSpacing: "0.1em",
                                textTransform: "uppercase"
                            }}
                        />

                        {/*  Title */}
                        <Typography className="!text-4xl md:!text-6xl !font-bold pt-4 text-[var(--clr-blackSec)] tracking-tight" >
                            Tools of the <span className="text-[var(--bg-clr)]">Trade.</span>
                        </Typography>
                    </Box>

                    {/*  Subtitle */}
                    <Typography className="text-[var(--clr-gray)] text-base md:text-lg max-w-md leading-relaxed" data-aos="fade-left">
                        A categorized, fast-to-scan overview of the libraries, frameworks, and frontend tools I work with daily.
                    </Typography>
                </Box>

                {/* CARDS GRID */}
                <Box className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {skillCategories.map((cat) => (
                        <Box
                            key={cat.id}
                            className="group relative p-8 bg-[var(--bg-white)] hover:bg-[#1B181E] border border-[var(--border-fadeWhite)] rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:shadow-md  transform hover:scale-105 cursor-pointer"
                            data-aos="zoom-in" data-aos-duration="2000"                        >
                            <Box className="flex flex-col items-start w-full" >


                                <Box className="w-full flex items-center justify-between mb-6">
                                    <span className="text-[10px] font-bold tracking-wider px-3 py-1 rounded-md bg-[var(--bg-gray)] group-hover:bg-[#2A242D] text-[var(--clr-gray)] group-hover:text-[#A2798F] border border-[var(--border-fadeWhite)] transition-colors duration-500">
                                        {cat.category}
                                    </span>
                                    <span className="text-xs font-serif font-bold text-[var(--border-fadeGray)] group-hover:text-white transition-colors duration-500">
                                        {/* {cat.id} */}
                                    </span>
                                </Box>


                                <Typography className="!text-2xl !font-bold text-[var(--clr-blackSec)] group-hover:!text-white mb-6 transition-colors duration-500">
                                    {cat.title}
                                </Typography>

                                {/* BADGES */}
                                <Box className="flex flex-wrap gap-2.5 w-full pt-2">
                                    {cat.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-xl bg-[var(--bg-gray)] group-hover:bg-[#2A242D] text-[var(--clr-blackSec)] group-hover:text-white border border-[var(--border-fadeWhite)] transition-colors duration-500"
                                        >
                                            <span className="text-sm">{skill.icon}</span>
                                            {skill.name}
                                        </span>
                                    ))}
                                </Box>

                            </Box>
                        </Box>
                    ))}
                </Box>

            </Box>
        </section>
    )
}