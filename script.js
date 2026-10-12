const grid = document.querySelector("#member-grid");

members.forEach((member, index) => {
  const card = document.createElement("a");
  card.className = "member-card";
  card.href = `members/${member.slug}.html`;
  card.setAttribute("aria-label", `View ${member.name}'s profile`);
  card.innerHTML = `
    <span class="member-number">${String(index + 1).padStart(2, "0")}</span>
    <span class="member-monogram" aria-hidden="true">${member.name.split(" ").map((part) => part[0]).join("")}${member.image ? `<img class="member-photo" src="${member.image}" alt="">` : ""}</span>
    <span class="member-info">
      <span class="member-name">${member.name}</span>
      <span class="member-role">${member.role}</span>
    </span>
    <span class="member-arrow" aria-hidden="true">↗</span>`;
  const photo = card.querySelector(".member-photo");
  if (photo) photo.addEventListener("error", () => photo.remove(), { once: true });
  grid.append(card);
});
