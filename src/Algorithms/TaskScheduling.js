const schedules = [
  { id: "a", deps: ["b", "c"] },
  { id: "b", deps: ["d"] },
  { id: "c", deps: ["e"] },
  { id: "d", deps: [] },
  { id: "e", deps: ["f"] },
  { id: "f", deps: [] },
];

function removeDeps(id) {
  schedules.forEach((item) => {
    const index = item.deps.indexOf(id);
    if (index !== -1) item.deps.splice(index, 1);
  });
}

function getSchedules(schedules) {
  const result = [];

  while (result.length < schedules.length) {
    for (let i = 0; i < schedules.length; i++) {
      if (schedules[i].deps.length === 0 && !result.includes(schedules[i].id)) {
        result.push(schedules[i].id);
        removeDeps(schedules[i].id);
      }
    }
  }
  return result;
}

console.log(getSchedules(schedules));
