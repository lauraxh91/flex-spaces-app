// Utility to generate and manage tracking codes
// Run this script to generate your tracking codes

import crypto from "crypto";

// Generate a random tracking code
function generateTrackingCode() {
  return crypto.randomBytes(8).toString("hex").toUpperCase();
}

// Generate multiple tracking codes
function generateTrackingCodes(count = 50) {
  const codes = [];
  for (let i = 0; i < count; i++) {
    codes.push({
      code: generateTrackingCode(),
      id: i + 1,
      assigned: false,
      location: "",
      notes: "",
    });
  }
  return codes;
}

// Example usage - generate 50 tracking codes
if (import.meta.url === `file://${process.argv[1]}`) {
  const codes = generateTrackingCodes(50);

  console.log("Generated 50 tracking codes:");
  console.log("============================");
  codes.forEach((item, index) => {
    console.log(`${index + 1}. ${item.code}`);
  });

  console.log("\nCopy these codes and assign them to your locations:");
  console.log("Example URLs:");
  console.log("https://gobook.space/?ref=ABC123DEF4567890");
  console.log("https://gobook.space/?ref=XYZ789GHI0123456");
}

export { generateTrackingCode, generateTrackingCodes };
