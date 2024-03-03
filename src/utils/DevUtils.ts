import {createServer} from "vite"
import vue from '@vitejs/plugin-vue'
export const startingDevServer = async (): Promise<number> => {
    const server = await createServer({root: "./src/vue", plugins: [vue()], server: {host: "0.0.0.0"}});
    await server.listen();
    return server.config.server.port ? server.config.server.port : -1;
}