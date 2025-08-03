import React from "react";
import { assets } from "../assets/assets.js";

export const Service = () => {
  const services = [
    {
      title: "Mobile App Development",
      icon: "📱",
      image: [assets.service1],
      description:
        "Reach users where they are—on mobile. We build Android, iOS, and cross-platform apps that deliver smooth user experiences and business impact.",
      points: [
        "Native & Cross-platform apps",
        "Real-time APIs, push, maps, payments",
        "App store publishing & maintenance",
      ],
    },
    {
      title: "Web Development",
      icon: "🌐",
      image: [assets.service2],
      description: "Responsive, fast, and tailored websites & web apps.",
      points: [
        "Custom websites, landing pages",
        "Dashboards, CMS, and portals",
        "E-commerce, blogs, and SaaS platforms",
      ],
    },
    {
      title: "Custom Software Development",
      icon: "💻",
      image: [assets.service5],
      description:
        "Build tools and systems that match your business perfectly.",
      points: [
        "Inventory & stock systems",
        "CRMs & ERPs",
        "Billing, workflow, and task automation",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      image: [assets.service3],
      description: "Let your systems think, learn, and adapt.",
      points: [
        "Chatbots & virtual assistants",
        "Predictive models & analytics",
        "Image, speech, and text recognition",
      ],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      icon: "☁️",
      image: [assets.service4],
      description: "Deploy with confidence and scale with ease.",
      points: [
        "AWS, Azure, GCP architecture",
        "CI/CD pipelines, serverless apps",
        "Monitoring, backup & security",
      ],
    },
  ];

  return (
    <div className="pt-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-indigo-600 to-transparent text-white rounded-xl py-12 text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Custom Technology Services Built to Scale With You
        </h1>
      </div>

      {/* Services Section */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2">
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-xl shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.icon} {service.title}
            </h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="list-disc text-gray-600 pl-6 space-y-1">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Call to Action */}
      <div className="text-center bg-gray-100 py-12 rounded-xl mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Don’t know where to start?
        </h2>
        <p className="text-gray-600 mb-6">
          Tell us your problem—we’ll help you plan the right solution.
        </p>
        <a
          href="/contact"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md"
        >
          Start Your Project
        </a>
      </div>
    </div>
  );
};
