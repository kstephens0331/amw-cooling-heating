import React, { useEffect } from 'react';

export default function TestimonialsPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?9c9a1c847f06430b3996053b6b0';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">What Our Customers Are Saying</h1>

        {/* Highlighted Review: Becca S. */}
        <div className="bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-xl shadow mb-10 text-left">
          <p className="text-sm md:text-base mb-4">
            "If you need an air conditioning and heating expert you can rely on, I highly recommend Josh at AMW Cooling & Heating (936.587.7612).
            Josh is a U.S. Army veteran who brings the same pride, discipline, and attention to detail from his service into his work.
            When I needed someone to review the HVAC installation in my newly built home, Josh exceeded my expectations.
            He sat down with us, explained every aspect of our system, conducted a thorough inspection, and shared practical options—
            always emphasizing what he would do if it were his own house."
          </p>
          <p className="text-sm md:text-base mb-4">
            "What sets Josh apart is his integrity. He doesn't use scare tactics or pressure you into following his recommendations.
            He's highly knowledgeable, straightforward, and always available to answer questions. If you hire him, be sure to ask about his annual service plan—
            it's comprehensive and far exceeds what others in the market offer."
          </p>
          <p className="text-sm md:text-base mb-4">
            "Josh was the third HVAC professional I interviewed, and his expertise and approach won me over completely.
            As a retired Marine, I never thought I'd be recommending an Army guy—but Josh is the real deal. Semper Fi."
          </p>
          <p className="font-semibold mt-2">— Becca S.</p>
        </div>

        {/* Highlighted Review: Luis C. */}
        <div className="bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-xl shadow mb-10 text-left">
          <p className="text-sm md:text-base mb-4">
            "Josh (owner of AMW) is, without a doubt, the best A/C technician in Texas. I reached out to five different companies,
            all of which tried to overcharge me. When I found Josh, I expected the same, but his pricing was significantly lower than the competition.
            At first, I worried that a lower price might mean lower quality work—after all, you usually get what you pay for."
          </p>
          <p className="text-sm md:text-base mb-4">
            "But with Josh, that wasn’t the case at all. He went above and beyond. The unit he installed is not only better than my last one,
            but the installation itself was done with precision and care. And his service didn’t stop there—
            he even followed up to make sure everything was running perfectly and keeping my home nice and cool."
          </p>
          <p className="text-sm md:text-base mb-4">
            "The level of service and dedication he provided far exceeded what I paid for. Josh genuinely cares about his customers and stands by his work long after the installation is complete.
            If you want top-notch service and someone who truly looks out for you, Josh is the guy to call."
          </p>
          <p className="font-semibold mt-2">— Luis C.</p>
        </div>

        {/* Highlighted Review: Brandy G. */}
        <div className="bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-xl shadow mb-10 text-left">
          <p className="text-sm md:text-base mb-4">
            "From the moment I met Josh and his wife, they were professional and explained what they could do for my A/C and heating system.
            They emailed me a quote for a yearly maintenance plan, and as soon as I was ready, I got on the schedule.
            They confirmed via text that they would be at my house on the scheduled day, and followed up just to make sure I got that text."
          </p>
          <p className="text-sm md:text-base mb-4">
            "Josh arrived on time and ready to get to work. He explained what he was going to do and everything he was going to check.
            After he checked everything and maintained my units, Josh explained thoroughly all the ins and outs of my system and showed me pictures every step along the way."
          </p>
          <p className="text-sm md:text-base mb-4">
            "He made recommendations, was very professional, and overall is just a nice guy.
            I highly recommend using AMW — not only are they a great small business with excellent customer service, but also Veteran Owned."
          </p>
          <p className="font-semibold mt-2">— Brandy G.</p>
        </div>

        {/* Reinforcement Paragraph */}
        <p className="text-base text-gray-700 max-w-2xl mx-auto mb-12">
          At AMW Cooling & Heating, we treat every customer like family. We’re grateful for your trust and honored to provide service that goes beyond expectations.
          When you call AMW, you’re not just getting HVAC expertise — you’re getting care, commitment, and people who truly look out for you.
        </p>

        {/* Trustindex Slider Widget */}
        <div className="ti-widget"></div>
      </div>
    </div>
  );
}
