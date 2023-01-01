import { Schema, model } from 'mongoose'
import { IExpense } from './index'

const ExpenseSchema = new Schema<IExpense>(
  {
    amount: {
      type: Number,
      required: [true, 'The amount is required'],
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      default: () => Date.now(),
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const Expense = model<IExpense>('Expense', ExpenseSchema)

export default Expense
