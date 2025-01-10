import * as React from "react";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

export default function NavbarBreadcrumbs() {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      //separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      <Link
        href="/search"
        underline="hover"
        color="inherit"
        sx={{ fontWeight: 500 }}
      >
        All
      </Link>
      <Link
        href="/favorite"
        underline="hover"
        color="text.primary"
        sx={{ fontWeight: 600 }}
      >
        Favorite
      </Link>
    </Breadcrumbs>
  );
}
