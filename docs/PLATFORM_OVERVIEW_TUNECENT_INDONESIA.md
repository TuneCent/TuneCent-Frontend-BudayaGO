# TuneCent Indonesia - Platform Overview
*Dokumen Internal untuk Tim Bisnis & Stakeholder*

## 1. RINGKASAN EKSEKUTIF

**Nama Platform**: TuneCent Indonesia (TuneCent Nusantara)
**Tagline**: "Membuka Masa Depan Budaya Indonesia"
**Visi**: Memberdayakan musisi tradisional dan indie Indonesia melalui teknologi blockchain dan model bisnis K-Pop

**Problem Statement**:
- 68% musisi lokal kesulitan mendapat modal produksi (estimasi berdasarkan survey industri kreatif)
- Royalti streaming platform global hanya Rp 30-50 per 1000 plays
- Minimnya akses pemasaran digital untuk musisi daerah
- Tidak ada platform yang fokus pada musik tradisional Nusantara

**Solusi TuneCent**:
Platform crowdfunding musik berbasis blockchain dengan model bisnis K-Pop (fan community, merchandise, premium content, virtual events)

---

## 2. FITUR UTAMA PLATFORM

### 2.1 Core Features (Sudah Implemented)

✅ **Music NFT Registration**
- Registrasi musik on-chain dengan fingerprint unik
- Copyright protection otomatis melalui smart contract
- IPFS storage untuk audio file (decentralized & permanent)
- Metadata tersimpan di blockchain (judul, artist, genre, tanggal)

✅ **Crowdfunding Campaign**
- Goal-based funding (target dana dalam ETH/IDR, deadline)
- Royalty sharing configurable (0.01% - 50%)
- Smart contract automated distribution (tidak perlu manual)
- Transparent tracking (semua orang bisa lihat progress real-time)
- Milestone-based fund release (bertahap sesuai pencapaian)

✅ **Investment System**
- Fans invest ETH mulai dari Rp 10.000 (≈ 0.0001 ETH)
- Dapat royalti otomatis setiap ada streaming/penjualan
- Risk assessment (Low/Medium/High berdasarkan track record artis)
- Portfolio tracking di dashboard investor
- ROI calculator & projected returns

✅ **Music Discovery**
- Trending songs berdasarkan viral score algorithm
- Artist leaderboard & ranking by genre
- Genre filtering (Gamelan, Dangdut, Indie, Musik Daerah, dll)
- Integrated audio player dengan waveform visualization
- Search by artist, song title, atau genre

✅ **Reputation System**
- Artist reputation score on-chain (0-100)
- Verified badge untuk musisi terverifikasi pemerintah/komunitas
- Performance metrics (campaign success rate, royalty paid, fan satisfaction)
- Review & rating dari investor/fans

---

### 2.2 New Features (K-Pop Model - To Be Developed)

🔜 **Fan Community & Membership**
- **Tier system**: Bronze → Silver → Gold → Diamond
  - Bronze (Free): Akses basic, forum community
  - Silver (Rp 29k/bln): Konten eksklusif, voting hak
  - Gold (Rp 59k/bln): Early access, discount merchandise 10%
  - Diamond (Rp 99k/bln): Meet & greet virtual, photocard exclusive
- **Exclusive content per tier**: Behind-the-scenes video, unreleased demos, live practice
- **Voting rights**: Fan bisa vote untuk album cover design, setlist konser, kolaborasi
- **Leaderboard top fans**: Gamification dengan point system (listen, share, invest)
- **Badge & achievements**: "Early Supporter", "Top Investor", "Concert Attendee"

🔜 **Premium Subscription**
- **Paket Basic** (Rp 29k/bln):
  - Ad-free listening
  - Standard quality audio (320kbps)
  - Access to community forum
- **Paket Pro** (Rp 59k/bln):
  - Lossless audio download (FLAC)
  - Early access new releases (7 days sebelum public)
  - Monthly exclusive live stream
  - 10% discount merchandise
- **Paket Premium** (Rp 99k/bln):
  - Semua fitur Pro
  - Virtual meet & greet (1x per bulan)
  - Personalized video greeting dari artis favorit
  - Priority customer support
  - Exclusive merchandise bundle

🔜 **Marketplace Merchandise**
- **Kategori Produk**:
  - Kaos, hoodie, poster artist
  - Photocard physical & digital (NFT)
  - Album fisik (CD/Vinyl) & digital download
  - Tiket konser (NFT-based untuk verifikasi)
  - Limited edition NFT collectibles (album art, signed poster digital)
- **Payment Integration**:
  - Crypto: ETH, USDC
  - Fiat: GoPay, OVO, Dana, ShopeePay, QRIS
- **Fulfillment**: Partnership dengan print-on-demand & logistik lokal
- **Artist Revenue Share**: 70% untuk artis, 15% platform, 15% produksi

🔜 **Virtual Events**
- **Live Concert Streaming**:
  - HD video streaming (1080p+)
  - Multi-camera angles
  - Live chat interaction
  - Tiket berbasis NFT (Rp 25k - 100k)
- **Virtual Meet & Greet**:
  - Video call 1-on-1 atau grup kecil (max 10 orang)
  - Durasi 5-15 menit per session
  - Tiket Rp 50k - 200k tergantung artis
- **Workshop Musik Tradisional**:
  - Belajar angklung, gamelan, alat musik daerah
  - Interactive session via Zoom/Google Meet
  - Certificate of completion (NFT)
- **Proof of Attendance NFT (POAP)**:
  - Setiap attendee dapat NFT badge
  - Collectible untuk fans loyalty program

🔜 **Cultural Storytelling & Education**
- **Halaman /stories**:
  - Dokumentasi sejarah lagu tradisional daerah
  - Interview dengan tetua budaya & musisi senior
  - Video mini-documentary proses kreatif
- **Halaman /learn**:
  - Tutorial alat musik tradisional (video step-by-step)
  - Kursus online musik Nusantara
  - E-book & artikel edukasi budaya
- **Halaman /heritage**:
  - Database 10,000+ lagu tradisional Indonesia
  - Arsip digital dengan metadata lengkap
  - Open access untuk peneliti & pendidik

---

