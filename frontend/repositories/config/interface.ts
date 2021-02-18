import { ConfigItem, ConfigItemList, Parameters } from '@/models/config/config-item-list'

export interface ConfigTestResponse {
  valid: boolean,
  labels: object[]
}

export interface ConfigItemListRepository {
  list(projectId: string): Promise<ConfigItemList>

  create(projectId: string, item: ConfigItem): Promise<ConfigItem>

  delete(projectId: string, itemId: number): Promise<void>

  update(projectId: string, item: ConfigItem): Promise<ConfigItem>

  testConfig(projectId: string, item: ConfigItem, text: string): Promise<ConfigTestResponse>

  testParameters(modelName: string, parameters: Parameters, text: string): Promise<ConfigTestResponse>

  testTemplate(projectId: string, response: any, template: string): Promise<ConfigTestResponse>

  testMapping(projectId: string, item: ConfigItem, response: any): Promise<ConfigTestResponse>
}
