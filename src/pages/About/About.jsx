import HeroImg from "@/assets/images/hero.png";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
      <>
        <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
          <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
            <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
              Software & Telecoms Engineer | IoT & Backend Specialist
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
              {/* Left Image Section */}
              <div className="relative mb-6 sm:mb-0">
                <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                  <img
                      src={HeroImg}
                      className="rounded-[15px] shadow block"
                      alt="engineering illustration"
                      width={1207}
                      height={929}
                  />
                </div>
              </div>

              {/* Right Text Section */}
              <div className="relative space-y-4">
                <p className="text-white">
                  Hello! I'm Titus Kemboi Cheserem, a{" "}
                  <span className="font-bold text-white">
                  Software and Telecoms Engineer
                </span>{" "}
                  with 4+ years of experience in IoT, backend systems, and
                  wireless networking. I specialize in{" "}
                  <span className="font-bold text-white">
                  ESP32 IoT integrations, RADIUS/captive portal solutions,
                  backend APIs, and payment gateway systems
                </span>
                  .
                </p>
                <p className="text-white">
                  My expertise lies in building scalable systems that connect
                  hardware, software, and users seamlessly. From{" "}
                  <span className="font-bold text-white">
                  provisioning ESP32 devices with Firebase
                </span>{" "}
                  to{" "}
                  <span className="font-bold text-white">
                  designing monetized Wi-Fi hotspot networks with automated
                  M-Pesa integration
                </span>
                  , I bridge embedded systems, backend development, and network
                  administration.
                </p>

                <div className="pt-6">
                  <blockquote className="border-l-4 border-gray-300 pl-4">
                    <p className="text-white">
                      I'm a lifelong learner and innovator, driven by solving
                      real-world connectivity and software challenges. My mission
                      is to{" "}
                      <span className="font-bold text-white">
                      empower communities and businesses through accessible,
                      reliable, and intelligent technology solutions
                    </span>
                      .
                    </p>

                    <div className="mt-6 space-y-3">
                      <cite className="block font-medium text-white">
                        — Titus Cheserem
                      </cite>
                      <div className="flex items-center gap-2">
                        <img
                            className="h-5 w-fit"
                            src={OlovaLogo}
                            alt="Olova Logo"
                            height="20"
                            width="auto"
                        />
                        <span className="text-white">Full Stack & IoT Engineer</span>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
