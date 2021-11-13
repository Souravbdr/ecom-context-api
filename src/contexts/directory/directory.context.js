import { createContext } from "react";
import INITIAL_STATE from './directory.data';

const DirectoryContext =createContext(INITIAL_STATE);
export default DirectoryContext;