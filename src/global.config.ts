import { ReactNode } from 'react';

declare global {
    namespace NodeJS {
        interface ProcessEnv {}
    }
}
export interface BaseContextProps {
    children: ReactNode;
}
