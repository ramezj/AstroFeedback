import express from "express"
const router = express.Router();
import { auth } from "../lib/lucia.js"

router.get('/test', async(req, res) => {
    const username = "test"
    const password = "testpassword"
    try {
        const user = await auth.createUser({
            Key: {
                providerId: "username",
                providerUserId: username,
                password
            },
            attributes: {
                username
            }
        });
        const session = await auth.createSession(user.userId);
        console.log(session);
        return res.status(200).json({
            ok:true,
            user: user
        })
    } catch (error) {
        console.error(error);
        res.json(error);
    }
})

export { router }