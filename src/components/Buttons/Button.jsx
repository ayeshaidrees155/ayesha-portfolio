import React from 'react'
import { Button } from '@mui/material'
export default function ButtonComp({ sx, onClick, variant, label, ...props }) {
    return (
        <Button

            sx={{
                textTransform: "none",
                fontFamily: "var(--font-sans, 'Satoshi', sans-serif)",
                background: "none",
                ...sx
            }}
            className=' h-10 !rounded-full !text-[length:var(--text-btn)] '
            onClick={onClick}
            variant={variant}
            {...props}
        > {label || props}</Button >
    )
}
