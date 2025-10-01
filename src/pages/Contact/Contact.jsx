import React from "react";
import { Phone, MapPin, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
      <main className="pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen">
        <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Get in Touch
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Have a question or want to work together? Reach me directly below.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a
                          href="mailto:cheseremtitus24@gmail.com"
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        cheseremtitus24@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <a
                          href="https://wa.me/254720595663"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-green-400 transition-colors"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Phone (click-to-call) */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a
                          href="tel:+254720595663"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        +254 720 595 663
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-500/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-400">Eldoret, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instead of a form → Direct contact buttons */}
              <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Quick Contact</h3>
                <a
                    href="https://wa.me/254720595663"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
                >
                  Send WhatsApp Message
                </a>
                <a
                    href="mailto:cheseremtitus24@gmail.com"
                    className="block w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
                >
                  Send Email
                </a>
                <a
                    href="tel:+254720595663"
                    className="block w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
