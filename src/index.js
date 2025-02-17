import {config} from './config/index.js';
import { app } from './app.js';





app.listen(config.PORT, () => {
    console.log(`Successfully started the server on PORT : ${config.PORT}`)
})