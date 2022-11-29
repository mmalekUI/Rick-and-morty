import { AppBar, Toolbar } from "@mui/material";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Navbar />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
