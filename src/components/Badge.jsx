import React from 'react'
import { Box } from '@mui/material'
export default function Badge({ label, sx }) {
    return (
        <Box
            sx={{ fontSize: "var(--text-sm)", ...sx }}
            className="rounded-full  px-5 py-1 shadow-md"
        >{label}</Box>
    )
}
