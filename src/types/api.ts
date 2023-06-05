export interface SpeedLimit {
  name: string;
  speedLimit: number;
}

export interface TrainInfo {
  name: string;
  description: string;
  speedLimits: SpeedLimit[];
}
