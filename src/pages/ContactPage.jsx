import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactPage = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="flex flex-col items-center min-h-[80vh] bg-gradient-to-r from-blue-400 via-purple-300 to-pink-200 transition-colors duration-500 hover:from-blue-500 hover:to-pink-300">
      <div className="w-full max-w-xl mt-8 mb-4 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-6">Get in touch with our team</p>
      </div>
      <Card className="w-full max-w-xl mb-6 shadow-lg">
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-green-600 text-xl font-semibold mb-2">
              Thank you!
            </div>
            <div className="text-gray-700">
              Your message has been sent successfully.
            </div>
            <Button
              className="mt-6"
              variant="primary"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="subject" className="block font-medium mb-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                }`}
                value={form.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.subject}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.message}
                </div>
              )}
            </div>
            <Button
              type="submit"
              variant="primary"
              className="bg-blue-600 text-white px-6 py-3 rounded text-lg font-semibold hover:bg-blue-700 transition w-full mt-2"
            >
              Send Message
            </Button>
          </form>
        )}
      </Card>
      <Card className="w-full max-w-xl text-center mt-2">
        <div className="mb-2">
          <span className="font-semibold text-blue-700">Phone:</span> (555)
          123-4567
        </div>
        <div className="mb-2">
          <span className="font-semibold text-blue-700">Email:</span>{" "}
          support@localfinds.com
        </div>
        <div className="mb-2">
          <span className="font-semibold text-blue-700">Business Hours:</span>{" "}
          Mon-Fri, 9am - 6pm
        </div>
        <div>
          <span className="font-semibold text-blue-700">Address:</span> 123 Main
          St, Hometown, USA
        </div>
      </Card>
    </div>
  );
};

export default ContactPage;
