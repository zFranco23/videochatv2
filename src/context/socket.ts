import {
  createContext,
  Dispatch,
  LegacyRef,
  SetStateAction,
  useContext,
} from "react";

interface SocketState {
  socket?: any;
  selfVideoRef: LegacyRef<HTMLVideoElement | null>;
}

interface SocketActions {
  socket: Dispatch<SetStateAction<any>>;
}

type SocketContextState = SocketState & SocketActions;

export const SocketContext = createContext<SocketContextState | null>(null);

export const useSocketContext = () => {
  const currentUserContext = useContext(SocketContext);

  if (!currentUserContext) {
    throw new Error(
      "useSocketContext has to be used within CurrentUserContext.Provider"
    );
  }

  return currentUserContext;
};