## 3. TEKNOLOGI & KEAMANAN

### Blockchain Infrastructure

**Blockchain**: Flow EVM Testnet (saat ini)
- Production: Multi-chain support (Polygon, Base, Optimism untuk lower gas fees)
- Why Flow EVM: Fast finality (1-2 seconds), low cost, eco-friendly (Proof of Stake)

**Smart Contracts Deployed**:
1. **MusicRegistry**: `0x3bf7d28199227E5426CB2c42AcBF351333DB68b3`
   - Fungsi: NFT registration, copyright verification, metadata storage
2. **CrowdfundingPool**: `0xf9121BD1B04b1F150240299bBf34532407402F3E`
   - Fungsi: Campaign creation, fund collection, goal tracking
3. **RoyaltyDistributor**: `0xc36A4D32b0907D094330693C608B0CEc075F3d36`
   - Fungsi: Automated royalty calculation & distribution
4. **ReputationScore**: `0xC0BFbD90Ad1a66e7697Bd01F2479D31D9Cd74eA0`
   - Fungsi: Artist reputation scoring, review aggregation

### Application Stack

**Frontend**:
- Next.js 15 (React Server Components)
- React 19 (latest)
- TypeScript (type-safe)
- Tailwind CSS v4 (Nusantara design tokens)

**Auth**:
- Privy (email + embedded wallet)
- Benefit: Users tidak perlu install MetaMask (onboarding mudah untuk non-crypto natives)

**Payment Integration**:
- **Crypto**: Wagmi/Viem (ETH, USDC)
- **Fiat** (Planned):
  - Midtrans Payment Gateway (GoPay, OVO, Dana, ShopeePay, Bank Transfer, QRIS)
  - Xendit (alternative payment gateway)

**Storage**:
- IPFS (audio files, NFT metadata)
- AWS S3 (images, videos, static assets)
- PostgreSQL (user data, analytics)

### Security & Compliance

**Keamanan Blockchain**:
- Audio fingerprinting anti-plagiarisme (acoustic hash matching)
- On-chain copyright verification (immutable proof)
- Automated royalty distribution (no middleman = no fraud)
- Multi-signature wallet untuk campaign funds (2-of-3 signatures required)

**Data Privacy**:
- GDPR-compliant data handling
- Personal data encrypted at rest & in transit
- Users own their wallet (self-custody)

**Audit & Compliance**:
- Smart contract audit by third-party (rencana: CertiK/OpenZeppelin)
- KYC untuk high-value campaigns (> Rp 100 juta)
- Anti-money laundering (AML) checks

---

## 4. TARGET MARKET

### Primary: Musisi Tradisional & Indie Indonesia

**Demographics**: 18-45 tahun, tersebar di seluruh Indonesia

**Segmen**:
- **Musisi Gamelan & Angklung** (Jawa, Bali, Sunda)
  - Pain point: Alat mahal (Rp 50-200 juta), sulit dapat sponsor
  - TuneCent solution: Crowdfund pembelian alat, produksi album, tur konser
- **Penyanyi Dangdut & Keroncong** (Jawa, Sumatera)
  - Pain point: Label besar hanya mau artis mainstream, royalti kecil
  - TuneCent solution: Direct-to-fan funding, keep majority royalty
- **Musisi Daerah** (Batak, Sunda, Minang, Dayak, Papua, dll)
  - Pain point: Pasar lokal kecil, sulit penetrasi nasional
  - TuneCent solution: Online marketplace, diaspora Indonesia worldwide
- **Indie Musician Kontemporer** (blend traditional + modern)
  - Pain point: Budget produksi tinggi (studio, mixing, mastering)
  - TuneCent solution: Transparent crowdfunding, pre-order album

**Market Size Estimate**:
- 300,000+ musisi tradisional & indie di Indonesia
- Target Year 1: 1,000 musicians (0.3% market penetration)

---

### Secondary: Fans Musik Indonesia & Investor Retail

**Demographics**: 18-35 tahun, urban & semi-urban

**Segmen**:
- **Generasi Z & Milenial** (digital natives)
  - Behavior: Streaming music daily, suka support artist favorit via donation/merch
  - TuneCent value: Invest kecil (Rp 10k), dapat royalty passive income
- **Pecinta Musik Tradisional** (nostalgia, cultural pride)
  - Behavior: Attend cultural events, koleksi album traditional
  - TuneCent value: Preserve budaya, support pelestarian
- **Investor Crypto Retail** (early adopters)
  - Behavior: Sudah familiar dengan NFT, DeFi, Web3
  - TuneCent value: Real-world asset (music IP) dengan utility nyata
- **Diaspora Indonesia** (luar negeri)
  - Behavior: Kangen budaya Indonesia, mau support dari jauh
  - TuneCent value: Mudah invest dari mana saja (borderless payment)

**Market Size Estimate**:
- 127 juta pengguna streaming musik digital di Indonesia
- Target Year 1: 100,000 fans/investors (0.08% market penetration)

---

### Tertiary: Government & Corporate

**Pemerintah**:
- **Kemendikbudristek** (Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi)
  - Need: Platform untuk monitor & support ekonomi kreatif musik
  - Partnership: Data sharing, verification badge, co-funding grants
- **Dinas Kebudayaan Provinsi/Kota**
  - Need: Tools untuk digitalisasi musik daerah, laporan ke pusat
  - Partnership: White-label dashboard, artist onboarding program
- **Kemenparekraf** (Kementerian Pariwisata dan Ekonomi Kreatif)
  - Need: Showcase musik Indonesia ke turis internasional
  - Partnership: Integration dengan Indonesia.travel, festival sponsorship

**Korporat**:
- **BUMN** (Telkom, Bank BRI/Mandiri, Pertamina)
  - Need: CSR program yang measurable & impactful
  - Partnership: Corporate matching (perusahaan double-in investasi fans), sponsored campaigns
- **E-commerce** (Tokopedia, Shopee, Bukalapak)
  - Need: Konten musik untuk platform, merchandise sales channel
  - Partnership: Cross-promotion, fulfillment integration
- **Brand** (produk consumer goods)
  - Need: Authentic cultural marketing
  - Partnership: Artist endorsement, brand anthem crowdfunding

