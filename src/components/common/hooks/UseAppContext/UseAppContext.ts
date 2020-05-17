import { useContext } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';

const useAppContext = () => useContext(AppContext);

export { useAppContext };
