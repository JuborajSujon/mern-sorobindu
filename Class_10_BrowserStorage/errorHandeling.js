let age = 30;

try {
  if (age > 20) {
    throw new Error("Age is greater than 20");
  }
} catch (err) {
  console.error(err.message);
}
