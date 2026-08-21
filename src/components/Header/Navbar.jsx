import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Buttons/Button';
import resumePdf from "/src/assets/AyeshaIdrees-resume.pdf"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Expertise", href: "#expertise" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Certifications", href: "#certifications" },
        { label: "Contacts", href: "#contacts" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            }
            else { setIsScrolled(false) }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)

        }
    }, [])


    return (
        <>
            {/*   NAVBAR  */}

            <Box sx={{
                backdropFilter: isScrolled ? "blur(12px)" : "none",
                WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
            }}
                className={` !w-full !h-17 !fixed !top-0 !left-0 !z-40 !flex !items-center !justify-between !px-6 lg:!px-10 transition-all duration-300 ${isScrolled
                    ? "!bg-[#f2f2f2] !shadow-sm"
                    : "!bg-transparent !border-b-0"
                    }`}>

                {/* Logo Section */}
                <Box className="h-full !flex !items-center flex-shrink-0">
                    <Typography
                        sx={{
                            fontSize: "var(--text-2xl)",
                            color: isScrolled ? "var(--clr-black)" : "var(--clr-white)",
                            transition: "color 0.3s ease"
                        }}
                        className='!flex !items-center  whitespace-nowrap '
                    >
                        AYESHA
                        <span className='!text-[var(--clr-purple)] !font-extrabold px-1 !text-2xl'>.</span>
                    </Typography>
                </Box>

                {/*  NAVLINKS  */}
                <Box className="h-full !hidden md:!flex !items-center !justify-center !gap-4 lg:!gap-6">
                    {navItems?.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`nav-link whitespace-nowrap !text-[13px] lg:!text-[14px]
                                hover:!text-[var(--clr-black)] !transition-colors !duration-200
                            ${isScrolled ?
                                    "!text-[var(--clr-linkScrolled)] hover:!text-[var(--clr-black)]"
                                    : "!text-[var(--clr-linkDefault)] hover:!text-[var(--clr-fadeWhite)]"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </Box>

                {/*  BUTTONS  */}
                <Box className="h-full !hidden md:!flex !flex-row !gap-3 !items-center !justify-end flex-shrink-0">
                    <Button
                        sx={{
                            borderColor: "var(--border-fadeWhite)",

                            color: isScrolled ? 'var(--clr-blackSec)' : 'var(--clr-white)',
                            '&:hover': { borderColor: isScrolled ? 'var(--clr-black)' : 'var(--clr-white)' }
                        }}
                        variant="outlined"
                        label=" Resume"
                        component="a"
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"

                    />
                    <Button

                        sx={{
                            borderColor: "var(--border-fadeWhite)",
                            background: isScrolled ? "var(--clr-blackSec)" : "var(--clr-purple)",
                            color: 'var(--clr-white)',
                            '&:hover': {
                                background: isScrolled ? 'var(--bg-clr)' : 'var(--clr-white)',
                                color: isScrolled ? 'var(--clr-white)' : 'var(--clr-black)',
                                transition: "all 0.2s ease"
                            }
                        }}
                        component="a"
                        href="#contacts"
                        variant="outlined"
                        label="Hire me"
                    />
                </Box>

                {/* MOBILE HAMBURGER BUTTON  */}
                <Box className="!flex md:!hidden">
                    <IconButton onClick={toggleMenu} sx={{ color: isScrolled ? "black" : "var(--clr-white)" }}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Box>

            {/* MOBILE   MENU */}
            <Box
                className={`!fixed !top-0 !left-0 !w-full !h-screen !bg-[var(--bg-clr)] !z-50 !flex !flex-col !justify-between !px-6 !py-6 transition-transform duration-1000 ease-in-out transform ${isMenuOpen ? "translate-y-0 opacity-100 " : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                {/* Top Header */}
                <Box className="!flex !items-center !justify-between !w-full !h-12 !border-b-1 !border-[var(--border-fadeGray)]">
                    <Typography
                        sx={{ fontSize: "var(--text-2xl)", color: "var(--clr-white)" }}
                        className='!flex !items-center '
                    >
                        AYESHA
                        <span className='!text-[#804464] !font-extrabold px-1 !text-2xl'>.</span>
                    </Typography>


                    <IconButton onClick={toggleMenu}

                    >
                        <CloseIcon fontSize="large" sx={{ color: isMenuOpen ? "white" : "black" }} />
                    </IconButton>
                </Box>

                {/* Mobile Links  */}
                <Box className="!flex !flex-col !gap-3 !mt-4">
                    {navItems?.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="!text-[var(--clr-white)] !text-lg !font-medium hover:!text-[#804464] transition-colors !border-b-1 !border-[var(--border-fadeGray)]
                            py-3"
                        >
                            {item.label}
                        </a>
                    ))}
                </Box>

                {/* Mobile Bottom  */}
                <Box className="!flex !flex-col !gap-3 !w-full !mb-4">
                    <Button
                        sx={{
                            width: "100%",
                            borderColor: "var(--border-fadeWhite)",
                            color: 'var(--clr-white)',
                            marginTop: 4,
                            py: 2,
                            '&:hover': { borderColor: 'var(--clr-white)' }
                        }}
                        variant="outlined"
                        label="Download Resume"
                        component="a"
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"


                    />
                    <Button
                        sx={{
                            width: "100%",
                            background: 'var(--clr-white)',
                            color: 'var(--bg-clr)',
                            py: 2,
                            '&:hover': {
                                background: '#E6E6E6',
                            }
                        }}
                        component="a"
                        href="#contacts"
                        onClick={() => setIsMenuOpen(false)}
                        variant="contained"
                        label="Hire Me"
                    />
                </Box>
            </Box>
        </ >
    );
}