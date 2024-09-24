import { CallDetail } from "@/base/types/types";
import { createContext, LegacyRef, useContext } from "react";

interface SocketState {
  userName: string;
  receptorName: string;
  userId: string;
  selfVideoRef: LegacyRef<HTMLVideoElement | null>;
  userVideoRef: LegacyRef<HTMLVideoElement | null>;
  callDetail: CallDetail | undefined;
  isCallAccepted: boolean;
  isCallEnded: boolean;
  isEditNameModalOpen: boolean;
}

interface SocketActions {
  setUserName: (name: string) => void;
  callUser: (to: string) => void;
  answerCall: (from: string) => void;
  leaveCall: () => void;
  toggleEditNameModal: () => void;
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
