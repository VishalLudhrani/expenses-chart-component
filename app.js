import data from './data.json' assert {type: 'json'};

const chartList = document.getElementById("chart");
const maxExpenditure = data.reduce((previous, current) => current.amount > previous ? current.amount : previous, data[0]["amount"]);
console.log(maxExpenditure);

for (let item of data) {
  const listItem = document.createElement("li");
  const barHeight = item.amount / maxExpenditure * 100;
  const bar = document.createElement("div");
  bar.style.height = "100%";
  bar.classList.add("bar");
  const barContent = document.createElement("div");
  barContent.classList.add("bar-content");
  barContent.style.height = barHeight + "%";
  barContent.setAttribute("data-before-content", "$" + item.amount);
  if (item.amount === maxExpenditure) {
    barContent.setAttribute("id", "maximum");
  }
  bar.appendChild(barContent);
  listItem.appendChild(bar);
  const label = document.createElement("div");
  label.innerText = item.day;
  label.classList.add("label");
  listItem.appendChild(label);
  chartList.appendChild(listItem);
}