---

## 5. BUSINESS MODEL & REVENUE STREAMS

### Revenue Channels (7 Streams)

#### 1. Platform Fee (3-5%)
- **Dari crowdfunding campaign sukses**: 5% dari total dana terkumpul
  - Example: Campaign Rp 50 juta sukses → Platform fee Rp 2.5 juta
- **Dari streaming royalty distribution**: 3% dari setiap distribusi
  - Example: Royalti Rp 10 juta ke investors → Platform fee Rp 300k
- **Dari marketplace transaction**: 5% dari setiap penjualan merch
  - Example: Kaos terjual Rp 150k → Platform fee Rp 7.5k

**Projected Revenue Year 1**:
- 100 campaigns @ Rp 20 juta avg = Rp 2 miliar → Fee Rp 100 juta
- Royalty distribution Rp 500 juta → Fee Rp 15 juta
- Marketplace GMV Rp 1 miliar → Fee Rp 50 juta
- **Subtotal: Rp 165 juta/tahun**

---

#### 2. Premium Subscription (Rp 29k - 99k/bulan)
- **Basic** (Rp 29k): Target 5,000 users = Rp 145 juta/bulan
- **Pro** (Rp 59k): Target 3,000 users = Rp 177 juta/bulan
- **Premium** (Rp 99k): Target 2,000 users = Rp 198 juta/bulan

**Projected Revenue Year 1**:
- 10,000 total subscribers (avg Rp 52k/user)
- **Subtotal: Rp 520 juta/bulan = Rp 6.24 miliar/tahun**

---

#### 3. Merchandise Commission (15-20%)
- Commission dari setiap penjualan merchandise artist
- Average order value: Rp 150k
- Target: 10,000 orders/month

**Projected Revenue Year 1**:
- Rp 150k x 10,000 orders x 15% = Rp 225 juta/bulan
- **Subtotal: Rp 2.7 miliar/tahun**

---

#### 4. Event Ticketing (10-15%)
- Fee dari tiket virtual concert/meet & greet
- Average ticket price: Rp 50k
- Target: 50 events/month, 500 attendees/event = 25,000 tickets/month

**Projected Revenue Year 1**:
- Rp 50k x 25,000 tickets x 10% = Rp 125 juta/bulan
- **Subtotal: Rp 1.5 miliar/tahun**

---

#### 5. NFT Collectibles (Minting fee + royalty)
- **Minting fee**: Rp 25k per NFT
- **Secondary market royalty**: 2.5% dari setiap resale
- Target: 1,000 NFT mints/month, 500 resales/month @ Rp 500k avg

**Projected Revenue Year 1**:
- Minting: Rp 25k x 1,000 = Rp 25 juta/bulan
- Resale royalty: Rp 500k x 500 x 2.5% = Rp 6.25 juta/bulan
- **Subtotal: Rp 375 juta/tahun**

---

#### 6. Corporate Partnership
- **Sponsorship matching program**: Korporat match 50-100% dari fan investment
  - Target: 10 korporat @ Rp 50 juta/tahun = Rp 500 juta
- **White-label solution**: Dashboard untuk Dinas Kebudayaan
  - SaaS fee: Rp 10 juta/bulan per provinsi, target 10 provinsi = Rp 100 juta/bulan
- **Data analytics licensing**: Anonymized insights untuk industry research
  - Target: Rp 50 juta/tahun

**Projected Revenue Year 1**:
- **Subtotal: Rp 1.75 miliar/tahun**

---

#### 7. Advertising (Future - Year 2+)
- Banner ads untuk free tier users
- Sponsored artist/campaign placement
- Target: Rp 10 CPM, 10 juta impressions/month

**Projected Revenue Year 2**:
- **Subtotal: Rp 1.2 miliar/tahun** (not counted in Year 1)

---

### Total Projected Revenue Year 1

| Revenue Stream | Annual Revenue (IDR) |
|---|---|
| Platform Fee | 165 juta |
| Premium Subscription | 6.24 miliar |
| Merchandise Commission | 2.7 miliar |
| Event Ticketing | 1.5 miliar |
| NFT Collectibles | 375 juta |
| Corporate Partnership | 1.75 miliar |
| **TOTAL** | **Rp 12.73 miliar** |

**Gross Merchandise Value (GMV)**: Rp 50+ miliar
**Platform Take Rate**: ~25% (termasuk semua revenue streams)

---

### Unit Economics

**Per Musician (Monthly Average)**:
- Campaign funding raised: Rp 5-50 juta → Platform fee: Rp 250k - 2.5 juta
- Streaming royalty distributed: Rp 500k - 5 juta → Fee: Rp 15k - 150k
- Merchandise sales: Rp 2-10 juta → Commission: Rp 300k - 1.5 juta
- **Total platform revenue per musician**: Rp 565k - 4.15 juta/bulan

**Per Fan/Investor (Monthly Average)**:
- Investment amount: Rp 100k (one-time)
- Premium subscription: Rp 50k/bulan
- Merchandise purchase: Rp 150k/quarter (Rp 50k/bulan avg)
- Event tickets: Rp 50k/quarter (Rp 16.7k/bulan avg)
- **Total spending per fan**: Rp 116.7k/bulan
- **Platform revenue per fan**: Rp 58.3k/bulan (50% take rate avg)

**LTV:CAC Ratio**:
- Customer Lifetime Value (12 months): Rp 700k
- Customer Acquisition Cost: Rp 100k (ads, referral, partnership)
- **LTV:CAC = 7:1** (healthy, target 3:1+)

---

## 6. COMPETITIVE ADVANTAGE

### vs. Spotify/Apple Music/YouTube Music

❌ **Problem dengan platform global**:
- Royalti sangat rendah: Rp 30-50 per 1,000 plays (need 1 juta plays untuk dapat Rp 30-50k)
- 70% revenue ke label, bukan artis
- No transparency (artis tidak tahu siapa pendengar setianya)
- No direct relationship artist-fans

✅ **TuneCent advantage**:
- Royalti jauh lebih tinggi: 50-80% langsung ke artis (tidak ada label)
- Fans bisa invest & dapat return (win-win)
- Full transparency via blockchain
- Direct engagement: artist tahu persis siapa top fans-nya
- Fokus musik tradisional Indonesia (niche yang diabaikan platform global)

