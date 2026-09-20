export const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", percent: 70 },
      { name: "Python", percent: 85 },
      { name: "Java", percent: 70 },
      { name: "C", percent: 60 },
      { name: "C++", percent: 76 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", percent: 80 },
      { name: "CSS", percent: 75 },
      { name: "TypeScript", percent: 60 },
      { name: "React", percent: 75 },
      { name: "Next.js", percent: 60 },
      { name: "Tailwind CSS", percent: 60 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", percent: 60 },
      { name: "Express.js", percent: 60 },
      { name: "FastAPI", percent: 60 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", percent: 70 },
      { name: "SQLite", percent: 70 },
      { name: "MongoDB", percent: 60 },
    ],
  },
];

export const projects = [
  {
    id: "portfolio",
    title: "Portfolio Site",
    description:
      "This Next.js portfolio demonstrating pages, layout, and simple components. Built with React 19 and Next.js 16.",
    githubUrl: "https://github.com/Sanaunggithub/my-portfolio",
    image: "/projects/portfolio.png",
  },
  {
    id: "solvehub",
    title: "Solvehub",
    description:
      "A developer-focused Q&A and knowledge-sharing platform where users ask questions, share insights, join discussions, and earn recognition. Built with React.js and FastAPI",
    githubUrl: "https://github.com/Sanaunggithub/SolveHub",
    image: "/projects/solvehub.png",
  },
  {
    id: "weather-app",
    title: "SE16 Weather Forecast App",
    description:
      "A real-time weather forecasting application developed with C++ and the Qt framework.",
    githubUrl: "https://github.com/Sanaunggithub/SE16WeatherForecast",
    image: "/projects/weather-app.png",
  },
  {
    id: "restaurant-app",
    title: "Mingalarpr Restaurant App",
    description: "A restaurant ordering system built with Python Tkinter framework.",
    githubUrl: "https://github.com/Sanaunggithub/Mingalarpr-Restaurant_Ordering",
    image: "/projects/restaurant.png",
  },
  {
    id: "movie-app",
    title: "Cineverse",
    description: "A movie search app built with React.js and Tailwind CSS.",
    githubUrl: "https://github.com/Sanaunggithub/cineverse_movie_search",
    image: "/projects/cineverse.png",
  },
  {
    id: "system-monitor",
    title: "System Monitor",
    description:
      "A real-time system monitoring application built with Rust and the Iced GUI framework",
    githubUrl: "https://github.com/Sanaunggithub/rust_sys_monitor",
    image: "/projects/rustsytem.png",
  },
];

export const education = [
  {
    id: "uni1",
    school: "University Of Technology (Yatanarpon Cyber City)",
    major: "ICT Major",
    years: "2017 - 2020",
  },
  {
    id: "uni2",
    school: "King Mongkut's Institute Of Technology",
    major: "Software Engineering Major",
    location: "Thailand",
    years: "2024 - Present",
  },
];
