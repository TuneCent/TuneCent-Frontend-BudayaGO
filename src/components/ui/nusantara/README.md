# Nusantara UI Component Library

Komponen UI dengan sentuhan budaya Indonesia untuk TuneCent Indonesia platform.

## 🎨 Components

### 1. NusantaraCard

Card component dengan motif tradisional Indonesia.

```tsx
import { NusantaraCard } from '@/components/ui/nusantara';

// Basic usage
<NusantaraCard>
  <h3>Judul</h3>
  <p>Konten...</p>
</NusantaraCard>

// With variant and pattern
<NusantaraCard
  variant="premium"
  pattern="songket"
  hoverable={true}
>
  <h3>Premium Content</h3>
</NusantaraCard>
```

**Props:**
- `variant`: 'default' | 'premium' | 'bordered'
- `pattern`: 'kawung' | 'songket' | 'none'
- `hoverable`: boolean (default: true)
- `className`: string

---

### 2. NusantaraButton

Button dengan gradient merah-emas khas Indonesia.

```tsx
import { NusantaraButton } from '@/components/ui/nusantara';

// Primary button
<NusantaraButton
  variant="primary"
  size="lg"
  onClick={handleClick}
>
  Mulai Berkarya
</NusantaraButton>

// Outline button
<NusantaraButton
  variant="outline"
  fullWidth
>
  Pelajari Lebih Lanjut
</NusantaraButton>

// Premium button with songket pattern
<NusantaraButton variant="premium">
  Langganan Premium
</NusantaraButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'premium'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `fullWidth`: boolean
- `type`: 'button' | 'submit' | 'reset'

---

### 3. BatikBackground

Background wrapper dengan pattern batik.

```tsx
import { BatikBackground } from '@/components/ui/nusantara';

// Hero section with batik
<BatikBackground
  pattern="mega-mendung"
  overlay
  overlayOpacity={0.9}
>
  <h1>Selamat Datang di TuneCent Indonesia</h1>
</BatikBackground>

// Section with kawung pattern
<BatikBackground pattern="kawung" overlay={false}>
  <div>Content without overlay</div>
</BatikBackground>
```

**Props:**
- `pattern`: 'mega-mendung' | 'kawung' | 'songket'
- `overlay`: boolean (default: true)
- `overlayOpacity`: number (0-1, default: 0.95)
- `className`: string

---

### 4. GorgaDivider

Divider dengan motif Gorga Batak.

```tsx
import { GorgaDivider } from '@/components/ui/nusantara';

// Section separator
<section>Content 1</section>
<GorgaDivider spacing="lg" />
<section>Content 2</section>
```

**Props:**
- `spacing`: 'sm' | 'md' | 'lg'
- `className`: string

---

### 5. NusantaraIcon

Icon wrapper untuk custom icon set.

```tsx
import { NusantaraIcon } from '@/components/ui/nusantara';

// Music icon
<NusantaraIcon name="gamelan-icon" size={32} />

// User profile icon
<NusantaraIcon name="wayang-user" size={48} />

// Premium crown
<NusantaraIcon name="mahkota-crown" size={24} />
```

**Available Icons:**
- `angklung-note` - Music note dengan bentuk angklung
- `wayang-user` - User profile dengan silhouette wayang
- `joglo-home` - Home/dashboard dengan rumah joglo
- `anyaman-wallet` - Wallet dengan texture anyaman rotan
- `melati-heart` - Heart/like dengan bunga melati
- `gamelan-icon` - Gamelan gong
- `mahkota-crown` - Crown untuk premium tier

**Props:**
- `name`: Icon name (see list above)
- `size`: number (default: 24)
- `className`: string
- `alt`: string (optional)

---

## 🎨 Design Tokens

### Colors (CSS Variables)

```css
/* Primary Colors */
var(--color-merah-kebangsaan)  /* #DC1F26 - Red */
var(--color-emas-nusantara)    /* #D4AF37 - Gold */
var(--color-coklat-jati)       /* #6B4423 - Brown */

