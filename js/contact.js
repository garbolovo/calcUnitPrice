// Contact email is stored shifted by one char code so it isn't
// harvestable as plain text by simple scrapers reading the page source.
const ENCODED_EMAIL = "hbscpmpwp89Azboefy/sv";

function decodeEmail(encoded) {
  return Array.from(encoded)
    .map((ch) => String.fromCharCode(ch.charCodeAt(0) - 1))
    .join("");
}

const contactLink = document.querySelector("#contact-link");
contactLink.href = "mailto:" + decodeEmail(ENCODED_EMAIL);
