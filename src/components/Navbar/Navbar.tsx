import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = [
    { label: "Home", path: "/" },
    { label: "Login", path: "/login" },
    { label: "Pricing", path: "/pricing" },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Typography variant="h4">SMD</Typography>
          </IconButton>

          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "flex-end", flexGrow: 1 }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                color="inherit"
                component={Link}
                to={page.path}
              >
                {page.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
