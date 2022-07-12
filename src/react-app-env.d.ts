/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_GOOGLE_SHEETS_ID: string;
    REACT_APP_GOOGLE_API_KEY: string;
  }
}