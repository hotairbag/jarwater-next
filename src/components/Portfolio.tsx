"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types";

interface PortfolioProps {
  isStandalone?: boolean;
}

export const Portfolio = ({ isStandalone = true }: PortfolioProps) => {
  const [selectedProject, setSelectedProject] = useState<
    (Project & { videoUrl?: string; vimeoId?: string }) | null
  >(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const projects: (Project & { videoUrl?: string; vimeoId?: string })[] = [
    {
      id: "1",
      title: "Miami Magic Journey",
      category: "Brand Film",
      image: "https://picsum.photos/id/132/800/600",
      description: "A vibrant visual journey through Miami's magic.",
      vimeoId: "1150790609",
    },
    {
      id: "2",
      title: "Structural Integrity",
      category: "3D Motion",
      image: "https://picsum.photos/id/234/800/600",
      description:
        "Abstract architectural renders for a real estate conglomerate.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: "3",
      title: "The Flow State",
      category: "Explainer",
      image: "https://picsum.photos/id/453/800/600",
      description:
        "Simplifying complex logistical algorithms through fluid 2D animation.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: "4",
      title: "Kinetic Type",
      category: "Commercial",
      image: "https://picsum.photos/id/88/800/600",
      description:
        "High energy kinetic typography for a sports drink campaign.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      id: "5",
      title: "Eco Systems",
      category: "Explainer",
      image: "https://picsum.photos/id/28/800/600",
      description:
        "Soft, organic motion graphics explaining carbon capture technology.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      id: "6",
      title: "Future Fabric",
      category: "3D Motion",
      image: "https://picsum.photos/id/35/800/600",
      description: "Cloth simulation and texture focus for a fashion tech brand.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
  ];

  return (
    <>
      <div
        className={`${isStandalone ? "pt-32" : "pt-24"} pb-24 md:pb-48 px-6 md:px-12 max-w-7xl mx-auto min-h-screen`}
      >
        <div className="mb-20 border-b border-zinc-800 pb-8 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-2">
              Selected Works
            </h2>
            <p className="text-zinc-500 font-light">
              Curated motion pieces 2023-2024
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-right hidden md:block">
            <span className="text-zinc-600 text-sm tracking-widest uppercase">
              Jarwater Studio
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${index % 2 !== 0 ? "md:translate-y-24" : ""}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-indigo-900/20 z-10 group-hover:opacity-0 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                    <svg
                      className="w-8 h-8 text-white fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  unoptimized
                />
              </div>
              <div className="flex justify-between items-start border-t border-zinc-800 pt-4">
                <div>
                  <h3 className="text-2xl text-white font-medium mb-1 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 font-light text-sm">
                    {project.description}
                  </p>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 border border-zinc-800 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center p-4 animate-[fadeIn_1s_ease-out_forwards]"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-6xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 px-2">
              <div>
                <h3 className="text-2xl font-serif text-white">
                  {selectedProject.title}
                </h3>
                <span className="text-zinc-500 text-sm uppercase tracking-widest">
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="group p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="relative aspect-video bg-black shadow-2xl rounded-sm overflow-hidden border border-zinc-800">
              {selectedProject.vimeoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${selectedProject.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute top-0 left-0 w-full h-full"
                  title={selectedProject.title}
                />
              ) : (
                <video
                  src={selectedProject.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="mt-6 px-2">
              <p className="text-zinc-400 font-light max-w-2xl">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
