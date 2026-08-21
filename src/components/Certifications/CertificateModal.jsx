import React from 'react';
import { Box, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function CertificateModal({ open, onClose, certificate }) {
    if (!certificate) return null;

    return (
        <Modal
            open={open}
            onClose={onClose}
            className="flex items-center justify-center p-4"
        >
            <Box className="bg-white rounded-3xl max-w-3xl w-full p-6 md:p-8 relative outline-none shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto">

                <IconButton
                    onClick={onClose}
                    className="!absolute top-6 right-6 !bg-gray-100 hover:!bg-gray-200 !text-gray-600"
                >
                    <CloseIcon />
                </IconButton>


                <Box className="flex flex-col gap-1 pr-10">
                    <span className="text-[11px] font-bold tracking-widest text-[var(--clr-purple)] uppercase">
                        {certificate.badgeLabel || "VERIFIED CERTIFICATE"}
                    </span>
                    <Typography className="!text-2xl md:!text-3xl !font-bold text-[#121113]">
                        {certificate.title}
                    </Typography>
                    <Typography className="text-xs sm:text-sm text-gray-500 font-medium">
                        {certificate.issuer}
                    </Typography>
                </Box>


                <Box className="w-full bg-[#F8F9FA] p-3 sm:p-5 rounded-2xl border border-gray-200/80 flex items-center justify-center">
                    <img
                        src={certificate.certificateImg}
                        alt={certificate.title}
                        className="w-full h-auto max-h-[50vh] object-contain rounded-lg shadow-sm"
                    />
                </Box>
            </Box>
        </Modal>
    );
}