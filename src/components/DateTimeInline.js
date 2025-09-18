import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const DateTimeInline = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 1.5,
        py: 0.5,
        bgcolor: "rgba(0,0,0,0.05)",
        borderRadius: 1,
        fontSize: "0.8rem",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {time.toLocaleDateString("en-IL", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })}{" "}
        |
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {time.toLocaleTimeString("en-IL", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Typography>
    </Box>
  );
};

export default DateTimeInline;
