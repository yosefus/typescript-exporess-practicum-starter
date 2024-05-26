import { Schema, model, Document, Types } from 'mongoose';

export interface IMedia {
  type: string;
  content: string;
}

export interface ICard {
  day: number;
  type: string;
  subType: string;
  title: string;
  content: string;
  media: IMedia;
  coins: number;
}

export interface IShopItem {
  name: string;
  description: string;
  image: string;
  coins: number;
  endDate: Date;
  functionality: string;
}

export interface IChallenge extends Document {
  name: string;
  startDate: Date;
  endDate: Date;
  coverImage: string;
  duration: number; // Duration in days
  tags: string[];
  isTemplate: boolean;
  creator?: string; // Relevant if isTemplate is true
  shop: IShopItem[];
  cards: ICard[];
}

export interface IShopItem {
  name: string;
  description: string;
  image: string;
  coins: number;
  endDate: Date;
  functionality: string;
}

const mediaSchema = new Schema<IMedia>({
  type: { type: String, required: true },
  content: { type: String, required: true },
});

const cardSchema = new Schema<ICard>({
  day: { type: Number, required: true },
  type: { type: String, required: true },
  subType: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  media: { type: mediaSchema },
  coins: { type: Number, required: true },
});

const shopItemSchema = new Schema<IShopItem>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  coins: { type: Number, required: true },
  endDate: { type: Date, required: true },
  functionality: { type: String, required: true },
});

const challengeSchema = new Schema<IChallenge>(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    coverImage: { type: String, required: true },
    duration: { type: Number }, // Duration in days
    tags: { type: [String], required: true },
    isTemplate: { type: Boolean, default: false },
    creator: { type: Types.ObjectId, ref: 'User' }, // Only relevant if isTemplate is true
    shop: { type: [shopItemSchema], required: true },
    cards: { type: [cardSchema], required: true },
  },
  {
    timestamps: true,
  },
);

const Challenge = model<IChallenge>('Challenge', challengeSchema);

export default Challenge;
