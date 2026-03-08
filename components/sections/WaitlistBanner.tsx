"use client";

import { useState, useCallback, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function WaitlistBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (error) setError("");
    },
    [error],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      setLoading(true);
      await new Promise<void>((resolve) => setTimeout(resolve, 800));
      setLoading(false);
      setSubmitted(true);
    },
    [email],
  );

  return (
    <section
      className="py-14 bg-teal-50 border-y border-teal-100"
      aria-labelledby="waitlist-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="waitlist-heading" className="text-2xl font-bold text-gray-900">
          Be the first when DocNear launches in your city
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Join our early access list. We&apos;ll notify you the moment DocNear goes live near you.
        </p>

        {submitted ? (
          <div className="mt-6 inline-flex items-center gap-2 text-teal-700 font-medium text-sm">
            <CheckCircle2 size={18} aria-hidden="true" />
            You&apos;re on the list! We&apos;ll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
            noValidate
            aria-label="Early access waitlist signup"
          >
            <div className="flex flex-col gap-1 w-full sm:w-auto">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                aria-label="Your email address"
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "waitlist-error" : undefined}
                className={cn(
                  "w-full sm:w-80 px-5 py-3 rounded-full border text-sm outline-none transition-all bg-white",
                  "focus:border-teal-500 focus:ring-2 focus:ring-teal-100",
                  error ? "border-red-400" : "border-gray-200",
                )}
              />
              {error && (
                <p id="waitlist-error" role="alert" className="text-xs text-red-500 pl-4 text-left">
                  {error}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="rounded-full bg-teal-600 hover:bg-teal-700 text-white px-7 shrink-0"
            >
              {loading ? (
                "Joining..."
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight size={16} className="ml-2" aria-hidden="true" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
