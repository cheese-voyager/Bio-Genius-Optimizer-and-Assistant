// Mock implementation for ML Flow
export class MLFlowService {
  private trackingUri: string;

  constructor() {
    this.trackingUri = process.env.MLFLOW_TRACKING_URI || '';
    if (this.trackingUri) {
      console.log(`[ML Flow] Tracking URI configured via Azure ML workspace.`);
    }
  }

  logExperiment(experimentName: string) {
    console.log(`[ML Flow] Registered active experiment: ${experimentName}`);
  }

  logMetric(key: string, value: number) {
    console.log(`[ML Flow] Saved metric - ${key}: ${value}`);
  }
}

export const mlFlowService = new MLFlowService();
