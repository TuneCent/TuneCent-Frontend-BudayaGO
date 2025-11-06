/**
 * LocalStorage utilities for TuneCent Indonesia
 * Handles saving/loading user-created music and campaigns
 */

export interface LocalMusicData {
  id: string;
  title: string;
  artist: string;
  genre: string;
  description: string;
  duration: number;
  coverImageUrl: string;
  audioFileUrl: string;
  creatorAddress: string;
  tokenId?: string;
  txHash?: string;
  createdAt: string;
  fingerprint?: string;
}

export interface LocalCampaignData {
  id: string;
  musicTokenId: string;
  musicTitle: string;
  goal: string; // in ETH
  royaltyPercentage: number;
  deadline: string; // ISO date string
  lockupPeriod: number; // in days
  currentAmount: string; // in ETH
  backers: number;
  creatorAddress: string;
  description: string;
  createdAt: string;
  status: 'active' | 'successful' | 'failed' | 'cancelled';
  campaignId?: string;
  txHash?: string;
}

const MUSIC_STORAGE_KEY = 'tunecent_user_music';
const CAMPAIGN_STORAGE_KEY = 'tunecent_user_campaigns';

// ============= MUSIC FUNCTIONS =============

/**
 * Save music to localStorage
 */
export const saveMusic = (music: LocalMusicData): void => {
  try {
    const existing = getLocalMusic();
    const updated = [music, ...existing];
    localStorage.setItem(MUSIC_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving music to localStorage:', error);
  }
};

/**
 * Get all music from localStorage
 */
export const getLocalMusic = (): LocalMusicData[] => {
  try {
    const data = localStorage.getItem(MUSIC_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting music from localStorage:', error);
    return [];
  }
};

/**
 * Get single music by ID
 */
export const getMusicById = (id: string): LocalMusicData | null => {
  const allMusic = getLocalMusic();
  return allMusic.find(music => music.id === id) || null;
};

/**
 * Update music in localStorage
 */
export const updateMusic = (id: string, updates: Partial<LocalMusicData>): void => {
  try {
    const existing = getLocalMusic();
    const updated = existing.map(music =>
      music.id === id ? { ...music, ...updates } : music
    );
    localStorage.setItem(MUSIC_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error updating music in localStorage:', error);
  }
};

/**
 * Delete music from localStorage
 */
export const deleteMusic = (id: string): void => {
  try {
    const existing = getLocalMusic();
    const filtered = existing.filter(music => music.id !== id);
    localStorage.setItem(MUSIC_STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error deleting music from localStorage:', error);
  }
};

/**
 * Get music by creator address
 */
export const getMusicByCreator = (address: string): LocalMusicData[] => {
  const allMusic = getLocalMusic();
  return allMusic.filter(music =>
    music.creatorAddress.toLowerCase() === address.toLowerCase()
  );
};

// ============= CAMPAIGN FUNCTIONS =============

/**
 * Save campaign to localStorage
 */
export const saveCampaign = (campaign: LocalCampaignData): void => {
  try {
    const existing = getLocalCampaigns();
    const updated = [campaign, ...existing];
    localStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving campaign to localStorage:', error);
  }
};

/**
 * Get all campaigns from localStorage
 */
export const getLocalCampaigns = (): LocalCampaignData[] => {
  try {
    const data = localStorage.getItem(CAMPAIGN_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting campaigns from localStorage:', error);
    return [];
  }
};

/**
 * Get single campaign by ID
 */
export const getCampaignById = (id: string): LocalCampaignData | null => {
  const allCampaigns = getLocalCampaigns();
  return allCampaigns.find(campaign => campaign.id === id) || null;
};

/**
 * Get campaigns by music token ID
 */
export const getCampaignsByMusic = (musicTokenId: string): LocalCampaignData[] => {
  const allCampaigns = getLocalCampaigns();
  return allCampaigns.filter(campaign => campaign.musicTokenId === musicTokenId);
};

/**
 * Update campaign in localStorage
 */
export const updateCampaign = (id: string, updates: Partial<LocalCampaignData>): void => {
  try {
    const existing = getLocalCampaigns();
    const updated = existing.map(campaign =>
      campaign.id === id ? { ...campaign, ...updates } : campaign
    );
    localStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error updating campaign in localStorage:', error);
  }
};

/**
 * Add contribution to campaign
 */
export const addContributionToCampaign = (
  campaignId: string,
  amount: string
): void => {
  try {
    const campaign = getCampaignById(campaignId);
    if (campaign) {
      const currentAmount = parseFloat(campaign.currentAmount);
      const contributionAmount = parseFloat(amount);
      const newAmount = (currentAmount + contributionAmount).toString();

      updateCampaign(campaignId, {
        currentAmount: newAmount,
        backers: campaign.backers + 1,
      });
    }
  } catch (error) {
    console.error('Error adding contribution to campaign:', error);
  }
};

/**
 * Delete campaign from localStorage
 */
export const deleteCampaign = (id: string): void => {
  try {
    const existing = getLocalCampaigns();
    const filtered = existing.filter(campaign => campaign.id !== id);
    localStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error deleting campaign from localStorage:', error);
  }
};

/**
 * Get campaigns by creator address
 */
export const getCampaignsByCreator = (address: string): LocalCampaignData[] => {
  const allCampaigns = getLocalCampaigns();
  return allCampaigns.filter(campaign =>
    campaign.creatorAddress.toLowerCase() === address.toLowerCase()
  );
};

/**
 * Get active campaigns
 */
export const getActiveCampaigns = (): LocalCampaignData[] => {
  const allCampaigns = getLocalCampaigns();
  return allCampaigns.filter(campaign => campaign.status === 'active');
};

// ============= UTILITY FUNCTIONS =============

/**
 * Generate unique ID for local data
 */
export const generateId = (): string => {
  return `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Clear all local data (for testing)
 */
export const clearAllLocalData = (): void => {
  try {
    localStorage.removeItem(MUSIC_STORAGE_KEY);
    localStorage.removeItem(CAMPAIGN_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing local data:', error);
  }
};

/**
 * Get storage statistics
 */
export const getStorageStats = () => {
  return {
    totalMusic: getLocalMusic().length,
    totalCampaigns: getLocalCampaigns().length,
    activeCampaigns: getActiveCampaigns().length,
  };
};
