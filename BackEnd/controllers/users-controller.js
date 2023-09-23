const Users = require("../model/Users");

const getallUsers = async (req, res, next) => {
    let users;
    try {
        users = await Users.find();
    }
    catch (err) {
        npm
        console.log(err);
    }
    return res.status(200).json(users);

};

// const getUser = async (req, res, next) => {
//     const email = req.params.id;
//     let user;
//     try {
//         user = await Users.find({ "email": email });
//     } catch (err) {
//         console.log(err);
//     }

//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     return res.status(200).json({ user });

// };

const login = async (req, res, next) => {
    const { name, email, password, isAdmin } = req.body;
    let user;
    try {
        user = await Users.find({
            $and: [
                {'email': email},
                {'password': password},
                {"isAdmin" : isAdmin}
            ]
        })
       if (user)
        return res.status(200).json({ message: "login successful" });
    } catch (err) {
        console.log(err);
    }

if(!user)
    return res.status(201).json({ message: "Login failed." });
};

const addUser = async (req, res, next) => {
    const { name, email, password, isAdmin } = req.body;
    let user;
    try {
        user = await Users.find({ "email": email });
    } catch (err) {
        console.log(err);
    }
    if (!user)
     {


        try {
            user = new Users({
                name,
                email,
                password,
                isAdmin,
            });
            await user.save();
        } catch (err) {
            console.log(err);
        }

        if (!user) {
            return res.status(500).json({ message: "Unable to register user." });
        } else {

            return res.status(200).json({ message: "registered successfully." });
        }
    }

    return res.status(201).json({ message: "email already registered." });
};


//exports.getUser = getUser;
exports.login = login;
exports.addUser = addUser;
exports.getallUsers = getallUsers;