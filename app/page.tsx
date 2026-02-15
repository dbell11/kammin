import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import CoreValues from '@/components/home/CoreValues';
import GreatLengthsHighlight from '@/components/home/GreatLengthsHighlight';
import GreatLengthsPartner from '@/components/home/GreatLengthsPartner';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <CoreValues />
      <GreatLengthsHighlight />
      <GreatLengthsPartner />
      <GalleryTeaser />
      <ContactCTA />
    </>
  );
}
