import { createContext } from 'react';

export const FullScreenContext = createContext({
    fullScreenWindows: [],
    setFullScreenWindows: () => { }
});
