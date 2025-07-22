declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL: string;
      EMAIL_PASSWORD: string;
    }
  }
}

export {};
