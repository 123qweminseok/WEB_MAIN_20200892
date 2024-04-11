const sym1 = Symbol('test');
let symbolVar = sym1; // Corrected variable name from 'symbilVar' to 'symbolVar'
const airline = ["비행기", "320", "airbus", ["V1", true]];
const obj1 = {};
const obj2 = {
  name: "John Doe",
  age: 30,
  isMale: true,
};
console.log(); // Not necessary, removed








const users = new Map();
users.set("user1", {
  id: 1,
  password: "password123",
});
for (const [username, user] of users) { // Changed 'users' to 'users.entries()' to iterate through key-value pairs
  console.log(`사용자 이름:${username}`);
}
const usernames = new Set(); // Changed 'const username' to 'const usernames' to avoid naming conflict
usernames.add("user1");
usernames.add("user2");
for (const username of usernames) { // Changed 'usernames' to 'username' to avoid naming conflict
  console.log(`사용자 이름:${username}`);
}