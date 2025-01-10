import axios from "axios";
import { DISCOGS_API_CONFIG, DEFAULT_HEADERS } from "./config";

const discogsClient = axios.create({
  baseURL: DISCOGS_API_CONFIG.baseURL,
  headers: DEFAULT_HEADERS,
});

export const searchReleases = async ({
  country = "Canada",
  year = "2024",
  genre = "",
  page = 1,
  perPage = 10,
}) => {
  const params = new URLSearchParams({
    country,
    year,
    type: "release",
    per_page: perPage,

    page,
  });

  if (genre) {
    params.append("genre", genre);
  }

  const response = await discogsClient.get(`/database/search?${params}`);
  return response.data;
};

export const getArtistReleases = async (artistId) => {
  const response = await discogsClient.get(`/artists/${artistId}/releases`);
  return response.data;
};

export const getReleaseDetails = async (releaseId) => {
  const response = await discogsClient.get(`/releases/${releaseId}`);
  return response.data;
};

// Local storage functions for favorites
export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (album) => {
  const favorites = getFavorites();
  const updatedFavorites = [...favorites, album];
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  return updatedFavorites;
};

export const removeFromFavorites = (albumId) => {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter((album) => album.id !== albumId);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  return updatedFavorites;
};
