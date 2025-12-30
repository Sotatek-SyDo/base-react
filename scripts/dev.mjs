import { spawnSync } from "node:child_process";

// Lấy client name từ CLI args hoặc env var
// Usage: npm run dev lifelog
// hoặc: CLIENT=lifelog npm run dev
const clientArg = process.argv[2]; // Argument từ CLI
const clientEnv = process.env.CLIENT; // Env var
const client = clientArg || clientEnv || "default";

console.log(`🚀 Starting dev server for client: ${client}`);

const res = spawnSync(
  "npx",
  ["vite"],
  {
    stdio: "inherit",
    shell: process.platform === "win32",
    env: { ...process.env, VITE_CLIENT: client }
  }
);

process.exit(res.status ?? 0);