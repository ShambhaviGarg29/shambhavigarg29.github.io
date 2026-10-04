/* ==========================================================
   EDIT YOUR CONTENT HERE. No 3D knowledge needed.
   Six faces, in this order: Persona, Innovation, Community, Research, Milestones, Talk to Me.
   Block kinds: say (statement), p (paragraph), stats, rows (expandable
   entries), photos ({src,cap}), video ({id,cap} — YouTube id), tags, contact.
   Photos live in /assets.
   ========================================================== */
window.portfolioData = {
  name: "Shambhavi Garg",
  hint: "interact with the cube",
  contact: {
    email: "shambhavi.garg@stonybrook.edu",
    phone: "+1 (934) 227-8262",
    linkedin: "https://www.linkedin.com/in/shambhavigarg29jun"
  },
  emailjs: { publicKey: "WKXnD7uz8p3pSlVrE", service: "service_x25otrm", template: "template_ohgr74z" },

  // The portfolio assistant runs locally from this portfolio data.
  // No API key or external AI service is required.
  funFacts: {
    "Favourite colour": "FILL_IN",
    "Favourite food": "FILL_IN",
    "Middle school": "FILL_IN \u2014 name + city",
    "A weird/fun fact": "FILL_IN"
  },

  sections: [
    { id: "persona", name: "Persona", line: "who I am, and how I got here",
      blocks: [
        { k: "say", text: "Ten schools in ten years taught me to arrive anywhere, and belong." },
        { k: "photos", items: [{ src: "assets/p04.jpg", cap: "" }, { src: "assets/p20.jpg", cap: "" }, { src: "assets/p05.jpg", cap: "" }] },
        { k: "p", text: "I grew up as an army kid, moving through cities and cantonments across India — a new school almost every year, ten in total. That constant movement could have unsettled me. Instead it built adaptability, a sharp curiosity about the world, and a genuine love for meeting people from every walk of life. Every transition was a small negotiation: who to be, how to find footing, where to look for the people worth knowing. I learned to do that quickly, and to do it with warmth rather than guardedness." },
        { k: "p", text: "Through every one of those moves, I looked for ways not just to fit in, but to lead. In Bathinda I founded a Mock G20 at my school. In Delhi I directed an economics club, built a 50-person volunteer community, and sat on my school's student council. Leadership, for me, has never been a title I sought — it's what happened when I kept showing up and kept asking what was missing." },
        { k: "p", text: "I work at the intersection of numbers and narrative. I'm comfortable in a dataset — Python, statistical analysis, survey design — and I'm equally comfortable behind a camera, writing, directing and cutting short documentaries. Model United Nations sharpened a third skill underneath both: the ability to argue a position out loud, read a room, and find the compromise that actually holds. I use all three together, because the policy questions I care about are never just about the numbers or just about the story — they need both to land." },
        { k: "p", text: "Today I'm studying Applied Mathematics & Statistics at Stony Brook University, with Computer Science as a planned double major, expected to graduate in 2030. It's the quantitative and computational foundation for a career I imagine in public policy, economics, or international relations — built on a simple belief: that data and storytelling, used well, are tools for equity." },
        { k: "photos", items: [{ src: "assets/p08.jpg", cap: "" }, { src: "assets/p14.jpg", cap: "class of 2030" }] },
        { k: "video", id: "RTDystQg6cU", cap: "a film I made" },
        { k: "rows", items: [
          { meta: "Sport", title: "Badminton", text: "Zonal Silver Medalist (Delhi, 2021–22). Punjab State Championship Quarterfinalist (2023)." },
          { meta: "Languages", title: "English, Hindi, French, Spanish", text: "English (fluent), Hindi (native), French (conversational), Spanish (conversational)." }
        ] },
        { k: "tags", items: ["Python", "Data Analysis", "Statistical Research", "Filmmaking", "Public Speaking", "Negotiation", "Storytelling", "Adaptability"] }
      ] },

    { id: "innovation", name: "Innovation", line: "building technology that creates a difference",
      blocks: [
        { k: "say", text: "The idea was simple to say and hard to build: train soldiers inside a world that doesn't put them at risk." },
        { k: "photos", items: [{ src: "assets/p07.jpg", cap: "long before SANJAY-VR, apparently" }] },
        { k: "stats", items: [["10,000+", "Indian Army personnel trained"], ["1st", "of its kind in India"]] },
        { k: "p", text: "Between 2023 and 2024 I conceived and led SANJAY-VR, India's first Virtual Reality Combat Training Lab, working directly with the Indian Army as part of the engineering team. The system stitched together Oculus headsets, simulator rifles, Google Earth's terrain data, and U.S.-based military simulation models into a single training environment — letting soldiers rehearse scenarios that would be too costly, too dangerous, or too logistically complex to run physically." },
        { k: "p", text: "I spearheaded the project along a team of highly accomplished engineers, helping move the system from concept to a working, repeatable training environment. It wasn't an academic prototype — it went into real use, training over 10,000 Indian Army personnel and measurably improving training efficiency, safety, and resource optimization for the units that adopted it." },
        { k: "p", text: "It's the project that taught me what I still look for in any technical work - building something that creates a difference, something revolutionary." },
        { k: "p", text: "Another idea I'm exploring is VECTOR, a portfolio intelligence platform designed to turn fragmented portfolio-company data into operational decisions. The concept brings together data ingestion, automated KPI analysis, peer benchmarking, performance-risk monitoring, and an AI-driven Action Engine that can surface recommendations and playbooks for private-equity operating teams." }
      ] },

    { id: "community", name: "Community", line: "using art, data, and community for other people's causes",
      blocks: [
        { k: "say", text: "Art can move people that a statistic can't — I try to use both." },
        { k: "stats", items: [["50+", "volunteers, Meraki Commune"], ["₹50,000", "raised for education"]] },
        { k: "rows", items: [
          { meta: "Project Prakash (MIT) · 2025", title: "Film Intern, rural eye-surgery program", text: "Under Dr. Pawan Sinha. I documented and filmed the journeys of rural children receiving free eye surgeries — the short film is featured on the organization's official website as one of its awareness tools." },
          { meta: "National Academy of Direct Taxes · 2025", title: "Filmmaker, taxation-transparency campaign", text: "Wrote and produced a short film selected from over 10,000 entries for NADT's public-awareness campaign, made in collaboration with the Salwan Education Trust." },
          { meta: "IIT Roorkee / MIT · 2024–25", title: "Financial-literacy program for India's war widows", text: "Alongside the research (see Research), I designed and launched a program connecting rural Veer Naris — war widows — to income, education, and welfare resources, and coordinated a network of counseling psychologists to support them directly." },
          { meta: "2024–present", title: "Founder, Meraki Commune", text: "A 50+ member digital volunteer community running social-issue awareness campaigns across India." },
          { meta: "2024", title: "Rotary Club fundraiser", text: "Organized and ran a fundraising stall for my school's Rotary chapter that raised ₹50,000 (about $600) for community education initiatives." }
        ] },
        { k: "photos", items: [{ src: "assets/p09.jpg", cap: "Project Prakash" }, { src: "assets/blind-children.jpg", cap: "documenting a child's journey through Project Prakash" }] }
      ] },

    { id: "research", name: "Research", line: "the questions I've spent real time trying to answer",
      blocks: [
        { k: "say", text: "What does a law actually do to the people it was written to protect?" },
        { k: "photos", items: [{ src: "assets/p03.jpg", cap: "" }] },
        { k: "stats", items: [["1,500+", "young people surveyed nationwide"]] },
        { k: "p", text: "Between 2024 and 2025, I served as Lead Research Intern, Digital Policy at Security and Policy Initiatives (SAPI), studying India's Digital Personal Data Protection Act (2023) and, specifically, how parental consent for minors on social media actually functions in practice. I designed and led a national youth survey that reached over 1,500 respondents, working under the mentorship of senior Government of India officials. That data became a formal policy report, published with the Government of India, and an accompanying public-perspectives documentary that I produced and directed, distributed through SAPI's platforms." },
        { k: "p", text: "In the same period, I worked as a Data Strategist & Social Impact Researcher advised by Dr. Chetan Ralekar (IIT Roorkee / MIT), studying India's war widows — Veer Naris. I used Python and statistical analysis to study their demographics, their actual access to welfare provisions, and the specific gaps between policy on paper and policy in practice, then presented those findings to inform regional outreach. The research didn't stay in a report; it directly shaped the financial-literacy and welfare-access program described under Community." },
        { k: "p", text: "I was also shortlisted for the Cambridge Centre for International Research's Young Scholars program, with scholarship, in 2025 — a research opportunity in the same vein. I'm continuing this work formally now, through a B.S. in Applied Mathematics & Statistics at Stony Brook University (Computer Science double major planned, expected 2030), building the quantitative and computational base that these questions actually require." }
      ] },

    { id: "milestones", name: "Milestones", line: "leadership, recognition, and the rooms I've helped build",
      blocks: [
        { k: "say", text: "Showing up enough times that people start handing you the microphone." },
        { k: "stats", items: [["6", "Model UN Best Delegate awards"]] },
        { k: "rows", items: [
          { meta: "Stony Brook · 2026–present", title: "Executive Board, Women in Business", text: "One of two freshmen on the executive board of Stony Brook's Women in Business. I am helping organise the annual International Women's Day conference, bringing together students and organisations from universities across the United States, including NYU and Cornell." },
          { meta: "Scholarship", title: "MEXT Japanese Government Scholarship shortlist", text: "Shortlisted as the first Indian applicant for the Social Sciences track, with intended areas of study including Economics, Business, and Finance." },
          { meta: "2025", title: "National Gold Medal, WAVES Film Competition", text: "Won first prize in the Young Filmmaker category at the WAVES Film Competition, organised by the Ministry of Information & Broadcasting." },
          { meta: "2022–present", title: "Model United Nations", text: "Participated as both a delegate and Executive Board member across national and international conferences. Earned six Best Delegate awards, including at SIGF International 2025 and St. Xavier's National MUN, and progressed from delegate to Chairperson at the Jodhamal Youth Conclave." },
          { meta: "2025–present", title: "Director, Econocrats", text: "Led the economics club at DPS R.K. Puram as Chief Student Editor of its magazine and conceived the school's first inter-school commerce festival with a cross-functional student team." },
          { meta: "2024–present", title: "Core Member, DIGEX Society", text: "Contributed to the school's digital media strategy team while also building Meraki Commune, a 50+ member digital volunteer community." },
          { meta: "Academics", title: "AP Scholar with Distinction", text: "Earned a 5/5 in AP English Language & Composition and a 4/5 in AP Precalculus, alongside the Scholar Badge for Academic Excellence and the Principal's Red Blazer Award for Co-Curricular Excellence. Also recognised as Best Student All-Rounder and Top State Scholar in Grade 10." },
          { meta: "Grassroots", title: "Founder, Mock G20 at APS Bathinda", text: "Introduced a Mock G20 programme to APS Bathinda Cantonment, creating a new forum for students to engage with global governance and diplomacy." }
        ] },
      ] },

    { id: "talk", name: "Talk to Me", line: "an ai version of me — ask it anything",
      blocks: [
        { k: "say", text: "It only knows what I've told it. That's still a decent place to start." },
        { k: "photos", items: [{ src: "assets/p15.jpg", cap: "" }, { src: "assets/p16.jpg", cap: "" }] },
        { k: "chat" }
      ] }
  ]
};
