import { Box, Typography } from "@mui/material";

const CommentCard = ({ type, count }) => {
    
  return (
    <Box
      display="flex"
      flexWrap="wrap"       
      gap={0.5}   
      alignItems="center"
      p={1}                 
      bgcolor="secondary.main"
      color="white"
      borderRadius={1}      
      fontSize="0.8rem"
    >
      {Array.from({ length: count }).map((_, index) => (
        <Typography key={index} variant="body2">
          {type}
        </Typography>
      ))}
    </Box>
  );
};

export default CommentCard;
