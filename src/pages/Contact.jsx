import React from "react";

export const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Headline */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Let’s Build Something Incredible Together
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Ready to transform your business with cutting-edge technology? Let’s
          start the conversation.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 px-4 md:px-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-6 text-gray-700">
            <li>
              <div className="flex items-start gap-3">
                <span>📧</span>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p>contact@newsolution.com</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <span>📞</span>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <span>📍</span>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p>Chennai, India</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <span>🔗</span>
                <div>
                  <h4 className="font-semibold">Website</h4>
                  <p>www.newsolution.com</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
          <p className="text-gray-600 mb-6">
            Have an idea, a brief, or just some questions? Drop us a message.
            We’re here to help you turn your vision into a powerful product.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Phone (Optional)"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Company (Optional)"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Message / Project Details"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="px-4 md:px-12 pb-12 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Find Us on the Map</h3>
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62206.258476043244!2d80.232523!3d12.978813000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d44d8b5bd3b%3A0xbff3d4c79a46f724!2sBullet%20Men&#39;s%20PG!5e0!3m2!1sen!2sus!4v1754197911209!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="New Solution Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
