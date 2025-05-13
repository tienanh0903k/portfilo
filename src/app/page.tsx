'use client';
import Image from "next/image";
import { Mail, Phone, MapPin, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0a101f] justify-center hide-scrollbar">
      <div className="flex flex-col md:flex-row w-4/5">
        {/* ---Sidebar--- */}
        <div className="flex flex-row md:flex-col items-center justify-between w-full md:w-16 bg-[#111827] py-4 md:py-8 rounded-lg mb-4 md:mb-0 md:mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-2 md:mb-8">
            <span className="text-white font-bold">NTA</span>
          </div>
          <nav className="flex flex-row md:flex-col items-center gap-2 md:gap-6">
            <button className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </button>
            <button className="w-8 md:w-10 h-8 md:h-10 rounded-full hover:bg-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button className="w-8 md:w-10 h-8 md:h-10 rounded-full hover:bg-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </button>
            <button className="w-8 md:w-10 h-8 md:h-10 rounded-full hover:bg-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-folder"
              >
                <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5l2-3h7l2 3H18a2 2 0 0 1 2 2Z" />
              </svg>
            </button>
            <button className="w-8 md:w-10 h-8 md:h-10 rounded-full hover:bg-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* Left Profile Section */}
          <div className="w-full md:w-auto mx-auto max-w-xs sm:max-w-sm md:w-80 bg-[#1e3a8a] p-2 sm:p-4 flex flex-col items-center rounded-lg mb-4 md:mb-0">
            <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden mb-2 sm:mb-4">
              <Image
                src="https://lh3.googleusercontent.com/a/ACg8ocIaIkS5DAMAcvUIYV6EbC-YvDTxbAjHNo-nns8OcW4gfBZGRPZ4=s270-c-no"
                alt="Profile picture"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>

            <h1 className="text-lg sm:text-xl font-bold text-white text-center">Nguyen Tien Anh</h1>
            <p className="text-blue-300 mb-1 sm:mb-2 text-xs sm:text-sm text-center">Full-Stack Web Developer</p>

            <div className="flex items-center text-gray-300 mb-1 sm:mb-4">
              <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
              <span className="text-xs sm:text-sm">Hung Yen</span>
            </div>

            <div className="flex flex-row sm:flex-row gap-1 sm:gap-2 mb-2 sm:mb-4">
              <a
                href="#"
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#1a2234] flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                </svg>
              </a>
              <a
                href="#"
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#1a2234] flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#1a2234] flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#1a2234] flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 w-full">
              <Button className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 mb-1 sm:mb-0">
                My Resume
              </Button>
              <Button
  variant="outline"
  className="w-full sm:flex-1 border-blue-600 text-blue-400 hover:bg-blue-800 hover:text-white"
>
  <a 
    href="mailto:tienanh2003k@gmail.com?subject=Contact%20From%20Website&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch." 
    className="flex items-center"
  >
    <Mail className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
    Contact Me
  </a>
