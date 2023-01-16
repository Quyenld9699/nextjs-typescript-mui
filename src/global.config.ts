import { ReactNode } from 'react';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_SITE_URL: string;
            NEXT_PUBLIC_SITE_NAME: string;
        }
    }
}
export interface BaseContextProps {
    children: ReactNode;
}
