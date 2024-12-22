import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";

export default function LoginPage() {


    return (
        <Stack sx={{ justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Paper elevation={0} sx={{
                width: {
                    xs: "100%",
                    md: "600px"
                },
                minHeight: {
                    xs: "100%",
                    md: "300px"
                }
            }}>
                <Box sx={{ p: 2, }}>
                    <Typography variant="h3" sx={{ textAlign: "center" }}>Welcome Back</Typography>
                    <Typography sx={{ textAlign: "center" }}>Log in to your account</Typography>

                    <Box sx={{ mt: 2, display: "flex" }} flexDirection={"column"} gap={2}>
                        <TextField fullWidth id="email-input" label="Email" variant="outlined" />
                        <TextField fullWidth id="password-input" label="Password" variant="outlined" />
                        <Button variant="contained">LOGIN</Button>
                    </Box>
                </Box>
            </Paper>
        </Stack>
    )
}