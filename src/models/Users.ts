import mongoose from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  img?: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    
    password: {
      type: String,
      required: true,
      select: false,
    },

    first_name: {
      type: String,
      trim: true,
      required: true,
    },
    
    last_name: {
      type: String,
      trim: true,
    },
    
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

export const Users = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>('User', UserSchema);