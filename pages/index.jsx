import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Head from "next/head";

const icons = {
  home: <i className="fas fa-home" style={{ width: '20px', fontSize: '18px' }}></i>,
  about: <i className="fas fa-user" style={{ width: '20px', fontSize: '18px' }}></i>,
  projects: <i className="fas fa-folder" style={{ width: '20px', fontSize: '18px' }}></i>,
  skills: <i className="fas fa-code" style={{ width: '20px', fontSize: '18px' }}></i>,
  education: <i className="fas fa-graduation-cap" style={{ width: '20px', fontSize: '18px' }}></i>,
};
const skillCategories = [
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
			{ name: "Django", percent: 60 },
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

const projects = [
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

const education = [
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

const scrollToSection = (sectionId) => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

// Typing animation hook
const useTypingEffect = (text, speed = 100) => {
	const [displayText, setDisplayText] = useState("");

	useEffect(() => {
		if (displayText.length < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText(text.slice(0, displayText.length + 1));
			}, speed);
			return () => clearTimeout(timeout);
		}
	}, [displayText, text, speed]);

	return displayText;
};

// Skill bar animation hook
const useSkillAnimation = (targetPercent) => {
	const [currentPercent, setCurrentPercent] = useState(0);

	useEffect(() => {
		if (currentPercent < targetPercent) {
			const timeout = setTimeout(() => {
				setCurrentPercent((prev) => Math.min(prev + 1, targetPercent));
			}, 20);
			return () => clearTimeout(timeout);
		}
	}, [currentPercent, targetPercent]);

	return currentPercent;
};

export default function Home() {
	const [activeNav, setActiveNav] = useState("home");
	const typedHeading = useTypingEffect("Hi, I'm San Aung", 100);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navItems = [
		{ id: "home", label: "Home" },
		{ id: "about", label: "About" },
		{ id: "projects", label: "Projects" },
		{ id: "skills", label: "Skills" },
		{ id: "education", label: "Education" },
	];

	// Light theme glass style for your design
	const glassStyle = {
		background: "rgba(255, 255, 255, 0.6)",
		backdropFilter: "blur(10px)",
		WebkitBackdropFilter: "blur(10px)",
		border: "1px solid rgba(255, 255, 255, 0.8)",
		boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
		borderRadius: 8,
	};

	return (
		<>	
			<Head>
				<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
				/>
				<link rel="icon" href="/apple-touch-icon.png" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      		</Head>
			<div
			style={{
				background: "#ffffff",
				color: "#333",
				minHeight: "100vh",
			}}
			>
			{/* Navigation */}
				<nav
				style={{
					position: "sticky",
					top: 0,
					zIndex: 1000,
					background: "#fff",
					borderBottom: "1px solid #e5e5e5",
					boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
					padding: "1rem",
				}}
				>
				<div
					style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					maxWidth: 1200,
					margin: "0 auto",
					}}
				>
					<div
					style={{
						fontSize: "1.3rem",
						fontWeight: "600",
						color: "#0362fc",
						letterSpacing: "0.5px",
					}}
					>
					San Aung
					</div>

					{/* Desktop Navigation */}
					<div
					style={{
						display: "none",
						gap: "1.8rem",
					}}
					className="desktop-nav"
					>
					{navItems.map((item) => (
						<button
						key={item.id}
						onClick={() => {
							setActiveNav(item.id);
							scrollToSection(item.id);
						}}
						style={{
							background: "none",
							border: "none",
							color: activeNav === item.id ? "#0362fc" : "#555",
							cursor: "pointer",
							fontSize: "1.1rem",
							fontWeight: activeNav === item.id ? 600 : 400,
							transition: "color 0.2s ease",
							padding: "0.4rem 0",
						}}
						onMouseEnter={(e) => (e.target.style.color = "#0362fc")}
						onMouseLeave={(e) => {
							if (activeNav !== item.id) e.target.style.color = "#555";
						}}
						>
						{item.label}
						</button>
					))}
					</div>

					{/* Hamburger Button */}
					<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					style={{
						display: "none",
						background: "none",
						border: "none",
						cursor: "pointer",
						padding: "0.5rem",
						display: "block",
						fontSize: "1.5rem",
						color: "#0362fc",
					}}
					className="hamburger-btn"
					aria-label="Toggle menu"
					>
					
					{isMobileMenuOpen ? (
							<i className="fas fa-times"></i>
						) : (
							<i className="fas fa-bars"></i>
						)
					}
					
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div
					style={{
						display: "none",
						flexDirection: "column",
						gap: "0.5rem",
						marginTop: "1rem",
						padding: "1rem 0",
						borderTop: "1px solid #e5e5e5",
					}}
					className="mobile-menu"
					>
					{navItems.map((item) => {
						const icons = {
						home: (
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
							<polyline points="9 22 9 12 15 12 15 22"></polyline>
							</svg>
						),
						about: (
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="12" y1="16" x2="12" y2="12"></line>
							<line x1="12" y1="8" x2="12.01" y2="8"></line>
							</svg>
						),
						projects: (
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
						),
						skills: (
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
							<polyline points="2 17 12 22 22 17"></polyline>
							<polyline points="2 12 12 17 22 12"></polyline>
							</svg>
						),
						education: (
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
							<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
							</svg>
						),
						};

						return (
						<button
							key={item.id}
							onClick={() => {
							setActiveNav(item.id);
							scrollToSection(item.id);
							setIsMobileMenuOpen(false);
							}}
							style={{
							display: "flex",
							alignItems: "center",
							gap: "0.75rem",
							background: activeNav === item.id ? "#f0f7ff" : "transparent",
							border: "none",
							color: activeNav === item.id ? "#0362fc" : "#555",
							cursor: "pointer",
							fontSize: "1rem",
							fontWeight: activeNav === item.id ? 600 : 400,
							padding: "0.75rem 1rem",
							borderRadius: "4px",
							transition: "all 0.2s ease",
							width: "100%",
							textAlign: "left",
							}}
						>
							{icons[item.id]}
							{item.label}
						</button>
						);
					})}
					</div>
				)}
			</nav>

			<div
				style={{
					maxWidth: 1200,
					margin: "0 auto",
					padding: "0 1rem",
					textAlign: "center",
				}}
			>
				{/* Hero Section */}
				<section
					id="home"
					style={{
						minHeight: "85vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						paddingTop: "2rem",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "2rem",
							justifyContent: "center",
							flexWrap: "wrap",
							marginBottom: "2rem",
							width: "100%"
						}}
					>
						<div
							style={{
								width: 300,
								height: 300,
								borderRadius: "50%",
								overflow: "hidden",
							}}
						>
							<Image
								src="/avatar-me.png"
								alt="San Aung"
								width={300}
								height={300}
								style={{
									objectFit: "cover",
									width: "100%",
									height: "100%",
								}}
							/>
						</div>
						<div
							style={{
								textAlign: "left",
								maxWidth: 500,
								width: "100%",
								padding: "0 1rem",
							}}
						>
							<h1
								style={{
									fontSize: "clamp(2rem, 5vw, 3rem)",
									marginBottom: "1rem",
									fontWeight: "700",
									color: "#000",
									lineHeight: 1.2,
									minHeight: "auto",
								}}
							>
								{typedHeading}
								<span
									style={{
										borderRight: "3px solid #000",
										animation: "blink 0.7s infinite",
										marginLeft: "0.2rem",
									}}
								/>
							</h1>
							<p
								style={{
									fontSize: "1rem",
									color: "#0b0b0bff",
									lineHeight: 1.4,
									marginBottom: "2rem",
								}}
							>
								I'm passionate about problem-solving and building websites that
								deliver clear, meaningful experiences for users.I strive to create
								scalable and reliable software solutions that solve real-world
								problems.
							</p>
							<button
								onClick={() => scrollToSection("projects")}
								style={{
									background: "#0362fc",
									color: "#fff",
									padding: "0.875rem 2rem",
									fontSize: "0.95rem",
									cursor: "pointer",
									transition: "all 0.2s ease",
									border: "none",
									borderRadius: "4px",
									fontWeight: "500",
								}}
								onMouseEnter={(e) => {
									e.target.style.background = "#0253d6";
								}}
								onMouseLeave={(e) => {
									e.target.style.background = "#0362fc";
								}}
							>
								View My Work
							</button>
						</div>
					</div>
				</section>
			</div>

			{/* About Section - Full width */}
			<section
				id="about"
				style={{
					backgroundColor: "#2a2727ff",
					position: "relative",
					paddingTop: "0",
					paddingBottom: "2rem",
					width: "100%",
				}}
			>
				<svg
					style={{ display: "block", width: "100%" }}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fill="#fff"
						fillOpacity="1"
						d="M0,64L60,90.7C120,117,240,171,360,192C480,213,600,203,720,170.7C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
					></path>
				</svg>

				<div
					style={{
						paddingTop: "0",
						paddingLeft: "1rem",
						paddingRight: "1rem",
					}}
				>
					<h2
						style={{
							fontSize: "2rem",
							marginBottom: "2.5rem",
							fontWeight: "600",
							color: "#fff",
							textAlign: "center",
						}}
					>
						About Me
					</h2>
					<div style={{ maxWidth: 1000, margin: "0 auto" }}>
						<div
							className="about-container"	
							style={{
								display: "flex",
								alignItems: "flex-start",
								gap: "3rem",
								flexWrap: "wrap",
							}}
						>
							<div
								style={{
									width: 200,
									height: 200,
									borderRadius: "50%",
									overflow: "hidden",
									flexShrink: 0,
								}}
							>
								<Image
									src="/myprofile.jpg"
									alt="San Aung"
									width={200}
									height={200}
									style={{
										objectFit: "cover",
										width: "100%",
										height: "100%",
									}}
								/>
							</div>
							<div style={{ flex: 1 }}>
								<p
									style={{
										lineHeight: 1.8,
										color: "#fff",
										fontSize: "1.05rem",
										margin: 0,
										marginBottom: "1.5rem",
									}}
								>
									Highly motivated Software Engineering student at KMITL with
									hands-on experience in full-stack web development. Passionate about
									building practical, user-centered applications and continuously
									improving through self-learning and real-world projects.Eager to
									learn, collaborate, and contribute to impactful engineering teams
										while growing personally and professionally.
								</p>
								<a
									href="https://drive.google.com/file/d/1-yYdHCuK1C9c8sEce60rbnFG5Ym_N9Df/view"
									target="_blank"
									rel="noopener noreferrer"
									className="download-btn"
									style={{
										display: "inline-flex",
										alignItems: "center",
										gap: "0.5rem",
										background: "transparent",
										color: "#0362fc",
										padding: "0.75rem 1.5rem",
										border: "1px solid #0339daff",
										borderRadius: "4px",
										textDecoration: "none",
										fontWeight: "500",
										transition: "all 0.2s ease",
									}}
									>
									Download CV
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										style={{
											display: "block",
											flexShrink: 0,
										}}
									>
										<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
										<polyline points="7 10 12 15 17 10"></polyline>
										<line x1="12" y1="15" x2="12" y2="3"></line>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				style={{
					maxWidth: 1200,
					margin: "0 auto",
					padding: "0 1rem",
					textAlign: "center",
				}}
			>
				{/* Projects Section */}
				<section
					id="projects"
					style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
				>
					<h2
						style={{
							fontSize: "2rem",
							marginBottom: "1rem",
							fontWeight: "600",
							color: "#2a2727ff",
						}}
					>
						Projects
					</h2>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
							gap: "1rem",
							width: "100%",
							
						}}
					>
						{projects.map((p) => (
							<ProjectCard key={p.id} project={p} glassStyle={glassStyle} />
						))}
					</div>
				</section>

				{/* Skills Section */}
				<section
					id="skills"
					style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
				>
					<h2
						style={{
							fontSize: "2rem",
							marginBottom: "2rem",
							fontWeight: "600",
							color: "#2a2727ff",
						}}
					>
						Skills
					</h2>
					<div
						id ="skills-grid"
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(2, 1fr)",
							gap: "1.5rem",
							maxWidth: 1000,
							margin: "0 auto",
							padding: "0 1rem",
						}}
					>
						{skillCategories.map((category) => (
							<div
								key={category.category}
								style={{
									background: "#fff",
									padding: "1.5rem",
									border: "1px solid #e5e5e5",
									borderRadius: "8px",
									boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)", 
        							transition: "transform 0.3s ease, box-shadow 0.3s ease",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-5px)";
									e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "translateY(0)";
									e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)";
								}}
							>
								<h3
									style={{
										fontSize: "1.1rem",
										fontWeight: "600",
										color: "#0362fc",
										marginBottom: "1.5rem",
									}}
								>
									{category.category}
								</h3>
								<div>
									{category.skills.map((skill) => (
										<SkillBar key={skill.name} skill={skill} />
									))}
								</div>
							</div>
						))}
					</div>
				</section>
			</div>

			{/* Education Section - Full width */}
			<section
				id="education"
				style={{
					paddingTop: "5rem",
					paddingBottom: "5rem",
					backgroundColor: "#fff",
					color: "#333",
					width: "100%",
					margin: "0",
				}}
			>
				<div
					style={{
						paddingLeft: "1rem",
						paddingRight: "1rem",
					}}
				>
					<h2
						style={{
							fontSize: "2rem",
							marginBottom: "3rem",
							fontWeight: "600",
							color: "#2a2727ff",
							textAlign: "center",
						}}
					>
						Education
					</h2>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
							gap: "1.5rem",
							width: "100%",
						}}
					>
						{education.map((edu) => (
							<div
								key={edu.id}
								style={{
									background: "#f8f9fa",
									padding: "2rem",
									borderRadius: "8px",
									border: "1px solid #e5e5e5",
									textAlign: "center",
									boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)", 
    								transition: "transform 0.3s ease, box-shadow 0.3s ease", 
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: "0.75rem",
										marginBottom: "1rem",
									}}
								>
									<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      color: "#0362fc",
                      flexShrink: 0,
                    }}
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
									<h3
										style={{
											fontSize: "1.3rem",
											fontWeight: "600",
											marginBottom: "0",
											color: "#000"
										}}
									>
										{edu.school}
									</h3>
								</div>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
										marginBottom: "0.5rem",
									}}
								>
									{edu.major}
								</p>
								{edu.location && (
									<p
										style={{
											fontSize: "0.9rem",
											color: "#777",
											marginBottom: "1rem",
										}}
									>
										{edu.location}
									</p>
								)}
								<p
									style={{
										fontSize: "0.9rem",
										color: "#999",
										fontWeight: "500",
									}}
								>
									{edu.years}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				style={{
					backgroundColor: "#000",
					color: "#fff",
					width: "100%",
					paddingTop: "3rem",
					paddingBottom: "2rem",
				}}
			>
				<div
					style={{
						maxWidth: 1200,
						margin: "0 auto",
						paddingLeft: "1rem",
						paddingRight: "1rem",
					}}
				>
					<div style={{ textAlign: "center", marginBottom: "3rem" }}>
						<h2
							style={{
								fontSize: "2rem",
								marginBottom: "1rem",
								fontWeight: "600",
								color: "#fff",
							}}
						>
							Get In Touch
						</h2>
						<p style={{ color: "#aaa", fontSize: "1.05rem" }}>
							Feel free to reach out to me via email or connect on social media.
						</p>
					</div>

					<div
						style={{
							display: "flex",
							gap: "1rem",
							flexWrap: "wrap",
							justifyContent: "center",
							alignItems: "center",
							width: "100%"
						}}
					>
						<a
							href="mailto:usasanaung2000@example.com"
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "0.5rem",
								background: "#0362fc",
								color: "#fff",
								padding: "0.75rem 1.5rem",
								borderRadius: "4px",
								textDecoration: "none",
								transition: "background 0.2s ease",
								fontWeight: "500",
							}}
							onMouseEnter={(e) => (e.target.style.background = "#0253d6")}
							onMouseLeave={(e) => (e.target.style.background = "#0362fc")}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<rect x="2" y="4" width="20" height="16" rx="2"></rect>
								<path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"></path>
							</svg>
							Email Me
						</a>

						<a
							href="https://github.com/Sanaunggithub"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "0.5rem",
								background: "rgba(255, 255, 255, 0.1)",
								color: "#fff",
								padding: "0.75rem 1.5rem",
								border: "1px solid rgba(255, 255, 255, 0.2)",
								borderRadius: "4px",
								textDecoration: "none",
								transition: "all 0.2s ease",
								fontWeight: "500",
							}}
							onMouseEnter={(e) => {
								e.target.style.background = "rgba(255, 255, 255, 0.15)";
							}}
							onMouseLeave={(e) => {
								e.target.style.background = "rgba(255, 255, 255, 0.1)";
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							GitHub
						</a>

						<a
							href="https://www.linkedin.com/in/san-aung-6b150a333/"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "0.5rem",
								background: "rgba(255, 255, 255, 0.1)",
								color: "#fff",
								padding: "0.75rem 1.5rem",
								border: "1px solid rgba(255, 255, 255, 0.2)",
								borderRadius: "4px",
								textDecoration: "none",
								transition: "all 0.2s ease",
								fontWeight: "500",
							}}
							onMouseEnter={(e) => {
								e.target.style.background = "rgba(255, 255, 255, 0.15)";
							}}
							onMouseLeave={(e) => {
								e.target.style.background = "rgba(255, 255, 255, 0.1)";
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
							LinkedIn
						</a>

						<a
							href="https://www.facebook.com/san.aung.550838/"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "0.5rem",
								background: "rgba(255, 255, 255, 0.1)",
								color: "#fff",
								padding: "0.75rem 1.5rem",
								border: "1px solid rgba(255, 255, 255, 0.2)",
								borderRadius: "4px",
								textDecoration: "none",
								transition: "all 0.2s ease",
								fontWeight: "500",
							}}
							onMouseEnter={(e) => {
								e.target.style.background = "rgba(255, 255, 255, 0.15)";
							}}
							onMouseLeave={(e) => {
								e.target.style.background = "rgba(255, 255, 255, 0.1)";
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
							</svg>
							Facebook
						</a>
					</div>

					{/* Footer */}
					<footer
						style={{
							borderTop: "1px solid rgba(255, 255, 255, 0.1)",
							paddingTop: "2rem",
							marginTop: "3rem",
							color: "#999",
							textAlign: "center",
						}}
					>
						<small>
							© {new Date().getFullYear()} San Aung. All rights reserved
						</small>
					</footer>
				</div>
			</section>

			<style jsx>
  {`
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    
    .download-btn:hover {
      background: #0339daff !important;
      color: #fff !important;
      border-color: #0339daff !important;
    }
    
    .download-btn svg {
      stroke: currentColor;
    }
    
    .download-btn:hover svg {
      stroke: #fff !important;
    }

    /* Desktop Navigation - shown by default */
    .desktop-nav {
      display: flex !important;
    }

    /* Mobile Menu - hidden by default */
    .mobile-menu {
      display: none !important;
    }

    /* Hamburger Button - hidden on desktop */
    .hamburger-btn {
      display: none !important;
    }

    /* Tablet and Mobile Styles */
    @media (max-width: 900px) {
      #skills-grid {
        grid-template-columns: 1fr !important;
        padding: 0 1rem !important;
      }
    }

    @media (max-width: 768px) {
      /* Hide desktop navigation */
      .desktop-nav {
        display: none !important;
      }

      /* Show hamburger button on mobile */
      .hamburger-btn {
        display: block !important;
      }

      /* Show mobile menu when open */
      .mobile-menu {
        display: flex !important;
      }

      /* Skills - 1 column on mobile */
      #skills-grid {
        grid-template-columns: 1fr !important;
        padding: 0 0.5rem !important;
      }

      /* About section - stack vertically on mobile */
      .about-container {
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
        gap: 2rem !important;
      }

      .about-container > div:last-child {
        text-align: left !important;
      }

      .about-container p {
        text-align: left !important;
      }

      .about-container a {
        margin: 0 auto !important;
      }
    }

    @media (max-width: 480px) {
      #skills-grid {
        gap: 1rem !important;
      }

      .about-container {
        gap: 1.5rem !important;
      }
    }
  `}
</style>
		</div>
		</>
	);
}

// SkillBar Component
function SkillBar({ skill }) {
	const animatedPercent = useSkillAnimation(skill.percent);

	return (
		<div style={{ marginBottom: 24, textAlign: "left" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginBottom: 8,
				}}
			>
				<span
					style={{
						fontWeight: 500,
						fontSize: "1rem",
						color: "#333",
					}}
				>
					{skill.name}
				</span>
				<span
					style={{
						color: "#666",
						fontSize: "0.9rem",
						fontWeight: 500,
					}}
				>
					{animatedPercent}%
				</span>
			</div>
			<div
				style={{
					width: "100%",
					height: 8,
					backgroundColor: "#f0f0f0",
					borderRadius: 4,
					overflow: "hidden",
					border: "1px solid #e0e0e0",
				}}
			>
				<div
					style={{
						width: `${animatedPercent}%`,
						height: "100%",
						background:
							"linear-gradient(90deg, #0066ff 0%, #0052cc 100%)",
						transition: "width 0.3s ease",
					}}
				/>
			</div>
		</div>
	);
}