/* Secondary Colors */
var(--color-hijau-pandan)      /* #2D5016 - Green */
var(--color-biru-laut)         /* #1B4B5A - Blue */
var(--color-oranye-terracotta) /* #D2691E - Orange */

/* Neutral Colors */
var(--color-krem-lontar)       /* #F5E6D3 - Cream */
var(--color-hitam-ebony)       /* #1A0F0F - Black */
var(--color-putih-kapas)       /* #FFFEF7 - White */
```

### Spacing

```css
var(--spacing-xs)  /* 0.556vw */
var(--spacing-sm)  /* 1.111vw */
var(--spacing-md)  /* 2.222vw */
var(--spacing-lg)  /* 3.333vw */
var(--spacing-xl)  /* 4.444vw */
```

### Shadows

```css
var(--shadow-sm)  /* Subtle shadow */
var(--shadow-md)  /* Medium shadow */
var(--shadow-lg)  /* Large shadow */
var(--shadow-xl)  /* Extra large shadow */
```

---

## 🎭 Utility Classes

### Background Patterns

```tsx
<div className="bg-batik-mega-mendung">...</div>
<div className="bg-kawung-pattern">...</div>
<div className="bg-songket-pattern">...</div>
```

### Gradients

```tsx
<div className="bg-gradient-hero">...</div>
<div className="bg-gradient-premium">...</div>
<div className="bg-gradient-success">...</div>
```

### Text Gradients

```tsx
<h1 className="text-gradient-emas">Golden Text</h1>
<h2 className="text-gradient-merah">Red Gradient</h2>
```

### Effects

```tsx
<div className="shadow-wayang">...</div>
<div className="border-ukiran">...</div>
<div className="loading-angklung">...</div>
```

---

## 📦 Complete Example

```tsx
import {
  NusantaraCard,
  NusantaraButton,
  BatikBackground,
  GorgaDivider,
  NusantaraIcon
} from '@/components/ui/nusantara';

export default function HomePage() {
  return (
    <BatikBackground pattern="mega-mendung" overlay>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gradient-emas mb-4">
            Selamat Datang di TuneCent Indonesia
          </h1>
          <p className="text-lg mb-8">
            Platform crowdfunding musik berbasis blockchain untuk musisi Nusantara
          </p>
          <div className="flex gap-4 justify-center">
            <NusantaraButton variant="primary" size="lg">
              Mulai Berkarya
            </NusantaraButton>
            <NusantaraButton variant="outline" size="lg">
              Pelajari Lebih Lanjut
            </NusantaraButton>
          </div>
        </section>

        <GorgaDivider spacing="lg" />

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NusantaraCard variant="default" pattern="kawung">
            <NusantaraIcon name="gamelan-icon" size={48} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Musik Tradisional</h3>
            <p>Dukung pelestarian musik Nusantara</p>
          </NusantaraCard>

          <NusantaraCard variant="premium" pattern="songket">
            <NusantaraIcon name="mahkota-crown" size={48} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Features</h3>
            <p>Akses eksklusif konten dan event</p>
          </NusantaraCard>

          <NusantaraCard variant="bordered">
            <NusantaraIcon name="anyaman-wallet" size={48} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Royalti Otomatis</h3>
            <p>Smart contract blockchain transparan</p>
          </NusantaraCard>
        </section>
      </div>
    </BatikBackground>
  );
}
```

---

## 🎯 Best Practices

1. **Consistency**: Always use Nusantara components untuk maintain consistency
2. **Accessibility**: Semua components sudah include ARIA attributes
3. **Responsive**: Components sudah responsive by default
4. **Performance**: Pattern backgrounds optimized (opacity & size)
5. **Theming**: Use CSS variables untuk easy customization

---

## 📚 Resources

- Design System Doc: `/docs/DESIGN_SYSTEM_NUSANTARA.md`
- Pattern Assets: `/public/assets/patterns/`
- Icon Assets: `/public/assets/icons/nusantara/`
- Global Styles: `/src/app/globals.css`

---

**Version**: 1.0.0
**Last Updated**: November 5, 2025
**Maintained by**: TuneCent Indonesia Design Team
