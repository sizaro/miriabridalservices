import {
  PackagesHeroSection,
  PackagesPricingSection,
  PackagesPoliciesSection,
  PackagesBrandStrip,
} from "../../components/packages";

const Packages = () => {
  return (
    <main>
      {/* Packages hero */}
      <PackagesHeroSection />

      {/* Pricing cards */}
      <PackagesPricingSection />

      {/* Policies and CTA */}
      <PackagesPoliciesSection />

      {/* Final brand strip */}
      <PackagesBrandStrip />
    </main>
  );
};

export default Packages;
