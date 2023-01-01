import { Request, Response, NextFunction } from 'express'
import {
  addExpense,
  deleteExpense,
  editExpense,
  getExpenses,
  getSingleExpenseById,
  IBaseExpense,
  IExpense,
} from './index'
import { asyncHandler } from '../../middlewares'
import { ErrorResponse } from '../../utils'

export const getExpensesHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const expenses = await getExpenses()

    const totalExpenses = expenses.reduce(
      (accumulatedExpenses, currentExpense) =>
        accumulatedExpenses + currentExpense.amount,
      0
    )

    return res
      .status(200)
      .json({ success: true, count: expenses.length, totalExpenses, expenses })
  }
)

export const getSingleExpenseByIdHandler = asyncHandler(
  async (
    req: Request<{ id: IExpense['_id'] }, {}, {}, {}>,
    res: Response,
    next: NextFunction
  ) => {
    const expense = await getSingleExpenseById(req.params.id)

    if (!expense) {
      return next(
        new ErrorResponse(
          `Expense with the id of ${req.params.id} not found`,
          404
        )
      )
    }

    return res.status(200).json({ success: true, expense })
  }
)

export const addExpenseHandler = asyncHandler(
  async (
    req: Request<{}, {}, IBaseExpense, {}>,
    res: Response,
    next: NextFunction
  ) => {
    const expense = await addExpense(req.body)

    return res.status(201).json({ success: true, expense })
  }
)

export const editExpenseHandler = asyncHandler(
  async (
    req: Request<{ id: IExpense['_id'] }, {}, IExpense, {}>,
    res: Response,
    next: NextFunction
  ) => {
    const expense = await editExpense(req.params.id, req.body)

    if (!expense) {
      return next(
        new ErrorResponse(
          `Expense with the id of ${req.params.id} not found`,
          404
        )
      )
    }

    return res.status(200).json({ success: true, expense })
  }
)

export const deleteExpenseHandler = asyncHandler(
  async (
    req: Request<{ id: IExpense['_id'] }, {}, {}, {}>,
    res: Response,
    next: NextFunction
  ) => {
    const expense = await deleteExpense(req.params.id)

    if (!expense) {
      return next(
        new ErrorResponse(
          `Expense with the id of ${req.params.id} not found`,
          404
        )
      )
    }

    res.status(200).json({ success: true, expense })
  }
)
