import mongoose, { Schema, Document } from 'mongoose';

export interface User {
   name: string;
   email: string;
   isActive: boolean;
   createdAt: Date;
   updatedAt: Date;
}

export interface IUser extends Document, User { }

const UserSchema: Schema = new Schema(
   {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      isActive: { type: Boolean, default: true },
   },
   {
      timestamps: true
   }
);

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;