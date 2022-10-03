export { }

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production" | "test";
            PORT?: number;
            IP?: string;
            ALLOWED_ORIGIN?: string;
            DATABASE_URL: string,
        }
    }
}