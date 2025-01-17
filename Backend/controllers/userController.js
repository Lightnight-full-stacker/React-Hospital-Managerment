const User = require('../models/userModel');

const userController = {
    login: async (req, res) => {
        const { username, password } = req.body;
        console.log(username);

        try {
            const user = await User.findByUsername(username);
            if (user && user.password === password) { // Replace with hashed password check in production
                return res.status(200).json({ message: 'Login successful!' });
            } else {
                return res.status(401).json({ message: 'Invalid credentials!' });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    // Add more user-related controllers as needed
};

module.exports = userController;