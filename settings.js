
const bcrypt = require("bcryptjs");

const username = process.env.NODE_RED_USERNAME;
const password = process.env.NODE_RED_PASSWORD;
const credentialSecret = process.env.NODE_RED_CREDENTIAL_SECRET;

if (!username || !password || !credentialSecret) {
    throw new Error("Node-RED security environment variables are missing");
}

module.exports = {
    uiPort: Number(process.env.PORT || 10000),

    adminAuth: {
        type: "credentials",
        users: [{
            username: username,
            password: bcrypt.hashSync(password, 8),
            permissions: "*"
        }]
    },

    credentialSecret: credentialSecret
};
