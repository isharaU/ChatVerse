const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please enter all fields');
    }

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Create a new user
    const user = await User.create({
        name,
        email,
        password, // Ensure password handling is secure in your User model
        pic,
    });

    // Respond with success or error
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: null, // Placeholder for token if you're planning to add it later
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

module.exports = { registerUser };
