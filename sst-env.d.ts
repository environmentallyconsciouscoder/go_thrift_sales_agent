/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "Api": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
    "Frontend": {
      "type": "sst.aws.StaticSite"
      "url": string
    }
    "OpenAiKey": {
      "type": "sst.sst.Secret"
      "value": string
    }
  }
}
export {}
