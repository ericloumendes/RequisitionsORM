import { Router } from "express";
import { historicoController } from "../controllers/historicoController";

const router = Router();

router.get('/', historicoController.show)

router.post('/', historicoController.save)

export default router;