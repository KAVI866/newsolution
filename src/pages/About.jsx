import React from "react";
import {
  FaSearch,
  FaHandshake,
  FaChartLine,
  FaLock,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export const About = () => {
  const values = [
    {
      icon: <FaSearch />,
      title: "Innovation with Purpose",
      description:
        "We leverage emerging technologies to create solutions that drive real business impact.",
    },
    {
      icon: <FaHandshake />,
      title: "Honest Collaboration",
      description:
        "We believe in transparent, respectful communication that fosters strong partnerships.",
    },
    {
      icon: <FaChartLine />,
      title: "Scalable Thinking",
      description:
        "Our solutions are designed to grow with you—efficient, flexible, and built for the long run.",
    },
    {
      icon: <FaLock />,
      title: "Security and Performance",
      description:
        "Every product we build prioritizes stability, data protection, and optimized performance.",
    },
    {
      icon: <FaBrain />,
      title: "Continuous Learning",
      description:
        "We stay curious and committed to evolving with new tools, trends, and best practices.",
    },
  ];
  const teamMembers = [
    {
      name: "Rocky",
      title: "Lead Software Engineer",
      description:
        "Crafting scalable code and mentoring devs to build clean, maintainable systems.",
      image: [assets.team1],
    },
    {
      name: "Isabella",
      title: "UI/UX Designer",
      description:
        "Designs interfaces that delight users and align with product goals.",
      image: [assets.team2],
    },
    {
      name: "Jackson",
      title: "Cloud Architect & AI Engineer",
      description:
        "Architects robust cloud systems and integrates cutting-edge AI solutions.",
      image: [assets.team3],
    },
  ];
  return (
    <div className="text-gray-800">
      {/* Our Mission */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white py-20 px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We’re More Than Developers —<br /> We’re Your Digital Growth
            Partners
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            At New Solution, we believe in building products that solve real
            problems, drive business value, and create memorable user
            experiences. We work with startups and enterprises to turn complex
            ideas into simple, powerful digital solutions.
          </p>
          <Link
            to='/contact'
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-indigo-100 transition duration-300"
          >
            Let's Talk <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-700">
          These principles guide every project we take on — from how we work
          internally to how we build with clients.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {values.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl text-indigo-600 mb-4">{icon}</div>
              <h4 className="font-semibold text-lg mb-2">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-4 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A team of engineers, designers, cloud architects, and AI enthusiasts
          with a passion for clean code, smart systems, and beautiful products.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map(({ name, title, description, image }, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={image}
                alt={name}
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-indigo-600 text-sm">{title}</p>
              <p className="text-gray-600 text-sm mt-2">{description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Our Process */}
      <section className="py-16 px-4 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Process</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We follow a proven methodology that ensures successful project
          delivery from concept to launch.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Discovery",
              desc: "Understanding your business and goals",
              color: "bg-blue-100 text-blue-600",
            },
            {
              title: "Design",
              desc: "User-first UI/UX for real-world usability.",
              color: "bg-green-100 text-green-600",
            },
            {
              title: "Development",
              desc: "Agile sprints, clean code, full-stack builds.",
              color: "bg-purple-100 text-purple-600",
            },
            {
              title: "Launch",
              desc: "– Deployment, testing, maintenance & scaling.",
              color: "bg-red-100 text-red-600",
            },
          ].map((step, i) => (
            <div key={i} className={`p-6 rounded shadow ${step.color}`}>
              <div className="text-4xl font-bold mb-2">{i + 1}</div>
              <h4 className="font-semibold text-lg">{step.title}</h4>
              <p className="text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
