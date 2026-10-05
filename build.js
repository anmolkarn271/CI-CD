const fs = require("fs");

fs.writeFileSync(
    "build-output.txt",
    "Application build completed successfully."
);

console.log("Build completed successfully.");
