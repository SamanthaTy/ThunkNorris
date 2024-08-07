import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./index";

// Use throughout your app instead of plain `useSelector`
//Typage dynamique de notre custom hook pour ne pas à rappeler nos types à chaque fois qu'on utilise useSelector ou useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
