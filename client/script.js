fetch('http://localhost:5000/projects')
  .then(response => response.json())
  .then(data => {

    const projectDiv = document.getElementById('projects');

    data.forEach(project => {

      projectDiv.innerHTML += `
        <div class="project">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          ${
            project.github
              ? `<a href="${project.github}" target="_blank">View on GitHub</a>`
              : `<p><em>College Project</em></p>`
          }
        </div>
      `;
    });

  })
  .catch(error => console.error(error));