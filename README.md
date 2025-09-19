# Rapkology

Rapkology, Next.js (App Router) ve TypeScript ile geliştirilen, rap kültürü odaklı bir içerik platformudur. Blog yazıları, trendler, favoriler ve keşif bölümleriyle zengin bir kullanıcı deneyimi sunar.

## Özellikler
- **Blog listesi ve detay sayfaları**: `app/blog` ve `app/blog/[slug]`
- **Anasayfa bölümleri**: Banner, Ayın Favorileri, Trendler ve Swiper görünümleri
- **React Query entegrasyonu**: `react-query-provider` ile veri yönetimi
- **Mock API ve gerçek API katmanı**: `app/api/blog` ve `lib/api` servisleri
- **Bileşen temelli mimari**: `src/components` ve `src/features` altında modüler yapı

## Teknolojiler
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **React Query**
- **Axios** (API istekleri için)
- **ESLint** + **PostCSS**

## Hızlı Başlangıç
```bash
# Bağımlılıkları kurun
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# http://localhost:3000 adresini açın
```

## Komutlar
```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Production server
npm run lint      # ESLint kontrolü
```

## Proje Yapısı (özet)
```text
src/
  app/
    api/
      blog/route.ts          # Blog için API route (mock/örnek)
    blog/
      page.tsx               # Blog listesi
      [slug]/page.tsx        # Blog detay
    blog-post/page.tsx       # Örnek tekil blog post sayfası
    home/page.tsx            # Anasayfa rotası
    layout.tsx               # Kök layout
    page.tsx                 # Root index
    react-query-provider.tsx # React Query Provider
  components/
    navbar/                  # Navbar bileşenleri
    breadcrumb/              # Breadcrumb
    explore/                 # Keşfet bölümü bileşenleri
  features/
    home/                    # Anasayfa bölümleri ve hook'lar
    blog/                    # Blog liste görünümü ve başlıklar
    blog-details/            # Blog detay hook/görünüm
  lib/
    api/
      endpoints/             # Endpoint sabitleri
      services/              # Axios instance ve API servisleri
    hooks/                   # Genel amaçlı hook'lar
    mockData/                # Örnek/mock veri
    types/                   # Tip tanımları
public/                      # Görseller ve ikonlar
```

## Veri ve API
- Uygulama, `lib/api/services` altındaki Axios instance üzerinden uç noktalara erişir.
- `app/api/blog/route.ts` basit bir blog liste API'si sağlar (lokalde mock veri dönebilir).
- Tipler `lib/types` altında tutulur; uç noktalar `lib/api/endpoints` içinde tanımlıdır.

### Örnek: Blog verisini çekmek
```ts
import { useQuery } from '@tanstack/react-query'
import { getBlogs } from '@/lib/api/services/apiServices'

export function useBlogs() {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
  })
}
```

## Ortam Değişkenleri
- Varsayılan kurulumda zorunlu bir ortam değişkeni gerekmiyor.
- Eğer harici bir API kullanılacaksa `NEXT_PUBLIC_API_BASE_URL` gibi bir değişken tanımlayıp `lib/api/services/instance.ts` içinde kullanabilirsiniz.

## Geliştirme Notları
- Dosya ve klasör adlandırmalarında tutarlılığı koruyun.
- Bileşenleri `features` veya `components` altında modüler olacak şekilde konumlandırın.
- Tipleri `lib/types` altında merkezi olarak yönetin.

## Dağıtım
- Proje, Vercel üzerinde zahmetsizce dağıtılabilir.
- Production build için:
```bash
npm run build
npm run start
```

## Katkıda Bulunma
1. Issue açın veya mevcut bir issue üzerine atama alın
2. Yeni bir dal oluşturun: `git checkout -b feat/ozellik-adi`
3. Değişiklikleri yapın ve test edin
4. Lint kontrolünden geçirin: `npm run lint`
5. PR açın ve açıklayıcı bir özet ekleyin

## Lisans
Bu proje için lisans belirtilmemiştir. Gerekli görülürse `LICENSE` dosyası eklenebilir.
