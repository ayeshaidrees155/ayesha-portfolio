import React from 'react'
import bgImg from "/src/assets/workBg2.png"
import { Box, Typography } from "@mui/material"
import Badge from '../Badge'
import ProjectImg from "/src/assets/proj.jpg"
import StickyNotes from "/src/assets/stickyNotes.png"
import WeatherImg from "/src/assets/WeatherApp.png"
import FoodFundayImg from "/src/assets/FoodFundayApp.png"
import CalculatorImg from "/src/assets/Calculator.png"

const projectsData = [
    {
        title: "FOOD FUNDAY RECIPE BOOK",
        description: "An interactive recipe exploration app where users can search for a wide variety of dishes, instantly view detailed ingredients and cooking steps, and discover new culinary ideas through a seamless API-powered experience.",
        techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST API", "Async/Await", "DOM Manipulation"],
        image: FoodFundayImg,
        link: "https://ayesha-foodfunday.vercel.app/"
    },
    {
        title: "LIVE WEATHER FORECAST",
        description: "A responsive and real-time weather forecasting web application that allows users to instantly view current temperatures, humidity, wind speed, and meteorological data fetched from a live public API.",
        techStack: ["HTML5", "CSS3", "JavaScript", "REST API", "Async/Await"],
        image: WeatherImg,
        link: "https://ayesha-weather-forecast.vercel.app"
    },
    {
        title: "STICKY NOTES WEB APP",
        description: "Interactive note-taking application featuring custom tilted designs, local storage integration, and smooth UI animations.",
        techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM Manipulation", "Local Storage"],
        image: StickyNotes,
        link: "https://ayesha-sticky-notes-app.vercel.app/"
    },
    {
        title: "INTERACTIVE CALCULATOR",
        description: "A sleek and responsive calculator web application designed for seamless mathematical computations, featuring clean DOM event handling and an intuitive user interface.",
        techStack: ["HTML5", "CSS3", "JavaScript", "DOM Logic"],
        image: CalculatorImg,
        link: "https://ayesha-calculator.vercel.app"
    }

];

export default function Projects() {
    return (
        <Box
            component="section"
            id="projects"
            className="w-full min-h-screen flex flex-col justify-center items-center py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-no-repeat bg-center bg-fixed bg-[length:100%_auto] md:bg-cover overflow-hidden relative"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            {/* Overlay */}
            <Box className="absolute inset-0 bg-[#FAFAFC]/30 z-0" />

            <Box className="max-w-7xl w-full flex flex-col gap-10 lg:gap-16 relative z-10">

                {/* HEADER */}
                <Box className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <Box className="flex flex-col items-start" data-aos="fade-right">
                        <Badge
                            label="SELECTED WORKS"
                            sx={{
                                color: "var(--clr-purple)",
                                backgroundColor: "rgba(245, 227, 236, 0.9)",
                                border: "1px solid var(--clr-purple)",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase"
                            }}
                        />

                        <Typography className="!text-3xl sm:!text-4xl md:!text-6xl !font-extrabold pt-3 text-[var(--clr-blackSec)] tracking-tight">
                            Featured <span className="text-[var(--bg-clr)] !font-normal">Projects.</span>
                        </Typography>
                    </Box>


                    <Typography className="text-[var(--clr-gray)] font-medium text-sm sm:text-base md:text-lg max-w-md leading-relaxed" data-aos="fade-left">
                        A curated display of my recent web development projects, featuring custom user interfaces, smooth interactions, and practical application designs built with modern frontend tools.
                    </Typography>
                </Box>

                {/* ZIG-ZAG PROJECTS LIST */}
                <Box className="flex flex-col gap-8 sm:gap-10 md:gap-14 w-full">
                    {projectsData.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <Box
                                key={index}
                                className={`w-full flex ${isEven ? 'justify-start' : 'justify-end'}`}
                            >

                                <Box
                                    component="a"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-aos={isEven ? "fade-right" : "fade-left"}
                                    className="group w-full sm:w-[85%] md:w-[70%] lg:w-[50%] bg-white/85 backdrop-blur-md border border-[var(--bg-clr)]/30 hover:border-[var(--bg-clr)] transition-all duration-500 rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 md:p-6 flex flex-col gap-4 shadow-md hover:shadow-[0_12px_30px_rgba(162,121,143,0.2)] cursor-pointer no-underline block"
                                >
                                    <Box className="w-full h-40 sm:h-52 md:h-56 rounded-[16px] sm:rounded-[18px] overflow-hidden border border-[var(--bg-clr)]/20 relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </Box>

                                    {/* Details */}
                                    <Box className="flex flex-col gap-2 px-1">
                                        <Typography component="h3" className="!text-base sm:!text-xl md:!text-2xl !font-extrabold text-[var(--clr-blackSec)] tracking-wide group-hover:text-[var(--bg-clr)] transition-colors flex items-center justify-between">
                                            {project.title}
                                            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                        </Typography>

                                        <Typography className="text-[var(--text-blackSec)]/75 !text-xs sm:!text-sm leading-relaxed">
                                            {project.description}
                                        </Typography>

                                        {/* Tech Stack */}
                                        <Box className="flex flex-wrap gap-1.5 pt-1">
                                            {project.techStack.map((tech, i) => (
                                                <Box
                                                    key={i}
                                                    component="span"
                                                    className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-[#F5E3EC]/70 text-[var(--bg-clr)] border border-[var(--bg-clr)]/30"
                                                >
                                                    {tech}
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>

            </Box>
        </Box>
    )
}