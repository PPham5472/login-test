import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        define: {
            "process.env.ENVIRONMENT": JSON.stringify(env.ENVIRONMENT),
        },
        plugins: [react()],
    };
});
