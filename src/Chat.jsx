import {
  Box,
  Typography,
  Avatar,
  TextField,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Chat = () => {
  return (
    <Box
      sx={{
        width: 400,
        mx: "auto",
        my: 5,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        ChattApp
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Chat App
        </Typography>
        <Divider />
        <Box sx={{ my: 2 }}>
          <Typography variant="subtitle1">Chat with Ahmed</Typography>
        </Box>
        <Box
          sx={{
            height: 250,
            mb: 2,
            px: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Avatar sx={{ width: 24, height: 24, mr: 1 }}>A</Avatar>
            <Box>
              <Typography variant="body2" fontWeight="bold">
                Ahmed
              </Typography>
              <Typography variant="body2">Hello!</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Avatar sx={{ width: 24, height: 24, mr: 1 }}>Y</Avatar>
            <Box>
              <Typography variant="body2" fontWeight="bold">
                You
              </Typography>
              <Typography variant="body2">Hi, how are you?</Typography>
            </Box>
          </Box>
        </Box>

        <Divider />

        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <TextField
            fullWidth
            size="small"
            label="Type a message..."
            variant="outlined"
          />
          <IconButton color="primary">
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default Chat;
