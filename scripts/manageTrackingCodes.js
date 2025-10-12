// Script to manage your tracking codes
// Run with: node scripts/manageTrackingCodes.js

import { generateTrackingCodes } from "../utils/trackingGenerator.js";

// Your assigned tracking codes (update this as you assign them)
// prettier-ignore
const assignedCodes = {
  "D85ED15425EA2011": { location: "Bali" },
  "4A0A54932D25D459": { location: "Amsterdam" },
  "FA1D08C4C8BD9593": { location: "Berlin" },
  "AC76B4D34085A8E6": { location: "Barcelona" },
  "F5F3F414727071CF": { location: "Bangkok" },
  "C62AF2D53B7BF424": { location: "Lisbon" },
  "A98E5A54E9CDBF9F": { location: "NYC" },
  "9B7C438F67D484A6": { location: "Los Angeles" },
  "E43B66A1B4841F2E": { location: "San Francisco" },
  "5A42131A8D834F87": { location: "Sydney" },
  "34B81C46E7619EB4": { location: "Tokyo" },
  "0B1AFF4BA568329C": { location: "Toronto" },
  "0B833248CB33B90A": { location: "Vancouver" },
  "B80D31A5A07A38BE": { location: "Sao Paolo" },
  "93A2EA2D5C072CD3": { location: "Medellin" },
  "D2177FED9C67B4D3": { location: "Buenos Aires" },
  "E8900D9C251BE9A1": { location: "Lima" },
  "738A7D35C091A88D": { location: "Santiago" },
  "D146E91B0D89587E": { location: "Rio de Janeiro" },
  "668B9DFE83F421CA": { location: "Singapore" },
  "EDA644A068CC848A": { location: "Seoul" },
  "4448DAE0301855EC": { location: "London" },
  "86EEEEE3544D1AC7": { location: "Madrid" },
  "276EF6536DDC7096": { location: "WhatsApp Group 24" },
  "1854161D6782FCF3": { location: "WhatsApp Group 25" },
};

function generateNewCodes(count = 20) {
  console.log(`\n🔄 Generating ${count} new tracking codes...\n`);

  const codes = generateTrackingCodes(count);

  console.log("📋 New Tracking Codes:");
  console.log("=====================");
  codes.forEach((item, index) => {
    console.log(`${String(index + 1).padStart(2, "0")}. ${item.code}`);
  });

  console.log("\n📝 Usage Examples:");
  console.log("==================");
  codes.slice(0, 3).forEach((code) => {
    console.log(`https://www.gobook.space/?ref=${code.code}`);
  });

  return codes;
}

function showAssignedCodes() {
  console.log("\n📊 Currently Assigned Codes:");
  console.log("============================");

  if (Object.keys(assignedCodes).length === 0) {
    console.log("No codes assigned yet.");
    return;
  }

  Object.entries(assignedCodes).forEach(([code, info], index) => {
    console.log(`${String(index + 1).padStart(2, "0")}. ${code}`);
    console.log(`    Location: ${info.location}`);
    console.log(`    Notes: ${info.notes}`);
    console.log("");
  });
}

function showAnalytics() {
  console.log("\n📈 To view analytics, visit:");
  console.log("============================");
  console.log("https://www.gobook.space/api/analytics");
  console.log("\nThis will show you:");
  console.log("- Submissions per tracking code");
  console.log("- Total submissions");
  console.log("- Recent activity");
  console.log("- Daily trends");
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const command = process.argv[2];

  switch (command) {
    case "generate":
      const count = parseInt(process.argv[3]) || 20;
      generateNewCodes(count);
      break;
    case "assigned":
      showAssignedCodes();
      break;
    case "analytics":
      showAnalytics();
      break;
    default:
      console.log("📋 Tracking Code Manager");
      console.log("========================");
      console.log("");
      console.log("Usage:");
      console.log(
        "  node scripts/manageTrackingCodes.js generate [count]  - Generate new codes"
      );
      console.log(
        "  node scripts/manageTrackingCodes.js assigned         - Show assigned codes"
      );
      console.log(
        "  node scripts/manageTrackingCodes.js analytics        - Show analytics info"
      );
      console.log("");
      console.log("Examples:");
      console.log("  node scripts/manageTrackingCodes.js generate 50");
      console.log("  node scripts/manageTrackingCodes.js assigned");
  }
}

export { generateNewCodes, showAssignedCodes, showAnalytics };
