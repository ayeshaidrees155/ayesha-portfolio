import React from 'react'
import bgImg from "/src/assets/aboutBg .png";
import aboutPic from "/src/assets/aboutPic.png"
import { Box, Typography, Stack } from "@mui/material"
import reactIcon from "/src/assets/react.svg";
import jsIcon from "/src/assets/jsIcon.png";
import reduxIcon from "/src/assets/reduxIcon.png";
import tailwindIcon from "/src/assets/tailwindIcon.png";
import muiIcon from "/src/assets/muiIcon.png";



export default function About() {
    const techIcons = [
        { name: "React.js", url: reactIcon },
        { name: "JavaScript", url: jsIcon },
        { name: "Redux", url: reduxIcon },
        { name: "Tailwind CSS", url: tailwindIcon },
        { name: "Material UI", url: muiIcon },
    ];


    return (
        <section
            id="about"

            className="relative w-full !min-h-screen sm:!min-h-[850px] md:!min-h-[600px] text-[var(--clr-white)] flex items-start justify-center  px-6 md:px-16 overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            {/* PARENT CONTAINER */}
            <Box className="  w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-5 z-10">

                {/* LEFT SIDE: IMG AREA */}
                <Box className=" w-full md:w-2/5 px-5 pb-10 flex justify-center flex-col items-center" data-aos="flip-right">
                    <Box className="w-3 h-15 bg-[var(--clr-black)]"></Box>
                    <Box className="w-7 h-5 bg-[var(--bg-nav)] rounded-md -z-10"></Box>


                    <Box className="flex flex-col items-center transition-transform duration-300 transform -rotate-5 hover:rotate-0 cursor-pointer" >


                        <Box className="w-20 h-6 bg-[var(--clr-blackSec)] rounded-xl -mt-2 z-10 flex items-center justify-center">
                            <Box className="w-13 h-3 rounded-xl bg-[var(--clr-black)] z-10"></Box>
                        </Box>


                        <Box className="-mt-3 p-3 bg-[var(--clr-blackSec)] rounded-xl shadow-2xl max-w-[340px] w-[270px] bg-[var(--bg-clr)]" >
                            <img
                                src={aboutPic}
                                alt="Profile"
                                className="border-2 border-[var(--clr-gray)] !w-[full] h-[320px] object-cover rounded-xl"
                            />
                        </Box>

                    </Box>
                </Box>

                {/* RIGTH SIDE:TEXT AREA */}
                <Box className=" w-full md:w-3/5 flex flex-col !justify-center pb-10 sm:pb-2   space-y-4 text-center md:text-left"  >
                    <Typography className="md:!text-[length:var(--text-4xl)]  !font-extrabold !text-[color:var(--clr-black)]" >Hello!</Typography>
                    <Typography className='text-[color:var(--text-p)]'>
                        I'm <span className="  text-[var(--clr-black)] font-bold">AYESHA IDREES</span>—a <span className='text-[var(--clr-blackSec)] '>Software Engineering Student</span> and <span className='text-[var(--clr-blackSec)] '>React.js</span> & <span className='text-[var(--clr-blackSec)] '>Frontend Web Developer</span> based in <span className='font-bold'>Faisalabad</span>, Pakistan. I specialize in crafting modern, high-performance web interfaces using React.js, Redux Toolkit, JavaScript (ES6+), JSX, Tailwind CSS, Material UI (MUI), and Bootstrap. Driven by core software engineering principles and dynamic REST API integration, I build pixel-perfect digital experiences using Vite & Git.
                    </Typography>

                    {/* ICON SECTION */}
                    <Box className=" w-full  h-auto flex items-center gap-2 pb-7 py-5 flex-wrap justify-center md:justify-start">
                        {techIcons?.map((icon, index) => (
                            <Stack key={index}>
                                <Box
                                    component="img"
                                    src={icon.url}
                                    alt={icon.name}
                                    className="w-10 h-10  md:w-15 md:h-15 object-contain transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                                ></Box>
                            </Stack>
                        ))}

                    </Box>
                </Box>


            </Box>

            {/* BOTTOM WAVE BACKGROUND*/}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
                <svg
                    className="relative block w-full h-[80px] md:h-[130px]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
                        fill="#FFFFFF"
                    ></path>
                </svg>
            </div>

        </section>
    )
}