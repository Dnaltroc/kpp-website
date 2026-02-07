const FAQ_ITEMS = [
  {
    question: 'What about arm health?',
    answer: 'Arm health is foundational. Our programs incorporate workload management, arm care protocols, and movement assessments. Longevity is always part of the equation. We also have a dedicated rehab coach for any injuries.',
  },
  {
    question: 'Do you offer remote coaching?',
    answer: 'Yes! Remote includes video analysis, personalized programming, weekly check-ins, nutrition, mental game and direct coaching access. Many of our best results come from remote athletes.',
  },
  {
    question: 'Who is this for?',
    answer: 'Serious pitchers from high school through pro levels. We do not require a certain velocity — we require the right mindset and commitment.',
  },
  {
    question: 'What equipment do I need?',
    answer: 'Minimum: mound access, baseballs, and a phone for video. Access to basic gym equipment. We scale recommendations to your setup and provide weighted ball guidance.',
  },
  {
    question: 'How does pricing work?',
    answer: 'Transparent pricing after your consultation. No hidden fees. Investment varies by program type and duration.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-10 md:py-14 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Common Questions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">FAQ</h2>
        </div>
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 border border-gray-100"
            >
              <h3 className="font-semibold text-black mb-1.5">{item.question}</h3>
              <p className="text-gray-600 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
