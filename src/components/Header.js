import DateTimeInline from "./DateTimeInline";
import { Box, IconButton } from "@mui/material";
import Article from "@mui/icons-material/Article";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      bgcolor="primary.main"
      color="white"
    >
      <IconButton aria-label="settings">
        <Article />
      </IconButton>
      <DateTimeInline />
    </Box>
  );
};
export default Header;
