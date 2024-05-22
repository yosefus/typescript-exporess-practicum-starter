import mongoose from "mongoose"


export const connectToMongo = async () => {
   const uri = process.env.MONGO_URI as string
   try {
      await mongoose.connect(uri)
      console.log('connect mongo 😃')
   } catch (error) {
      console.log('error connect mongo 😣', error)
   }
}