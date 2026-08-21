import React from 'react';
import { Typography, IconButton, Box, Tooltip } from '@mui/material';
import Button from '../Buttons/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import resumePdf from "/src/assets/AyeshaIdrees-resume.pdf";
import HeroPersonImg from "/src/assets/portfolio.png";

export default function Home() {
    return (
        <section
            id="home"
            className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[var(--bg-clr)] text-[var(--clr-white)]"
        >
            {/* IMAGE LAYER */}
            <Box className="absolute inset-0 right-0 bottom-0 md:right-0 lg:right-20 z-0 flex items-end justify-end pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-clr)]/80 via-transparent to-transparent md:hidden z-10" />

                <img
                    src={HeroPersonImg}
                    alt="Ayesha Portfolio"
                    className="h-full w-full sm:w-auto object-cover sm:object-contain object-center md:object-center opacity-70 sm:opacity-85 md:opacity-100 transition-opacity duration-300"
                />
            </Box>

            {/* TEXT LAYER */}
            <Box className="absolute inset-0 z-20 px-6 md:px-10 max-w-7xl mx-auto flex flex-col justify-center items-start text-left w-full h-full pt-20">
                <Box className="flex flex-col items-start max-w-md sm:max-w-lg lg:max-w-xl w-full gap-1">
                    <Typography
                        variant="h1"
                        className="!font-extrabold !text-2xl sm:!text-4xl lg:!text-5xl !leading-tight tracking-tight drop-shadow-lg !mb-0 max-w-full"
                    >
                        Hi, I’m Ayesha Idrees <br />
                        <span className="!text-[var(--clr-purple)] !font-normal inline-block overflow-hidden whitespace-nowrap border-r-2 border-[var(--clr-white)] pr-1 animate-[typing_3.5s_steps(27)_forwards,blink_0.75s_step-end_5] max-w-max"
                            style={{
                                animationDelay: '3s'
                            }}>
                            Creative Frontend Developer
                        </span>
                    </Typography>

                    <Typography className="!text-[var(--clr-white)] !text-[var(--text-p)] sm:!text-base max-w-lg !leading-relaxed drop-shadow-md">
                        Transforming complex ideas into pixel-perfect, accessible digital interfaces using React, Vite, Tailwind CSS, and Material UI—merging fluid animations, clean code, and intuitive user experiences.
                    </Typography>

                    {/* Action Buttons */}
                    <Box className="flex flex-wrap items-center gap-4 pt-5">
                        <Button
                            variant="contained"
                            label="View My Work"
                            component="a"
                            href="#projects"
                            sx={{
                                background: "var(--clr-white)",
                                color: "var(--clr-blackSec)",
                                paddingX: 4,
                                '&:hover': {
                                    transform: "translateY(-5px)",
                                    transition: "transform 0.3s ease"
                                }
                            }}
                        />
                        <Button
                            variant="outlined"
                            label="Contact Me"
                            component="a"
                            href="#contacts"
                            sx={{
                                borderColor: "var(--clr-white)",
                                color: "var(--clr-white)",
                                background: "var(--clr-purple)",
                                paddingX: 4,
                                '&:hover': {
                                    transform: "translateY(-5px)",
                                    transition: "transform 0.3s ease"
                                }
                            }}
                        />
                    </Box>

                    {/* SOCIAL ICONS */}
                    <Box className="flex items-center gap-2.5 sm:gap-3 pt-3 mt-7">
                        {[
                            {
                                title: "Download Resume",
                                icon: <DescriptionIcon fontSize="small" />,
                                href: resumePdf,

                            },
                            {
                                title: "GitHub Profile",
                                icon: <GitHubIcon fontSize="small" />,
                                href: "https://github.com/ayeshaidrees155"
                            },
                            {
                                title: "LinkedIn Profile",
                                icon: <LinkedInIcon fontSize="small" />,
                                href: "https://www.linkedin.com/in/ayesha-idrees1"
                            },

                        ].map((social, id) => (
                            <Tooltip key={id} title={social.title} arrow placement="bottom">
                                <IconButton
                                    component="a"
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="!bg-[var(--clr-purple)] !border-1 !border-[var(--bg-fadeGray)] !shadow-lg hover:!bg-white hover:!text-[var(--clr-purple)] !text-[var(--clr-white)] !p-2.5 transition-colors"
                                    sx={{
                                        '&:hover': {
                                            transform: "translateY(-5px)",
                                            transition: "transform 0.3s ease"
                                        }
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            </Tooltip>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* BOUNCE ARROW */}
            <Box className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 animate-bounce">
                <a href="#about" className="text-white/70 hover:text-white text-xl animate-bounce">
                    <ArrowDownwardIcon />
                </a>
            </Box>
        </section>
    );
}