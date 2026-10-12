const slug = document.body.dataset.member;
const member = members.find((entry) => entry.slug === slug);
const content = document.querySelector("#profile-content");

if (!member) {
  document.title = "Member not found — Central Media";
  content.innerHTML = '<p class="not-found">This member profile could not be found.</p>';
} else {
  const index = members.indexOf(member) + 1;
  const initials = member.name.split(" ").map((part) => part[0]).join("");
  const instagramHandle = (member.instagram || "your-instagram-handle").replace(/^@/, "");
  const instagramUrl = `https://www.instagram.com/${encodeURIComponent(instagramHandle)}/`;
  document.title = `${member.name} — Central Media`;
  content.innerHTML = `
    <div class="profile-monogram" aria-hidden="true">${initials}${member.image ? `<img class="profile-photo" src="../${member.image}" alt="">` : ""}</div>
    <div class="profile-details">
      <p class="profile-number">CENTRAL MEDIA · ${String(index).padStart(2, "0")}</p>
      <h1 class="profile-name">${member.name}</h1>
      <p class="profile-role">${member.role}</p>
      <p class="profile-bio">${member.bio}</p>
      <div class="social-links profile-social-links" aria-label="Contact ${member.name}">
        <a class="social-button" href="https://mail.google.com/mail/?view=cm&amp;to=${encodeURIComponent(member.email)}" target="_blank" rel="noopener noreferrer">Gmail <span aria-hidden="true">↗</span></a>
        <a class="social-button" href="${instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
      </div>
    </div>`;
  const photo = content.querySelector(".profile-photo");
  if (photo) photo.addEventListener("error", () => photo.remove(), { once: true });
}
