import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { MetaAdsConnector } from './meta-ads.connector';
import { SyncMetadata } from './base.connector';

describe('MetaAdsConnector', () => {
  let connector: MetaAdsConnector;

  beforeEach(() => {
    connector = new MetaAdsConnector();
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('basic properties', () => {
    it('should have the correct connectorId', () => {
      expect(connector.connectorId).toBe('meta_ads');
    });

    it('should have the correct version', () => {
      expect(connector.version).toBe('2024-01');
    });

    it('should have the correct displayName', () => {
      expect(connector.displayName).toBe('Meta Ads');
    });
  });

  describe('dummy methods', () => {
    it('fetchOrders should return an empty array', async () => {
      const orders = await connector.fetchOrders('merchant-123');
      expect(orders).toEqual([]);
    });

    it('fetchInventory should return an empty array', async () => {
      const inventory = await connector.fetchInventory('merchant-123');
      expect(inventory).toEqual([]);
    });
  });

  describe('fetchCampaigns', () => {
    it('should fetch campaigns successfully', async () => {
      const mockCampaignData = [{ id: 'campaign-1', name: 'Test Campaign' }];
      (global.fetch as any).mockResolvedValueOnce({
        json: () => Promise.resolve({ data: mockCampaignData }),
      });

      const campaigns = await connector.fetchCampaigns('merchant-123');

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/mock/meta/campaigns?merchantId=merchant-123')
      );
      expect(campaigns).toEqual(mockCampaignData);
    });

    it('should return empty array if data is missing', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        json: () => Promise.resolve({}),
      });

      const campaigns = await connector.fetchCampaigns('merchant-123');

      expect(campaigns).toEqual([]);
    });
  });

  describe('normalize', () => {
    const mockMetadata: SyncMetadata = {
      merchantId: 'merchant-123',
      connectorType: 'meta_ads',
      syncedAt: new Date('2024-01-01T00:00:00Z'),
      connectorVersion: '2024-01',
    };

    it('should normalize standard fields', () => {
      const rawData = {
        sourceId: '123',
        name: 'Standard Campaign',
        status: 'ACTIVE',
        channel: 'instagram',
        periodStart: '2024-01-01T00:00:00Z',
        periodEnd: '2024-01-31T23:59:59Z',
        spendAmount: 100,
        impressions: 1000,
        clicks: 50,
        conversions: 5,
        conversionValue: 500,
        roas: 5,
      };

      const normalized = connector.normalize(rawData, mockMetadata);

      expect(normalized.sourceId).toBe('123');
      expect(normalized.name).toBe('Standard Campaign');
      expect(normalized.status).toBe('active');
      expect(normalized.channel).toBe('instagram');
      expect(normalized.spendAmount).toBe(100);
      expect(normalized.impressions).toBe(1000n);
      expect(normalized.clicks).toBe(50n);
      expect(normalized.conversions).toBe(5);
      expect(normalized.conversionValue).toBe(500);
      expect(normalized.roas).toBe(5);
    });

    it('should handle meta-specific fields and defaults', () => {
      const rawData = {
        id: 'meta-123',
        campaign_name: 'Meta Campaign',
        effective_status: 'PAUSED',
        publisher_platform: 'facebook',
        date_start: '2024-02-01',
        date_stop: '2024-02-28',
        amount_spent: '200',
        purchase_roas: [{ value: '1000' }],
        actions: [{ action_type: 'purchase', value: '10' }],
      };

      const normalized = connector.normalize(rawData, mockMetadata);

      expect(normalized.sourceId).toBe('meta-123');
      expect(normalized.name).toBe('Meta Campaign');
      expect(normalized.status).toBe('paused');
      expect(normalized.channel).toBe('facebook');
      expect(normalized.spendAmount).toBe(200);
      expect(normalized.conversionValue).toBe(1000);
      expect(normalized.roas).toBe(5); // 1000 / 200
      expect(normalized.conversions).toBe(10);
      expect(normalized.impressions).toBeNull();
      expect(normalized.clicks).toBeNull();
    });

    it('should handle missing values correctly (roas with 0 spend)', () => {
       const rawData = {
        id: 'meta-456',
        amount_spent: '0',
        roas: '2.5'
      };

      const normalized = connector.normalize(rawData, mockMetadata);
      expect(normalized.spendAmount).toBe(0);
      expect(normalized.roas).toBe(2.5); // Fallback to raw roas if spend is 0
    });
  });

  describe('healthCheck', () => {
    it('should return healthy when fetch is successful', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
      });

      const health = await connector.healthCheck();

      expect(health.status).toBe('healthy');
      expect(health.message).toBe('Mock Meta Ads API reachable');
    });

    it('should return degraded when fetch fails with non-ok status', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      const health = await connector.healthCheck();

      expect(health.status).toBe('degraded');
      expect(health.message).toBe('Returned 500');
    });

    it('should return down when fetch throws an error', async () => {
      (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

      const health = await connector.healthCheck();

      expect(health.status).toBe('down');
      expect(health.message).toBe('Network error');
    });
  });
});
