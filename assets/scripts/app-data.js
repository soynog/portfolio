'use strict';

const portfolio = [
  {
    title: "OTO",
    desc: "OTO (Outdoor Trip Organizer) makes organizing a camping trip fun and easy! Built on Ruby on Rails, Ember.js, and Bourbon. UX design by Norman Wozniak.",
    bgImage: "background-image:url(/assets/images/cards/OTO-screenshot.png)",
    imgSrc: "/assets/images/cards/OTO-screenshot.png",
    link: "http://soynog.github.io/oto-client",
    ghLink: "https://github.com/soynog/oto-client",
    id: "oto",
  },
  {
    title: "SoftSurv",
    desc: "Create single-scoop surveys for your friends! Each survey may be shared via a unique public URL. Built on Node.js, MongoDB, Express.js, and Bootstrap.",
    bgImage: "background-image:url(/assets/images/cards/soft-surv-screenshot.png)",
    imgSrc: "/assets/images/cards/soft-surv-screenshot.png",
    link: "http://schoof-there-it-is.github.io/softsurv",
    ghLink: "https://github.com/soynog/softsurv",
    id: "softsurv",
  },
  {
    title: "RezTailor",
    desc: "Tailor documents for specific needs by selecting modular sections from a master version. Rails/PostgreSQL back-end uses polymorphism to allow arbitrarily nested hierarchical document sections.",
    bgImage: "background-image:url(/assets/images/cards/reztailor-screenshot.png)",
    imgSrc: "/assets/images/cards/reztailor-screenshot.png",
    link: "http://soynog.github.io/resume-tailor-frontend",
    ghLink: "https://github.com/soynog/resume-tailor-frontend",
    id: "reztailor",
  },
  {
    title: "Tic-Tac-Toe",
    desc: "This simple game app requires user authentication and allows remote play between two players. Leverages a back-end resource watcher to update the game state in real time in response to player activity.",
    bgImage: "background-image:url(/assets/images/cards/tic-tac-toe-screenshot.png)",
    imgSrc: "/assets/images/cards/tic-tac-toe-screenshot.png",
    link: "http://soynog.github.io/tic-tac-toe",
    ghLink: "https://github.com/soynog/tic-tac-toe",
    id: "tic-tac-toe",
  },
  {
    title: "Mustachify",
    desc: "Pin a mustache to your favorite selfie! Mustachify uses Microsoft’s facial recognition API and a custom placement algorithm to automatically draw mustaches onto uploaded images. Created for a 24-hour hackathon challenge.",
    bgImage: "background-image:url(/assets/images/cards/stache-it-screenshot.png)",
    imgSrc: "/assets/images/cards/stache-it-screenshot.png",
    link: "http://soynog.github.io/mustachify",
    ghLink: "https://github.com/soynog/mustachify",
    id: "mustachify",
  },
  {
    title: "Cryptography",
    desc: "I research and presented this brief overview of cryptography, past and present, for a student conference at General Assembly.",
    bgImage: "background-image:url(/assets/images/cards/cryptography-screenshot.png)",
    imgSrc: "/assets/images/cards/cryptography-screenshot.png",
    link: "https://docs.google.com/presentation/d/1ST1uzlsXLzSSn-GIHNNPbRA5lkDIDAT2r53q1S_eYwA/edit?usp=sharing",
    id: "cryptography",
  },
  {
    title: "This Very Website",
    desc: "Custom-built front-end using the lightweight and flexible Bourbon framework. Uses no templates or pre-made themes.",
    bgImage: "background-image:url(/assets/images/cards/website-screenshot.png)",
    imgSrc: "/assets/images/cards/website-screenshot.png",
    link: "http://nicolasogarcia.com",
    ghLink: "https://github.com/soynog/portfolio",
    id: "portfolio-website",
  },
];

module.exports = {
  portfolio,
};
