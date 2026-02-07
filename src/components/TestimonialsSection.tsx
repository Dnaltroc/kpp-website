import Image from "next/image";
import { testimonials } from "@/lib/testimonials";

function Avatar({ src, name }: { src?: string; name: string }) {
  const initials = name
    .replace(".", "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-black/5 text-xs font-bold text-black">
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="40px"
          className="object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">What Athletes Say</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Avatar src={testimonial.avatar} name={testimonial.name} />
                <div className="min-w-0">
                  <p className="font-semibold text-black text-sm truncate">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 truncate">{testimonial.bio}</p>
                </div>
              </div>
              <div className="bg-red-50 text-red-700 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
                {testimonial.tag}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
