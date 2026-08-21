import emailjs from '@emailjs/browser';
import React, { useState } from 'react'
import { Box, Typography, TextField, Checkbox, FormControlLabel, Button, Snackbar, Alert } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'


export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        message: "",

    })
    const [errors, setErrors] = useState({})
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = ((e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === "mobileNo") { newValue = value.replace(/\D/g, ""); }


        setFormData({ ...formData, [name]: newValue });

        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }

    })

    const validateForm = ((e) => {
        const newErrors = {}
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!formData.firstName.trim()) { newErrors.firstName = "   First Name is required" }
        if (!formData.lastName.trim()) { newErrors.lastName = "Last Name  is required" }
        if (!formData.email.trim()) { newErrors.email = "Email Address is required" }
        else if (!emailPattern.test(formData.email)) { newErrors.email = "Please enter valid email address" }
        if (!formData.mobileNo.trim()) { newErrors.mobileNo = "Mobile No is required" }
        if (!formData.message.trim()) { newErrors.message = "Message cannot be empty" }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    })



    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {

            emailjs.send(
                'service_lg0i94j',     //  Service ID
                'template_7a24m5b',    //  Template ID
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    mobileNo: formData.mobileNo,
                    message: formData.message,
                },
                'LTG69Xag641VstQkW'      //  Public Key
            )
                .then(() => {

                    setOpenSnackbar(true);
                    setFormData({ firstName: "", lastName: "", email: "", mobileNo: "", message: "" });
                })
                .catch((error) => {
                    console.error("Email sending error:", error);
                });
        }
    };
    const inputSx = {
        '& .MuiInput-root': {
            color: 'white',
            fontSize: { xs: '0.9rem', md: '1rem' },
            paddingY: '6px',
            '&:before': { borderBottomColor: 'rgba(255, 255, 255, 0.4)' },
            '&:hover:not(.Mui-disabled):before': { borderBottomColor: 'white' },
            '&:after': { borderBottomColor: 'white' },
        },
        '& .MuiInputBase-input::placeholder': {
            color: 'rgba(255, 255, 255, 0.85)',
            opacity: 1,
        },

        '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
            WebkitTextFillColor: '#ffffff !important',
            transition: 'background-color 5000s ease-in-out 0s',
        },
        '& input:-webkit-autofill:focus': {
            WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
            WebkitTextFillColor: '#ffffff !important',
        },
    }

    return (
        <section
            id="contacts"
            className="relative w-full min-h-screen bg-[#121113] overflow-hidden flex flex-col justify-end pt-12 md:pt-20 overflow-hidden"
        >

            <Typography
                className="absolute top-8 md:top-14 left-1/2 -translate-x-1/2 !text-[14vw] sm:!text-[18vw] md:!text-[15vw] !font-black !uppercase tracking-widest pointer-events-none select-none whitespace-nowrap z-0"
                sx={{
                    color: "rgba(255, 255, 255, 0.07)",
                    lineHeight: 0.8
                }}
                data-aos="fade-down"
            >
                CONTACT
            </Typography>

            {/* FORM CARD */}
            <Box
                className="relative z-10 w-full md:w-[78%] lg:w-[70%] md:ml-auto mt-12 sm:mt-20 md:mt-28 bg-[var(--bg-clr)] text-white rounded-none  px-6 py-10 sm:px-10 sm:py-12 md:p-14 lg:p-16 shadow-2xl"
            >
                <Typography className="!text-xs !font-semibold !tracking-[0.3em] !uppercase !mb-8 md:!mb-12 !text-white/80">
                    REACH US
                </Typography>

                <form className="flex flex-col gap-10 md:gap-14 w-full" onSubmit={handleSubmit}>
                    {/* Grid Layout matching exact desktop baseline alignment */}
                    <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-stretch">

                        {/* Left Column: 4 Input Fields */}
                        <Box className="flex flex-col justify-between gap-6 md:gap-8">
                            <TextField
                                variant="standard"
                                placeholder="First Name"
                                fullWidth

                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                sx={{
                                    ...inputSx,
                                    '& input': { textTransform: 'capitalize' }
                                }}
                            />
                            {errors.firstName && (
                                <p style={{ color: "#eb4242", padding: 0, margin: 0 }}
                                    className='text-sm'>
                                    {errors.firstName}
                                </p>
                            )}
                            <TextField
                                variant="standard"
                                placeholder="Last Name"
                                fullWidth

                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                sx={{
                                    ...inputSx,
                                    '& input': { textTransform: 'capitalize' }
                                }}
                            />
                            {errors.lastName && (
                                <p style={{ color: "#eb4242", padding: 0, margin: 0 }} className='text-sm'>
                                    {errors.lastName}
                                </p>
                            )}
                            <TextField
                                variant="standard"
                                placeholder="Email"
                                type="email"
                                fullWidth
                                sx={inputSx}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}

                            />
                            {errors.email && (
                                <p style={{ color: "#eb4242", padding: 0, margin: 0 }} className='text-sm'>
                                    {errors.email}
                                </p>
                            )}
                            <TextField
                                variant="standard"
                                placeholder="Mobile No"
                                type="tel"
                                fullWidth
                                name="mobileNo"
                                value={formData.mobileNo}
                                onChange={handleChange}
                                slotProps={{
                                    htmlInput: {
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                    }
                                }}
                                sx={inputSx}
                            />
                            {errors.mobileNo && (
                                <p style={{ color: "#eb4242", padding: 0, margin: 0 }} className='text-sm'>
                                    {errors.mobileNo}
                                </p>
                            )}
                        </Box>

                        {/* RIGTH TEXTAREA*/}
                        <Box className="flex flex-col justify-between h-full min-h-[180px] md:min-h-0">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message here"
                                className="w-full h-full min-h-[160px] md:min-h-full bg-transparent border-b border-white/40 focus:border-white text-white text-[0.9rem] md:text-[1rem] py-1.5 focus:outline-none transition-colors resize-none placeholder-white/85 rounded-none [webkit-text-fill-color:white] [transition:background-color_5000s_ease-in-out_0s] capitalize"

                            />
                            {errors.message && (
                                <p style={{ color: "#eb4242", padding: 0, margin: 0 }} className='text-sm'>
                                    {errors.message}
                                </p>
                            )}
                        </Box>
                    </Box>


                    <Box className="flex justify-end">


                        <Button
                            type="submit"
                            variant="outlined"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                color: 'white',
                                borderColor: 'rgba(255, 255, 255, 0.6)',
                                borderRadius: '9999px',
                                padding: { xs: '6px 24px', sm: '8px 30px' },
                                textTransform: 'none',
                                fontSize: { xs: '0.825rem', sm: '0.875rem' },
                                fontWeight: 500,
                                alignSelf: { xs: 'flex-end', sm: 'center' },
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: 'var(--clr-purple)',
                                    borderColor: 'white',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Send
                        </Button>
                    </Box>
                </form>
            </Box>

            {/* SNACKBAR */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity="success"
                    variant="filled"
                    sx={{
                        backgroundColor: '#121113',
                        color: '#white',
                        borderRadius: '12px',
                        fontWeight: 500,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                >
                    Message sent successfully! We'll get back to you soon.
                </Alert>
            </Snackbar>
        </section>
    )
}