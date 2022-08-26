export interface DbClientInterface {
  getClient(): Promise<any>;

  getDbConnection(): Promise<any>;

  getModels(): any

  getUsableObject(): any
}
