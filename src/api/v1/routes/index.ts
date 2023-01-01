import express from 'express'
import { expenseRoutes } from '../features/expense'

const router = express.Router()

router.use('/api/v1/expenses', expenseRoutes)

export default router
