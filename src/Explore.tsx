import React from "react";

const Explore = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-cyan-950 via-black to-gray-900 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-cyan-400 tracking-wide">
          Explore Our Journey
        </h1>

        <div className="bg-white/5 backdrop-blur-md border border-cyan-800 rounded-2xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute -inset-px bg-gradient-to-tr from-cyan-700 to-transparent opacity-10 pointer-events-none rounded-2xl"></div>

          <p className="text-cyan-100 text-lg mb-6 leading-relaxed">
            At <span className="text-cyan-400 font-semibold">Link Asia Tours & Travel</span>, our journey began with a single belief: travel is not just about moving from one place to another, but about discovering moments that shape us.
          </p>

          <p className="text-cyan-100 text-lg mb-6 leading-relaxed">
            From the bustling streets of Kathmandu to the far corners of the globe, our mission has always been clear — to help people experience the world in ways that are meaningful, easy, and memorable.
          </p>

          <p className="text-cyan-100 text-lg mb-6 leading-relaxed">
            We started as a small travel agency with a big dream: to connect people to the world, and to each other, through unforgettable experiences. As we grew, so did our commitment to quality, trust, and personalized service.
          </p>

          <p className="text-cyan-100 text-lg mb-6 leading-relaxed">
            Today, we offer a wide range of travel solutions including domestic and international tours, trekking adventures, jungle safaris, ticketing, hotel booking, and visa assistance.
          </p>

          <p className="text-cyan-100 text-lg mb-6 leading-relaxed">
            But what truly defines our journey is not just the destinations we cover — it’s the people we meet, the cultures we embrace, and the memories we help create. Whether it’s a once-in-a-lifetime trek, a quiet sunrise, or a dream vacation, every trip we plan is crafted with care.
          </p>

          <p className="text-cyan-100 text-lg mb-6 leading-relaxed">
            Our team is more than a group of travel professionals. We are storytellers, planners, and problem solvers. We listen, we adapt, and we care deeply about every traveler who trusts us with their journey.
          </p>

          <p className="text-cyan-100 text-lg leading-relaxed">
            As we continue to grow, we carry with us the same values that started it all: <span className="text-cyan-300 font-medium">honesty</span>, <span className="text-cyan-300 font-medium">creativity</span>, <span className="text-cyan-300 font-medium">reliability</span>, and the <span className="text-cyan-300 font-medium">joy of travel</span>.
            We invite you to explore the world with us — not just as a client, but as part of our <span className="text-cyan-400 font-semibold">Link Asia Tours family</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Explore;
