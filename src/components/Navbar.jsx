import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Search, Person } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Music Discovery
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit">
            <Person />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
