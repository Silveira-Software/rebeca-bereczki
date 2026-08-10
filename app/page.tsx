import HeroScene from "@/components/scenes/HeroScene";
import StorySection from "@/components/scenes/StorySection";
import DrawingSequence from "@/components/love-line/DrawingSequence";
import JourneyScene from "@/components/scenes/JourneyScene";
import CareScene from "@/components/scenes/CareScene";
import GalleryScene from "@/components/scenes/GalleryScene";
import MedicineScene from "@/components/scenes/MedicineScene";
import ExperienceScene from "@/components/scenes/ExperienceScene";
import EducationScene from "@/components/scenes/EducationScene";
import PersonalityScene from "@/components/scenes/PersonalityScene";
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
      <MedicineScene />
      <ExperienceScene />
      <EducationScene />
      <PersonalityScene />
      <TestimonialsScene />
      <ContactScene />
      <FinalScene />
    </>
  );
}
