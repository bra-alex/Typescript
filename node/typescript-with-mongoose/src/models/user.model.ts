import bcrypt from 'bcrypt'
import config from 'config'
import mongoose from 'mongoose'

export interface UserInput {
  name: string
  email: string
  password: string
}
export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date
  updatedAt: Date
  comparePassword(password: string): Promise<boolean>
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  const user = this as UserDocument
  if (!user.isModified('password')) {
    return next()
  }

  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'))
  const hash = await bcrypt.hash(user.password, salt)
  user.password = hash

  return next()
})

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  const user = this as UserDocument

  return bcrypt.compare(password, user.password).catch(() => false)
}

const UserModel = mongoose.model<UserDocument>('User', userSchema)
export default UserModel
