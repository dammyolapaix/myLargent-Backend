import express from 'express'
import {
  addExpenseHandler,
  deleteExpenseHandler,
  editExpenseHandler,
  getExpensesHandler,
  getSingleExpenseByIdHandler,
} from './index'

const router = express.Router()

router.route('/').get(getExpensesHandler).post(addExpenseHandler)

router
  .route('/:id')
  .get(getSingleExpenseByIdHandler)
  .patch(editExpenseHandler)
  .delete(deleteExpenseHandler)

export default router
