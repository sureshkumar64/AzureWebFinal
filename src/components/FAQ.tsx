import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is the Azure Workshop about?",
    answer:
      "The Azure Workshop is an interactive session designed to introduce students to cloud computing and Microsoft Azure services."
  },
  {
    question: "Do I need prior knowledge of Azure?",
    answer:
      "No prior experience is required! The workshop is beginner-friendly and tailored for students from all backgrounds."
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, participants who complete the workshop successfully will receive a certificate of participation."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-background border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background to-muted/5" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm p-4 transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-50" />
    </section>
  );
};
