import React, { useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Customer Testimonials | AMW Cooling & Heating LLC</title>
  <meta
    name="description"
    content="Read what our customers have to say about AMW Cooling & Heating. See real reviews from homeowners and businesses in Conroe, The Woodlands, and surrounding areas."
  />
  <meta
    name="keywords"
    content="HVAC reviews, customer testimonials, AMW Cooling feedback, Conroe HVAC trusted, The Woodlands heating and cooling"
  />
</Helmet>

export default function TestimonialsPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?16aaf4d47aa052579c466335a88';
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
    <div className="bg-white text-gray-800 font-sans">
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            What Our Customers Are Saying
          </h1>

          {/* Reinforcement Paragraph */}
          <p className="text-base text-gray-700 max-w-2xl mx-auto mb-12">
            At AMW Cooling & Heating, we treat every customer like family. We’re grateful for your trust and honored to provide service that goes beyond expectations.
            When you call AMW Cooling & Heating, you’re not just getting HVAC expertise — you’re getting care, commitment, and people who truly look out for you.
          </p>

          {/* Grid of 3 Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Becca S. */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow relative">
              <FaQuoteLeft className="text-blue-200 text-3xl absolute -top-3 -left-3 opacity-20" />
              <p className="text-sm md:text-base mb-4">
                "If you need an air conditioning and heating expert you can rely on, I highly recommend Josh at AMW Cooling & Heating (936.587.7612).
                Josh is a U.S. Army veteran who brings the same pride, discipline, and attention to detail from his service into his work.
                When I needed someone to review the HVAC installation in my newly built home, Josh exceeded my expectations. He sat down with us, explained every aspect of our system,
                conducted a thorough inspection, and shared practical options—always emphasizing what he would do if it were his own house."
              </p>
              <p className="text-sm md:text-base mb-4">
                "What sets Josh apart is his integrity. He doesn't use scare tactics or pressure you into following his recommendations.
                He's highly knowledgeable, straightforward, and always available to answer questions.
                If you hire him, be sure to ask about his annual service plan—it's comprehensive and far exceeds what others in the market offer."
              </p>
              <p className="text-sm md:text-base mb-4">
                "Josh was the third HVAC professional I interviewed, and his expertise and approach won me over completely.
                As a retired Marine, I never thought I'd be recommending an Army guy—but Josh is the real deal. Semper Fi."
              </p>
              <p className="font-semibold">— Becca S.</p>
            </div>

            {/* Luis C. */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow relative">
              <FaQuoteLeft className="text-blue-200 text-3xl absolute -top-3 -left-3 opacity-20" />
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
                "The level of service and dedication he provided far exceeded what I paid for.
                Sure, you could go with any A/C company, but with Josh, the job isn’t just done and forgotten.
                He genuinely cares about his customers and stands by his work long after the installation is complete.
                If you want top-notch service and someone who truly looks out for you, Josh is the guy to call."
              </p>
              <p className="font-semibold">— Luis C.</p>
            </div>

            {/* Brandy G. */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow relative">
              <FaQuoteLeft className="text-blue-200 text-3xl absolute -top-3 -left-3 opacity-20" />
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
              <p className="font-semibold">— Brandy G.</p>
            </div>
          </div>

          {/* Trustindex Widget */}
          <div
            className="ti-widget mt-16"
            data-widget-id="16aaf4d47aa052579c466335a88"
          ></div>
        </div>
      </section>
    </div>
  );
}
