import { Router } from "express";
import { produtoController } from "../controllers/produtoController";

const router = Router();

router.get('/', produtoController.show)

router.post('/', produtoController.save)

router.put('/:id', produtoController.update)

router.put('/status/:id', produtoController.changeStatus)

export default router;