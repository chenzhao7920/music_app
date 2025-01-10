// Discogs API Configuration
export const DISCOGS_API_CONFIG = {
  baseURL: "https://api.discogs.com",
  // You should replace this with your own token from Discogs
  key: "mMQvICmTYYOOZxfrWHCv",
  secret: "kVERgDgMHTUJPigbcICidiNQGVSqMHPn",
  userAgent:
    "MusicDiscoveryApp/1.0.0+https://github.com/chenzhao7920/musiccollecto", //MusicDiscoveryApp/1.0.0
};

export const DEFAULT_HEADERS = {
  "User-Agent": DISCOGS_API_CONFIG.userAgent,
  Authorization: `Discogs key=${DISCOGS_API_CONFIG.key}, secret=${DISCOGS_API_CONFIG.secret}`,
};
