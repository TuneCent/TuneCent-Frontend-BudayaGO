# Implementation Guide - Complete TuneCent Indonesia for BudayaGO

## 📋 Status Saat Ini

### ✅ Completed (100%)
1. Business documentation (4 docs - 132KB)
2. Design assets (12 SVG files)
3. Nusantara CSS system (globals.css updated)
4. Nusantara UI component library (6 components)
5. LocalStorage utilities (created)
6. Landing page Hero - Indonesian + Nusantara design
7. Navbar - Indonesian + Nusantara colors

### 🔄 Partially Completed (30%)
8. LocalStorage integration - utils created, need to wire up
9. Translation - Only landing page done, need all pages
10. Nusantara design application - Only landing page, need all pages

### ❌ TODO (Prioritized)
Priority tasks to complete before BudayaGO submission

---

## 🚀 PRIORITY 1: LocalStorage Integration (Critical)

### Step 1: Update Music Creation Form

**File**: `/src/app/components/musician/CreateUploadForm.tsx` (or similar)

**What to do**:
```typescript
import { saveMusic, generateId } from '@/app/utils/localStorage';

// In your form submission handler:
const handleMusicSubmit = async (formData) => {
  const musicData = {
    id: generateId(),
    title: formData.title,
    artist: formData.artist,
    genre: formData.genre,
    description: formData.description,
    duration: formData.duration,
    coverImageUrl: formData.coverImage, // or placeholder
    audioFileUrl: formData.audioFile, // or placeholder
    creatorAddress: walletAddress,
    createdAt: new Date().toISOString(),
  };

  // Save to localStorage
  saveMusic(musicData);

  // Show success message
  alert('Musik berhasil disimpan!');

  // Optionally: Try to register on blockchain (if wallet connected)
  // ... existing blockchain code ...
};
```

---

### Step 2: Update Campaign Creation Modal

**File**: `/src/app/components/dashboard/CreateCampaignModal.tsx`

**What to do**:
```typescript
import { saveCampaign, generateId } from '@/app/utils/localStorage';

// In your campaign creation handler:
const handleCampaignSubmit = async (formData) => {
  const campaignData = {
    id: generateId(),
    musicTokenId: formData.musicId || generateId(),
    musicTitle: formData.musicTitle,
    goal: formData.goalAmount,
    royaltyPercentage: formData.royaltyPercentage,
    deadline: formData.deadline,
    lockupPeriod: formData.lockupPeriod,
    currentAmount: '0',
    backers: 0,
    creatorAddress: walletAddress,
    description: formData.description,
    createdAt: new Date().toISOString(),
    status: 'active',
  };

  // Save to localStorage
  saveCampaign(campaignData);

  // Show success message
  alert('Kampanye berhasil dibuat!');

  // Close modal
  onClose();
};
```

---

### Step 3: Update MusicPool to Show LocalStorage Data

**File**: `/src/app/components/dashboard/MusicPool.tsx`

**What to do**:
```typescript
import { getLocalMusic } from '@/app/utils/localStorage';
import { useAccount } from 'wagmi';

// Inside component:
const { address } = useAccount();
const [allMusic, setAllMusic] = useState([]);

useEffect(() => {
  const fetchMusic = async () => {
    // Get localStorage music
    const localMusic = getLocalMusic();

    // Get backend music
    const backendMusic = await listMusic();

    // Merge both (localStorage first so user sees their creations at top)
    const merged = [...localMusic, ...backendMusic];

    setAllMusic(merged);
  };

  fetchMusic();
}, []);

// Then map over allMusic to display cards
```

---

### Step 4: Update Investment Opportunities to Show LocalStorage Campaigns

**File**: `/src/app/user/invest/page.tsx` (or wherever investment opportunities are shown)

**What to do**:
```typescript
import { getLocalCampaigns, getActiveCampaigns } from '@/app/utils/localStorage';

// Inside component:
const [allCampaigns, setAllCampaigns] = useState([]);

useEffect(() => {
  const fetchCampaigns = async () => {
    // Get localStorage campaigns (active only)
    const localCampaigns = getActiveCampaigns();

    // Get backend campaigns (if you have API)
    // const backendCampaigns = await fetchCampaignsAPI();

    // Merge both
    const merged = [...localCampaigns]; // add backend if available

    setAllCampaigns(merged);
  };

  fetchCampaigns();
}, []);
```

---

## 🌍 PRIORITY 2: Full Translation to Indonesian

