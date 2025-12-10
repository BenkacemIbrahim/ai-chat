import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { JobListings } from "@/components/careers/job-listings"
import { CompanyValues } from "@/components/careers/company-values"
import { Benefits } from "@/components/careers/benefits"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white pre-login-page">
      <Navbar />
      <div className="pt-20">
        <CareersHero />
        <CompanyValues />
        <Benefits />
        <JobListings />
      </div>
      <Footer />
    </div>
  )
}
