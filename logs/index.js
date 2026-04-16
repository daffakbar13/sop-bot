"use strict";

const fs = require("fs");
const path = require("path");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const logFile = path.join(__dirname, "logs.csv");

// Create CSV writer (once)
const csvWriter = createCsvWriter({
  path: logFile,
  header: [
    { id: "user_id", title: "User ID" },
    { id: "username", title: "Username" },
    { id: "query", title: "Query" },
    { id: "timestamp", title: "Timestamp" },
  ],
  append: fs.existsSync(logFile),
});

// ✅ Call this function after receiving any message
async function logUserQuery(msg, query) {
  const record = {
    user_id: msg.from.id,
    username: msg.from.username || "-",
    query: query,
    timestamp: new Date().toISOString(),
  };

  await csvWriter.writeRecords([record]);
}

module.exports = logUserQuery;
