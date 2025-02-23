"use client";

import React, { useState, useEffect } from "react";
import { API_URL, ROOT_URL } from "../constants";
import { IGame } from "@/types";
import { Placeholder } from "./base-components/Placeholder";
import { StyledPhotoIcon } from "./base-components/StyledPhotoIcon";
import {
  Grid2,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useTranslations } from "next-intl";

function Games() {
  const [games, setGames] = useState<IGame[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const t = useTranslations("Index");

  useEffect(() => {
    async function fetchGames() {
      try {
        const res = await fetch(`${ROOT_URL}/${API_URL}`);
        if (!res.ok) throw new Error("Failed to fetch games");
        const data: IGame[] = await res.json();

        const filteredGames = data
          .filter((game) => game?.category === "slots")
          .sort((a, b) => a.index - b.index);

        setGames(filteredGames);
      } catch (err) {
        setError((err as Error).message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  if (loading) return <p>Loading games...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalPages = Math.ceil(games.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedGames = games.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Grid2
        container
        spacing={2}
        padding={2}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          justifyContent: "center",
        }}
      >
        {paginatedGames.map((game) => {
          const imageUrl = game.imageModern?.modern
            ? `${ROOT_URL}${game.imageModern.modern}`
            : game.image
            ? `${ROOT_URL}${game.image}`
            : null;

          const fileExtension = imageUrl?.split(".").pop()?.toLowerCase();

          return (
            <Grid2 key={game.id}>
              <Card
                sx={{
                  transition: "transform 0.2s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                  },
                  borderRadius: "10px",
                }}
              >
                {imageUrl ? (
                  fileExtension === "webm" ? (
                    <video
                      width="100%"
                      height="140"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={imageUrl} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <CardMedia
                      component="img"
                      height="140"
                      image={imageUrl}
                      alt={game.name}
                      sx={{ borderRadius: "10px 10px 0 0" }}
                    />
                  )
                ) : (
                  <Placeholder>
                    <StyledPhotoIcon />
                  </Placeholder>
                )}
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {game.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Button
          variant="contained"
          sx={{ marginRight: "10px" }}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          role="button"
        >
          {t("previous")}
        </Button>

        <Typography display="inline" variant="body1">
          {currentPage} {t("of")} {totalPages}
        </Typography>

        <Button
          variant="contained"
          sx={{ marginLeft: "10px" }}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          {t("next")}
        </Button>
      </div>
    </>
  );
}

export default Games;
