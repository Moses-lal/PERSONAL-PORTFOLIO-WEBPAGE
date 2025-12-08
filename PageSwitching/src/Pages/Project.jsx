import React, { useRef, useState, useEffect } from "react";
import { DiMongodb } from "react-icons/di";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";



export default function ProjectCarousel() {
  
  const [products] = useState([
    {
      id: 1,
      title: "Hustle Shala",
      image: "./pro1.png",
      short: "HustleShala — where hustlers meet opportunities",
      details:
        "HustleShala is a modern job-portal platform that streamlines the hiring process with smart filters, real-time updates, and an intuitive UI designed to help users find the right opportunities effortlessly",
      tags: ["React", "Node", "Tailwind","Express","Mongodb","RESTAPI","AXIOS","Cloudinary"],
    },
    {
      id: 2,
      title: "Prompt Studio",
      image: "pro2.png",
      short: "A smart prompt-building platform designed to craft, refine, and organize AI prompts effortlessly.",
      details: "Platform where users can craft, edit, and optimize AI prompts. It provides real-time response previews, saves multiple versions for comparison, and organizes prompts into categories—making experimentation faster and more efficient",
      tags: ["React", "Node","Tailwind" ,"Express"],
    },
    {
      id: 3,
      title: "Invoice Billing System",
      image: "pro3.png",
      short: "A streamlined invoice billing system that automates invoice creation, manages client records, and tracks payments with accuracy.",
      details: "A complete invoice billing platform that handles invoice generation, tax calculations, client management, payment tracking, and Proper Tax Calculation with Feedback",
      tags: ["Express", "API" , "HTML","CSS", "JSON" ],
    },
    {
      id: 4,
      title: "Real-Time Chat App",
      image: "pro5.png",
      short: "a very cool chatapp which Provide end-to-end connection in real time enabling great experince",
      details: "A fast and interactive real-time chat app designed for fluid conversations with live message syncing and a clean, modern UI",
      tags: ["Socket.IO", "React", "Tailwind"],
    },
    {
      id: 5,
      title: "E-Learing Platform",
      image: "pro4.png",
      short: "a Learning hub for Fresher's To learn and develop skills in every domain",
      details: "A modern e-learning platform featuring interactive modules, real-time progress tracking, quizzes, and a clean dashboard designed to make learning efficient and engaging.",
      tags: ["HTML", "CSS","JS"],
    },
    {
      id: 6,
      title: "Klassy Cafe",
      image: "pro6.png",
      short: "Where good vibes meet great desserts ",
      details: "Discover irresistible desserts made with quality ingredients and unforgettable flavor.",
      tags: ["HTML", "CSS"],
    },
    {
      id: 7,
      title: "MakeupMuse",
      image: "pro7.png",
      short: "Your beauty shop for every shade, style, and shine.",
      details: "A beauty space crafted for women who love to express themselves. From subtle elegance to bold looks — we have something for every mood",
      tags: ["API-Fetching", "HTML","CSS","Object-destructuring"],
    },
    {
      id: 8,
      title: "Word Game",
      image: "pro8.png",
      short: "Test your vocabulary with quick, addictive word puzzles",
      details: "An interactive word-solving game that enhances vocabulary, improves focus, and offers engaging puzzles for all skill levels",
      tags: ["Bootstrap", "JS" ,"HTML"],
    },
    {
      id: 9,
      title: "To-Do List",
      image: "pro9.png",
      short: "Always Forget your work use to-do list to complete all tasks and make your day count",
      details: "A lightweight task manager that lets you add, track, and complete tasks effortlessly, keeping your workflow neat and clutter-free.",
      tags: ["Bootstrap", "DOM" ,"HTML" ,"JS"],
    },
  ]);

  const containerRef = useRef(null);
  const [index, setIndex] = useState(0); // index of left-most visible card
  const [cardWidth, setCardWidth] = useState(280); // default card width
  const [visibleCount, setVisibleCount] = useState(3);
  const [selected, setSelected] = useState(null); // product for modal

  
  const GAP = 50;




  // responsive sizing
  useEffect(() => {
    function updateLayout() {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleCount(4);
        setCardWidth(300);
      } else if (width >= 1024) {
        setVisibleCount(3);
        setCardWidth(280);
      } else if (width >= 640) {
        setVisibleCount(2);
        setCardWidth(260);
      } else {
        setVisibleCount(1);
        setCardWidth(Math.min(320, Math.floor(width * 0.85)));
      }
    }
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Keep index in range when window resizes or products change
  useEffect(() => {
    const maxIndex = Math.max(0, products.length - visibleCount);
    setIndex((i) => Math.min(i, maxIndex));
  }, [products.length, visibleCount]);

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };
  const next = () => {
    setIndex((i) => Math.min(products.length - visibleCount, i + 1));
  };

 

  // snap transform based on index
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const unit = cardWidth + GAP;
    el.style.transition = "transform 350ms cubic-bezier(.2,.8,.2,1)";
    el.style.transform = `translateX(${ -index * unit }px)`;
  }, [index, cardWidth]);

  return (
    <section className="min-h-screen bg-black flex items-center
bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_45%,rgba(0,128,128,0.22)_70%,rgba(0,0,0,1)_100%)] || py-8  text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="flex gap-2 items-center">
            <button
              aria-label="Previous"
              onClick={prev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-40"
              disabled={index === 0}
            >
              <FaCircleChevronLeft size={28} />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-40"
              disabled={index >= products.length - visibleCount}
            >
              <FaCircleChevronRight size={28} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* track */}
          <div
            ref={containerRef}
            id="project2"
            className="flex gap-4 will-change-transform touch-pan-x"
            style={{ transform: `translateX(${ -index * cardWidth }px)` }}
          >
            {products.map((p) => (
              <article
                key={p.id}
                className="bg-white/5 rounded-2xl p-4 min-h-[260px] flex-shrink-0"
                style={{ width: cardWidth }}
              >
                <div className="h-40 w-full rounded-lg overflow-hidden mb-3 flex items-center justify-center bg-white/5">
                  <img src={p.image} alt={p.title} className="object-fill h-full w-full" />
                </div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-white/80 mt-1">{p.short}</p>

                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-white/70 flex gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-1 bg-white/5 rounded-full">{t}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelected(p)}
                    className="text-sm px-3 py-1 bg-teal-600 rounded-md hover:brightness-110"
                  >
                    Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* indicators */}
        <div className="mt-4 flex items-center gap-2">
          {Array.from({ length: Math.max(1, products.length - visibleCount + 1) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-teal-400" : "bg-white/20"}`}
              aria-label={`Show items starting at ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* deatial model */}
      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
          <div className="bg-white text-black rounded-2xl max-w-2xl w-full p-6 relative">
            <button
              aria-label="Close"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white bg-black/20 rounded-full p-2"
            >
              ✕
            </button>
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden bg-gray-100">
                <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">{selected.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{selected.details}</p>
                <div className="flex gap-2 flex-wrap">
                  {selected.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-gray-200 rounded">{t}</span>
                  ))}
                </div>
                {/*  links, buttons */}
                <div className="mt-4 flex gap-2">
                  <a href="#" className="px-3 py-2 bg-teal-600 text-white rounded-md">View Demo</a>
                  <a href="#" className="px-3 py-2 border rounded-md">Source</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
