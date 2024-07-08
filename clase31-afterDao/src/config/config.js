//instalamos npm i dotenv 
import dotenv from "dotenv";

dotenv.config();

const config = {
    persistence: process.env.PERSISTENCE || 'memory',
    
}

export default config