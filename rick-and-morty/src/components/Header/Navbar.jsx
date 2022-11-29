import { MenuItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = [
  { label: "characters", path: "characters/" },
  { label: "episodes", path: "episodes/" },
  { label: "locations", path: "locations/" },
  { label: "watchlist", path: "watchlist" },
];

const Navbar = () => {
  return (
    <>
      {pages.map((page) => (
        <MenuItem key={page.label}>
          <Typography variant="h5">
            <NavLink
              to={`/${page.path}`}
              style={({ isActive }) =>
                isActive
                  ? { color: "#8feb34", textDecoration: "none" }
                  : { color: "white", textDecoration: "none" }
              }
            >
              {page.label}
            </NavLink>
          </Typography>
        </MenuItem>
      ))}
    </>
  );
};

export default Navbar;