---

### vs. Kitabisa/Ayopeduli (Crowdfunding Platforms)

❌ **Problem dengan donation-based crowdfunding**:
- Sifatnya charity (fans donasi, tidak dapat return)
- No mechanism untuk royalty sharing
- Tidak ada ecosystem setelah campaign selesai
- Generic (bukan fokus musik/budaya)

✅ **TuneCent advantage**:
- Investment-based: fans dapat royalty share (incentive jangka panjang)
- Automated royalty distribution via smart contract (no manual, no fraud)
- Full ecosystem: funding → produksi → distribusi → community → monetization
- Spesialis musik & budaya Indonesia
- NFT ownership + secondary market (liquidity untuk investor)

---

### vs. Platform Musik Lokal (Langit Musik, Noice, dll)

❌ **Problem platform lokal existing**:
- Hanya streaming, no funding mechanism
- Tidak ada blockchain (no transparency, vulnerable to manipulation)
- Business model sama seperti Spotify (low royalty untuk artis)
- No fan community features

✅ **TuneCent advantage**:
- Blockchain transparency & security
- Fan community & engagement features (K-Pop model)
- Multi-revenue streams untuk artist (crowdfunding, streaming, merch, events)
- Artist-centric (bukan platform-centric)
- Web3 native (NFT, crypto payment, global accessibility)

---

### Unique Value Proposition (UVP)

**Satu-satunya platform di Indonesia yang menggabungkan**:
1. ✅ Crowdfunding musik berbasis blockchain
2. ✅ Streaming & automated royalty distribution
3. ✅ Fan community K-Pop style (membership tier, voting, gamification)
4. ✅ Marketplace merchandise (fisik + NFT)
5. ✅ Virtual events (concert, meet & greet, workshop)
6. ✅ Blockchain technology (transparency, security, borderless)
7. ✅ **Fokus musik tradisional Nusantara** (gamelan, angklung, dangdut, musik daerah)

**Positioning Statement**:
> "Untuk musisi tradisional dan indie Indonesia yang kesulitan mendapat modal dan akses pasar, TuneCent Indonesia adalah platform crowdfunding musik berbasis blockchain yang memberdayakan artis untuk mendapatkan funding langsung dari fans, membangun komunitas loyal ala K-Pop, dan monetisasi berkelanjutan melalui streaming, merchandise, dan virtual events. Tidak seperti Spotify atau Kitabisa, TuneCent memberikan royalti tinggi, transparansi on-chain, dan ekosistem lengkap dari produksi hingga distribusi."

---

## 7. GO-TO-MARKET STRATEGY

### Phase 1: Pilot Launch (Q2 2025 - Bulan 1-3)

**Target**: Jawa Tengah & Jawa Barat (heartland musik tradisional)

**Goals**:
- Onboard 50 musisi tradisional pilot (gamelan, angklung, keroncong)
- Launch 50 crowdfunding campaigns
- Acquire 5,000 fans/investors
- Total funding raised: Rp 500 juta

**Strategy**:
1. **Partnership**:
   - Kolaborasi dengan 5 komunitas gamelan/angklung terbesar di Solo & Bandung
   - MoU dengan ISI Yogyakarta & ISI Surakarta (musik schools)
   - Partnership dengan Dinas Kebudayaan Jawa Tengah & Jawa Barat
2. **Marketing**:
   - Instagram/TikTok ads targeting: musik tradisional enthusiasts, cultural activists, age 18-35
   - Influencer collaboration: musisi indie populer dengan fanbase loyal (nano-influencer 10k-100k followers)
   - Press release: Kompas, Tempo, Detik (angle: teknologi untuk budaya)
3. **Community Building**:
   - Webinar: "Cara Crowdfund Album Musik Tradisional dengan Blockchain"
   - Offline meetup di Solo & Bandung (50 musisi + 200 fans)
   - Telegram/WhatsApp group untuk early adopters
4. **Incentives**:
   - Early supporter badge (NFT)
   - 0% platform fee untuk 20 campaign pertama
   - Airdrop token untuk first 1,000 investors (future utility token)

**Budget**: Rp 100 juta
- Rp 40 juta: Ads (Meta, TikTok, Google)
- Rp 30 juta: Influencer & KOL
- Rp 20 juta: Event & community
- Rp 10 juta: PR & media

**Success Metrics**:
- 50 musicians onboarded ✅
- 50 campaigns launched, 70% success rate (35 campaigns reach goal)
- 5,000 users registered
- Rp 500 juta funded
- NPS score: 50+

---

### Phase 2: Regional Expansion (Q3-Q4 2025 - Bulan 4-9)

**Target**: Sumatera, Kalimantan, Sulawesi, Bali

**Goals**:
- Onboard 500 musicians total
- 50,000 fans registered
- Total funding raised: Rp 5 miliar

**Strategy**:
1. **Geographic Expansion**:
   - Buka regional hubs: Medan, Palembang, Makassar, Denpasar, Balikpapan
   - Hire local community managers (1 per region)
   - Localized marketing (bahasa daerah, musisi lokal ambassador)
2. **Government Partnership**:
   - MoU dengan 10 Dinas Kebudayaan provinsi
   - Co-branded campaigns dengan Kemendikbudristek
   - Endorsement letter dari Gubernur (social proof)
3. **Event Marketing**:
   - Sponsor 5 festival musik daerah (Toba Lake Festival, Jember Fashion Carnaval, Baliem Valley Festival)
   - Virtual festival: "Festival Musik Nusantara" (20 musisi perform, 10k+ attendees online)
   - Roadshow kampus: 20 universitas (ISI, ITB, UI, UGM, Unair)
4. **Product**:
   - Launch marketplace merchandise (beta)
   - Launch premium subscription
   - Mobile app (iOS + Android) soft launch

**Budget**: Rp 500 juta
- Rp 200 juta: Ads nasional (TV, radio, digital)
- Rp 150 juta: Event & sponsorship
- Rp 100 juta: Government partnership program
- Rp 50 juta: PR & content

