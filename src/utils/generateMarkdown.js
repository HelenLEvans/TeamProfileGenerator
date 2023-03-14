const generateMarkdown = (teamMembers) => {
  const employeeCard = (teamMembers) => {
    let cardsHTML = "";
    const specificProperty = (member) => {
      if (member.getRole() === "Manager") {
        return member.getOfficeNumber();
      } else if (member.getRole() === "Engineer") {
        return member.getGithub();
      } else if (member.getRole() === "Intern") {
        return member.getSchool();
      }
    };
    teamMembers.forEach((member) => {
      const card = `<div class="card" style="width: 45%">
    <div class="card-body">
      <h5 class="card-title">${member.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${member.getRole()}</h6>
      <div class="card-text">
     ${specificProperty(member)}
      </div>
      <div class="card-text">${member.getEmail()}</div>
    </div>
    </div>`;
      cardsHTML = cardsHTML.concat(card);
    });

    return cardsHTML;
  };
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <h1>Employees</h1>
  
      <div class="d-flex justify-content-center align-items-center w-100">
       
      ${employeeCard(teamMembers)}
    </div>
  
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
};

module.exports = generateMarkdown;
