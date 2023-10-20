function appel() {
  return "apple";
}

async function food() {
  let data = await appel();
  console.log(`Pretty double doors open onto a garden with an ${data} tree.`);
}

food();
console.log("Line No One");
console.log("Line No Two");
console.log("Line No Three");
