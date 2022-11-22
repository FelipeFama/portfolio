export const revealPage = {
  origin: "left",
  distance: "30px",
  duration: 1200
};

ScrollReveal().reveal(
  `
  #about,
  #about .profile-about,
  #about .article-about,
  #projects,
  #projects .container-projects,
  #projects .card-project,
  #skills,
  #skills .container-skills,
  #skills .card-skill,
  #contacts,
  #contacts .social-contacts,
  #contacts .form,
  footer
`,
  revealPage
);
