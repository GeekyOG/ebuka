import React, { useEffect, useState } from "react";
import Container from "../../ui/Container";
import AudioPlayer from "../../ui/AudioPlayer";
import axios from "axios";
import { BsSpotify } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaAmazon, FaApple, FaSpotify } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getAlbum } from "../../api/apis";

function AlbumCover() {
  const latestAlbumQuery = useQuery({
    queryKey: ["latest-album"],
    queryFn: getAlbum,
  });

  const [tracks, setTracks] = useState<any[]>([]);
  const [albumTracks, setAlbumTacks] = useState<any[]>([]);
  const [albumInfo, setAlbumInfo] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [token, setToken] = useState("");
  const clientId = "58b2fd67fbc943d7ae6910ab00c305ea";
  const clientSecret = "f4ae90ea94a045f4923b49f7e147d15f";
  const albumId = latestAlbumQuery?.data
    ? latestAlbumQuery.data[0]?.albumId
    : null;

  useEffect(() => {
    if (!albumId) return;
    const fetchSpotifyData = async () => {
      try {
        // Get access token
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
        setToken(accessToken);

        // Fetch album tracks using the token
        const albumResponse = await axios.get(
          `https://api.spotify.com/v1/albums/${albumId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log(albumResponse.data);

        setAlbumInfo(albumResponse.data);

        setAlbumTacks(albumResponse.data.tracks);
      } catch (err) {
        setError("Failed to load data from Spotify");
        console.error(err);
      }
    };

    fetchSpotifyData();
  }, [clientId, clientSecret, albumId]);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // Get access token
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
        setToken(accessToken);

        // Fetch album tracks using the token
        const albumResponse = await axios.get(
          `https://api.spotify.com/v1/artists/1voWj2pMS3ApzUroyIcHXM/top-tracks`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setTracks(albumResponse.data.tracks);
      } catch (err) {
        setError("Failed to load data from Spotify");
        console.error(err);
      }
    };

    fetchSpotifyData();
  }, [clientId, clientSecret]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="py-[50px] text-[#ff]">
        <Container className="flex justify-center ">
          {albumInfo && latestAlbumQuery?.data && (
            <div className="flex gap-[32px] flex-col lg:flex-row">
              <AudioPlayer img={albumInfo.images[0].url} tracks={tracks} />

              <div className="max-w-[450px] flex flex-col gap-[35px]">
                <p className=" text-[2.5rem] font-[700]">
                  <span className="goldAnimate">
                    {latestAlbumQuery?.data[0].title}
                  </span>
                </p>
                <p>{latestAlbumQuery?.data[0].content}</p>

                <button className="btnGradient text-[#fff] w-[100%] max-w-[200px]">
                  <Link
                    to={
                      "https://open.spotify.com/artist/1voWj2pMS3ApzUroyIcHXM"
                    }
                    target="_blank"
                    className="text-[#fff]"
                  >
                    Buy/Stream Album
                  </Link>
                </button>

                <p className="text-[1.5rem] font-[600]">Also Listen On</p>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    {latestAlbumQuery?.data[0].itunes && (
                      <Link
                        to={latestAlbumQuery?.data[0].itunes}
                        target="_blank"
                      >
                        <div className="flex items-center gap-[10px]">
                          <FaApple size={32} />
                          <p className="text-[1.25rem] font-[700] uppercase">
                            Itunes
                          </p>
                        </div>
                      </Link>
                    )}

                    <Link
                      to={
                        "https://open.spotify.com/artist/1voWj2pMS3ApzUroyIcHXM"
                      }
                      target="_blank"
                      className="text-[#fff]"
                    >
                      <div className="flex items-center gap-[10px]">
                        <FaSpotify size={32} />
                        <p className="text-[1.25rem] font-[700] uppercase">
                          Spotify
                        </p>
                      </div>
                    </Link>

                    {latestAlbumQuery?.data[0].amazon && (
                      <Link
                        to={latestAlbumQuery?.data[0].amazon}
                        target="_blank"
                      >
                        <div className="flex items-center gap-[10px]">
                          <FaAmazon size={32} />
                          <p className="text-[1.25rem] font-[700] uppercase">
                            Amazon
                          </p>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
      <div className=" bg-[#fff] flex justify-center text-[#000] py-[50px]">
        <div className="max-w-[800px] w-[100%]">
          <div className="pb-[50px] border-b-[1px]">
            <p className="text-3xl font-[700] text-center">Tracklist</p>
          </div>

          <div className="flex md:justify-center mt-[50px] ">
            <div className="flex flex-col gap-[16px] w-[100%] justify-center mx-auto px-[32px]">
              {tracks?.map((track, index) => (
                <div key={track.id} className="mb-2 flex justify-between">
                  <div className="max-w-[200px] text-[0.865rem]">
                    {track.name}
                  </div>
                  <div className="flex items-center gap-[16px] w-[60px] lg:w-[150px]">
                    <Link to={track.external_urls.spotify} target="_blank">
                      <BsSpotify />
                    </Link>

                    <p>
                      {Math.floor(track.duration_ms / 60000)}:
                      {(track.duration_ms % 60000) / 1000 < 10 ? "0" : ""}
                      {Math.floor((track.duration_ms % 60000) / 1000)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumCover;