</Button>

            </div>
          </div>

          {/* Main Content */}
          <main className="p-6 text-white h-[calc(100vh_-_80px)] overflow-y-auto relative">
            <div className="max-w-3xl">
              <div className="mb-10">
                <h1 className="text-3xl font-bold text-white flex items-center mb-2">
                  Hey there! <span className="ml-2">👋</span>
                </h1>
                <p className="text-gray-300 mb-8">
                  I'm excited to share a bit about myself. With over six years of experience in web development, I specialize in Node.js, React.js, and Java. If you're looking for a skilled developer with a passion for building robust and dynamic web applications, let's connect!
                </p>

                {/* Skills Section */}
                <section className="mb-10">
                  <h2 className="text-xl font-bold mb-6">My Skills</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-[#1a2234] p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span>HTML/CSS</span>
                        <span className="text-blue-400">80%</span>
                      </div>
                      <div className="w-full bg-[#243050] h-1 rounded-full">
                        <div className="bg-blue-500 h-1 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div className="bg-[#1a2234] p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span>JS</span>
                        <span className="text-blue-400">70%</span>
                      </div>
                      <div className="w-full bg-[#243050] h-1 rounded-full">
                        <div className="bg-blue-500 h-1 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div className="bg-[#1a2234] p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span>React</span>
                        <span className="text-blue-400">70%</span>
                      </div>
                      <div className="w-full bg-[#243050] h-1 rounded-full">
                        <div className="bg-blue-500 h-1 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div className="bg-[#1a2234] p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span>JAVA Core</span>
                        <span className="text-blue-400">60%</span>
                      </div>
                      <div className="w-full bg-[#243050] h-1 rounded-full">
                        <div className="bg-blue-500 h-1 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Skills */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#1a2234] p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#243050" strokeWidth="10" />
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="10"
                              strokeDasharray="283"
                              strokeDashoffset="70"
                              transform="rotate(-90 50 50)"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-sm">75%</div>
                        </div>
                        <div>
                          <h3 className="font-bold">MySQL</h3>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#1a2234] p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#243050" strokeWidth="10" />
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="10"
                              strokeDasharray="283"
                              strokeDashoffset="85"
                              transform="rotate(-90 50 50)"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-sm">70%</div>
                        </div>
                        <div>
                          <h3 className="font-bold">MongoDB</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Github</span>
                        <span></span>
                      </div>
                      <Progress value={90} className="h-2 bg-[#243050]" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>English</span>
                        <span>TOEIC 650</span>
                      </div>
                      <Progress value={92} className="h-2 bg-[#243050]" />
                    </div>
                  </div>
                </section>

                {/* Experience Section */}
                <section className="mb-10">
                  <h2 className="text-xl font-bold mb-6">My Experience</h2>
                  <div className="space-y-6">
                    {/* <div className="relative pl-8 pb-6 border-l border-[#243050]">
                      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full bg-blue-500"></div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                        <h3 className="font-bold">Senior Python Developer</h3>
                        <span className="text-sm text-gray-400">Google, California</span>
                        <span className="text-xs text-gray-500">Oct 2020 - Present</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        Led the development of machine learning algorithms and data processing pipelines. Collaborated with
                        cross-functional teams to implement robust solutions for complex data challenges. Mentored junior
                        developers and contributed to the company's technical growth.
                      </p>
                    </div> */}
                    <div className="relative pl-8 pb-6 border-l border-[#243050]">
                      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full bg-blue-500"></div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                        <h3 className="font-bold">Intern Front-end Developer</h3>
                        <span className="text-sm text-gray-400">IT Department, EVN</span>
                        <span className="text-xs text-gray-500">7/2024 - 2/2025</span>
                      </div>
                      <p className="text-sm text-gray-300">
                      Used Oracle, React Prime, Socket.io, and NGPrime to develop and optimize systems, create smooth user interfaces, and support real-time data transmission, enhancing performance and user experience.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Projects Section */}
                <section className="mb-10">
                  <h2 className="text-xl font-bold mb-6">My Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="https://github.com/tienanh0903k/FindJobs" target="_blank" rel="noopener noreferrer">
      <div className="bg-[#1a2234] rounded-lg overflow-hidden cursor-pointer">
        <div className="aspect-video bg-[#243050]">
          <img
            src="https://i.ibb.co/8n9zfKr3/findhob.png" // Đường dẫn đến ảnh của bạn
            alt="Project Image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold mb-2">Job Search Website</h3>
          <div className="flex gap-2 mb-2">
            <Badge variant="outline" className="text-white text-xs bg-transparent border-[#243050]">
              NextJS
            </Badge>
            <Badge variant="outline" className="text-white text-xs bg-transparent border-[#243050]">
              NestJS
            </Badge>
            <Badge variant="outline" className="text-white text-xs bg-transparent border-[#243050]">
              MongoDB
            </Badge>
          </div>
        </div>
      </div>
    </a>



                    <div className="bg-[#1a2234] rounded-lg overflow-hidden">
                      <div className="aspect-video bg-[#243050]">
                        <img
                          src="https://i.ibb.co/4ZNs9BhG/A-nh-chu-p-ma-n-hi-nh-2025-05-13-123525.png" // Đường dẫn đến ảnh của bạn
                          alt="Project Image"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-2"> Experiment Management 2024</h3>
                        <div className="flex gap-2 mb-2">
                          <Badge variant="outline" className=" text-white text-xs bg-transparent border-[#243050]">
                            NextJS
                          </Badge>
                          <Badge variant="outline" className="text-white text-xs bg-transparent border-[#243050]">
                            NestJS
                          </Badge>
                          <Badge variant="outline" className="text-white text-xs bg-transparent border-[#243050]">
                            MongoDB
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </section>

                {/* Contact Section */}
                <section>
                  <h2 className="text-xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-gray-300 mb-6">
                    Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Email</div>
                          <div>tienanh2003k@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Phone</div>
                          <div>0355433742</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Location</div>
                          <div>Hung Yen ,Viet Nam</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-2">Availability</div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div>Available for freelance</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#1a2234] p-6 rounded-lg box-border">
                      <form className="space-y-4 p-0 m-0 box-border">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="sr-only">
                              Your Name
                            </label>
                            <Input id="name" placeholder="Your Name" className="bg-[#243050] border-[#243050] text-white" />
                          </div>
                          <div>
                            <label htmlFor="email" className="sr-only">
                              Your Email
                            </label>
                            <Input id="email" placeholder="Your Email" className="bg-[#243050] border-[#243050] text-white" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="sr-only">
                            Subject
                          </label>
                          <Input id="subject" placeholder="Subject" className="bg-[#243050] border-[#243050] text-white" />
                        </div>
                        <div>
                          <label htmlFor="message" className="sr-only">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Message"
                            className="bg-[#243050] border-[#243050] text-white"
                          />
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// 'use client'
// import Image from "next/image"
// import { Mail, Phone, MapPin, Search } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Progress } from "@/components/ui/progress";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function Home() {

//   return (

//     <div className="flex min-h-screen bg-[#0a101f] justify-center hide-scrollbar">
//       <div className="flex w-4/5">
//         {/* ---sidebar--- */}

//         <div className="hidden md:flex flex-col items-center w-16 bg-[#111827] py-8 rounded-lg mr-4">
//           <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-8">
//             <span className="text-white font-bold">NTA</span>
//           </div>
//           <nav className="flex flex-col items-center gap-6">
//             <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-home"
//               >
//                 <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//                 <polyline points="9 22 9 12 15 12 15 22" />
//               </svg>
//             </button>
//             <button className="w-10 h-10 rounded-full hover:bg-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-user"
//               >
//                 <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//                 <circle cx="12" cy="7" r="4" />
//               </svg>
//             </button>
//             <button className="w-10 h-10 rounded-full hover:bg-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-briefcase"
//               >
//                 <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
//                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//               </svg>
//             </button>
//             <button className="w-10 h-10 rounded-full hover:bg-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-folder"
//               >
//                 <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5l2-3h7l2 3H18a2 2 0 0 1 2 2Z" />
//               </svg>
//             </button>
//             <button className="w-10 h-10 rounded-full hover:bg-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-mail"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2" />
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//               </svg>
//             </button>
//           </nav>
//         </div>

//         {/* Content */}
//         <div className="flex flex-1">
//           {/* Left Profile Section */}
          
//           <div className="w-full mx-auto max-w-xs sm:max-w-sm md:w-80 bg-[#1e3a8a] p-2 sm:p-4 flex flex-col items-center rounded-lg min-h-0 overflow-auto">
//   <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden mb-2 sm:mb-4">
//     <Image
//       src="https://lh3.googleusercontent.com/a/ACg8ocIaIkS5DAMAcvUIYV6EbC-YvDTxbAjHNo-nns8OcW4gfBZGRPZ4=s270-c-no"
//       alt="Profile picture"
//       width={128}
//       height={128}
//       className="object-cover"
//     />
//   </div>

//   <h1 className="text-lg sm:text-xl font-bold text-white text-center">Nguyen Tien Anh</h1>
//   <p className="text-blue-300 mb-1 sm:mb-2 text-xs sm:text-sm text-center">Full-Stack Web Developer</p>

//   <div className="flex items-center text-gray-300 mb-1 sm:mb-4">
//     <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
//     <span className="text-xs sm:text-sm">Hung Yen</span>
//   </div>

//   <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 mb-1 sm:mb-4">
//     <a
//       href="#"
//       className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#1a2234] flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
//       aria-label="GitHub Profile"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="12"
//         height="12"
//         sm="width:16 height:16"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-github"
//       >
//         <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//       </svg>
//     </a>
//     <a
//       href="#"
//       className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#1a2234] flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
//       aria-label="Twitter Profile"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="12"
//         height="12"
//         sm="width:16 height:16"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-twitter"
//       >
//         <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//       </svg>
//     </a>
//     <a
//       href="#"
//       className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#1a2234] flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
//       aria-label="Instagram Profile"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="12"
//         height="12"
//         sm="width:16 height:16"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-instagram"
//       >
//         <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//         <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//       </svg>
//     </a>
//     <a
//       href="#"
//       className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#1a2234] flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
//       aria-label="LinkedIn Profile"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="12"
//         height="12"
//         sm="width:16 height:16"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-linkedin"
//       >
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//         <rect width="4" height="12" x="2" y="9" />
//         <circle cx="4" cy="4" r="2" />
//       </svg>
//     </a>
//   </div>

//   <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 w-full">
//     <Button className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 mb-1 sm:mb-0">
//       My Resume
//     </Button>
//     <Button
//       variant="outline"
//       className="w-full sm:flex-1 border-blue-600 text-blue-400 hover:bg-blue-800 hover:text-white"
//     >
//       <Mail className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
//       Contact Me
//     </Button>
//   </div>
// </div>

//           {/* Main Content */}
//           <main className="p-6 text-white h-[calc(100vh_-_80px)] overflow-y-auto relative">
//             <div className="max-w-3xl">
//               <div className="mb-10">
//                 <h1 className="text-3xl font-bold text-white flex items-center mb-2">
//                   Hey there! <span className="ml-2">👋</span>
//                 </h1>
//                 <p className="text-gray-300 mb-8">
//                 I'm excited to share a bit about myself. With over six years of experience in web development, I specialize in Node.js, React.js, and Java. If you're looking for a skilled developer with a passion for building robust and dynamic web applications, let's connect!
//                 </p>


//                 {/* Skills Section */}
//                 <section className="mb-10">
//                   <h2 className="text-xl font-bold mb-6">My Skills</h2>
//                   {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"> */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     <div className="bg-[#1a2234] p-4 rounded-lg">
//                       <div className="flex justify-between items-center mb-2">
//                         <span>HTML5</span>
//                         <span className="text-blue-400">85%</span>
//                       </div>
//                       <div className="w-full bg-[#243050] h-1 rounded-full">
//                         <div className="bg-blue-500 h-1 rounded-full" style={{ width: "85%" }}></div>
//                       </div>
//                     </div>
//                     <div className="bg-[#1a2234] p-4 rounded-lg">
//                       <div className="flex justify-between items-center mb-2">
//                         <span>CSS</span>
//                         <span className="text-blue-400">90%</span>
//                       </div>
//                       <div className="w-full bg-[#243050] h-1 rounded-full">
//                         <div className="bg-blue-500 h-1 rounded-full" style={{ width: "90%" }}></div>
//                       </div>
//                     </div>
//                     <div className="bg-[#1a2234] p-4 rounded-lg">
//                       <div className="flex justify-between items-center mb-2">
//                         <span>React</span>
//                         <span className="text-blue-400">85%</span>
//                       </div>
//                       <div className="w-full bg-[#243050] h-1 rounded-full">
//                         <div className="bg-blue-500 h-1 rounded-full" style={{ width: "85%" }}></div>
//                       </div>
//                     </div>
//                     <div className="bg-[#1a2234] p-4 rounded-lg">
//                       <div className="flex justify-between items-center mb-2">
//                         <span>Python</span>
//                         <span className="text-blue-400">80%</span>
//                       </div>
//                       <div className="w-full bg-[#243050] h-1 rounded-full">
//                         <div className="bg-blue-500 h-1 rounded-full" style={{ width: "80%" }}></div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Additional Skills */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                     <div className="bg-[#1a2234] p-4 rounded-lg">
//                       <div className="flex items-center gap-4">
//                         <div className="relative w-16 h-16">
//                           <svg viewBox="0 0 100 100" className="w-full h-full">
//                             <circle cx="50" cy="50" r="45" fill="none" stroke="#243050" strokeWidth="10" />
//                             <circle
//                               cx="50"
//                               cy="50"
//                               r="45"
//                               fill="none"
//                               stroke="#3b82f6"
//                               strokeWidth="10"
//                               strokeDasharray="283"
//                               strokeDashoffset="70"
//                               transform="rotate(-90 50 50)"
//                             />
//                           </svg>
//                           <div className="absolute inset-0 flex items-center justify-center text-sm">75%</div>
//                         </div>
//                         <div>
//                           <h3 className="font-bold">MySQL</h3>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-[#1a2234] p-4 rounded-lg">
//                       <div className="flex items-center gap-4">
//                         <div className="relative w-16 h-16">
//                           <svg viewBox="0 0 100 100" className="w-full h-full">
//                             <circle cx="50" cy="50" r="45" fill="none" stroke="#243050" strokeWidth="10" />
//                             <circle
//                               cx="50"
//                               cy="50"
//                               r="45"
//                               fill="none"
//                               stroke="#3b82f6"
//                               strokeWidth="10"
//                               strokeDasharray="283"
//                               strokeDashoffset="85"
//                               transform="rotate(-90 50 50)"
//                             />
//                           </svg>
//                           <div className="absolute inset-0 flex items-center justify-center text-sm">70%</div>
//                         </div>
//                         <div>
//                           <h3 className="font-bold">MongoDB</h3>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Progress Bars */}
//                   <div className="space-y-4">
//                     <div>
//                       <div className="flex justify-between mb-1">
//                         <span>Node.js</span>
//                         <span>90%</span>
//                       </div>
//                       <Progress value={90} className="h-2 bg-[#243050]" />
//                     </div>
//                     <div>
//                       <div className="flex justify-between mb-1">
//                         <span>PostgreSQL</span>
//                         <span>92%</span>
//                       </div>
//                       <Progress value={92} className="h-2 bg-[#243050]" />
//                     </div>
//                   </div>
//                 </section>

//                 {/* Experience Section */}
//                 <section className="mb-10">
//                   <h2 className="text-xl font-bold mb-6">My Experience</h2>
//                   <div className="space-y-6">
//                     <div className="relative pl-8 pb-6 border-l border-[#243050]">
//                       <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full bg-blue-500"></div>
//                       <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
//                         <h3 className="font-bold">Senior Python Developer</h3>
//                         <span className="text-sm text-gray-400">Google, California</span>
//                         <span className="text-xs text-gray-500">Oct 2020 - Present</span>
//                       </div>
//                       <p className="text-sm text-gray-300">
//                         Led the development of machine learning algorithms and data processing pipelines. Collaborated with
//                         cross-functional teams to implement robust solutions for complex data challenges. Mentored junior
//                         developers and contributed to the company's technical growth.
//                       </p>
//                     </div>
//                     <div className="relative pl-8 pb-6 border-l border-[#243050]">
//                       <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full bg-blue-500"></div>
//                       <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
//                         <h3 className="font-bold">Full Stack Web Developer</h3>
//                         <span className="text-sm text-gray-400">Facebook, California</span>
//                         <span className="text-xs text-gray-500">Jan 2018 - Dec 2020</span>
//                       </div>
//                       <p className="text-sm text-gray-300">
//                         Developed responsive web applications using modern JavaScript frameworks. Built RESTful APIs and
//                         integrated them with front-end code. Implemented CI/CD pipelines and automated testing procedures to
//                         ensure code quality.
//                       </p>
//                     </div>
//                   </div>
//                 </section>

//                 {/* Projects Section */}
//                 <section className="mb-10">
//                   <h2 className="text-xl font-bold mb-6">My Projects</h2>
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="relative flex-1 max-w-xs">
//                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
//                       <Input placeholder="Search" className="pl-9 bg-[#1a2234] border-[#243050] text-white" />
//                     </div>
//                     <div className="flex gap-2">
//                       <Button variant="outline" size="sm" className="bg-blue-600 border-blue-600 hover:bg-blue-700">
//                         Web Development
//                       </Button>
//                       <Button variant="outline" size="sm" className="border-[#243050] hover:bg-[#243050]">
//                         Web Application
//                       </Button>
//                       <Button variant="outline" size="sm" className="border-[#243050] hover:bg-[#243050]">
//                         Web Design
//                       </Button>
//                       <Button variant="outline" size="sm" className="border-[#243050] hover:bg-[#243050]">
//                         Mobile App
//                       </Button>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="bg-[#1a2234] rounded-lg overflow-hidden">
//                       <div className="aspect-video bg-[#243050]"></div>
//                       <div className="p-4">
//                         <h3 className="font-bold mb-2">Project Title</h3>
//                         <div className="flex gap-2 mb-2">
//                           <Badge variant="outline" className="text-xs bg-transparent border-[#243050]">
//                             PHP
//                           </Badge>
//                           <Badge variant="outline" className="text-xs bg-transparent border-[#243050]">
//                             MySQL
//                           </Badge>
//                           <Badge variant="outline" className="text-xs bg-transparent border-[#243050]">
//                             JavaScript
//                           </Badge>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="project-item bg-[#1a2234] rounded-lg">
//                       <div className="aspect-video bg-[#243050]"></div>
//                       <div className="p-4">
//                         <h3 className="font-bold mb-2">Project Title</h3>
//                         <div className="flex gap-2 mb-2">
//                           <Badge variant="outline" className="text-xs bg-transparent border-[#243050]">
//                             React
//                           </Badge>
//                           <Badge variant="outline" className="text-xs bg-transparent border-[#243050]">
//                             Node.js
//                           </Badge>
//                           <Badge variant="outline" className="text-xs bg-transparent border-[#243050]">
//                             MongoDB
//                           </Badge>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>

//                 {/* Contact Section */}
//                 <section>
//                   <h2 className="text-xl font-bold mb-6">Get In Touch</h2>
//                   <p className="text-gray-300 mb-6">
//                     Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
//                   </p>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-6">
//                       <div className="flex items-center gap-4">
//                         <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
//                           <Mail className="w-5 h-5 text-blue-500" />
//                         </div>
//                         <div>
//                           <div className="text-sm text-gray-400">Email</div>
//                           <div>example@example.com</div>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-4">
//                         <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
//                           <Phone className="w-5 h-5 text-blue-500" />
//                         </div>
//                         <div>
//                           <div className="text-sm text-gray-400">Phone</div>
//                           <div>+1 (555) 123-4567</div>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-4">
//                         <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
//                           <MapPin className="w-5 h-5 text-blue-500" />
//                         </div>
//                         <div>
//                           <div className="text-sm text-gray-400">Location</div>
//                           <div>San Francisco, CA</div>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-400 mb-2">Availability</div>
//                         <div className="flex items-center gap-2">
//                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                           <div>Available for freelance</div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="bg-[#1a2234] p-6 rounded-lg box-border">
//                     <form className="space-y-4 p-0 m-0 box-border">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div>
//                             <label htmlFor="name" className="sr-only">
//                               Your Name
//                             </label>
//                             <Input id="name" placeholder="Your Name" className="bg-[#243050] border-[#243050] text-white" />
//                           </div>
//                           <div>
//                             <label htmlFor="email" className="sr-only">
//                               Your Email
//                             </label>
//                             <Input id="email" placeholder="Your Email" className="bg-[#243050] border-[#243050] text-white" />
//                           </div>
//                         </div>
//                         <div>
//                           <label htmlFor="subject" className="sr-only">
//                             Subject
//                           </label>
//                           <Input id="subject" placeholder="Subject" className="bg-[#243050] border-[#243050] text-white" />
//                         </div>
//                         <div>
//                           <label htmlFor="message" className="sr-only">
//                             Message
//                           </label>
//                           <Textarea
//                             id="message"
//                             placeholder="Message"
//                             className="bg-[#243050] border-[#243050] text-white"
//                           />
//                         </div>
//                         <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
//                       </form>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   )
// }
