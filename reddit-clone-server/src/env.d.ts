declare namespace NodeJS {
  export interface ProcessEnv {
    DB_URL: string;
    SESSION_SECRET: string;
    NODEMAILER_USER: string;
    NODEMAILER_PASS: string;
    REDIS_URL: string;
    PORT: string;
    CORS_ORIGIN: string;
  }
}
