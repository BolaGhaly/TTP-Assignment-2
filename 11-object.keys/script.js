const object2 = {
  key2: "hello world",
  key4: 42,
  key6: false,
  key8: true,
  key10: 56.21,
};

function grabKeys(object) {
  console.log("The keys in this object are:");
  for (const key in object) {
    console.log(`${key}`);
  }
}


console.log("\ngrabKeys() before adding a new key:");
grabKeys(object2);
// output:...
// The keys in this object are:
// key2
// key4
// key6
// key8
// key10

object2["key12"] = ""; //adding a new key called "key12" to object2

console.log("\ngrabKeys() after adding a new key:");
grabKeys(object2);
// output:...
// key2
// key4
// key6
// key8
// key10
// key12