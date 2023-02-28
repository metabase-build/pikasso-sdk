import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import useEnvironment from '@/hooks/use-environment';
import { Campaign, Nft } from '@/services/types';
import { useCampaign } from '@/services/models/campaign';
import { CampaignBanner } from '@/components/molecules/campaign-banner';
import { NftCardNft } from '@/components/molecules/nft-card';

export type PikassoWidgetCampaignProps = React.HTMLAttributes<HTMLDivElement> & {
  campaignId: string;
  refId: string;
  environment: string;
  onItemClick: (nftId: string) => void;
};

export const PikassoWidgetCampaign: React.FC<PikassoWidgetCampaignProps> = ({
  campaignId,
  refId,
  environment,
  onItemClick,
  className,
  ...rest
}) => {
  const { isServerSideRendering } = useEnvironment();
  const classes = useStyles();
  const { getCampaignInfo, getNftsByCampaign } = useCampaign(environment);
  const [campaign, setCampaign] = useState<Campaign>();
  const [nfts, setNfts] = useState<Nft[]>();
  const [message, setMessage] = useState('');

  const getCampaign = useCallback(async () => {
    try {
      if (!isServerSideRendering && campaignId) {
        const responseCampaign = await getCampaignInfo(campaignId);
        const responseNfts = await getNftsByCampaign(campaignId);
        setCampaign(responseCampaign.data);
        setNfts(responseNfts.data.nfts);
      }
    } catch (error: any) {
      setMessage(error.message ?? 'Something error');
    }
  }, [campaignId, isServerSideRendering]);

  useEffect(() => {
    getCampaign();
  }, [getCampaign]);

  if (!(campaign && !isServerSideRendering)) {
    return <div style={{ textAlign: 'center' }}>{message}</div>;
  }

  return (
    <React.Fragment>
      {!isServerSideRendering && campaignId && (
        <div {...rest} className={`${classes.container} ${className}`}>
          <CampaignBanner campaign={campaign} />
          <div className={classes.listNft}>
            {nfts &&
              nfts.map((nft) => (
                <NftCardNft key={nft.id} onClick={onItemClick ? () => onItemClick(nft.nftId) : () => {}} nft={nft} />
              ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const useStyles = createUseStyles({
  container: {
    width: '100%',
    background: '#ffffff',
  },
  listNft: { marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '12px', padding: '24px' },
});
