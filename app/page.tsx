import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import RoomPicker from "@/components/RoomPicker";
import EducationSection from "@/components/EducationSection";
import HowToPreview from "@/components/HowToPreview";
import ReviewsSection from "@/components/ReviewsSection";
import ClosingCTA from "@/components/ClosingCTA";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <StatsBar />
      <RoomPicker />
      <EducationSection />
      <HowToPreview />
      <ReviewsSection />
      <ClosingCTA />
    </div>
  );
}
