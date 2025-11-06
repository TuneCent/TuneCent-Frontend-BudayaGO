# Nusantara Design Language
## Sistem Desain TuneCent Indonesia

> "Teknologi Modern dengan Jiwa Tradisional"

---

## 🎨 Philosophy

Nusantara Design Language adalah sistem desain yang menggabungkan estetika budaya Indonesia dengan prinsip-prinsip modern UI/UX. Tujuannya adalah menciptakan pengalaman digital yang familiar bagi pengguna Indonesia, sambil merayakan kekayaan warisan budaya Nusantara.

### Prinsip Desain:

1. **Authenticity** - Menggunakan elemen budaya asli Indonesia, bukan sekadar dekorasi
2. **Accessibility** - Mudah dipahami semua kalangan, dari musisi tradisional hingga generasi digital
3. **Modern Tradition** - Balance antara teknologi blockchain modern dan estetika klasik
4. **Warmth** - Nuansa hangat dan ramah khas budaya Indonesia
5. **Pride** - Membangkitkan rasa bangga terhadap budaya lokal

---

## 🌈 Color Palette

### Primary Colors

#### Merah Kebangsaan
```
HEX: #DC1F26
RGB: 220, 31, 38
Usage: CTA buttons, important alerts, brand accent
Filosofi: Warna merah pada bendera Indonesia, melambangkan keberanian dan semangat
```

#### Emas Nusantara
```
HEX: #D4AF37
RGB: 212, 175, 55
Usage: Premium features, success states, highlights
Filosofi: Warna emas gamelan dan batik cap, melambangkan kemakmuran dan nilai tinggi
```

#### Coklat Kayu Jati
```
HEX: #6B4423
RGB: 107, 68, 35
Usage: Text, borders, wooden UI elements
Filosofi: Kayu alat musik tradisional (angklung, gamelan), melambangkan kekuatan dan ketahanan
```

### Secondary Colors

#### Hijau Pandan
```
HEX: #2D5016
RGB: 45, 80, 22
Usage: Success messages, nature-related content, growth indicators
Filosofi: Hijau daun lontar dan alam Indonesia, melambangkan pertumbuhan dan kehidupan
```

#### Biru Laut Nusantara
```
HEX: #1B4B5A
RGB: 27, 75, 90
Usage: Links, info states, trust elements
Filosofi: Laut yang menghubungkan kepulauan Indonesia, melambangkan koneksi dan kepercayaan
```

#### Oranye Terracotta
```
HEX: #D2691E
RGB: 210, 105, 30
Usage: Warnings, active states, warm accents
Filosofi: Gerabah dan keramik tradisional, melambangkan kerajinan dan kehangatan
```

### Neutral Colors

#### Krem Lontar
```
HEX: #F5E6D3
RGB: 245, 230, 211
Usage: Backgrounds, cards, light surfaces
Filosofi: Warna kertas lontar kuno, melambangkan wisdom dan heritage
```

#### Hitam Ebony
```
HEX: #1A0F0F
RGB: 26, 15, 15
Usage: Primary text, dark surfaces
Filosofi: Kayu ebony Papua yang langka, melambangkan kedalaman dan nilai
```

#### Putih Kapas
```
HEX: #FFFEF7
RGB: 255, 254, 247
Usage: White backgrounds, clean spaces
Filosofi: Kain tradisional putih, melambangkan kesucian dan kesederhanaan
```

### Gradient Combinations

```css
/* Hero Gradient */
background: linear-gradient(135deg, #DC1F26 0%, #D2691E 100%);

/* Premium Gradient */
background: linear-gradient(135deg, #D4AF37 0%, #D2691E 100%);

/* Success Gradient */
background: linear-gradient(135deg, #2D5016 0%, #D4AF37 100%);

/* Card Hover Gradient */
background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(220, 31, 38, 0.05) 100%);
```

---

## 🔤 Typography

### Font Families

#### Heading Font: Plus Jakarta Sans
```css
font-family: 'Plus Jakarta Sans', sans-serif;
```
- **Alasan**: Font modern dari Indonesia (Jakarta-based foundry)
- **Lisensi**: Open Font License
- **Usage**: H1, H2, H3, H4, H5, H6, Buttons
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)

#### Body Font: Inter
```css
font-family: 'Inter', system-ui, sans-serif;
```
- **Alasan**: Excellent legibility, optimal untuk reading
- **Usage**: Body text, paragraphs, descriptions
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold)