**Success Metrics**:
- 500 musicians total
- 50,000 users
- Rp 5 miliar funded
- 5,000 premium subscribers
- Rp 500 juta marketplace GMV

---

### Phase 3: National Scale (Q1 2026 - Bulan 10-12)

**Target**: 34 Provinsi (seluruh Indonesia)

**Goals**:
- 1,000+ musicians
- 100,000+ fans/investors
- Total funding raised: Rp 10 miliar
- Break-even point

**Strategy**:
1. **Mainstream Artist Onboarding**:
   - Onboard artis dangdut/pop Indonesia terkenal (level: Fildan, Lesti, Reality Club)
   - Kolaborasi: artis mainstream x musisi tradisional (cross-promotion)
2. **Mass Market Campaign**:
   - TVC (TV commercial) di RCTI, SCTV, TransTV
   - Radio ads di Prambors, Hardrock FM, MostFM
   - Billboard di Jakarta, Surabaya, Bandung, Medan
3. **Strategic Partnership**:
   - Telkom Indonesia: Bundling TuneCent Premium dengan IndiHome
   - Bank BRI/Mandiri: Cashback untuk investasi via BRI/Mandiri Debit
   - Gojek/Grab: In-app integration untuk easy payment
4. **Product Maturity**:
   - Full launch virtual event platform
   - AI recommendation engine
   - Mobile app full release

**Budget**: Rp 1 miliar
- Rp 500 juta: Mass media (TV, radio, billboard)
- Rp 300 juta: Strategic partnership program
- Rp 200 juta: Influencer & KOL tier 1

**Success Metrics**:
- 1,000+ musicians
- 100,000+ users
- Rp 10 miliar funded
- Rp 1 miliar platform revenue/month
- Break-even ✅

---

### Phase 4: International Expansion (Q2 2026+)

**Target**: Diaspora Indonesia & ASEAN

**Goals**:
- 5,000 musicians
- 500,000 users (50% dari luar Indonesia)
- Rp 50 miliar funded

**Strategy**:
1. **Diaspora Targeting**:
   - Marketing di negara dengan populasi Indonesia besar: Malaysia (3.5 juta), Saudi Arabia (1.2 juta), Taiwan (300k), Netherlands (400k), USA (200k)
   - Partnership dengan KBRI (Kedutaan Besar RI) & Indonesian Student Association
2. **English Version**:
   - Translate semua content ke English
   - Multilingual support (Indonesia, English, Malay)
3. **Cross-border Payment**:
   - Integrasi Wise, PayPal untuk international users
   - Multi-currency support (USD, SGD, MYR, EUR)
4. **ASEAN Expansion**:
   - Onboard artis dari Malaysia (target: gamelan Melayu, traditional Malay music)
   - Partnership dengan Philippine music scene (Kulintang, Rondalla)

---

## 8. KEY PARTNERSHIPS

### Pemerintah

**Kemendikbudristek** (Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi)
- **Value for them**: Platform digital untuk monitoring & mendukung ekonomi kreatif musik
- **Value for us**: Endorsement resmi, akses ke data musisi tradisional, co-funding grants
- **Partnership model**:
  - Verified badge untuk musisi yang diverifikasi Kemendikbud
  - Dashboard analytics untuk pemerintah (berapa musisi aktif, funding terkumpul, dll)
  - Co-branded campaigns (contoh: "Program Digitalisasi Musik Nusantara powered by TuneCent")

**Dinas Kebudayaan Provinsi/Kota** (34 provinsi)
- **Value for them**: Tools untuk onboarding & monitoring musisi daerah, laporan digital ke pusat
- **Value for us**: Access to local musician database, government stamp of approval
- **Partnership model**:
  - White-label dashboard (Dinas bisa login dan lihat musisi di wilayahnya)
  - Artist onboarding program (Dinas refer musisi → TuneCent training & onboarding)
  - Budget allocation: Dinas bisa invest ke campaign musisi lokal pakai dana APBD

**Kemenparekraf** (Kementerian Pariwisata dan Ekonomi Kreatif)
- **Value for them**: Showcase musik Indonesia ke turis internasional, data ekonomi kreatif
- **Value for us**: Marketing support, integration dengan Indonesia.travel
- **Partnership model**:
  - TuneCent featured di Indonesia.travel website
  - Co-sponsor festival musik Nusantara
  - Paket wisata + konser virtual (contoh: Turis beli paket Bali trip + exclusive gamelan concert streaming)

---

### Komunitas & Edukasi

**Komunitas Musik Tradisional**
- Komunitas Gamelan Indonesia
- Saung Angklung Udjo (Bandung)
- Perkumpulan Keroncong Indonesia
- Komunitas Musik Daerah (Batak, Sunda, Minang, dll)

**Value exchange**: TuneCent provide funding platform, komunitas provide musician onboarding & endorsement

**Kampus Seni** (ISI Yogyakarta, ISI Surakarta, ISI Denpasar, IKJ Jakarta)
- **Partnership model**:
  - Campus ambassador program (10 students per kampus, dapat komisi Rp 50k per referral)
  - Curriculum integration: Workshop blockchain untuk musik (guest lecture)
  - Graduate program: Mahasiswa lulus bisa langsung launch campaign di TuneCent

**Sanggar Seni & Budaya** (10,000+ sanggar di Indonesia)
- **Partnership model**:
  - Sanggar verified partner (badge di platform)
  - Group campaign: 1 sanggar launch campaign untuk beli alat musik (collective funding)

---

### Korporat

**Telkom/Telkomsel** (BUMN Telekomunikasi)
- **CSR Partnership**:
  - Program "Telkom Peduli Budaya" → Co-fund campaign musisi tradisional (Telkom matching 50%)
  - Bundling: TuneCent Premium free 3 bulan untuk pelanggan IndiHome
- **Value**: Rp 500 juta/tahun CSR budget, 10 juta potential users

**Bank BUMN** (BRI, Mandiri, BNI)
- **Payment Integration**:
  - Cashback 10% untuk investasi pakai debit card BRI/Mandiri
  - KUR (Kredit Usaha Rakyat) untuk musisi yang campaign-nya sukses (modal lanjutan untuk bisnis)
- **Value**: Easy fiat onramp, mass market accessibility

