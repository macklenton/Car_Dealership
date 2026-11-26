import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      status: "Pending",
      date: new Date().toISOString(),
    };

    const existingMessages = JSON.parse(
      localStorage.getItem("autodrive_messages") || "[]",
    );

    const updatedMessages = [...existingMessages, newMessage];

    localStorage.setItem("autodrive_messages", JSON.stringify(updatedMessages));

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "support@autodrive.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+254 700 000 000",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Nairobi, Kenya",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Mon - Sat, 8:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen flex-1 bg-slate-100 p-5 md:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-amber-600">
          AutoDrive Support
        </span>

        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          Contact Us
        </h1>

        <p className="mt-2 text-slate-500">
          Have questions or need assistance? We'd love to hear from you.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="rounded-2xl bg-slate-900 p-7 text-white shadow-lg">
          <h2 className="text-2xl font-bold">Get in Touch</h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Our team is ready to help you with your dealership enquiries and
            customer support needs.
          </p>

          <div className="mt-10 space-y-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-xl bg-amber-500 p-3">
                    <Icon size={22} className="text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>

                    <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-xl border border-slate-700 bg-slate-800 p-5">
            <MessageSquare className="mb-3 text-amber-500" size={28} />

            <h3 className="font-semibold">We're Here to Help</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Your satisfaction matters to us. Reach out whenever you need
              assistance.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl bg-white p-7 shadow-lg lg:col-span-2">
          <h2 className="text-2xl font-bold text-slate-900">
            Send Us a Message
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Fill in the form below and we'll get back to you.
          </p>

          {submitted && (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
              Your message has been submitted successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is your enquiry about?"
                required
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Your Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="6"
                required
                className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-amber-500 px-6 py-4 font-semibold text-white shadow-md transition hover:bg-amber-600 active:scale-[0.98] md:w-auto"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
