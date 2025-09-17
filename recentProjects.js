// 1. Updated the section “Projects” to include most recent projects
const dynamicProjects = [
  {
    title: "Outfit App",
    shortDescription: "Built an app that allows users to simplify outfit planning",
    longDescription: `
      <li><b>Tools:</b> Django, JavaScript, FireBase, React Native</li>
      <li>Built an app that allows users to upload pictures of their clothing and combine items to create and save outfits for inspiration.</li>
      <li>Items currently in the laundry can be marked so they are excluded from recommendations, and users can filter clothing by tags.</li>
    `,
    img: "/assets/img/project-outfit.png",
    linkLive: "",
    linkSource: "https://github.com/liyaDyakov/Online-Outfiters"
  },
  {
    title: "Skittle Sorter",
    shortDescription: "Built a Skittle colour sorter programmed in C",
    longDescription: `
      <li><b>Tools:</b> C, Arduino</li>
      <li>Designed and built an automated Skittle sorting machine using C, capable of identifying and categorizing candies by colour.</li>
      <li>Integrated hardware and software using microcontrollers (e.g., Arduino) and custom C scripts for real-time control.</li>
    `,
    img: "/assets/img/project-skittle.jpeg",
    linkLive: "",
    linkSource: ""
  },
  {
    title: "Floppy Disk Music Box",
    shortDescription: "Programmed a floppy disk music box in C language",
    longDescription: `
      <li><b>Tools:</b> C, Arduino</li>
      <li>Engineered a music-playing device using a floppy disk drive, programmed entirely in C to produce musical notes by precisely controlling the drive’s stepper motor.</li>
    `,
    img: "/assets/img/project-floppy.jpeg",
    linkLive: "",
    linkSource: ""
  },
  {
    title: "Geographical System Interface",
    shortDescription: "Built a geographical system interface in C++ with GitHub and Glade",
    longDescription: `
      <li><b>Tools:</b> GitHub, C++ on VS Code, Glade Interface</li>
      <li>Developed application logic in C++ to process and visualize geographical data.</li>
      <li>Designed intuitive graphical interfaces using Glade, ensuring usability and responsiveness.</li>
    `,
    img: "/assets/img/project-geo.jpg",
    linkLive: "",
    linkSource: ""
  }
];

// Tracks how many projects are currently displayed
let currentIndex = 0;

// Utility to clear all loaded projects from DOM
function clearProjects() {
  // 3. Clears the target <div> where JS will inject content
  document.getElementById("projects-row").innerHTML = "";
}

// 4. Function to generate and inject HTML for a project using DOM manipulation
function renderProject(project) {
  const container = document.getElementById("projects-row");

  const cardHTML = `
    <div class="col s12 m6 l4">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${project.title}" src="${project.img}" style="height: 100%; width: 100%" class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">${project.title}
            <i class="mdi-navigation-more-vert right"></i>
          </span>
          <p>${project.shortDescription}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text">
            <small>Accomplishments</small>
            <i class="mdi-navigation-close right"></i>
          </span>
          <ul>${project.longDescription}</ul>
          ${(project.linkLive || project.linkSource) ? `
            <div class="card-action">
              ${project.linkLive ? `
                <a href="${project.linkLive}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey">
                  <i class="fa fa-external-link"></i>
                </a>
              ` : ''}
              ${project.linkSource ? `
                <a href="${project.linkSource}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey">
                  <i class="fa fa-github"></i>
                </a>
              ` : ''}
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", cardHTML);
}

// 5. Handles loading one project at a time, then collapses back to the first
function loadNextProject() {
  if (currentIndex < dynamicProjects.length) {
    renderProject(dynamicProjects[currentIndex]);
    currentIndex++;

    // 6. When all projects are shown, change button to say "Collapse"
    if (currentIndex === dynamicProjects.length) {
      const btn = document.getElementById("project-action-btn");
      btn.textContent = "Collapse";
    }
  } else {
    // 6. Collapse to only the first project
    clearProjects();
    currentIndex = 0;
    renderProject(dynamicProjects[currentIndex]);
    currentIndex = 1;

    const btn = document.getElementById("project-action-btn");
    btn.textContent = "Load More";
  }
}

// 2. On page load, only show the most recent project
document.addEventListener("DOMContentLoaded", () => {
  renderProject(dynamicProjects[0]);
  currentIndex = 1;

  // 5. Hook up the Load More / Collapse button
  const btn = document.getElementById("project-action-btn");
  btn.addEventListener("click", loadNextProject);
});
