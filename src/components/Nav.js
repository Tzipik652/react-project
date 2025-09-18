import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [value, setValue] = useState("/");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box sx={{ width: "20%" }}>
      <Tabs value={value} onChange={handleChange} orientation="vertical">
        <Tab value="/" label="Home" />
        <Tab value="/comments" label="Comments" />
        <Tab value="/about" label="About" />
      </Tabs>
    </Box>
  );
};
export default Nav;
