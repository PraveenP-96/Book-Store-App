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

const getUserId = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await Users.findById(id);
    } catch(err) {
        console.log(err);
    }

    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    // console.log(user);
    return res.status(200).json({user});

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
    console.log("addUSer",req.body);
    
    try {
        // Check if the email already exists in the database
        const existingUser = await Users.findOne({ email });
        
        if (existingUser) {
            // If the email exists, return a 409 Conflict status
            return res.status(409).json({ message: "Email already registered." });
        }

        // If the email doesn't exist, create a new user
        const newUser = new Users({
            name,
            email,
            password,
            isAdmin,
        });

        await newUser.save();

        // Return a 200 status with a success message
        return res.status(200).json({ message: "Added user successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Unable to register user." });
    }
};



const addPastOrder = async (req, res, next) => {
    const userId = req.params.id; 
    const {pastOrders} = req.body; 
    console.log("pastOrders",pastOrders)
    try {
        // console.log("id",userId);
        const user = await Users.findById(userId);
        // console.log(user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
    
        pastOrders.forEach((order) => {
            console.log("order",order)
            user.pastOrders.push(order);
          });

        user.save();

        return res.status(200).json({ message: "Past order added successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error adding past order" });
    }
};


exports.getUserId = getUserId;
exports.login = login;
exports.addUser = addUser;
exports.getallUsers = getallUsers;
exports.addPastOrder = addPastOrder;