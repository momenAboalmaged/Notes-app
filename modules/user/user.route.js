import { Router } from "express";
import {userModel} from '../../DB/models/user.model.js'
import { auth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import {changePassword, deleteUser, getAllUsers, getSpecificUser } from "./controller/user.controller.js";
import { changePasswordSchema, deleteUserSchema, getAllUsersSchema, getSpecificUserSchema } from "./user.validation.js";

const router=Router();



router.patch("/changePassword",auth(),validation(changePasswordSchema),changePassword)
router.delete("/deleteUser",auth(),validation(deleteUserSchema),deleteUser)
router.get('/getAllUsers',auth(),validation(getAllUsersSchema),getAllUsers)

router.get('/getSpecificUser',auth(),validation(getSpecificUserSchema),getSpecificUser)

export default router;