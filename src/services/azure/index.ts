export { iotHubService } from './iotHub';
export { azureMLService } from './machineLearning';
export { mlFlowService } from './mlFlow';
export { blobStorageService } from './blobStorage';
export { azureAISearchService } from './aiSearch';
export { azureOpenAIService } from './openAI';

// Mock API endpoint to connect Azure App Service to Azure Machine Learning
export const MODEL_INTERFACE_API = 'https://bio-genius-ml.azurewebsites.net/api/v1/score';
