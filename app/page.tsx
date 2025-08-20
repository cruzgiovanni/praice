import { Header } from '@/components/Header';
import { HeroCarousel } from '@/components/HeroCarousel';
import { FeaturedCollections } from '@/components/FeaturedCollections';
import { ProductsSection } from '@/components/ProductsSection';
import { TrustSignals } from '@/components/TrustSignals';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <ProductsSection />
      <FeaturedCollections />
      <TrustSignals />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}