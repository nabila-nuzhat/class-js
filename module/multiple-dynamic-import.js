async function loadModules() {
  const [math, string] = await Promise.all([
    import("./math.js"),
    import("./string.js")
  ]);

  console.log(math.add(3, 4));         // 7
  console.log(string.upper("hello")); // HELLO
}

loadModules();