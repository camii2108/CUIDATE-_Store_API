const { generateToken } = require("../helpers/jwt.helper");
const {
    getUsers,
    //getuserbyid
    //insertuser
    updateUser,
    deleteUser,
    getUserByEmail,
} = require("../services/user.service");

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await getUsers();
            const usersResponse = users.map(({ id, name, email}) => {
                return {
                    id,
                    name,
                    email,
                    detail: `/api/users/${id}`,
                };
            });
            const RESPONSE = {
                count: users.lenght,
                users: usersResponse,
            };
            
            return res.status(200).json(RESPONSE);
        } catch (error) {
            return res.status(500).json({ Error: error });
        }
    },
    //getusersbyid
    //fin getusersbyid

    //createusers
    //fincreateusers

    login: async (req, res) => {
        try {
            const { email } = req.body;
            const user = await getUserByEmail(email);
            const token = generateToken(user);
            
            return res.status(200).json({token})
        } catch (error) {
            return res.status(500).json({ Error: "Token error " + error });
        }
    },
    updateUser: async (req, res) => {},
    deleteUser: async (req, res) => {},
};