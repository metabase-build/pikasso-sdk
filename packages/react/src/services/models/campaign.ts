import { fetcher } from '@/utils/fetcher';
import { getEndpoint } from '@/utils/url-builder';
import { endpoints } from '@/services/endpoints';
import { Campaign, Meta, Nft, RootResponse } from '@/services/types';
import { getEnvironmentOpenApiUrls } from '@pikasso-sdk/core';

export interface CampaignInfoResponse extends RootResponse<Campaign> {}
export interface NftsByCampaignResponse
  extends RootResponse<{
    meta: Meta;
    nfts: Array<Nft>;
  }> {}

export const useCampaign = (environment: string) => {
  const openApiBaseUrl = getEnvironmentOpenApiUrls(environment);

  const getCampaignInfo = (campaignId: string) => {
    return fetcher<CampaignInfoResponse>(openApiBaseUrl + getEndpoint(endpoints.campaigns.campaign, { campaignId }));
  };
  const getNftsByCampaign = (campaignId: string) => {
    return fetcher<NftsByCampaignResponse>(openApiBaseUrl + getEndpoint(endpoints.campaigns.nfts, { campaignId }));
  };
  return {
    getCampaignInfo,
    getNftsByCampaign,
  };
};
