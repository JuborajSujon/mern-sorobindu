const team = document.querySelector(".team");

devs.map((data) => {
  team.innerHTML += `
      <div class="teamItem">
        <img
          src="${data.photo}"
          alt="${data.name}"
        />
        <h2>${data.name}</h2>
        <p>Age: ${data.age}</p>
        <p>${data.skill}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>location: ${data.location}</p>
      </div>`;
});
