function sortArray<T, K extends keyof T>(array: T[], field: K) {
    return array.sort((a, b) => a[field] < b[field] ? -1 : 1);
}

const tasks = [{id: 2, title: "Test title 1"}, {id: 1, title: "Test title 2"}]
const sortedTasksById = sortArray(tasks, "id");

console.log("sortedTasksById", sortedTasksById);