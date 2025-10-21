"use client";
import { Container, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import React from "react";

export default function RecentWork() {
  const projects = [
    {
      title: "Movie App",
      description: "A React project that displays movies using an API with filtering and search features.",
      image: "/images/movie-app.jpg",
      link: "https://movies-project-rho.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS for responsive UI.",
      image: "/images/portfolio.jpg",
      link: "#",
    },
    {
      title: "Todo Application",
      description: "A task manager built with React and Redux Toolkit for state management.",
      image: "/images/todo-app.jpg",
      link: "#",
    },
    {
      title: "Weather App",
      description: "A modern weather app using OpenWeather API and React Hooks.",
      image: "/images/weather-app.jpg",
      link: "#",
    },
  ];

  return (
    <Container className="py-20">
      {/* Title */}
      <div className="flex items-center justify-center mb-10">
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "white" }}>
          Recent Work
        </Typography>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 border border-green-950"
          >
        
            <CardContent sx={{backgroundColor:"black" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1,color: "#fff"}}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
                {project.description}
              </Typography>
              <Button
                variant="outlined"
                href={project.link}
                target="_blank"
                sx={{
                  borderColor: "#3F8E00",
                  color: "#3F8E00",
                  "&:hover": { backgroundColor: "#3F8E00", color: "#fff" },
                }}
              >
                View Project
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
