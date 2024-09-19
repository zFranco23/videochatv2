import { type SignalData } from "simple-peer";

export interface CallDetail {
  signal?: string | SignalData;
  from: string;
  name: string;
}
