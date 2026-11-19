const list = document.querySelector("#tools");

for (const tool of tools) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = tool.url;

  const title = document.createElement("h2");
  title.textContent = tool.title;

  const description = document.createElement("p");
  description.textContent = tool.description;

  const arrow = document.createElement("span");
  arrow.className = "arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = /^https?:\/\//i.test(tool.url) ? "↗" : "→";

  link.append(title, description);
  const metadata = document.createElement("div");
  metadata.className = "tool-meta";
  for (const [label, value] of [["Zielgruppe", tool.audience], ["Fächer", tool.subjects]]) {
    if (!value) continue;
    const tag = document.createElement("span");
    tag.textContent = label + ": " + value;
    metadata.append(tag);
  }
  if (metadata.children.length) link.append(metadata);
  link.append(arrow);
  item.append(link);
  list.append(item);
}

const query = document.querySelector("#query");
const status = document.querySelector("#search-status");

function normalize(text) {
  return text.toLocaleLowerCase("de").normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/ß/g, "ss")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

const entries = Array.from(list.children, (item, index) => {
  const { title, description, audience, subjects } = tools[index];
  return { item, text: normalize([title, description, audience, subjects].join(" ")) };
});

function filterTools() {
  const value = normalize(query.value);
  const terms = value ? value.split(" ") : [];
  let matches = 0;

  for (const { item, text } of entries) {
    const visible = terms.every(term => text.includes(term));
    item.hidden = !visible;
    if (visible) matches += 1;
  }

  status.textContent = !value ? "" : matches === 0 ? "Keine passenden Tools gefunden."
    : matches === 1 ? "1 Tool gefunden" : matches + " Tools gefunden";
}

query.addEventListener("input", filterTools);
document.querySelector("#tool-search").hidden = false;
filterTools();
