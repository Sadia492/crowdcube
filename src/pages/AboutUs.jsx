import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 pt-12">
      <div className="w-11/12 mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          We are a community-driven platform committed to helping innovative
          projects succeed through crowdfunding. Our mission is to connect
          passionate individuals with projects that have the power to change the
          world.
        </p>

        {/* Mission Statement */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600">
            At [Company Name], our mission is to empower entrepreneurs,
            creators, and organizations by providing them with the resources
            they need to bring their ideas to life. We aim to create a thriving
            ecosystem that supports meaningful ventures through collaboration,
            transparency, and trust.
          </p>
        </div>

        {/* Our Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet the Team
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Our team is made up of passionate individuals who believe in the
            power of collaboration and innovation. We are driven by a shared
            vision to make a positive impact through the projects we support.
            Here's a little more about the people behind the platform:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h4>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Alex Johnson
              </h4>
              <p className="text-gray-600">Community Manager</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Core Values
          </h3>
          <ul className="list-inside list-disc text-lg text-gray-600">
            <li>
              <strong>Integrity:</strong> We prioritize transparency and honesty
              in all of our interactions.
            </li>
            <li>
              <strong>Innovation:</strong> We believe in the power of new ideas
              and strive to support groundbreaking projects.
            </li>
            <li>
              <strong>Community:</strong> We are committed to building a
              supportive, inclusive space for creators and backers.
            </li>
            <li>
              <strong>Impact:</strong> We aim to create positive, long-lasting
              change through the projects we support.
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Interested in learning more about us or partnering with us?{" "}
            <a href="/contact" className="text-blue-600 hover:text-blue-700">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
