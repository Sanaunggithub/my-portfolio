import PageLayout from "../components/PageLayout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ContactFooter from "../components/ContactFooter";
import { useTypingEffect } from "../lib/hooks";

export default function Home() {
	const typedHeading = useTypingEffect("Hi, I'm San Aung", 100);

	return (
		<PageLayout>
			<HeroSection typedHeading={typedHeading} />
			<AboutSection />

			<div
				style={{
					maxWidth: 1200,
					margin: "0 auto",
					padding: "0 1rem",
					textAlign: "center",
				}}
			>
				<ProjectsSection />
				<SkillsSection />
			</div>

			<EducationSection />
			<ContactFooter />
		</PageLayout>
	);
}