### Pages to Translate:

#### 1. Musician Dashboard
**File**: `/src/app/musician/dashboard/page.tsx` + related components

**Translations needed**:
```
"Dashboard" → "Dasbor"
"Total Earnings" → "Total Pendapatan"
"Active Campaigns" → "Kampanye Aktif"
"Total Streams" → "Total Streaming"
"Create Campaign" → "Buat Kampanye"
"My Music" → "Musik Saya"
"Portfolio" → "Portofolio"
"Wallet" → "Dompet"
"Settings" → "Pengaturan"
```

#### 2. Create Music Form
**File**: `/src/app/musician/create/page.tsx` or similar

**Translations**:
```
"Upload Music" → "Unggah Musik"
"Title" → "Judul"
"Artist Name" → "Nama Artis"
"Genre" → "Genre"
"Description" → "Deskripsi"
"Duration" → "Durasi"
"Cover Image" → "Gambar Cover"
"Audio File" → "File Audio"
"Submit" → "Kirim"
"Register on Blockchain" → "Daftarkan di Blockchain"
```

#### 3. Create Campaign Modal
**File**: `/src/app/components/dashboard/CreateCampaignModal.tsx`

**Translations**:
```
"Create Funding Campaign" → "Buat Kampanye Pendanaan"
"Select Music" → "Pilih Musik"
"Funding Goal (ETH)" → "Target Dana (ETH)"
"Royalty Percentage (%)" → "Persentase Royalti (%)"
"Campaign Duration (days)" → "Durasi Kampanye (hari)"
"Lockup Period (days)" → "Periode Lockup (hari)"
"Description" → "Deskripsi"
"Create Campaign" → "Buat Kampanye"
"Cancel" → "Batal"
```

#### 4. User Home Page
**File**: `/src/app/user/home/page.tsx`

**Translations**:
```
"Discover Music" → "Jelajahi Musik"
"Trending" → "Trending"
"New Releases" → "Rilis Terbaru"
"Genres" → "Genre"
"Search..." → "Cari..."
```

#### 5. Investment Page
**File**: `/src/app/user/invest/page.tsx`

**Translations**:
```
"Investment Opportunities" → "Peluang Investasi"
"Invest" → "Investasi"
"Goal" → "Target"
"Raised" → "Terkumpul"
"Backers" → "Pendukung"
"Days Left" → "Hari Tersisa"
"Risk Level" → "Tingkat Risiko"
"Low" → "Rendah"
"Medium" → "Sedang"
"High" → "Tinggi"
"Invest Now" → "Investasi Sekarang"
```

#### 6. Music Cards
**File**: `/src/app/components/dashboard/MusicPoolCard.tsx`

**Translations**:
```
"Play" → "Putar"
"Pause" → "Jeda"
"Added to playlist" → "Ditambahkan ke playlist"
"Duration" → "Durasi"
"Artist" → "Artis"
```

#### 7. Leaderboard
**File**: `/src/app/components/music/Leaderboard.tsx`

**Translations**:
```
"Top Artists" → "Artis Teratas"
"Top Music" → "Musik Teratas"
"Rank" → "Peringkat"
"Artist" → "Artis"
"Score" → "Skor"
"Plays" → "Putar"
```

---

## 🎨 PRIORITY 3: Apply Nusantara Design to All Pages

### Step 1: Update Musician Dashboard

**File**: `/src/app/musician/dashboard/page.tsx`

**What to do**:
```tsx
import { NusantaraCard, NusantaraButton, GorgaDivider } from '@/components/ui/nusantara';

// Replace existing cards with NusantaraCard
<NusantaraCard variant="premium" pattern="songket">
  <h3>Total Pendapatan</h3>
  <p className="text-gradient-emas">Rp 5,000,000</p>
</NusantaraCard>

// Add Gorga divider between sections
<GorgaDivider spacing="lg" />

// Use Nusantara buttons
<NusantaraButton variant="primary" size="lg">
  Buat Kampanye Baru
</NusantaraButton>
```

---

### Step 2: Update Music Cards

**File**: `/src/app/components/dashboard/MusicPoolCard.tsx`

