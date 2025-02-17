import dotenv from 'dotenv';

dotenv.config();

// _variableName represent private varibale
const _config = {
    PORT: process.env.PORT,
}

export const config = Object.freeze(_config);

