import HeroScene from "@/components/scenes/HeroScene";
import StorySection from "@/components/scenes/StorySection";
import DrawingSequence from "@/components/love-line/DrawingSequence";
import JourneyScene from "@/components/scenes/JourneyScene";
import CareScene from "@/components/scenes/CareScene";
import GalleryScene from "@/components/scenes/GalleryScene";
import SocialScene from "@/components/scenes/SocialScene";
import MedicineScene from "@/components/scenes/MedicineScene";
import ServicesScene from "@/components/scenes/ServicesScene";
import ExperienceScene from "@/components/scenes/ExperienceScene";
import EducationScene from "@/components/scenes/EducationScene";
import PersonalityScene from "@/components/scenes/PersonalityScene";
import BlogPreviewScene from "@/components/scenes/BlogPreviewScene";
import TestimonialsScene from "@/components/scenes/TestimonialsScene";
import ContactScene from "@/components/scenes/ContactScene";
import FinalScene from "@/components/scenes/FinalScene";

export default function HomePage() {
  return (
    <>
      <HeroScene />
      <StorySection />
      <DrawingSequence />
      <JourneyScene />
      <CareScene />
      <GalleryScene />
      <SocialScene />
      <MedicineScene />
      <ServicesScene />
      <ExperienceScene />
      <EducationScene />
      <PersonalityScene />
      <BlogPreviewScene />
      <TestimonialsScene />
      <ContactScene />
      <FinalScene />
    </>
  );
}
