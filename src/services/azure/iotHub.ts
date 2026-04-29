// Mock implementation for Azure IoT Hub
export class IoTHubService {
  private connectionString: string;
  private isConnected: boolean = false;

  constructor() {
    this.connectionString = process.env.AZURE_IOT_HUB_CONNECTION_STRING || '';
    if (this.connectionString) {
      console.log('[Azure IoT Hub] Authenticated successfully with Connection String.');
      this.isConnected = true;
    } else {
      console.warn('[Azure IoT Hub] Missing connection string!');
    }
  }

  /**
   * Connects to Azure IoT Hub to retrieve sensor data (data tekanan).
   */
  async getSensorData(deviceId: string) {
    if (!this.isConnected) throw new Error('Not connected to IoT Hub');
    console.log(`[Azure IoT Hub] Fetching live telemetry for device: ${deviceId}`);
    return {
      deviceId,
      tekanan: Math.random() * 20 + 80, // Simulated normal pressure range
      timestamp: new Date().toISOString(),
      status: 'active'
    };
  }

  async sendCommand(deviceId: string, command: any) {
    if (!this.isConnected) throw new Error('Not connected to IoT Hub');
    console.log(`[Azure IoT Hub] Command dispatched to ${deviceId}:`, command);
    return { success: true, deliveredAt: new Date().toISOString() };
  }
}

export const iotHubService = new IoTHubService();
