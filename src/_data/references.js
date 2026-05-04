import { readFileSync } from "node:fs";

const markdown = readFileSync("references.md", "utf8");

function cleanCell(value) {
  return value
    .trim()
    .replace(/^\*\*(.*)\*\*$/, "$1")
    .replace(/—/g, "-");
}

function parseLink(value) {
  const match = value.match(/^\[(.+?)\]\((.+?)\)$/);

  if (!match) {
    return {
      label: cleanCell(value),
      url: null
    };
  }

  return {
    label: match[1],
    url: match[2]
  };
}

function parseReferencesTable(source) {
  const rows = [];
  let currentSection = "";

  for (const line of source.split("\n")) {
    const trimmed = line.trim();

    if (!trimmed.startsWith("|") || /^(\|\s*-+\s*)+\|$/.test(trimmed)) {
      continue;
    }

    const cells = trimmed
      .slice(1, -1)
      .split("|")
      .map(cleanCell);

    if (cells[0] === "Sección") {
      continue;
    }

    const [section, sourceName, type, linkCell, contribution] = cells;

    if (section) {
      currentSection = section;
    }

    if (!sourceName && !type && !linkCell && !contribution) {
      continue;
    }

    rows.push({
      section: currentSection,
      source: sourceName,
      type,
      link: parseLink(linkCell),
      contribution
    });
  }

  return rows.reduce((groups, item) => {
    const group = groups.find((entry) => entry.section === item.section);

    if (group) {
      group.items.push(item);
    } else {
      groups.push({
        section: item.section,
        items: [item]
      });
    }

    return groups;
  }, []);
}

export default parseReferencesTable(markdown);
