import mongoose from 'mongoose' 
import dotenv from 'dotenv';

dotenv.config()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('[database] Connection with MongoDB');
}
export default main