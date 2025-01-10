import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getReleaseDetails } from "../services/discogsApi";
const AlbumCard = ({
  releaseId,
  title,
  artist,
  coverImage,
  year,
  isFavorite,
  onToggleFavorite,
  onClick,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["releaseDetail", `${releaseId}`],
    queryFn: () => getReleaseDetails(releaseId),
  });
  console.log("data", data?.artists);
  if (isLoading) {
    return (
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <CircularProgress />
      </Card>
    );
  }
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        "&:hover": {
          boxShadow: 6,
        },
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={coverImage || "https://via.placeholder.com/200"}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ position: "relative" }}>
        <Typography variant="body2" color="text.secondary" noWrap>
          {data?.artists?.map((a) => (
            <div>{a.name}</div>
          ))}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {year}
        </Typography>
        <Box>
          <IconButton
            sx={{ position: "absolute", bottom: 8, right: 8 }}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
          >
            {isFavorite ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
