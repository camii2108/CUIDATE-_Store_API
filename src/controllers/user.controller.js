const {
    getUsers
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
};