import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

const genres = [
  "Rock",
  "Electronic",
  "Pop",
  "Jazz",
  "Hip Hop",
  "Classical",
  "Folk",
  "Blues",
  "Country",
  "Metal",
];

const countries = [
  "Canada",
  "USA",
  "UK",
  "France",
  "Germany",
  "Japan",
  "Australia",
];

export default function FilterMenu({ onFilterChange }) {
  const [filters, setFilters] = React.useState({
    year: currentYear.toString(),
    genre: "",
    country: "Canada",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Filters
      </Typography>
      <Stack spacing={3}>
        <FormControl fullWidth>
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            name="year"
            value={filters.year}
            label="Year"
            onChange={handleChange}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year.toString()}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            name="genre"
            value={filters.genre}
            label="Genre"
            onChange={handleChange}
          >
            <MenuItem value="">All Genres</MenuItem>
            {genres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            name="country"
            value={filters.country}
            label="Country"
            onChange={handleChange}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}