#### Monospace Font: JetBrains Mono
```css
font-family: 'JetBrains Mono', monospace;
```
- **Usage**: Code snippets, wallet addresses, technical data
- **Weights**: 400 (Regular), 500 (Medium)

### Type Scale

```css
/* Headings */
--font-size-h1: 3.5rem;    /* 56px */
--font-size-h2: 2.5rem;    /* 40px */
--font-size-h3: 2rem;      /* 32px */
--font-size-h4: 1.5rem;    /* 24px */
--font-size-h5: 1.25rem;   /* 20px */
--font-size-h6: 1rem;      /* 16px */

/* Body */
--font-size-base: 1rem;         /* 16px */
--font-size-lg: 1.125rem;       /* 18px */
--font-size-sm: 0.875rem;       /* 14px */
--font-size-xs: 0.75rem;        /* 12px */

/* Line Heights */
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

---

## 🎭 Motif & Patterns

### 1. Batik Mega Mendung (Cirebon)
**File**: `public/assets/patterns/batik-mega-mendung.svg`

**Usage**:
- Background hero section
- Large decorative elements
- Landing page headers

**Karakteristik**:
- Motif awan spiral khas Cirebon
- Gradasi warna merah → oranye
- Opacity 10-15% untuk background

### 2. Kawung Pattern (Jawa)
**File**: `public/assets/patterns/kawung-pattern.svg`

**Usage**:
- Card backgrounds
- Subtle texture untuk containers
- Dashboard sections

**Karakteristik**:
- Lingkaran berpotongan membentuk 4 petal
- Geometris dan repetitif
- Melambangkan keadilan dan kesempurnaan

### 3. Gorga Batak (Sumatera Utara)
**File**: `public/assets/patterns/gorga-batak.svg`

**Usage**:
- Dividers (horizontal lines)
- Section separators
- Border decorations

**Karakteristik**:
- Ukiran linear dengan motif flora/fauna stylized
- Digunakan sebagai accent line
- Warna emas atau coklat kayu

### 4. Songket Pattern (Sumatera)
**File**: `public/assets/patterns/songket-pattern.svg`

**Usage**:
- Premium features background
- Subscription tier cards
- Special event banners

**Karakteristik**:
- Motif benang emas berkilau
- Tekstur mewah dan elegan
- Gradasi emas dengan detail halus

### 5. Asmat Papua
**File**: `public/assets/patterns/asmat-papua.svg`

**Usage**:
- Decorative elements
- Side panel decorations
- Cultural diversity representation

**Karakteristik**:
- Motif tribal Papua yang khas
- Bentuk geometris abstrak
- Melambangkan kekuatan dan spiritualitas

---

## 🎨 Custom Iconography

### Icon Set Nusantara

Semua ikon tersedia di `public/assets/icons/nusantara/`

1. **angklung-note.svg** - Music note dengan bentuk angklung
2. **gamelan-icon.svg** - Gong atau saron stylized
3. **wayang-user.svg** - Silhouette wayang kulit untuk user
4. **joglo-home.svg** - Rumah joglo untuk home/dashboard
5. **anyaman-wallet.svg** - Wallet dengan texture anyaman rotan
6. **melati-heart.svg** - Heart dengan petal bunga melati
7. **candi-chart.svg** - Chart dengan bentuk piramida candi
8. **mahkota-crown.svg** - Mahkota Jawa untuk premium
9. **gunungan-shield.svg** - Shield gunungan wayang untuk security
10. **keris-star.svg** - Star dengan handle keris untuk featured

---

## 🧩 UI Components

### Buttons

#### Primary Button
```tsx
<button className="
  px-6 py-3
  bg-gradient-to-r from-merah-kebangsaan to-emas-nusantara
  text-putih-kapas font-semibold rounded-lg
  shadow-lg hover:shadow-xl
  hover:scale-105
  transition-all duration-300
">
  Mulai Berkarya
</button>
```

#### Secondary Button
```tsx
<button className="
  px-6 py-3
  border-2 border-coklat-jati
  text-coklat-jati
  hover:bg-coklat-jati hover:text-putih-kapas
  rounded-lg transition-all duration-300
">
  Pelajari Lebih Lanjut
</button>
```

### Cards

```tsx
<div className="
  bg-krem-lontar rounded-xl p-6
  shadow-lg hover:shadow-xl
  hover:-translate-y-2
  transition-all duration-300
  border border-coklat-jati/20
">
  {/* Content */}
</div>
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile: < 640px (default) */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
/* 2xl: 1536px */
```

---

**Version**: 1.0.0
**Last Updated**: 2025-11-05
**Maintained by**: TuneCent Indonesia Design Team
