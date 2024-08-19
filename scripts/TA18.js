const people = [
  { name: "Juan", age: 23 },
  { name: "Vero", age: 34 },
  { name: "Luis", age: 31 },
  { name: "Ana", age: 45 },
];

const renderList = (people) => {
  const markup = `
    <ul class="people">
        ${people
          .map((person) => `<li>${person.name} tiene ${person.age} años</li>`)
          .join("")}
    </ul>
`;
  document.querySelector("ul.people").innerHTML = markup;
};

renderList(people);

document.querySelector("input").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().startsWith(value)
  );
  renderList(filteredPeople);
});
