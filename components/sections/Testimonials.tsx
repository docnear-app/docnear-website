import { TESTIMONIALS } from "@/data/testimonials";
import type { Testimonial } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
      <StarRating rating={testimonial.rating} />
      <blockquote className="text-sm text-gray-600 leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
        <div
          className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm shrink-0"
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-400">
            {testimonial.role} · {testimonial.location}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Loved by Patients & Doctors"
          title="Real stories from real people"
          subtitle="Thousands of patients and doctors across India trust DocNear every single day."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
