import React, { useEffect, useState } from "react";
import axios from "axios";

const ArtistAlbums = () => {
  const [albums, setAlbums] = useState<any>([]);
  const [artistInfo, setArtistInfo] = useState<any>(null);

  const clientId = "58b2fd67fbc943d7ae6910ab00c305ea";
  const clientSecret = "f4ae90ea94a045f4923b49f7e147d15f";

  const artistName = "Ebuka"; // Replace with the artist's name
  const token = "YOUR_ACCESS_TOKEN"; // Replace with an OAuth token from Authorization Code Flow

  useEffect(() => {
    const fetchArtistAlbums = async () => {
      try {
        const tokenResponse = await axios.post(
          "https://accounts.spotify.com/api/token",
          new URLSearchParams({
            grant_type: "client_credentials",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
            },
          }
        );

        const accessToken = tokenResponse.data.access_token;

        // Step 1: Search for the artist by name to get their ID
        const searchResponse = await axios.get(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            artistName
          )}&type=artist`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const artist = searchResponse.data.artists.items[0];
        setArtistInfo(artist);

        if (artist) {
          // Step 2: Fetch the artist's albums using their ID
          const albumsResponse = await axios.get(
            `https://api.spotify.com/v1/artists/${artist.id}/albums`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          console.log(albumsResponse);

          setAlbums(albumsResponse.data.items);
        }
      } catch (error) {
        console.error("Error fetching artist or albums:", error);
      }
    };

    fetchArtistAlbums();
  }, [artistName, token]);

  return (
    <div className="artist-albums p-6 bg-gray-900 text-white rounded-lg">
      {artistInfo && (
        <div className="artist-info mb-6">
          <img
            src={artistInfo.images[0]?.url}
            alt={artistInfo.name}
            className="w-32 h-32 rounded-md mb-4"
          />
          <h2 className="text-xl font-bold">{artistInfo.name}</h2>
          <p className="text-gray-400">
            Genres: {artistInfo.genres.join(", ")}
          </p>
        </div>
      )}

      <h3 className="text-lg font-semibold mb-4">Albums</h3>
      <ul>
        {albums.map((album) => (
          <li key={album.id} className="mb-4">
            kkk
            <a
              href={album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              <div className="flex items-center">
                <img
                  src={album.images[0]?.url}
                  alt={album.name}
                  className="w-16 h-16 mr-4 rounded-md"
                />
                <div>
                  <p className="font-semibold">{album.name}</p>
                  <p className="text-gray-400">{album.release_date}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistAlbums;
