import {
  Box,
  Typography,
  Paper,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

export default function SelectLanguage() {
  return (
    <Box sx={{ width: 400, mx: "auto", my: 5, borderRadius: 2 }}>
      <Typography variant="h4" sx={{ my: 3 }}>
        Select Form
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" sx={{ my: 3 }}>
          Choose Language
        </Typography>
        <Divider />
        <FormControl sx={{ my: 3 }} fullWidth>
          <InputLabel id="demo-select-small-label">Language</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Language"
            defaultValue=""
          >
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="arabic">Arabic</MenuItem>
            <MenuItem value="french">French</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" fullWidth size="large">
          Submit
        </Button>
      </Paper>
    </Box>
  );
}
