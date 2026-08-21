import { Box, Typography } from '@mui/material'
import React from 'react'
import Badge from '../Badge'

export default function Expertise() {
    const expertiseData = {
        frontend: {
            id: "01",
            title: "Frontend Development & React Architecture",
            description: "Building fast, interactive, and modular Single Page Applications (SPAs) using React.js and modern ES6+ JavaScript. Focused on component-driven development, custom hooks, dynamic routing, and clean, maintainable state logic powered by Vite.",
            techStack: ["React.js", "JavaScript (ES6+)", "Vite", "React Router", "JSX"]
        },
        ui: {
            id: "02",
            title: "UI/UX Engineering & Responsive Styling",
            description: "Translating complex layouts and UI designs into pixel-perfect, accessible web interfaces. Specializing in mobile-first responsive architecture, custom dark/light themes, and smooth micro-interactions using modern CSS frameworks.",
            techStack: ["Tailwind CSS", "Material UI (MUI)", "Bootstrap", "CSS3", "Responsive Design"]
        },
        api: {
            id: "03",
            title: "Dynamic API Integration & State Logic",
            description: "Connecting frontend interfaces seamlessly with backend services via asynchronous RESTful APIs. Experienced in managing complex client-side state, data persistence, structured state slices, and smooth asynchronous rendering.",
            techStack: ["Redux Toolkit", "REST APIs", "Context API", "Async/Await", "LocalStorage"]
        }
    };

    return (
        <section
            id='expertise'
            className="w-full min-h-screen flex flex-col justify-center items-center py-16 px-6 lg:px-10 bg-[var(--clr-white)] overflow-hidden"
        >
            <Box className="max-w-7xl w-full flex flex-col gap-12 lg:gap-20">

                {/*  HEADER */}
                <Box className="w-full flex flex-col lg:flex-row items-center justify-between gap-10" >

                    {/* Left Section */}
                    <Box className="w-full lg:w-1/2 flex flex-col items-start justify-center"
                        data-aos="fade-right">
                        <Badge
                            sx={{ border: "1px solid var(--border-fadeGray)", width: "fit-content" }}
                            label="My Expertise"
                        />
                        <Typography className='!text-3xl md:!text-5xl !font-bold pt-6 text-[var(--clr-blackSec)] leading-tight'>
                            Building Scalable Web Solutions with Code & Precision
                        </Typography>
                        <Typography className='text-[color:var(--clr-gray)] text-base md:text-lg pt-4 max-w-xl'>
                            Combining modern React ecosystem, clean frontend architecture, and core software engineering principles to deliver responsive, high-performance digital interfaces.
                        </Typography>
                    </Box>

                    {/* Right Section: Card 01 */}
                    <Box className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end" data-aos="zoom-in" data-aos-duration="2000">
                        <Box className="group relative p-3 bg-[var(--bg-white)] hover:bg-[var(--bg-clr)] border border-[var(--border-fadeWhite)] rounded-3xl shadow-2xl max-w-[330px] w-full min-h-[460px] flex flex-col transition-all duration-500 transform rotate-3  hover:scale-105 cursor-pointer">

                            {/*  Circular Hole */}
                            <Box className="w-full flex justify-center pt-2 pb-1">
                                <Box className="w-4 h-4 rounded-full bg-[var(--clr-white)] group-hover:bg-[var(--bg-gray)] border border-[var(--border-fadeWhite)] shadow-inner transition-colors duration-500" />
                            </Box>

                            <Box className="p-6 bg-[var(--bg-gray)] group-hover:bg-[var(--clr-purple)] w-full h-full rounded-2xl flex flex-col justify-between transition-colors duration-500 flex-1">
                                <Box>
                                    <Typography className='!text-2xl font-serif text-[var(--border-fadeGray)] group-hover:!text-[var(--clr-white)] font-semibold transition-colors duration-500'>
                                        {expertiseData.frontend.id}
                                    </Typography>
                                    <Typography className='!font-bold text-[var(--clr-blackSec)] group-hover:!text-[var(--clr-white)] !text-xl pt-3 transition-colors duration-500'>
                                        {expertiseData.frontend.title}
                                    </Typography>
                                    <Typography className='!pt-3 !text-sm !text-[var(--clr-gray)] group-hover:!text-[var(--clr-white)] leading-relaxed transition-colors duration-500'>
                                        {expertiseData.frontend.description}
                                    </Typography>
                                </Box>

                                <Box className="flex flex-wrap gap-1.5 pt-6">
                                    {expertiseData.frontend.techStack.map((tech, i) => (
                                        <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-[var(--bg-white)] group-hover:bg-[var(--clr-white)] text-[var(--clr-blackSec)] group-hover:text-[var(--clr-purple)] border border-[var(--border-fadeWhite)] font-medium transition-colors duration-500">
                                            {tech}
                                        </span>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>

                {/*  CARD 2 , CARD 3 */}
                <Box className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 pt-6">

                    {/* Card 2 */}
                    <Box className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end" data-aos="zoom-in" data-aos-duration="2000"
                    >
                        <Box className="group relative p-3 bg-[var(--bg-white)] hover:bg-[var(--bg-clr)] border border-[var(--border-fadeWhite)] rounded-3xl shadow-2xl max-w-[330px] w-full min-h-[460px] flex flex-col transition-all duration-500 transform -rotate-3  hover:scale-105 cursor-pointer">

                            {/*  Circular Hole */}
                            <Box className="w-full flex justify-center pt-2 pb-1">
                                <Box className="w-4 h-4 rounded-full bg-[var(--clr-white)] group-hover:bg-[var(--bg-gray)] border border-[var(--border-fadeWhite)] shadow-inner transition-colors duration-500" />
                            </Box>

                            <Box className="p-6 bg-[var(--bg-gray)] group-hover:bg-[var(--clr-purple)] w-full h-full rounded-2xl flex flex-col justify-between transition-colors duration-500 flex-1">
                                <Box>
                                    <Typography className='!text-2xl font-serif text-[var(--border-fadeGray)] group-hover:!text-[var(--clr-white)] font-semibold transition-colors duration-500'>
                                        {expertiseData.ui.id}
                                    </Typography>
                                    <Typography className='!font-bold text-[var(--clr-blackSec)] group-hover:!text-[var(--clr-white)] !text-xl pt-3 transition-colors duration-500'>
                                        {expertiseData.ui.title}
                                    </Typography>
                                    <Typography className='!pt-3 !text-sm !text-[var(--clr-gray)] group-hover:!text-[var(--clr-white)] leading-relaxed transition-colors duration-500'>
                                        {expertiseData.ui.description}
                                    </Typography>
                                </Box>

                                <Box className="flex flex-wrap gap-1.5 pt-6">
                                    {expertiseData.ui.techStack.map((tech, i) => (
                                        <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-[var(--bg-white)] group-hover:bg-[var(--clr-white)] text-[var(--clr-blackSec)] group-hover:text-[var(--clr-purple)] border border-[var(--border-fadeWhite)] font-medium transition-colors duration-500">
                                            {tech}
                                        </span>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Card 3 */}
                    <Box className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start" data-aos="zoom-in" data-aos-duration="2000">
                        <Box className="group relative p-3 bg-[var(--bg-white)] group-hover:bg-[var(--bg-clr)] border border-[var(--border-fadeWhite)] rounded-3xl shadow-2xl max-w-[330px] w-full min-h-[460px] flex flex-col transition-all duration-500 transform rotate-3  hover:scale-105 cursor-pointer hover:bg-[var(--bg-clr)]">

                            {/*   Circular Hole */}
                            <Box className="w-full flex justify-center pt-2 pb-1">
                                <Box className="w-4 h-4 rounded-full bg-[var(--clr-white)] group-hover:bg-[var(--bg-gray)] border border-[var(--border-fadeWhite)] shadow-inner transition-colors duration-500" />
                            </Box>

                            <Box className="p-6 bg-[var(--bg-gray)] group-hover:bg-[var(--clr-purple)] w-full h-full rounded-2xl flex flex-col justify-between transition-colors duration-500 flex-1">
                                <Box>
                                    <Typography className='!text-2xl font-serif text-[var(--border-fadeGray)] group-hover:!text-[var(--clr-white)] font-semibold transition-colors duration-500'>
                                        {expertiseData.api.id}
                                    </Typography>
                                    <Typography className='!font-bold text-[var(--clr-blackSec)] group-hover:!text-[var(--clr-white)] !text-xl pt-3 transition-colors duration-500'>
                                        {expertiseData.api.title}
                                    </Typography>
                                    <Typography className='!pt-3 !text-sm !text-[var(--clr-gray)] group-hover:!text-[var(--clr-white)] leading-relaxed transition-colors duration-500'>
                                        {expertiseData.api.description}
                                    </Typography>
                                </Box>

                                <Box className="flex flex-wrap gap-1.5 pt-6">
                                    {expertiseData.api.techStack.map((tech, i) => (
                                        <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-[var(--bg-white)] group-hover:bg-[var(--clr-white)] text-[var(--clr-blackSec)] group-hover:text-[var(--clr-purple)] border border-[var(--border-fadeWhite)] font-medium transition-colors duration-500">
                                            {tech}
                                        </span>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </section>
    )
}