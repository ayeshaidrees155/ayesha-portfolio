import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function IntroSplash({ onFinish }) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 2200);

        const finishTimer = setTimeout(() => {
            onFinish();
        }, 2900);

        return () => {
            clearTimeout(timer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    const letters = "AYESHA".split("");

    return (
        <Box
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-clr)] transition-transform duration-700 ease-in-out ${fadeOut ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <Box className="flex items-center overflow-hidden">
                <Typography
                    variant="h2"
                    component="div"
                    className="text-[color:var(--clr-white)] !font-bold tracking-wider flex"
                >
                    {letters.map((letter, index) => (
                        <span
                            key={index}
                            className="inline-block animate-bounce"
                            style={{
                                animationDuration: '1.2s',
                                animationDelay: `${index * 0.1}s`,
                                animationIterationCount: '1',
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                    <span
                        className="inline-block text-[var(--clr-purple)] ml-1 animate-pulse"
                        style={{ animationDuration: '1s' }}
                    >
                        .
                    </span>
                </Typography>
            </Box>
        </Box>
    );
}