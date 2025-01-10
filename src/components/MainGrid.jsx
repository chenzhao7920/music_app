import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import AlbumCard from "./AlbumCard";
import {
  searchReleases,
  getFavorites,
  addToFavorites,
  removeFromFavorites,
  // getReleaseDetails,
} from "../services/discogsApi";

export default function MainGrid() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["releases", "Canada", "2024"],
    queryFn: () => searchReleases({ country: "Canada", year: "2024" }),
  });
  // console.log(
  //   "release ids",
  //   data?.results?.map((release) => release.id)
  // );
  // const {
  //   data: releaseDetailsData,
  //   isLoading: releaseDetailsDataIsLoading,
  //   error: releaseDetailsDataError,
  // } = useQuery({
  //   queryKey: ["releases", "Canada", "2024"],
  //   queryFn: () => getReleaseDetails({ country: "Canada", year: "2024" }),
  // });
  const handleToggleFavorite = (album) => {
    const isFavorite = favorites.some((fav) => fav.id === album.id);
    if (isFavorite) {
      setFavorites(removeFromFavorites(album.id));
    } else {
      setFavorites(addToFavorites(album));
    }
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <Typography color="error">
          Error loading albums: {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Explore Musics
      </Typography>
      <Grid container spacing={2} columns={12}>
        {data?.results?.map((album) => (
          <Grid
            key={album.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <AlbumCard
              releaseId={album.id}
              title={album.title}
              artist={album.artist}
              coverImage={album.cover_image}
              year={album.year}
              isFavorite={favorites.some((fav) => fav.id === album.id)}
              onToggleFavorite={() => handleToggleFavorite(album)}
              onClick={() => {
                /* TODO: Implement album details view */
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
