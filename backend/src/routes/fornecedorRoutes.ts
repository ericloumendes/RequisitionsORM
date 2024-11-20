import { Router } from "express";
import { fornecedorController } from "../controllers/fornecedorController";

const router = Router();

router.get('/', fornecedorController.show)

router.post('/', fornecedorController.save)

router.put('/:id', fornecedorController.update)

router.put('/status/:id', fornecedorController.changeStatus)

export default router;