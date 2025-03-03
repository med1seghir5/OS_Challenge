import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FolderPath = path.join(__dirname, "test-folder");
const OSInfo = path.join(FolderPath, "info.txt");
const RenamedFile = path.join(FolderPath, 'system-info.txt');

if (!fs.existsSync(FolderPath)) {
    fs.mkdirSync(FolderPath);
}

const OsInfo = `OS: ${os.type()}\nArchitecture: ${os.arch()}\nHome Directory: ${os.homedir()}`;

fs.writeFileSync(OSInfo, OsInfo);
console.log("File created:" + OSInfo);

const Content = fs.readFileSync(OSInfo, "utf8");
console.log("File Content:\n " + Content);

fs.renameSync(OSInfo, RenamedFile);
console.log("File renamed to: " + RenamedFile);

setTimeout(() => {
    fs.unlinkSync(RenamedFile);
    console.log("File Deleted: " + RenamedFile);
}, 5000);

setInterval(() => {
    console.log("Monitoring system...");
}, 10000);
