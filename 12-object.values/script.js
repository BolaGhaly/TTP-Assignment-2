const object2 = {
  key1: "hey world",
  key2: 50,
  key3: true,
  key4: false,
  key5: 80.1241,
};

function grabValues(object) {
  for (const values in object) {
    console.log(`${object[values]}`);
  }
}

console.log("\ngrabValues() before adding a new key and value: ");
grabValues(object2);
// output:...
// hey world
// 50
// true
// false
// 80.1241

object2["key6"] = 100; //adding a new key called "key6" that has a value of 100 to object2

console.log("\ngrabValues() after adding a new key and value: ");
grabValues(object2);
// output:...
// hey world
// 50
// true
// false
// 80.1241
// 100