**E-commerce** (Tokopedia, Shopee, Bukalapak)
- **Marketplace Integration**:
  - TuneCent merchandise bisa dijual juga di Tokopedia/Shopee (sync inventory)
  - Cross-promotion: Tokopedia promote TuneCent di homepage, TuneCent promote Tokopedia payment
- **Value**: Fulfillment & logistics support, larger customer base

**Brand Consumer** (Unilever, Garnier, Sprite, dll)
- **Artist Endorsement & Sponsorship**:
  - Brand sponsor campaign artis (logo di campaign page, brand mention di video)
  - Co-create brand anthem (contoh: "Lagu Semangat Pemuda Indonesia by Sprite x TuneCent Musicians")
- **Value**: Rp 200-500 juta per brand partnership/year

---

### Media & Platform

**YouTube Indonesia**
- **Partnership**:
  - TuneCent musicians get priority in YouTube Shorts algorithm (special tag)
  - Co-create content series: "Behind the Music: Indonesian Traditional Musicians" (documentary series)
- **Value**: Massive reach (100 juta+ users YouTube Indonesia), content distribution

**TikTok Indonesia**
- **Viral Campaign**:
  - TikTok challenge: #MusikNusantaraChallenge (user create video pakai lagu tradisional Indonesia, tag TuneCent)
  - TikTok Live: Musicians go live langsung dari TuneCent platform
- **Value**: Viral potential, Gen Z engagement

**Spotify Indonesia**
- **Cross-Promotion**:
  - Playlist "TuneCent Featured Artists" di Spotify Indonesia official account
  - Link dari Spotify artist page ke TuneCent campaign (drive traffic)
- **Value**: Legitimacy, existing user base

---

## 9. KEY METRICS (KPI)

### User Metrics

| Metric | Definition | Target Year 1 |
|---|---|---|
| **Musicians Registered** | Total musisi yang sign up | 1,000 |
| **Active Campaigns** | Campaign yang sedang berjalan (not ended) | 100/month |
| **Total Fans/Investors** | Total users yang bukan musisi | 100,000 |
| **Monthly Active Users (MAU)** | Users yang login & interact dalam 30 hari terakhir | 30,000 (30% of total) |
| **Daily Active Users (DAU)** | Users yang login & interact dalam 24 jam terakhir | 8,000 (27% of MAU) |

---

### Financial Metrics

| Metric | Definition | Target Year 1 |
|---|---|---|
| **Total Crowdfunding Raised** | Total dana terkumpul dari semua campaigns | Rp 10 miliar |
| **Platform Revenue** | Total pendapatan platform dari semua revenue streams | Rp 12.73 miliar |
| **Average Campaign Size** | Rata-rata funding goal per campaign | Rp 20 juta |
| **Campaign Success Rate** | % campaign yang reach goal | 70% |
| **Royalty Distributed** | Total royalti dibagikan ke investors | Rp 500 juta |
| **GMV (Gross Merchandise Value)** | Total nilai transaksi (crowdfunding + merch + event tickets) | Rp 50 miliar |

---

### Engagement Metrics

| Metric | Definition | Target Year 1 |
|---|---|---|
| **Songs Played (Streams)** | Total kali lagu diputar | 50 juta plays |
| **Investment Conversion Rate** | % visitor yang jadi investor | 5% |
| **Fan Community Activity** | % users yang aktif di forum/voting/comments | 20% |
| **Event Attendance** | Total attendees virtual events | 25,000/month |
| **Average Session Duration** | Rata-rata waktu user di platform per session | 12 menit |

---

### Impact Metrics (Social Impact)

| Metric | Definition | Target Year 1 |
|---|---|---|
| **Musisi Income Increase** | Rata-rata peningkatan income musisi setelah pakai TuneCent | 3-5x |
| **Songs Preserved** | Jumlah lagu tradisional yang didigitalisasi & di-archive | 5,000 songs |
| **Cultural Events Held** | Total virtual workshop/concert musik tradisional | 50 events |
| **NPS (Net Promoter Score)** | "Seberapa likely Anda recommend TuneCent?" (scale -100 to +100) | 50+ (Excellent) |
| **Brand Awareness** | % target audience yang "pernah dengar TuneCent" (survey) | 30% (Q4 2025) |

---

## 10. ROADMAP 2025-2026

### Q2 2025 (Current - BudayaGO Submission)

**Goal**: Submit BudayaGO competition, prepare product for pilot launch

**Milestones**:
- ✅ Lokalisasi full Bahasa Indonesia (semua UI/UX text)
- ✅ Redesign UI dengan Nusantara Design Language (batik, kawung, gamelan icons)
- ✅ Dokumentasi lengkap untuk business team (Platform Overview, Pitch Deck, Business Model Canvas)
- ✅ Video pitch deck 3-5 menit (untuk BudayaGO submission)
- ✅ Pitch presentation ke juri BudayaGO

**Deliverables**:
- Platform live (current MVP enhanced)
- Dokumentasi business lengkap
- Video pitch professional
- Press kit (logo, screenshots, one-pager)

---

### Q3 2025 (Post-Competition - Pilot Launch)

**Goal**: Launch pilot program di Jawa Tengah & Jawa Barat, validate product-market fit

**Milestones**:
- 🚀 Onboard 50 musisi pilot (gamelan, angklung, keroncong)
- 🚀 Launch 50 crowdfunding campaigns
- 🚀 Acquire 5,000 fans/investors
- 🚀 Launch fan community features (membership tier: Bronze, Silver, Gold, Diamond)
- 🚀 Beta marketplace merchandise (10 artis launch merch)
- 🚀 Payment gateway Indonesia integration (Midtrans: QRIS, GoPay, OVO, Dana)
- 🚀 Partnership MoU dengan 2 Dinas Kebudayaan (Jateng & Jabar)

**Success Criteria**:
- 70% campaign success rate
- Rp 500 juta total funded
- NPS 50+
- 1,000 premium subscribers

---

### Q4 2025 (Regional Expansion)

**Goal**: Expand ke 10 provinsi, launch premium features

