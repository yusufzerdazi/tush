
resource blobStorage 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  name: 'tush'
  location: 'westeurope'
  tags: {}
  properties: {
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: true
    allowSharedKeyAccess: true
    networkAcls: {
      ipv6Rules: []
      bypass: 'AzureServices'
      virtualNetworkRules: []
      ipRules: []
      defaultAction: 'Allow'
    }
    supportsHttpsTrafficOnly: true
    encryption: {
      services: {
        file: {
          keyType: 'Account'
          enabled: true
        }
        blob: {
          keyType: 'Account'
          enabled: true
        }
      }
      keySource: 'Microsoft.Storage'
    }
    accessTier: 'Hot'
  }
}

resource cdn 'Microsoft.Cdn/profiles@2023-05-01' = {
  name: 'tush'
  location: 'SouthCentralUs'
  tags: {}
  sku: {
    name: 'Standard_Verizon'
  }
  properties: {}
}


@description('Generated from /subscriptions/4b89f88e-13f2-4990-bf5f-3ab2e4d5301f/resourceGroups/tush/providers/Microsoft.Cdn/profiles/tush/endpoints/tush')
resource endpoint 'Microsoft.Cdn/profiles/endpoints@2023-05-01' = {
  parent: cdn
  name: 'tush'
  location: 'SouthCentralUs'
  tags: {}
  properties: {
    originHostHeader: 'tush.z6.web.core.windows.net'
    contentTypesToCompress: [
      'text/plain'
      'text/html'
      'text/css'
      'text/javascript'
      'application/x-javascript'
      'application/javascript'
      'application/json'
      'application/xml'
    ]
    isCompressionEnabled: false
    isHttpAllowed: false
    isHttpsAllowed: true
    queryStringCachingBehavior: 'IgnoreQueryString'
    origins: [
      {
        name: 'tush-azurewebsites-net'
        properties: {
          hostName: 'tush.z6.web.core.windows.net'
          enabled: true
        }
      }
    ]
    originGroups: []
    geoFilters: []
    urlSigningKeys: []
  }
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: 'tush'
  location: 'westeurope'
  tags: {
    'hidden-link:/subscriptions/4b89f88e-13f2-4990-bf5f-3ab2e4d5301f/resourceGroups/tush/providers/Microsoft.Web/sites/tush': 'Resource'
  }
  kind: 'web'
  properties: {
    Application_Type: 'web'
    Request_Source: 'IbizaWebAppExtensionCreate'
    RetentionInDays: 90
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}
