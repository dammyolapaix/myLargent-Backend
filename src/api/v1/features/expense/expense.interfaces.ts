import { Types } from 'mongoose'

export interface IBaseExpense {
  amount: number
  description?: string
  date: Date
}

export default interface IExpense extends IBaseExpense {
  _id: Types.ObjectId
}