**Milestones**:
- 📱 Mobile app launch (iOS + Android)
- 🎵 Premium subscription full launch (3 paket: Basic, Pro, Premium)
- 🎪 Virtual event platform launch (live streaming, meet & greet, workshop)
- 📦 Marketplace full launch (100+ SKUs)
- 🌍 Regional expansion: Sumatera, Kalimantan, Sulawesi, Bali
- 🤝 Partnership dengan 10 Dinas Kebudayaan
- 🎉 Festival Musik Nusantara Virtual (20 artis, 10k attendees online)

**Success Criteria**:
- 500 musicians total
- 50,000 users
- Rp 5 miliar funded
- 5,000 premium subscribers
- Mobile app: 20k downloads

---

### Q1 2026 (National Coverage)

**Goal**: Reach seluruh Indonesia (34 provinsi), achieve break-even

**Milestones**:
- 🇮🇩 National coverage (34 provinsi)
- 🎤 Onboard mainstream artis (dangdut/pop collab dengan traditional)
- 📺 Mass media campaign (TVC, radio, billboard)
- 🏛️ Government partnership aktif (Kemendikbudristek endorsement)
- 🤖 AI recommendation engine launch
- 💰 Break-even point (revenue > operating costs)

**Success Criteria**:
- 1,000+ musicians
- 100,000+ users
- Rp 10 miliar funded
- Rp 1 miliar platform revenue/month
- Break-even ✅

---

### Q2-Q4 2026 (International Expansion)

**Goal**: Target diaspora Indonesia worldwide & ASEAN region

**Milestones**:
- 🌏 English version launch
- 🌍 International payment (Wise, PayPal, multi-currency)
- 🇲🇾🇵🇭🇹🇭 ASEAN expansion (Malaysia, Philippines, Thailand - traditional music scenes)
- 🇺🇸🇳🇱🇸🇦 Diaspora marketing (USA, Netherlands, Saudi Arabia, Taiwan)
- 💼 Series A fundraising preparation
- 🏆 Music awards: "TuneCent Music Awards" (annual event)

**Success Criteria**:
- 5,000 musicians
- 500,000 users (50% international)
- Rp 50 miliar funded
- Rp 5 miliar platform revenue/month
- Series A closed: USD 3-5 million

---

## 11. TEAM & HIRING NEEDS

### Current Team (Assumed - adjust sesuai actual)

**[Your Name]** - CEO & Co-Founder
- Responsible: Business strategy, fundraising, partnerships, overall vision

**[CTO Name]** - CTO & Co-Founder
- Responsible: Technical architecture, smart contracts, infrastructure, security

**[Product Lead]** - Head of Product
- Responsible: Product roadmap, UX/UI design, feature prioritization

**[Community Lead]** - Head of Community
- Responsible: User acquisition, community management, artist relations

---

### Hiring Roadmap Q3 2025 - Q1 2026

**Q3 2025** (Pilot Launch):
- 2x **Full-Stack Engineers** (React, Node.js, TypeScript)
- 1x **Smart Contract Developer** (Solidity, Web3.js)
- 1x **QA Engineer** (Testing, automation)
- 1x **Content Creator** (Video, social media content)
- 2x **Community Manager** (1 untuk Jateng, 1 untuk Jabar)

**Q4 2025** (Regional Expansion):
- 1x **Mobile Engineer** (React Native / Flutter)
- 1x **Data Analyst** (Analytics, business intelligence)
- 1x **Performance Marketing Manager** (Ads, growth hacking)
- 3x **Regional Community Manager** (Sumatera, Kalimantan, Sulawesi)
- 1x **Partnership Manager** (Government & corporate relations)

**Q1 2026** (National Scale):
- 1x **VP Engineering** (Tech leadership, team scaling)
- 1x **VP Marketing** (Brand, mass market campaign)
- 1x **CFO/Finance Manager** (Financial operations, reporting)
- 1x **Legal/Compliance** (Regulation, licensing, IP law)
- 5x **Regional Managers** (Coverage 34 provinsi)

**Total Team Size by Q1 2026**: ~25-30 people

---

## 12. RISKS & MITIGATION

### Risk 1: Regulatory Uncertainty (Blockchain/Crypto di Indonesia)

**Risk Level**: HIGH

**Description**:
Regulasi blockchain di Indonesia masih grey area. OJK & BI bisa tiba-tiba keluarkan aturan yang restrict crypto payment atau NFT.

**Mitigation**:
- ✅ **Dual payment system**: Selalu support fiat payment (QRIS, bank transfer) selain crypto
- ✅ **Proactive engagement**: Meeting reguler dengan OJK, BI, Kemendikbud untuk educate & influence policy
- ✅ **Legal counsel**: Hire lawyer specialist di blockchain & fintech regulation
- ✅ **Pivot plan**: Jika crypto payment di-ban, fokus ke NFT sebagai digital collectible (bukan currency)

---

### Risk 2: Adoption Challenge (Non-Crypto Native Users)

**Risk Level**: MEDIUM-HIGH

**Description**:
Majority musisi tradisional & fans Indonesia belum familiar dengan blockchain, wallet, crypto. Learning curve bisa jadi barrier.

**Mitigation**:
- ✅ **Embedded wallet**: Pakai Privy (email login → auto create wallet di background, user tidak perlu install MetaMask)
- ✅ **Fiat onramp**: Payment pakai QRIS, GoPay, OVO (familiar untuk semua orang)
- ✅ **Education program**: Video tutorial, webinar, customer support yang patient & helpful
- ✅ **Simplified UX**: Hide blockchain complexity, user hanya lihat "Invest Rp 50k" bukan "0.005 ETH"

---

### Risk 3: Music Copyright Dispute

**Risk Level**: MEDIUM

**Description**:
Musisi upload lagu yang sebenarnya bukan punya dia (plagiarism) atau lagu tradisional yang sudah ada pemilik hak cipta.

**Mitigation**:
- ✅ **Audio fingerprinting**: Check setiap upload terhadap database lagu existing (detect duplicate)
- ✅ **Manual review**: First 100 uploads di-review manual oleh team
- ✅ **Verification badge**: Musisi verified (sudah dicheck identitas & ownership) dapat badge khusus
- ✅ **Report mechanism**: User bisa report jika ada suspicion copyright infringement
- ✅ **Insurance**: Partner dengan lembaga perlindungan hak cipta (RBT, WAMI) untuk coverage legal dispute

