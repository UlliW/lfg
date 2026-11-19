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

  link.append(title, description, arrow);
  item.append(link);
  list.append(item);
}
