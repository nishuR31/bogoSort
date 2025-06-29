import { exec } from "child_process";
import os from "os";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

async function shutdown() {
  const system = os.platform(); // 'win32', 'linux', 'darwin'

  const confirm = await rl.question("Are you sure you want to shut down the system? (yes/no): ");
  rl.close();

  if (confirm.toLowerCase() !== "yes") {
    console.log("Shutdown canceled.");
    return;
  }

  if (system === "win32") {
    exec("shutdown /s /t 0", (err) => {
      if (err) return console.error("Failed to shutdown Windows:", err);
    });
  } else if (system === "linux" || system === "darwin") {
    exec("sudo shutdown now", (err) => {
      if (err) return console.error("Failed to shutdown Unix-like system:", err);
    });
  } else {
    console.log("Unsupported OS:", system);
  }
}

shutdown();