---

### Risk 4: Artist Abuse/Fraud

**Risk Level**: MEDIUM

**Description**:
Musisi bisa abuse platform: launch campaign, collect money, tapi tidak deliver musik atau deliver quality rendah.

**Mitigation**:
- ✅ **Milestone-based fund release**: Dana tidak langsung dikasih full, tapi bertahap (contoh: 50% setelah campaign end, 50% setelah upload final song)
- ✅ **Reputation system**: Artist dengan track record jelek akan susah fundraise lagi (score turun)
- ✅ **Escrow smart contract**: Dana di-hold di smart contract sampai milestone tercapai (investor bisa vote untuk release atau refund jika fraud)
- ✅ **KYC for high-value**: Campaign >Rp 100 juta wajib KYC (identity verification)
- ✅ **Community moderation**: Investor & fans bisa report & review artist performance

---

### Risk 5: Market Competition

**Risk Level**: LOW-MEDIUM

**Description**:
Platform besar (Spotify, YouTube) atau startup lain bisa copycat model TuneCent atau launch similar feature.

**Mitigation**:
- ✅ **First-mover advantage**: Launch aggressively, build network effect (makin banyak user, makin sulit competitor catch up)
- ✅ **Niche focus**: Fokus musik tradisional Indonesia = moat yang kuat (Spotify tidak akan masuk niche ini)
- ✅ **Community-driven**: Build loyal community, bukan cuma transactional platform
- ✅ **Technology moat**: Blockchain smart contract = barrier to entry (not easy to replicate)
- ✅ **Government partnership**: MoU dengan Kemendikbud = endorsement resmi yang sulit di-replicate competitor

---

## 13. FUNDING NEEDS (Beyond BudayaGO)

### Current Stage: Pre-Seed

**Funding Raised to Date**:
- Bootstrapped / Angel investors: Rp [Amount - adjust sesuai actual]

**Funding Needs**:
- **Target**: Rp 5 miliar (USD $350k) Seed Round
- **Valuation**: Rp 30 miliar (USD $2M) pre-money
- **Dilution**: ~15-20% equity

---

### Use of Funds (Rp 5 Miliar Seed Round)

| Category | Amount (IDR) | % | Description |
|---|---|---|---|
| **Product Development** | 2 miliar | 40% | Engineering team (10 engineers), mobile app, AI features, infrastructure |
| **User Acquisition** | 1.5 miliar | 30% | Marketing campaigns, influencer, ads, community building |
| **Operations** | 1 miliar | 20% | Salaries (non-engineering), office, legal, accounting |
| **Legal & Compliance** | 500 juta | 10% | Smart contract audit, legal counsel, licensing, IP protection |

---

### Fundraising Timeline

- **Q2 2025**: BudayaGO competition (potential grant/prize money)
- **Q3 2025**: Angel round (target: Rp 1 miliar dari HNI/angel investors)
- **Q4 2025**: Seed round (target: Rp 5 miliar dari VC: East Ventures, MDI Ventures, AC Ventures, Skystar Capital)
- **Q3 2026**: Series A preparation (after reach 100k users, Rp 1B revenue/month)

---

### Target Investors

**Indonesian VC**:
- East Ventures (early-stage tech)
- MDI Ventures (Telkom corporate VC)
- AC Ventures (focus on Indonesia)
- Intudo Ventures
- Skystar Capital

**Global Crypto VC**:
- Coinbase Ventures
- Pantera Capital
- Animoca Brands (Web3 gaming & NFT)
- Flow Foundation (ecosystem grant)

**Strategic Angels**:
- Musicians/entertainers dengan fanbase besar (endorsement value)
- Executives dari Spotify, YouTube, TikTok Indonesia
- Government officials (retired) dari Kemendikbud/Kemenparekraf

---

## 14. APPENDIX

### A. Glossary

- **Blockchain**: Teknologi ledger terdistribusi yang immutable (tidak bisa diubah) dan transparent
- **Smart Contract**: Program yang berjalan otomatis di blockchain ketika kondisi tertentu terpenuhi
- **NFT (Non-Fungible Token)**: Aset digital unik yang di-tokenize di blockchain (contoh: musik, art, collectible)
- **IPFS**: InterPlanetary File System - storage terdesentralisasi untuk file besar (audio, video)
- **Royalty**: Pembagian pendapatan dari penjualan/streaming musik ke artist & investor
- **Crowdfunding**: Metode fundraising dengan mengumpulkan dana dari banyak orang (crowd)
- **GMV (Gross Merchandise Value)**: Total nilai transaksi di platform (sebelum dikurangi fee/komisi)
- **Take Rate**: % yang diambil platform dari setiap transaksi
- **LTV (Lifetime Value)**: Total revenue yang dihasilkan dari 1 customer sepanjang lifetime-nya
- **CAC (Customer Acquisition Cost)**: Biaya untuk acquire 1 customer baru (marketing, ads, dll)
- **NPS (Net Promoter Score)**: Metrik customer satisfaction (-100 to +100, >50 = excellent)

---

### B. Data Sources & Research

**Market Size**:
- Bekraf (2024): "Ekonomi Kreatif Sektor Musik Indonesia"
- Statista (2024): "Music Streaming in Indonesia"

**Competitor Analysis**:
- Spotify Indonesia Financial Report
- Kitabisa Annual Report
- Langit Musik press releases

**User Research**:
- Survey 100 musisi tradisional (Q1 2025) - pain points & needs
- Interview 50 fans musik Indonesia - willingness to invest

---

### C. Contact

**Website**: tunecent.id (coming soon)
**Email**: hello@tunecent.id
**Social Media**:
- Instagram: @tunecent.indonesia
- Twitter: @tunecent_id
- TikTok: @tunecent.indonesia

**For Partnership Inquiries**: partnerships@tunecent.id
**For Press/Media**: press@tunecent.id
**For Investment Opportunities**: investors@tunecent.id

---

**Document Version**: 1.0
**Last Updated**: November 5, 2025
**Prepared by**: TuneCent Indonesia Team
**Confidential**: For Internal & Stakeholder Use Only
