import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { projects } from "@/data/projects";

export default function Home() {
  const services = [
    {
      title: "Site vitrine premium",
      description:
        "Un site rapide, clair et pense pour convertir vos visiteurs en leads.",
    },
    {
      title: "E-commerce",
      description:
        "Une boutique moderne avec tunnel d'achat optimise et outils de suivi.",
    },
    {
      title: "Identite visuelle",
      description:
        "Direction artistique, systeme de marque et assets coherents sur tous les canaux.",
    },
    {
      title: "Acquisition digitale",
      description:
        "SEO, tracking et campagnes pour attirer un trafic qualifie en continu.",
    },
  ];

  const steps = [
    "Audit et cadrage des objectifs",
    "Maquette UI et systeme visuel",
    "Developpement, SEO technique et tracking",
    "Lancement, A/B tests et optimisation continue",
  ];

  const faqs = [
    {
      question: "Combien de temps prend un projet ?",
      answer:
        "Un site vitrine prend en moyenne 3 a 5 semaines selon le niveau de contenu et de validation.",
    },
    {
      question: "Travaillez-vous avec des PME ?",
      answer:
        "Oui, nous accompagnons surtout les PME, startups et cabinets de conseil.",
    },
    {
      question: "Proposez-vous un suivi apres mise en ligne ?",
      answer:
        "Oui, nous proposons maintenance, evolutions et accompagnement acquisition mensuel.",
    },
  ];

  return (
    <div className="bg-[#070814] text-white">
      <main>
        <HeroSection />
        <ServicesSection services={services} />
        <ProjectsSection projects={projects} />
        <ProcessSection steps={steps} />
        <TestimonialSection />
        <FaqSection faqs={faqs} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
