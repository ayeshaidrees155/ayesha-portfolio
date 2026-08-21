import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import Badge from '../Badge';
import bgImg from "/src/assets/cer2.png";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CertificateModal from './CertificateModal';

export default function Certifications() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certifications = [
        {
            id: "01",
            title: "Certified React & Frontend Developer",
            issuer: "CODE FUSION 2026",
            badgeLabel: "VERIFIED CERTIFICATE",
            description: "Comprehensive certification covering React.js, ES6+ JavaScript, Redux Toolkit, and modern CSS frameworks. Focused on building responsive, scalable SPAs with seamless API integration and dynamic UI logic.",
            certificateImg: "/src/assets/cer2.png"
        }
    ];

    return (
        <section
            id="certifications"
            className="w-full min-h-screen flex flex-col justify-center items-center py-20 px-6 lg:px-10 bg-contain lg:bg-cover bg-no-repeat bg-center overflow-hidden"
            style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${bgImg})` }}
        >
            <Box className="max-w-7xl w-full flex flex-col gap-10 lg:gap-12 rounded-lg">

                {/* HEADER */}
                <Box className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <Box className="flex flex-col items-start" data-aos="fade-right">
                        <Badge
                            label="Achievements"
                            sx={{
                                color: "var(--clr-gray)",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase"
                            }}
                        />

                        {/* Title */}
                        <Typography className="!text-4xl md:!text-6xl !font-bold pt-4 text-[var(--clr-blackSec)] tracking-tight">
                            Licenses & <span className="text-[var(--bg-clr)] !font-normal italic">Certifications</span>
                        </Typography>
                    </Box>

                    {/* Subtitle */}
                    <Typography className="text-[var(--clr-gray)] text-base md:text-lg max-w-md leading-relaxed px-1" data-aos="fade-left">
                        Professional qualification and specialized training that validates my technical expertise in modern frontend web development.
                    </Typography>
                </Box>

                <hr className="border-[var(--border-fadeWhite)] opacity-60" />

                {/* CERTIFICATION LIST */}
                <Box className="w-full flex flex-col gap-6">
                    {certifications?.map((cer, i) => (
                        <Box
                            key={cer.id || i}

                            className="group relative w-full p-8 md:p-10 bg-transparent lg:bg-[var(--bg-white)] rounded-3xl border border-[var(--border-fadeWhite)]/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm hover:shadow-xl active:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer select-none"
                        >

                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--bg-clr)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 rounded-l-3xl"></span>

                            <Box className="flex flex-col md:flex-row md:items-center gap-4 lg:w-6/12 pl-2 group-hover:pl-4 group-active:pl-4 transition-all duration-300">
                                <Typography className="!text-2xl md:!text-3xl !font-bold text-[var(--clr-blackSec)] group-hover:text-[var(--bg-clr)] group-active:text-[var(--bg-clr)] tracking-tight transition-colors duration-300">
                                    {cer.title}
                                </Typography>

                                <span className="hidden md:inline-block w-8 h-[1px] bg-[var(--border-fadeGray)] group-hover:bg-[var(--bg-clr)] group-active:bg-[var(--bg-clr)] transition-colors duration-300"></span>

                                <Typography className="text-xs font-semibold text-[var(--clr-gray)] tracking-wider uppercase whitespace-nowrap">
                                    {cer.issuer}
                                </Typography>
                            </Box>


                            <Typography className="text-sm text-[var(--clr-gray)] leading-relaxed lg:w-4/12">
                                {cer.description}
                            </Typography>

                            {/*  Certificate Button */}
                            <Box className="lg:w-2/12 flex justify-start lg:justify-end transform hover:scale-105 transition-all duration-500">
                                <button
                                    onClick={() => setSelectedCertificate(cer)}
                                    type="Button"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-fadeWhite)]/30 bg-[var(--bg-clr)]/10 text-[var(--bg-clr)] group-hover:bg-[var(--bg-clr)] group-hover:text-[var(--clr-white)] group-active:bg-[var(--bg-clr)] group-active:text-[var(--clr-white)] text-xs transition-all duration-300"
                                >
                                    <span className="text-sm flex items-center">
                                        <RemoveRedEyeOutlinedIcon fontSize="small" />
                                    </span>
                                    View Certificate
                                </button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/*  MODAL  */}
            <CertificateModal
                open={Boolean(selectedCertificate)}
                onClose={() => setSelectedCertificate(null)}
                certificate={selectedCertificate}
            />
        </section>
    );
}