import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import OurValues from "@/components/about/OurValues";
import WhyUs from "@/components/about/WhyUs";
import CTABanner from "@/components/about/CTABanner";
import CTASection from "@/components/home/CTASection";

export default function AboutPage() {
    return(
        <>
        <AboutHero />
        <AboutIntro />
        <OurValues />
        <WhyUs />
        {/* <CTABanner /> */}
        <CTASection />
        </>
    );
};