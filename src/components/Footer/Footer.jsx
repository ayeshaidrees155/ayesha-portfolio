import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Expertise", href: "#expertise" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contacts" },
    ];

    const socialLinks = [
        { label: "LinkedIn", href: "https://linkedin.com/in/ayesha-idrees1", icon: <LinkedInIcon fontSize="small" /> },

        { label: "GitHub", href: "https://github.com/ayeshaidrees155", icon: <GitHubIcon fontSize="small" /> },
    ];

    return (
        <Box
            component="footer"
            className="!w-full !bg-[var(--clr-black)] !text-white !pt-18 !pb-8 !px-6 lg:!px-10 !flex !flex-col !justify-between !min-h-screen relative overflow-hidden"
        >
            {/* TOP  SECTION */}
            <Box className="!grid !grid-cols-1 md:!grid-cols-3 !gap-8 !items-start">


                <Box className="!flex !flex-col !gap-3">
                    <Typography className="!text-[11px] !tracking-widest !uppercase !text-white/40 !font-mono !mb-2">
                        NAVIGATION
                    </Typography>
                    <Box className="!flex !flex-wrap !gap-x-4 !gap-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="!text-sm !text-white/80 hover:!text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </Box>
                </Box>


                <Box className="!flex !flex-col !gap-3 md:!items-center">
                    <Typography className="!text-[11px] !tracking-widest !uppercase !text-white/40 !font-mono !mb-2">
                        SOCIAL PROFILES
                    </Typography>
                    <Box className="!flex !flex-wrap !items-center !gap-x-3 !gap-y-2 !text-sm !text-white/80">
                        {socialLinks.map((social, index) => (
                            <React.Fragment key={social.label}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:!text-white transition-colors"
                                >
                                    {social.label}
                                </a>
                                {index < socialLinks.length - 1 && (
                                    <span className="!text-white/30">•</span>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </Box>


                <Box className="!flex !flex-col !items-start md:!items-end">
                    <Typography className="!text-[11px] !tracking-widest !uppercase !text-white/40 !font-mono !mb-1">
                        Worldwide Available
                    </Typography>
                    <Typography className="!text-xs !text-white/40 !font-mono">
                        {new Date().getFullYear()}
                    </Typography>
                </Box>

            </Box>

            {/* CENTER  NAME */}
            <Box className="!my-auto !py-12 !text-center select-none">
                <Typography
                    className="!font-black !text-[color:var(--clr-purple)] !tracking-tighter !text-[18vw] sm:!text-[16vw] md:!text-[14vw] !leading-none !uppercase"
                    sx={{
                        fontWeight: 700
                    }}
                >
                    AYESHA
                </Typography>
            </Box>

            {/* BOTTOM COPYRIGHT SECTION */}
            <Box className="!flex !flex-col md:!flex-row !items-start justify-between !gap-6">


                <Box className="!flex !flex-col !gap-2 text-left">
                    <a
                        href="#contacts"
                        className="!text-sm !underline !underline-offset-4 !text-white/80 hover:!text-[#A2798F] transition-colors"
                    >
                        Contact
                    </a>
                    <Typography className="!text-xs !text-white/50 !font-mono">
                        © {new Date().getFullYear()} AYESHA. All rights reserved.
                    </Typography>
                </Box>


                <Box className="!flex !flex-col !gap-2">
                    <a
                        href="mailto:ayesha.idrees155@gmail.com"
                        className="!text-xs md:!text-sm !font-mono !underline !underline-offset-4 !text-white/80 hover:!text-[#A2798F] transition-colors"
                    >
                        ayesha.idrees155@gmail.com
                    </a>


                </Box>


                <Box className="!flex !flex-col !items-start md:!items-end !gap-1">
                    <Typography className="!text-[10px] !tracking-widest !uppercase !text-white/40 !font-mono">
                        FOLLOW
                    </Typography>
                    <Box className="!flex !items-start !md:items-center !gap-1">
                        {socialLinks.map((social) => (
                            <IconButton
                                key={social.label}
                                component="a"
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    padding: '4px',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        color: '#ffffff',
                                    }
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}