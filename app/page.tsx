import Image from "next/image";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero min-h-[calc(100vh-250px-88px)] bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <Image src="/fbex.svg" width={500} height={500} alt="fbex logo" />
              <p className="py-6">building software.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