**What to do**:
```tsx
// Wrap card content with Nusantara styling
<div className="nusantara-card hover:shadow-wayang transition-nusantara">
  <div className="relative">
    <img
      src={coverImageUrl}
      alt={musicTitle}
      className="w-full h-48 object-cover rounded-lg border-2 border-[var(--color-coklat-jati)]/20"
    />
    {/* Add kawung pattern overlay */}
    <div className="absolute inset-0 bg-kawung-pattern opacity-5" />
  </div>

  <div className="p-4">
    <h3 className="text-xl font-bold text-[var(--color-coklat-jati)]">
      {musicTitle}
    </h3>
    <p className="text-[var(--color-emas-nusantara)]">{musicArtist}</p>

    {/* Use Nusantara button for actions */}
    <NusantaraButton variant="outline" size="sm">
      Putar
    </NusantaraButton>
  </div>
</div>
```

---

### Step 3: Update Campaign Cards

**File**: `/src/app/components/investment/InvestCard.tsx` or similar

**What to do**:
```tsx
import { NusantaraCard, NusantaraButton, NusantaraIcon } from '@/components/ui/nusantara';

<NusantaraCard variant="bordered" hoverable>
  {/* Campaign Image */}
  <div className="relative h-48 overflow-hidden rounded-t-lg">
    <img src={campaignImage} alt={musicTitle} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <div className="absolute bottom-4 left-4">
      <h3 className="text-xl font-bold text-white">{musicTitle}</h3>
      <p className="text-[var(--color-emas-nusantara)]">{artistName}</p>
    </div>
  </div>

  {/* Campaign Details */}
  <div className="p-6 space-y-4">
    {/* Progress Bar with Nusantara colors */}
    <div className="w-full bg-[var(--color-krem-lontar)] rounded-full h-3 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[var(--color-hijau-pandan)] to-[var(--color-emas-nusantara)] transition-all"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-4 text-center">
      <div>
        <p className="text-2xl font-bold text-gradient-emas">{goal} ETH</p>
        <p className="text-sm text-gray-600">Target</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-[var(--color-hijau-pandan)]">{backers}</p>
        <p className="text-sm text-gray-600">Pendukung</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-[var(--color-oranye-terracotta)]">{daysLeft}</p>
        <p className="text-sm text-gray-600">Hari Tersisa</p>
      </div>
    </div>

    {/* Risk Indicator */}
    <div className="flex items-center gap-2">
      <span className="text-sm">Risiko:</span>
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${riskColor}`}>
        {riskLevel}
      </span>
    </div>

    {/* Invest Button */}
    <NusantaraButton variant="primary" fullWidth size="lg">
      <NusantaraIcon name="anyaman-wallet" size={20} className="mr-2" />
      Investasi Sekarang
    </NusantaraButton>
  </div>
</NusantaraCard>
```

---

### Step 4: Update Leaderboard

**File**: `/src/app/components/music/Leaderboard.tsx`

**What to do**:
```tsx
<NusantaraCard variant="premium" pattern="kawung">
  <h2 className="text-2xl font-bold text-gradient-emas mb-6">
    Artis Teratas
  </h2>

  <div className="space-y-4">
    {artists.map((artist, index) => (
      <div
        key={artist.id}
        className="flex items-center gap-4 p-4 bg-[var(--color-krem-lontar)]/50 rounded-lg hover:bg-[var(--color-emas-nusantara)]/10 transition-nusantara"
      >
        {/* Rank Badge */}
        <div className="w-12 h-12 rounded-full bg-gradient-premium flex items-center justify-center">
          {index < 3 ? (
            <NusantaraIcon name="mahkota-crown" size={24} />
          ) : (
            <span className="text-xl font-bold">#{index + 1}</span>
          )}
        </div>

        {/* Artist Info */}
        <div className="flex-1">
          <h4 className="font-bold text-[var(--color-coklat-jati)]">
            {artist.name}
          </h4>
          <p className="text-sm text-gray-600">{artist.genre}</p>
        </div>

        {/* Score */}
        <div className="text-right">
          <p className="text-2xl font-bold text-gradient-emas">
            {artist.score}
          </p>
          <p className="text-sm text-gray-600">Skor</p>
        </div>
      </div>
    ))}
  </div>
</NusantaraCard>
```

---

### Step 5: Add Batik Background to Main Sections

**Any page that needs background**:

```tsx
import { BatikBackground } from '@/components/ui/nusantara';

<BatikBackground pattern="mega-mendung" overlay overlayOpacity={0.95}>
  <div className="container mx-auto px-4 py-12">
    {/* Your content here */}
  </div>
</BatikBackground>
```

---

### Step 6: Add Gorga Dividers Between Sections

```tsx
import { GorgaDivider } from '@/components/ui/nusantara';

