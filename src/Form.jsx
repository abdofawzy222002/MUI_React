import React from "react";
import {
  TextField,
  Paper,
  Container,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,  
} from "@mui/material";

export default function Form() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 400,
          padding: 4,
        }}
      >
        <Typography variant="h5" align="center">
          Login
        </Typography>

        <Box component="form"  sx={{ mt: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            variant="outlined"
            type="password"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ mt: 1 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, mb: 1 }}
          >
            LOGIN
          </Button>

          <Box textAlign="center">
            <Link href="#">
              Forgot password?
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}