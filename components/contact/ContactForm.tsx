"use client";

import { useState } from "react";
import { getSiteConfig } from "@/lib/content";
import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2, HelpCircle } from "lucide-react";

export default function ContactForm() {
  const siteConfig = getSiteConfig();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrorMessage("");

    // Mandatory Field Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.content.trim()) {
      setSubmitStatus("error");
      setErrorMessage("All fields (Name, Email, Subject, Message) are mandatory.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    const webhookUrl = siteConfig.contactWebhookUrl || "https://n8n-service-obr8.onrender.com/webhook/contact-us";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          name: formData.name.trim(),
          subject: formData.subject.trim(),
          content: formData.content.trim(),
        }),
      });

      if (response.ok || response.status === 200 || response.status === 201) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", content: "" });
      } else {
        throw new Error(`Server returned status code ${response.status}`);
      }
    } catch (err: unknown) {
      console.error("Contact form error:", err);
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error
          ? `Failed to send message: ${err.message}`
          : "An unexpected error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-[#090c17] p-6 md:p-8 shadow-2xl glass-panel relative overflow-hidden">
      {submitStatus === "success" ? (
        <div className="py-12 text-center space-y-4">
          <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you for reaching out to Histeria. Our team has received your message and will respond shortly.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitStatus("idle")}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-indigo-500 transition-all"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Send Us a Message</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Have questions, feedback, or integration needs? Drop us a note below.
              </p>
            </div>
            <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/40 px-2.5 py-1 rounded-full font-semibold">
              All fields mandatory *
            </span>
          </div>

          {submitStatus === "error" && (
            <div className="p-3.5 rounded-xl border border-rose-500/40 bg-rose-950/30 text-xs text-rose-300 flex items-center gap-2.5">
              <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-indigo-400" />
                Your Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full rounded-xl border border-white/15 bg-[#060810] px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-indigo-400" />
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/15 bg-[#060810] px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5 text-indigo-400" />
              Subject <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Feedback regarding API infrastructure"
              className="w-full rounded-xl border border-white/15 bg-[#060810] px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all"
            />
          </div>

          {/* Content Field */}
          <div className="space-y-1.5">
            <label htmlFor="content" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-indigo-400" />
              Message Content <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={5}
              value={formData.content}
              onChange={handleChange}
              placeholder="Hi, I wanted to inquire about custom throughput limits and API options..."
              className="w-full rounded-xl border border-white/15 bg-[#060810] px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all resize-y"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-mono">
              Webhook: <code className="text-indigo-300">/webhook/contact-us</code>
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Message</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