<section>{/* Section 1 */}</section>
<GorgaDivider spacing="lg" />
<section>{/* Section 2 */}</section>
<GorgaDivider spacing="lg" />
<section>{/* Section 3 */}</section>
```

---

## 📝 Quick Reference: Common Translations

```typescript
const translations = {
  // Navigation
  "Home": "Beranda",
  "Discover": "Jelajahi",
  "Invest": "Investasi",
  "Dashboard": "Dasbor",
  "Profile": "Profil",
  "Settings": "Pengaturan",
  "Logout": "Keluar",

  // Actions
  "Create": "Buat",
  "Edit": "Ubah",
  "Delete": "Hapus",
  "Save": "Simpan",
  "Cancel": "Batal",
  "Submit": "Kirim",
  "Upload": "Unggah",
  "Download": "Unduh",
  "Play": "Putar",
  "Pause": "Jeda",
  "Share": "Bagikan",
  "Like": "Suka",

  // Music Terms
  "Music": "Musik",
  "Song": "Lagu",
  "Album": "Album",
  "Artist": "Artis",
  "Genre": "Genre",
  "Duration": "Durasi",
  "Plays": "Putar",
  "Trending": "Trending",
  "New Release": "Rilis Baru",

  // Campaign Terms
  "Campaign": "Kampanye",
  "Funding": "Pendanaan",
  "Goal": "Target",
  "Raised": "Terkumpul",
  "Backers": "Pendukung",
  "Investors": "Investor",
  "Royalty": "Royalti",
  "Percentage": "Persentase",
  "Deadline": "Tenggat",
  "Active": "Aktif",
  "Completed": "Selesai",

  // Financial
  "Invest": "Investasi",
  "Amount": "Jumlah",
  "Total": "Total",
  "Balance": "Saldo",
  "Earnings": "Pendapatan",
  "Revenue": "Pendapatan",
  "Profit": "Keuntungan",
  "Fee": "Biaya",

  // Status
  "Success": "Berhasil",
  "Failed": "Gagal",
  "Pending": "Menunggu",
  "Loading": "Memuat",
  "Error": "Error",

  // Time
  "Days": "Hari",
  "Hours": "Jam",
  "Minutes": "Menit",
  "Seconds": "Detik",
  "Today": "Hari Ini",
  "Yesterday": "Kemarin",
  "Week": "Minggu",
  "Month": "Bulan",
  "Year": "Tahun",

  // Risk
  "Risk": "Risiko",
  "Low": "Rendah",
  "Medium": "Sedang",
  "High": "Tinggi",
};
```

---

## 🎯 Estimated Time to Complete

| Task | Est. Time | Priority |
|------|-----------|----------|
| LocalStorage Integration | 2-3 hours | HIGH |
| Translation (All Pages) | 3-4 hours | HIGH |
| Apply Nusantara Design | 4-5 hours | MEDIUM |
| Testing & Bug Fixes | 2-3 hours | HIGH |
| **TOTAL** | **11-15 hours** | - |

---

## ✅ Testing Checklist

After implementation, test:

- [ ] Create music → Saves to localStorage
- [ ] Create campaign → Saves to localStorage
- [ ] Music list shows localStorage + backend data
- [ ] Investment page shows localStorage campaigns
- [ ] All buttons translated to Indonesian
- [ ] All forms translated to Indonesian
- [ ] Nusantara colors applied everywhere
- [ ] Nusantara patterns visible (batik, kawung, gorga)
- [ ] Custom icons working
- [ ] Responsive on mobile
- [ ] No console errors

---

## 🚀 Quick Win: Priority Order

If time is limited, do in this order:

1. **LocalStorage for music creation** (30 min)
2. **LocalStorage for campaign creation** (30 min)
3. **Show localStorage data in music list** (30 min)
4. **Translate musician dashboard** (1 hour)
5. **Translate campaign modal** (30 min)
6. **Apply Nusantara design to dashboard** (1 hour)
7. **Apply Nusantara design to music cards** (1 hour)

**Total: ~5.5 hours for core features**

---

## 📞 Support

If you need help implementing any of these:
1. Check `/docs/DESIGN_SYSTEM_NUSANTARA.md` for design reference
2. Check `/src/components/ui/nusantara/README.md` for component usage
3. Check `/src/app/utils/localStorage.ts` for localStorage API

---

**Last Updated**: November 5, 2025
**Status**: Implementation Guide
**Next Steps**: Execute priorities 1-3 above
