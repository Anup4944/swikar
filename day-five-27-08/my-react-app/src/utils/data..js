export function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { month: "long", day: "2-digit", year: "numeric" };
  return date
    .toLocaleDateString("en-US", options)
    .replace(/,/g, "")
    .replace(/ /g, "-");
}
