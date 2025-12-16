const User = require('../Model/userModel');
const inputValidationException = require('../exception/inputvalidationException');

const addNewUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        console.log(`User with id ${user._id} created successfully`);
        const token = await user.generateToken();
        return { user, token };
    } catch (error) {
        console.error(`Please enter a valid field. The error is: ${error.message}`);
        throw new inputValidationException(error.message);
    }
};

const loginuser = async (email, password) => {
    try {
        const user = await User.findByEmailAndPasswordForAuth(email, password);
        const token = await user.generateToken();
        console.log(`User with id ${user._id} logged in successfully`);
        return { user, token };
    } catch (error) {
        console.error(`Login failed. Error: ${error.message}`);
        throw new inputValidationException(error.message);
    }
};

module.exports = { addNewUser, loginuser };
