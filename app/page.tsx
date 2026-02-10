import Navbar from "@/components/Navbar";
import GoogleWorkspacePromo from "@/components/GoogleWorkspacePromo";
import GoogleWorkspacePricing from "@/components/GoogleWorkspacePricing";
import GoogleWorkspaceFeatures from "@/components/GoogleWorkspaceFeatures";
import GoogleWorkspaceBrands from "@/components/GoogleWorkspaceBrands";
import GoogleWorkspaceCTA from "@/components/GoogleWorkspaceCTA";
import VideoDemoSection from "@/components/VideoDemoSection";
import FAQSection from "@/components/Faq";
import GoogleWorkspaceSolutions from "@/components/GoogleWorkspaceSolutions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <GoogleWorkspacePromo />
      <VideoDemoSection />
      <GoogleWorkspacePricing />
      <GoogleWorkspaceSolutions />
      <GoogleWorkspaceFeatures />
      <GoogleWorkspaceBrands />
      <GoogleWorkspaceCTA />
      <FAQSection />
      <Footer />
    </main>
  );
}
