import { IBaseExpense, IExpense, Expense } from './index'

export const getExpenses = () => {
  return Expense.find()
}

export const getSingleExpenseById = (expenseId: IExpense['_id']) => {
  return Expense.findById(expenseId)
}

export const addExpense = (expense: IBaseExpense) => {
  return Expense.create(expense)
}

export const editExpense = (
  expenseId: IExpense['_id'],
  expense: IBaseExpense
) => {
  return Expense.findByIdAndUpdate(expenseId, expense, {
    new: true,
    runValidators: true,
  })
}

export const deleteExpense = (expenseId: IExpense['_id']) => {
  return Expense.findByIdAndDelete(expenseId)
}
