import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box, Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  marginBottom: 10,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

const SearchLesson = () => {
  return (
    <Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Lesson"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      {/* <Box
        sx={{
          height: "100px",
          maxHeight: "450px",
          width: "200px",
          background: "rgba(128,128,128,.15)",
          position:'absolute',
          overflow: "scroll",
          border: "2px solid rgba(128,128,128,.5)",
          borderRadius: "5px",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.2)",
            outline: "1px solid rgba(128,128,128,.55)",
            borderRadius: "3px",
          },
        }}
        hidden
      >
        <Typography>Atiqur Rahman</Typography>
        <Typography>Atiqur Rahman</Typography>
        <Typography>Atiqur Rahman</Typography>
        <Typography>Atiqur Rahman</Typography>
        <Typography>Atiqur Rahman</Typography>
        <Typography>Atiqur Rahman</Typography>
        <Typography>Atiqur Rahman</Typography>
        <Typography>Atiqur Rahman</Typography>
        <Typography>Atiqur Rahman</Typography>
        <Typography>Atiqur Rahman</Typography>
      </Box> */}
    </Box>
  );
};

export default SearchLesson;
