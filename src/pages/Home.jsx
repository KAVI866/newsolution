import React from "react";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaRocket,
  FaSyncAlt,
  FaUserTie,
  FaCode,
  FaCogs,
  FaBrain,
  FaCloud,
  FaShieldAlt,
  FaCubes,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { assets } from "../assets/assets";
export const Home = () => {
  return (
    <div>
      <section className="gradient text-white min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Build Smarter. Scale Faster. Go Digital.
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            We craft high-performance apps, smart software, AI-powered tools,
            and secure cloud solutions that help businesses grow in the digital
            age.{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Let's Talk About Your Project
            </Link>
            <Link
              to="/services"
              className="bg-transparent border border-white px-6 py-2 rounded-md hover:bg-white hover:text-indigo-600 transition"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What We Do</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          We help startups, SMEs, and enterprises build end-to-end digital
          products with scalable technology stacks and user-first design.{" "}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <FaMobileAlt />, title: "Mobile App Development" },
            { icon: <FaCode />, title: "Web Development" },
            { icon: <FaCogs />, title: "Custom Software Solutions" },
            {
              icon: <FaBrain />,
              title: "Artificial Intelligence & Machine Learning",
            },
            { icon: <FaCloud />, title: "Cloud Infrastructure & DevOps" },
          ].map(({ icon, title }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <div className="text-3xl text-indigo-500 mb-4">{icon}</div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Get high-quality service tailored to your unique needs. We
                combine experience with innovation.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 md:px-20 text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-700">
          We're not just another development agency. Here's what sets us apart
          from the competition.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {[
            { icon: <FaCubes />, label: "Product-Driven Approach" },
            { icon: <FaRocket />, label: "Fast, Scalable, Secure" },
            { icon: <FaUserTie />, label: "Real-World Experience" },
            { icon: <FaSyncAlt />, label: "Flexible Hiring Models" },
            { icon: <FaShieldAlt />, label: "Long-Term Partnership" },
          ].map(({ icon, label }, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-6 text-left hover:shadow-md transition duration-300"
            >
              <div className="text-3xl text-purple-600 mb-3">{icon}</div>
              <h4 className="font-semibold text-lg text-gray-800">{label}</h4>
              <p className="text-sm text-gray-600 mt-1">
                Our team ensures smooth delivery using battle-tested, scalable
                systems and strategic collaboration.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              name: "Arjun M",
              image: [assets.staff2],
              title: "Startup Founder",
              quote:
                "The team delivered more than code. They helped us think like a tech company.",
            },
            {
              name: "Meera P",
              image: [assets.staff1],
              title: "Logistics Manager",
              quote:
                "Their dashboard transformed our workflow. Productivity has doubled.",
            },
          ].map((client, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
                />
                <div>
                  <h5 className="font-semibold text-lg">{client.name}</h5>
                  <span className="text-sm text-gray-500">{client.title}</span>
                </div>
              </div>
              <p className="italic text-gray-700 leading-relaxed">
                “{client.quote}”
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Let's discuss your project and explore how we help you achieve your
          digital transformation goals.
        </p>

        <div className="mb-6 space-y-2 text-white">
          <p className="flex justify-center items-center gap-2">
            <FiMail className="text-white" />
            <a href="mailto:hello@newsolution.com" className="underline">
              contact@newsolution.com
            </a>
          </p>
          <p className="flex justify-center items-center gap-2">
            <FiPhone className="text-white" />
            +91 98765 43210
          </p>
        </div>

        <Link
          to="/contact"
          className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Start Your Project Today
        </Link>
      </section>
    </div>
  );
};
