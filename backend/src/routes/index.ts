import { Router } from 'express';
import produtoRoutes from "./produtoRoutes";
import fornecedorRoutes from './fornecedorRoutes'
import historicoRoutes from './historicoRoutes'

const router = Router();

router.use('/produto', produtoRoutes)

router.use('/fornecedor', fornecedorRoutes)

router.use('/historico-compras', historicoRoutes)

export default router;