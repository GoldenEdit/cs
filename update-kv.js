const fs = require('fs');
const path = require('path');
const axios = require('axios');

const directories = [
  'assets/qp/paper1', 'assets/qp/paper2', 'assets/qp/paper3', 'assets/qp/paper4',
  'assets/ms/paper1', 'assets/ms/paper2', 'assets/ms/paper3', 'assets/ms/paper4'
];

async function generateDirectoryListing() {
  let directoryContents = {};

  directories.forEach(dir => {
    const fullPath = path.join(__dirname, dir);
    directoryContents[dir] = fs.readdirSync(fullPath).filter(file => file.endsWith('.pdf'));
  });

  return directoryContents;
}

async function uploadDirectoryContents(contents) {
  const url = process.env.CF_WORKER_URL;
  const authToken = process.env.CF_AUTH_TOKEN;

  try {
    const response = await axios.post(url, contents, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Upload successful:', response.data);
  } catch (error) {
    console.error('Failed to upload:', error.response ? error.response.data : error.message);
  }
}

generateDirectoryListing().then(uploadDirectoryContents);
