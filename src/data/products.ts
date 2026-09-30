import { Product, Category, Brand, Story, BeautyArticle } from '../types';
import {
  heroLipstick,
  heroSerum,
  heroPerfume,
  categoryFaceMakeup,
  categoryEyeMakeup,
  categoryHaircare,
  productEyeshadowPalette,
  productSunscreen,
  productArganOil,
  productCleanser,
  productLipstickVelvet,
  productBlush,
  productPerfumeGallery,
  brandCallista,
  brandMy,
  brandLoreal,
  brandCinere,
  brandComeon,
  brandHudaBeauty,
} from '../assets/images';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'آرایشی صورت',
    slug: 'face-makeup',
    iconName: 'Sparkles',
    image: categoryFaceMakeup,
    description: 'انواع کرم پودر، پنکیک، پرایمر، کانسیلر و رژگونه',
    subcategories: [
      { id: '1-1', name: 'کرم پودر و BB کرم', slug: 'foundation' },
      { id: '1-2', name: 'کانسیلر و پرایمر', slug: 'concealer-primer' },
      { id: '1-3', name: 'پنکیک و پودر تثبیت کننده', slug: 'powder' },
      { id: '1-4', name: 'رژگونه و هایلایتر', slug: 'blush-highlighter' },
      { id: '1-5', name: 'کانتور و برنزر', slug: 'contour' }
    ]
  },
  {
    id: '2',
    name: 'آرایش لب',
    slug: 'lip-makeup',
    iconName: 'Heart',
    image: heroLipstick,
    description: 'رژ لب‌های جامد، مایع، برق لب، خط لب و بالم لب',
    subcategories: [
      { id: '2-1', name: 'رژ لب جامد', slug: 'solid-lipstick' },
      { id: '2-2', name: 'رژ لب مایع مات و براق', slug: 'liquid-lipstick' },
      { id: '2-3', name: 'بالم لب و مرطوب کننده', slug: 'lip-balm' },
      { id: '2-4', name: 'خط لب (مداد لب)', slug: 'lip-liner' },
      { id: '2-5', name: 'تینت لب و برق لب', slug: 'lip-tint' }
    ]
  },
  {
    id: '3',
    name: 'آرایش چشم و ابرو',
    slug: 'eye-makeup',
    iconName: 'Eye',
    image: categoryEyeMakeup,
    description: 'ریمل، خط چشم، سایه چشم، ژل ابرو و مداد ابرو',
    subcategories: [
      { id: '3-1', name: 'ریمل حجم دهنده و بلندکننده', slug: 'mascara' },
      { id: '3-2', name: 'خط چشم کوزه ای و ژلی', slug: 'eyeliner' },
      { id: '3-3', name: 'پالت سایه چشم', slug: 'eyeshadow' },
      { id: '3-4', name: 'صابون و ژل لیفت ابرو', slug: 'eyebrow-gel' },
      { id: '3-5', name: 'مداد و مداد ابرو', slug: 'eyebrow-pencil' }
    ]
  },
  {
    id: '4',
    name: 'مراقبت پوست',
    slug: 'skincare',
    iconName: 'Droplets',
    image: heroSerum,
    description: 'سرم‌های تخصصی، ضدآفتاب، آبرسان، ماسک و شوینده صورت',
    subcategories: [
      { id: '4-1', name: 'کرم ضد آفتاب بی‌رنگ و رنگی', slug: 'sunscreen' },
      { id: '4-2', name: 'سرم ویتامین C و هیالورونیک اسید', slug: 'serums' },
      { id: '4-3', name: 'کرم مرطوب کننده و آبرسان', slug: 'moisturizer' },
      { id: '4-4', name: 'ژل شوینده و میسلار واتر', slug: 'cleanser' },
      { id: '4-5', name: 'ماسک صورت ورقه ای و کاسه‌ای', slug: 'face-mask' }
    ]
  },
  {
    id: '5',
    name: 'مراقبت و زیبایی مو',
    slug: 'haircare',
    iconName: 'Scissors',
    image: categoryHaircare,
    description: 'شامپو، ماسک مو بدون آبکشی، روغن آرگان و اسپری مو',
    subcategories: [
      { id: '5-1', name: 'شامپو فری سولفات و تخصصی', slug: 'shampoo' },
      { id: '5-2', name: 'ماسک مو و نرم کننده', slug: 'hair-mask' },
      { id: '5-3', name: 'روغن آرگان و سرم مو', slug: 'hair-oil' },
      { id: '5-4', name: 'اسپری محافظت حرارتی', slug: 'heat-protectant' }
    ]
  },
  {
    id: '6',
    name: 'عطر و ادکلن',
    slug: 'perfume',
    iconName: 'Gift',
    image: heroPerfume,
    description: 'ادکلن زنانه، مردانه، بادی اسپلش و عطر جیبی',
    subcategories: [
      { id: '6-1', name: 'عطر و ادو پرفوم زنانه', slug: 'women-perfume' },
      { id: '6-2', name: 'ادو تویلت و ادکلن مردانه', slug: 'men-perfume' },
      { id: '6-3', name: 'بادی اسپلش و لوشن معطر', slug: 'body-splash' },
      { id: '6-4', name: 'عطر مینیاتوری و جیبی', slug: 'pocket-perfume' }
    ]
  }
];

export const BRANDS: Brand[] = [
  {
    id: 'b1',
    name: 'Callista',
    persianName: 'کالیستا',
    logo: brandCallista,
    banner: productLipstickVelvet,
    description: 'رنگ‌های شاداب و ماندگار برای بانوان جوان و خوش‌سلیقه',
    country: 'ایران (تحت لیسانس)'
  },
  {
    id: 'b2',
    name: 'MY Cosmetics',
    persianName: 'مای',
    logo: brandMy,
    banner: categoryFaceMakeup,
    description: 'محبوب‌ترین برند تخصصی مراقبت پوست و لوازم آرایشی',
    country: 'ایران / آلمان'
  },
  {
    id: 'b3',
    name: 'L\'Oréal Paris',
    persianName: 'لورآل پاریس',
    logo: brandLoreal,
    banner: productEyeshadowPalette,
    description: 'برند فرانسوی پیشرو در صنعت زیبایی، لوکس و کیفیت جهانی',
    country: 'فرانسه'
  },
  {
    id: 'b4',
    name: 'Cinere',
    persianName: 'سینره',
    logo: brandCinere,
    banner: heroSerum,
    description: 'دانش‌بنیان، گیاهی و تخصصی سلامت پوست و مو',
    country: 'ایران'
  },
  {
    id: 'b5',
    name: 'Comeon',
    persianName: 'کامان',
    logo: brandComeon,
    banner: productArganOil,
    description: 'فرمولاسیون سوئیسی، آبرسانی عمیق و طراوت بخش',
    country: 'سوئیس / ایران'
  },
  {
    id: 'b6',
    name: 'Huda Beauty',
    persianName: 'هدی بیوتی',
    logo: brandHudaBeauty,
    banner: categoryEyeMakeup,
    description: 'پالت‌های حرفه‌ای، پیگمنت فوق‌العاده و لوکس جهانی',
    country: 'امارات متحده عربی'
  }
];

export const STORIES: Story[] = [
  {
    id: 's1',
    title: 'تخفیف شگفت‌انگیز',
    badge: 'تا ۷۰٪',
    image: heroLipstick,
    contentTitle: '⚡ پیشنهادهای طلایی رژ لب و آرایش لب',
    description: 'تخفیف‌های استثنایی خوش لبخند برای تمامی رژ لب‌های جامد و مایع با گارانتی اصالت!'
  },
  {
    id: 's2',
    title: 'تست رژلب',
    badge: 'ویدیو',
    image: productLipstickVelvet,
    contentTitle: '💄 تست آنلاین رنگ‌های سری Velvet کالیستا',
    description: 'رنگ‌های گرم نود، قرمز کلاسیک و کالباسی روی ۵ طیف پوستی مختلف.'
  },
  {
    id: 's3',
    title: 'روتین پوستی',
    badge: 'آموزش',
    image: heroSerum,
    contentTitle: '💧 روتین آبرسانی پوست در ۳ گام ساده',
    description: 'چگونه پوست دهیدراته را در ۷ روز با سرم هیالورونیک اسید به درخشندگی برسانیم؟'
  },
  {
    id: 's4',
    title: 'جدیدترین‌ها',
    badge: 'نیو',
    image: heroPerfume,
    contentTitle: '✨ ورود عطرهای لوکس فرانسوی به خوش لبخند',
    description: 'کلکسیون بهاره عطرهای زنانه و مردانه با تخفیف رونمایی اختصاصی.'
  },
  {
    id: 's5',
    title: 'راز مژه‌ها',
    badge: 'میکاپ',
    image: categoryEyeMakeup,
    contentTitle: '👁️ ۵ ترفند زدن ریمل برای حجیم‌ترین مژه‌ها',
    description: 'چگونه بدون چسبیدن مژه‌ها به هم، حجمی ۳ برابری به چشمانتان ببخشید؟'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'رژ لب جامد کالیستا مدل Glam Touch',
    englishTitle: 'Callista Glam Touch Solid Lipstick',
    brand: 'کالیستا',
    category: 'آرایش لب',
    categorySlug: 'solid-lipstick',
    price: 185000,
    originalPrice: 280000,
    discountPercent: 34,
    rating: 4.8,
    reviewCount: 342,
    image: heroLipstick,
    images: [
      heroLipstick,
      productLipstickVelvet,
      productBlush
    ],
    colors: [
      { name: 'قرمز یاقوتی L11', hex: '#be123c', code: 'L11' },
      { name: 'کالباسی ملایم L12', hex: '#e11d48', code: 'L12' },
      { name: 'نود گوشتی L14', hex: '#b45309', code: 'L14' },
      { name: 'صورتی ارغوانی L16', hex: '#db2777', code: 'L16' }
    ],
    tags: ['رژ لب', 'کالیستا', 'ارایشی لب', 'ماندگار'],
    stock: 14,
    isBestSeller: true,
    isIncredibleOffer: true,
    description: 'رژ لب جامد کالیستا با بافتی نرم، مخملی و سبک، به لب‌های شما جلایی مات و جذاب می‌بخشد. این محصول دارای ویتامین E و موم عسل بوده که از خشکی لب جلوگیری کرده و رطوبت طبیعی آن را حفظ می‌کند.',
    features: [
      { key: 'بافت', value: 'کرمی و مخملی بسیار سبک' },
      { key: 'ماندگاری', value: 'تا ۱۲ ساعت بدون پوسته شدن' },
      { key: 'ویتامین', value: 'حاوی ویتامین E و روغن‌های مغذی' },
      { key: 'پوشش دهی', value: 'یکنواخت و پیگمنت بالا' },
      { key: 'اصالت کالا', value: '۱۰۰٪ اصل با برچسب شبنم' }
    ],
    usage: 'به آرامی روی لب‌های تمیز از مرکز لب به سمت اطراف بکشید.',
    comments: [
      { id: 'c1', userName: 'سارا ملکی', rating: 5, date: '۱۴۰۳/۰۲/۱۵', comment: 'رنگ L12 عاااالیه! دقیقا همون کالباسی خیلی خوشرنگیه که دنبالش بودم. بافتش اصلا سنگین نیست.', isVerified: true, likes: 24 },
      { id: 'c2', userName: 'مریم حسینی', rating: 5, date: '۱۴۰۳/۰۲/۱۰', comment: 'بوی خیلی خوبی داره و لب رو خشک نمیکنه. مرسی از ارسال سریع خوش لبخند!', isVerified: true, likes: 18 }
    ]
  },
  {
    id: 'p2',
    title: 'سرم هیالورونیک اسید آبرسان عمیق لورآل 30ml',
    englishTitle: 'L\'Oréal Paris Revitalift 1.5% Pure Hyaluronic Acid Serum',
    brand: 'لورآل پاریس',
    category: 'مراقبت پوست',
    categorySlug: 'serums',
    price: 690000,
    originalPrice: 950000,
    discountPercent: 27,
    rating: 4.9,
    reviewCount: 512,
    image: heroSerum,
    images: [
      heroSerum,
      productArganOil,
      productCleanser
    ],
    tags: ['سرم صورت', 'لورآل', 'هیالورونیک اسید', 'آبرسان', 'ضد چروک'],
    stock: 8,
    isBestSeller: true,
    isIncredibleOffer: true,
    skinType: 'مناسب انواع پوست، به ویژه پوست‌های خشک و کم‌آب',
    volume: '۳۰ میلی‌لیتر',
    description: 'سرم آبرسان لورآل حاوی ۱.۵ درصد هیالورونیک اسید خالص است. این محصول چروک‌های سطحی را تا ۴۷٪ کاهش داده و با جذب سریع، پوستی شاداب، پر و جوان برای شما به ارمغان می‌آورد.',
    features: [
      { key: 'حجم', value: '۳۰ میلی‌لیتر' },
      { key: 'ترکیب اصلی', value: '۱.۵٪ هیالورونیک اسید دوگانه' },
      { key: 'ویژگی', value: 'پرکننده خطوط ریز و شفاف‌کننده پوست' },
      { key: 'بافت', value: 'ژلی سبک و جذب آنی بدون احساس چربی' },
      { key: 'کشور سازنده', value: 'فرانسه' }
    ],
    usage: 'روزانه دو بار (صبح و شب) چند قطره روی پوست تمیز صورت و گردن ماساژ دهید.',
    comments: [
      { id: 'c3', userName: 'پریسا نوری', rating: 5, date: '۱۴۰۳/۰۲/۱۸', comment: 'بعد از ۲ هفته استفاده پوستم کلا شفاف شده و التهابش خوابیده. واقعا ارزش خرید داره.', isVerified: true, likes: 45 },
      { id: 'c4', userName: 'الناز عباسی', rating: 4, date: '۱۴۰۳/۰۲/۱۲', comment: 'اصلا چسبناک نیست و زیر کرم پودر عالی جواب میده.', isVerified: true, likes: 12 }
    ]
  },
  {
    id: 'p3',
    title: 'کرم پودر مات و مات‌کننده مای مدل Velvet Finish',
    englishTitle: 'MY Cosmetics Velvet Finish Foundation 30ml',
    brand: 'مای',
    category: 'آرایشی صورت',
    categorySlug: 'foundation',
    price: 240000,
    originalPrice: 380000,
    discountPercent: 37,
    rating: 4.7,
    reviewCount: 289,
    image: categoryFaceMakeup,
    images: [
      categoryFaceMakeup,
      productEyeshadowPalette
    ],
    colors: [
      { name: 'عاجی روشن F01', hex: '#fde047', code: 'F01' },
      { name: 'بژ طبیعی F02', hex: '#fcd34d', code: 'F02' },
      { name: 'بژ گندمی F03', hex: '#fbbf24', code: 'F03' },
      { name: 'برنز طبیعی F04', hex: '#d97706', code: 'F04' }
    ],
    tags: ['کرم پودر', 'مای', 'کرم صورت', 'پوشش مات'],
    stock: 22,
    isBestSeller: true,
    isIncredibleOffer: true,
    skinType: 'مناسب پوست‌های چرب و مختلط',
    volume: '۳۵ میلی‌لیتر',
    description: 'کرم پودر ولوت مای با فرمولاسیون فاقد چربی (Oil-Free)، کاور فوق‌العاده‌ای روی منافذ و لک‌های پوستی ایجاد کرده و جلوی براق شدن پوست را تا ۲۴ ساعت می‌گیرد.',
    features: [
      { key: 'پوشش‌دهی', value: 'کاور بالا و یکدست' },
      { key: 'فینیش', value: 'مات طبیعی و مخملی' },
      { key: 'SPF', value: 'SPF 15 برای محافظت در برابر آفتاب' },
      { key: 'فرمولاسیون', value: 'سبک و فاقد چربی' }
    ],
    comments: [
      { id: 'c5', userName: 'نیلوفر رضایی', rating: 5, date: '۱۴۰۳/۰۲/۰۱', comment: 'برای پوست چرب حرف نداره، اصلاً برق نمی‌افته.', isVerified: true, likes: 30 }
    ]
  },
  {
    id: 'p4',
    title: 'ریمل حجم دهنده و بلندکننده کالیستا مدل Wonder Volume',
    englishTitle: 'Callista Wonder Volume Mascara',
    brand: 'کالیستا',
    category: 'آرایش چشم و ابرو',
    categorySlug: 'mascara',
    price: 198000,
    originalPrice: 290000,
    discountPercent: 32,
    rating: 4.8,
    reviewCount: 680,
    image: categoryEyeMakeup,
    images: [
      categoryEyeMakeup,
      categoryHaircare
    ],
    tags: ['ریمل', 'کالیستا', 'ریمل حجم دهنده', 'آرایش چشم'],
    stock: 19,
    isBestSeller: true,
    isIncredibleOffer: true,
    description: 'ریمل واندر ژن کالیستا با فرچه ژلی و دندانه‌های دقیق، مژه‌ها را تک به تک جدا کرده و حجم و طولی فوق‌العاده به آن‌ها می‌بخشد بدون آنکهزیر چشم ریزش داشته باشد.',
    features: [
      { key: 'برس', value: 'برس مویی دقیق با تکنولوژی ۳D' },
      { key: 'خاصیت', value: 'حجم دهنده، بلند کننده و مشکی‌کننده عمیق' },
      { key: 'ریزش', value: 'بدون سیاهی زیر چشم و با ماندگاری بالا' },
      { key: 'شستشو', value: 'پاک شدن آسان با آب گرم یا میسلار' }
    ],
    comments: [
      { id: 'c6', userName: 'زهرا کاظمی', rating: 5, date: '۱۴۰۳/۰۲/۱۴', comment: 'چندمین باره خریدمش! واقعا مژه‌ها رو پر و بلند میکنه و اصلاً میریزه.', isVerified: true, likes: 52 }
    ]
  },
  {
    id: 'p5',
    title: 'ادو پرفوم زنانه دیور ژادور خوش لبخند 100ml',
    englishTitle: 'Dior J\'adore Eau De Parfum 100ml',
    brand: 'لورآل پاریس',
    category: 'عطر و ادکلن',
    categorySlug: 'women-perfume',
    price: 2450000,
    originalPrice: 3200000,
    discountPercent: 23,
    rating: 5.0,
    reviewCount: 142,
    image: heroPerfume,
    images: [
      heroPerfume,
      productPerfumeGallery
    ],
    tags: ['عطر زنانه', 'ادکلن', 'عطر فرانسوی', 'دیور'],
    stock: 5,
    isBestSeller: false,
    isIncredibleOffer: true,
    volume: '۱۰۰ میلی‌لیتر',
    description: 'عطری نمادین با رایحه‌ای ملایم، شیرین و گل‌دار. ترکیبی شگفت‌انگیز از گل رز، یاسمن و هلو که نماد شکوه و زنانگی در سراسر جهان است.',
    features: [
      { key: 'رایحه', value: 'گل‌دار و میوه‌ای شیرین' },
      { key: 'پخش بو', value: 'بسیار بالا و ماندگاری بیش از ۲۴ ساعت' },
      { key: 'فصل', value: 'مناسب چهار فصل به ویژه بهار و پاییز' },
      { key: 'کشور', value: 'فرانسه' }
    ],
    comments: [
      { id: 'c7', userName: 'شیوا احمدی', rating: 5, date: '۱۴۰۳/۰۱/۲۵', comment: 'بوی لوکس و بی‌نظیری داره. بسته‌بندی خوش لبخند هم فوق‌العاده عالی بود.', isVerified: true, likes: 33 }
    ]
  },
  {
    id: 'p6',
    title: 'کرم ضد آفتاب بی‌رنگ سینره +SPF50 مناسب پوست چرب',
    englishTitle: 'Cinere Oil-Free Sunscreen Cream SPF50+ 50ml',
    brand: 'سینره',
    category: 'مراقبت پوست',
    categorySlug: 'sunscreen',
    price: 215000,
    originalPrice: 310000,
    discountPercent: 30,
    rating: 4.7,
    reviewCount: 420,
    image: productSunscreen,
    images: [
      productSunscreen
    ],
    tags: ['ضد آفتاب', 'سینره', 'پوست چرب', 'ضد آفتاب بی‌رنگ'],
    stock: 30,
    isBestSeller: true,
    isIncredibleOffer: false,
    skinType: 'پوست چرب، مختلط و مستعد جوش',
    volume: '۵۰ میلی‌لیتر',
    description: 'ضد آفتاب سینره با ساختاری سبُک و فاقد چربی، محافظت کاملی در برابر اشعه‌های UVA و UVB ایجاد می‌کند. بدون باقی گذاشتن سفیدی روی پوست، آن را مات نگه می‌دارد.',
    features: [
      { key: 'محافظت', value: 'SPF50+ با فیلترهای پیشرفته UVA/UVB' },
      { key: 'بافت', value: 'بسیار سبک و جذب سریع بدون رد سفیدی' },
      { key: 'جلوگیری', value: 'مقاوم در برابر تعریق و ایجاد جوش' }
    ],
    comments: [
      { id: 'c8', userName: 'سحر تهرانی', rating: 5, date: '۱۴۰۳/۰۲/۰۹', comment: 'بهترین ضدآفتاب ایرانی! اصلاً رو صورت ماست نمیشه و سبک سبک هستش.', isVerified: true, likes: 19 }
    ]
  },
  {
    id: 'p7',
    title: 'پالت سایه چشم ۱۸ رنگ هدی بیوتی مدل Nude Obsessions',
    englishTitle: 'Huda Beauty The Nude Eyeshadow Palette 18 Colors',
    brand: 'هدی بیوتی',
    category: 'آرایش چشم و ابرو',
    categorySlug: 'eyeshadow',
    price: 1890000,
    originalPrice: 2600000,
    discountPercent: 27,
    rating: 4.9,
    reviewCount: 198,
    image: productEyeshadowPalette,
    images: [
      productEyeshadowPalette,
      categoryEyeMakeup
    ],
    tags: ['سایه چشم', 'هدی بیوتی', 'پالت سایه', 'میکاپ حرفه ای'],
    stock: 7,
    isBestSeller: true,
    isIncredibleOffer: true,
    description: 'پالت سایه نود هدی بیوتی شامل ۱۸ رنگ مات، شاین و شیمر پیگمنت بالا است. پیگمنت بی‌نظیر و قابلیت فید شدن آسان این پالت آن را به انتخاب اول آرایشگران حرفه‌ای تبدیل کرده است.',
    features: [
      { key: 'تعداد رنگ', value: '۱۸ رنگ کاربردی مات و براق' },
      { key: 'پیگمنت', value: 'فوق‌العاده غلیظ و ماندگار' },
      { key: 'بافت', value: 'پودری-ابریشمی بدون ریزش زیر چشم' }
    ],
    comments: [
      { id: 'c9', userName: 'مهسا کریمی', rating: 5, date: '۱۴۰۳/۰۲/۲۰', comment: 'رنگاش حرف نداره! ماندگاریش حتی بدون پرایمر عالیه.', isVerified: true, likes: 41 }
    ]
  },
  {
    id: 'p8',
    title: 'روغن آرگان خالص مراکشی کامان 100ml',
    englishTitle: 'Comeon Pure Moroccan Argan Hair Oil 100ml',
    brand: 'کامان',
    category: 'مراقبت و زیبایی مو',
    categorySlug: 'hair-oil',
    price: 290000,
    originalPrice: 420000,
    discountPercent: 31,
    rating: 4.8,
    reviewCount: 310,
    image: productArganOil,
    images: [
      productArganOil
    ],
    tags: ['روغن آرگان', 'کامان', 'ترمیم کننده مو', 'ضد موخوره'],
    stock: 16,
    isBestSeller: true,
    isIncredibleOffer: false,
    volume: '۱۰۰ میلی‌لیتر',
    description: 'روغن آرگان کامان مغذی قوی ساقه مو، درمان‌کننده خشکی و موخوره و محافظت‌کننده در برابر حرارت اتو و سشوار. موهایی نرم، براق و خوش‌حالت را تجربه کنید.',
    features: [
      { key: 'ترکیبات', value: 'روغن آرگان ۱۰۰٪ ارگانیک مراکشی' },
      { key: 'فواید', value: 'رفع موخوره، درخشان‌کننده و تقویت ساقه مو' },
      { key: 'احساس', value: 'بدون ایجاد سنگینی و چربی رو مو' }
    ],
    comments: [
      { id: 'c10', userName: 'بهار قاسمی', rating: 5, date: '۱۴۰۳/۰۲/۰۳', comment: 'بعد حموم روی موی نم‌دار می‌زنم موهام دیگه وزی نداره عالیه.', isVerified: true, likes: 27 }
    ]
  },
  {
    id: 'p9',
    title: 'ژل شوینده صورت ویتامین C کامان 500ml',
    englishTitle: 'Comeon Vitamin C Facial Cleanser Gel 500ml',
    brand: 'کامان',
    category: 'مراقبت پوست',
    categorySlug: 'cleanser',
    price: 175000,
    originalPrice: 260000,
    discountPercent: 33,
    rating: 4.6,
    reviewCount: 550,
    image: productCleanser,
    images: [
      productCleanser
    ],
    tags: ['ژل شوینده', 'کامان', 'ویتامین سی', 'پاک کننده صورت'],
    stock: 25,
    isBestSeller: true,
    isIncredibleOffer: false,
    volume: '۵۰۰ میلی‌لیتر',
    description: 'ژل شستشوی صورت کامان حاوی ویتامین C، پوست را عمیقاً از آلودگی‌ها و میکاپ پاک کرده و به روشن شدن و شفافیت پوست کمک شایانی می‌نماید.',
    features: [
      { key: 'حجم', value: '۵۰۰ میلی‌لیتر (پمپ به صرفه)' },
      { key: 'ویتامین', value: 'سرشار از ویتامین C و هیالورونیک اسید' },
      { key: 'خاصیت', value: 'روشن کننده، شفاف کننده و عدم کشیدگی پوست' }
    ],
    comments: [
      { id: 'c11', userName: 'نرگس نعمتی', rating: 5, date: '۱۴۰۳/۰۱/۳۰', comment: 'حجمش خیلی زیاده و دیر تمام میشه، پوست رو هم اصلاً خشک نمیکنه.', isVerified: true, likes: 16 }
    ]
  },
  {
    id: 'p10',
    title: 'بالم لب مرطوب کننده و ترمیم کننده نیوآ مدل Cherry Shine',
    englishTitle: 'Nivea Cherry Shine Caring Lip Balm',
    brand: 'مای',
    category: 'آرایش لب',
    categorySlug: 'lip-balm',
    price: 89000,
    originalPrice: 130000,
    discountPercent: 32,
    rating: 4.9,
    reviewCount: 890,
    image: productLipstickVelvet,
    images: [
      productLipstickVelvet
    ],
    colors: [
      { name: 'قرمز آلبالویی', hex: '#991b1b', code: 'CH1' },
      { name: 'صورتی توت فرنگی', hex: '#ec4899', code: 'ST1' }
    ],
    tags: ['بالم لب', 'نیوآ', 'آبرسان لب', 'رژ لب طبیعی'],
    stock: 45,
    isBestSeller: true,
    isIncredibleOffer: true,
    description: 'بالم لب نیوآ مدل گیلاس با رایحه‌ای دلپذیر و رنگ سرخ طبیعی، لب‌ها را به مدت ۲۴ ساعت مرطوب و نرم نگه داشته و جلوی ترک خوردگی را می‌گیرد.',
    features: [
      { key: 'ماندگاری رطوبت', value: '۲۴ ساعته' },
      { key: 'رنگ', value: 'سرخ ملایم و طبیعی لب' },
      { key: 'روغن‌ها', value: 'حاوی روغن‌های طبیعی آووکادو و شی باتر' }
    ],
    comments: [
      { id: 'c12', userName: 'فاطمه رفیعی', rating: 5, date: '۱۴۰۳/۰۲/۲۱', comment: 'رنگ خیلی طبیعی میده به لب واسه استفاده روزمره و دانشگاه حرف نداره.', isVerified: true, likes: 64 }
    ]
  },
  {
    id: 'p11',
    title: 'شامپو فری سولفات تقویت کننده سینره 250ml',
    englishTitle: 'Cinere Sulfate-Free Fortifying Shampoo 250ml',
    brand: 'سینره',
    category: 'مراقبت و زیبایی مو',
    categorySlug: 'shampoo',
    price: 165000,
    originalPrice: 220000,
    discountPercent: 25,
    rating: 4.7,
    reviewCount: 380,
    image: categoryHaircare,
    images: [
      categoryHaircare
    ],
    tags: ['شامپو', 'سینره', 'فری سولفات', 'تقویت مو'],
    stock: 20,
    isBestSeller: false,
    isIncredibleOffer: false,
    volume: '۲۵۰ میلی‌لیتر',
    description: 'شامپو بدون سولفات سینره مخصوص موهای کراتینه شده، رنگ شده و آسیب دیده. مانع تثبیت رنگ مو شده و ساقه مو را به شدت تقویت می‌نماید.',
    features: [
      { key: 'فرمولاسیون', value: 'فاقد سولفات، پارابن و نمک' },
      { key: 'کاربرد', value: 'مناسب بعد از کراتین، بوتاکس و پروتئین‌تراپی' },
      { key: 'عصاره', value: 'حاوی جوانه گندم و ویتامین B5' }
    ],
    comments: [
      { id: 'c13', userName: 'مریم اکبری', rating: 5, date: '۱۴۰۳/۰۲/۰۷', comment: 'موهای من بعد کراتین اصلاً خراب نشد با این شامپو.', isVerified: true, likes: 14 }
    ]
  },
  {
    id: 'p12',
    title: 'رژگونه مولتی کالر کالیستا مدل Terrakotta',
    englishTitle: 'Callista Multi Color Terrakotta Blush',
    brand: 'کالیستا',
    category: 'آرایشی صورت',
    categorySlug: 'blush-highlighter',
    price: 162000,
    originalPrice: 230000,
    discountPercent: 30,
    rating: 4.8,
    reviewCount: 210,
    image: productBlush,
    images: [
      productBlush
    ],
    colors: [
      { name: 'هلویی درخشان B21', hex: '#fb923c', code: 'B21' },
      { name: 'صورتی ملایم B22', hex: '#f472b6', code: 'B22' }
    ],
    tags: ['رژگونه', 'کالیستا', 'ارایشی صورت'],
    stock: 12,
    isBestSeller: false,
    isIncredibleOffer: true,
    description: 'رژگونه تراکوتا کالیستا با بافت ترکیبی مخملی و براق، برجستگی گونه‌های شما را به زیباترین شکل ممکن نمایان ساخته و چهره را شاداب می‌سازد.',
    features: [
      { key: 'بافت', value: 'نرم، مخملی و درخشان' },
      { key: 'پیگمنت', value: 'طبیعی و قابل لایه‌بندی' }
    ],
    comments: [
      { id: 'c14', userName: 'یلدا صابری', rating: 5, date: '۱۴۰۳/۰۲/۱۹', comment: 'رنگ B21 شاین خییییلی نازی داره عالیه.', isVerified: true, likes: 11 }
    ]
  },

  // ============ New arrivals — filling every subcategory ============

  {
    id: 'p13',
    title: 'کانسیلر و پرایمر پوشش‌دهنده مای مدل Full Cover',
    englishTitle: 'MY Cosmetics Full Cover Concealer & Primer',
    brand: 'مای',
    category: 'آرایشی صورت',
    categorySlug: 'concealer-primer',
    price: 245000,
    originalPrice: 340000,
    discountPercent: 28,
    rating: 4.6,
    reviewCount: 187,
    image: categoryFaceMakeup,
    images: [categoryFaceMakeup, productSunscreen, productBlush],
    colors: [
      { name: 'روشن C1', hex: '#f5e0d0' },
      { name: 'متوسط C2', hex: '#e8c4a8' },
      { name: 'گندمی C3', hex: '#c99a72' }
    ],
    tags: ['کانسیلر', 'پرایمر', 'مای', 'آرایشی صورت'],
    stock: 22,
    isNew: true,
    isIncredibleOffer: true,
    description: 'کانسیلر و پرایمر دوکاره مای با پوشش بالا، سیاهی دور چشم و نواقص پوست را کاملاً محو می‌کند و به عنوان پایه‌ای ماندگار برای آرایش شما عمل می‌کند.',
    features: [
      { key: 'پوشش', value: 'بالا و قابل لایه‌گذاری' },
      { key: 'کاربرد', value: 'دوکاره — کانسیلر و پرایمر' },
      { key: 'حجم', value: '۱۵ میلی‌لیتر' },
      { key: 'ویتامین', value: 'حاوی ویتامین E و روغن جوجوبا' }
    ],
    usage: 'مقدار کمی روی نواحی موردنظر بزنید و با انگشت یا اسفنج محو کنید.',
    comments: [
      { id: 'c15', userName: 'دنیا رستمی', rating: 5, date: '۱۴۰۳/۰۲/۲۰', comment: 'سیاهی زیر چشمم رو کامل پوشوند، خیلیم سبکه.', isVerified: true, likes: 15 }
    ]
  },
  {
    id: 'p14',
    title: 'پودر تثبیت‌کننده و مات لورآل مدل Infallible',
    englishTitle: "L'Oréal Paris Infallible Setting Powder",
    brand: 'لورآل پاریس',
    category: 'آرایشی صورت',
    categorySlug: 'powder',
    price: 320000,
    originalPrice: 420000,
    discountPercent: 24,
    rating: 4.7,
    reviewCount: 263,
    image: productBlush,
    images: [productBlush, categoryFaceMakeup, productSunscreen],
    tags: ['پودر', 'تثبیت کننده', 'لورآل', 'مات'],
    stock: 18,
    isBestSeller: true,
    description: 'پودر تثبیت‌کننده لورآل با فرمول فوقاسبک و بدون پودر اضافه، چربی پوست را کنترل کرده و آرایش را تا ۱۲ ساعت تثبیت می‌کند.',
    features: [
      { key: 'سایه روشن', value: 'بی‌رنگ، مناسب انواع پوست' },
      { key: 'ماندگاری', value: 'تا ۱۲ ساعت تثبیت آرایش' },
      { key: 'ویژگی', value: 'کنترل چربی و درخشندگی طبیعی' }
    ],
    usage: 'پس از کرم پودر، با براش نرم روی کل صورت پخش کنید.',
    comments: [
      { id: 'c16', userName: 'سمیرا جعفری', rating: 4, date: '۱۴۰۳/۰۲/۰۸', comment: 'صورت مات میمونه و کیک نمیشه. راضی‌ام.', isVerified: true, likes: 9 }
    ]
  },
  {
    id: 'p15',
    title: 'پالت کانتور و برنزر هدی بیوتی مدل Sculpt & Define',
    englishTitle: 'Huda Beauty Sculpt & Define Contour Palette',
    brand: 'هدی بیوتی',
    category: 'آرایشی صورت',
    categorySlug: 'contour',
    price: 890000,
    originalPrice: 1250000,
    discountPercent: 29,
    rating: 4.9,
    reviewCount: 401,
    image: productEyeshadowPalette,
    images: [productEyeshadowPalette, productBlush, categoryFaceMakeup],
    colors: [
      { name: 'کانتور سرد T1', hex: '#8b6b52' },
      { name: 'برنزر گرم T2', hex: '#a9713f' },
      { name: 'هایلایتر T3', hex: '#e8c9a0' }
    ],
    tags: ['کانتور', 'برنزر', 'هدی بیوتی', 'آرایشی صورت'],
    stock: 6,
    isBestSeller: true,
    isIncredibleOffer: true,
    description: 'پالت سه‌رنگه کانتور و برنزر هدی بیوتی با پیگمنت فوق‌العاده و بافت پودری مخملی، استخوان‌بندی صورت را حرفه‌ای ترسیم و کانتور می‌کند.',
    features: [
      { key: 'تعداد رنگ', value: '۳ رنگ کانتور، برنزر و هایلایتر' },
      { key: 'بافت', value: 'پودری مخملی، ترکیب آسان' },
      { key: 'پیگمنت', value: 'بالا و ساختار حرفه‌ای' }
    ],
    usage: 'کانتور را زیر cheekbone و برنزر را روی نقاط برجسته صورت بزنید.',
    comments: [
      { id: 'c17', userName: 'الناز شریفی', rating: 5, date: '۱۴۰۳/۰۲/۲۲', comment: 'بهترین پالت کانتوری که داشتم. ترکیبش فوق‌العاده راحته.', isVerified: true, likes: 33 }
    ]
  },
  {
    id: 'p16',
    title: 'رژ لب مایع مات کالیستا مدل Liquid Velvet',
    englishTitle: 'Callista Liquid Velvet Matte Liquid Lipstick',
    brand: 'کالیستا',
    category: 'آرایش لب',
    categorySlug: 'liquid-lipstick',
    price: 215000,
    originalPrice: 300000,
    discountPercent: 28,
    rating: 4.7,
    reviewCount: 298,
    image: productLipstickVelvet,
    images: [productLipstickVelvet, heroLipstick, productBlush],
    colors: [
      { name: 'قرمز یاقوتی LV01', hex: '#be123c', code: 'LV01' },
      { name: 'زردی نود LV03', hex: '#c98a5e', code: 'LV03' },
      { name: 'زرشکی تیره LV05', hex: '#831843', code: 'LV05' }
    ],
    tags: ['رژ لب مایع', 'مات', 'کالیستا', 'آرایش لب'],
    stock: 16,
    isBestSeller: true,
    isNew: true,
    isIncredibleOffer: true,
    description: 'رژ لب مایع مات کالیستا با خشک شدن سریع و ماندگاری تا ۱۰ ساعت، لب‌هایی مخملی و پررنگ بدون احساس خشکی به شما هدیه می‌دهد.',
    features: [
      { key: 'بافت', value: 'مایع، خشک‌شونده به مات' },
      { key: 'ماندگاری', value: 'تا ۱۰ ساعت' },
      { key: 'ویتامین', value: 'حاوی روغن کرچک و ویتامین E' },
      { key: 'پوشش', value: 'یک‌لایه و کامل' }
    ],
    usage: 'از مرکز لب به بیرون بزنید؛ اجازه دهید ۳۰ ثانیه خشک شود.',
    comments: [
      { id: 'c18', userName: 'مرضیه کاظمی', rating: 5, date: '۱۴۰۳/۰۲/۲۱', comment: 'رنگ LV05 خداست! ماندگاریش عالیه و لب رو خشک نمیکنه.', isVerified: true, likes: 27 }
    ]
  }
  ,
  {
    id: 'p17',
    title: 'خط لب مدادی ضدآب مای مدل Lip Define',
    englishTitle: 'MY Cosmetics Lip Define Waterproof Lip Liner',
    brand: 'مای',
    category: 'آرایش لب',
    categorySlug: 'lip-liner',
    price: 95000,
    originalPrice: 130000,
    discountPercent: 27,
    rating: 4.5,
    reviewCount: 142,
    image: heroLipstick,
    images: [heroLipstick, productLipstickVelvet],
    colors: [
      { name: 'نود LL1', hex: '#c98a72' },
      { name: 'قرمز LL2', hex: '#b91c3c' },
      { name: 'زرشکی LL3', hex: '#9d174d' }
    ],
    tags: ['خط لب', 'مداد لب', 'مای', 'ضد آب'],
    stock: 30,
    isNew: true,
    description: 'مداد خط لب ضدآب مای با نوک نرم و ماندگار، مرز لب‌ها را ترسیم کرده و از پخش شدن رژ لب جلوگیری می‌کند.',
    features: [
      { key: 'نوک', value: 'نرم و قابل تیز کردن' },
      { key: 'ماندگاری', value: 'ضدآب و ماندگار' },
      { key: 'کاربرد', value: 'ترسیم مرز و پر کردن لب' }
    ],
    usage: 'مرز لب را ترسیم کرده، سپس با رژ لب پر کنید.',
    comments: [
      { id: 'c19', userName: 'فاطمه موسوی', rating: 4, date: '۱۴۰۳/۰۲/۱۱', comment: 'رنگش نودی که گرفتم خیلی طبیعیه. مناسب قیمت.', isVerified: true, likes: 6 }
    ]
  },
  {
    id: 'p18',
    title: 'تینت لب و گونه براق کالیستا مدل Cherry Tint',
    englishTitle: 'Callista Cherry Tint Lip & Cheek Stain',
    brand: 'کالیستا',
    category: 'آرایش لب',
    categorySlug: 'lip-tint',
    price: 158000,
    originalPrice: 220000,
    discountPercent: 28,
    rating: 4.6,
    reviewCount: 211,
    image: productLipstickVelvet,
    images: [productLipstickVelvet, productBlush, heroLipstick],
    tags: ['تینت لب', 'برق لب', 'کالیستا', 'دوکاره'],
    stock: 20,
    isNew: true,
    isIncredibleOffer: true,
    description: 'تینت دوکاره لب و گونه کالیستا با رنگ گیلاسی طبیعی، جلوه‌ای شاداب و سرخ‌ و شنگول به لب و گونه می‌بخشد و تا ساعت‌ها ماندگار است.',
    features: [
      { key: 'کاربرد', value: 'دوکاره لب و گونه' },
      { key: 'بافت', value: 'ژلی سبک و جذب سریع' },
      { key: 'ماندگاری', value: 'تا ۸ ساعت رنگ طبیعی' }
    ],
    usage: 'مقدار کم روی لب یا گونه بزنید و سریع محو کنید.',
    comments: [
      { id: 'c20', userName: 'سحر کریمی', rating: 5, date: '۱۴۰۳/۰۲/۲۳', comment: 'خیلی طبیعی و خوش‌رنگه، برای آرایش روزانه عالیه.', isVerified: true, likes: 19 }
    ]
  },
  {
    id: 'p19',
    title: 'خط چشم کوزه‌ای ضدآب کالیستا مدل Jet Black',
    englishTitle: 'Callista Jet Black Waterproof Eyeliner',
    brand: 'کالیستا',
    category: 'آرایش چشم و ابرو',
    categorySlug: 'eyeliner',
    price: 178000,
    originalPrice: 250000,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 356,
    image: categoryEyeMakeup,
    images: [categoryEyeMakeup, productEyeshadowPalette],
    colors: [
      { name: 'مشکی E1', hex: '#1a1a1a' },
      { name: 'قهوه‌ای E2', hex: '#6b4a2b' }
    ],
    tags: ['خط چشم', 'کوزه ای', 'ضد آب', 'کالیستا'],
    stock: 25,
    isBestSeller: true,
    isIncredibleOffer: true,
    description: 'خط چشم کوزه‌ای ضدآب کالیستا با نوک فوقران و رنگ مشکی عمیق، خطی صاف و ماندگار ترسیم می‌کند که در برابر آب و عرق مقاوم است.',
    features: [
      { key: 'نوک', value: 'فوقران ۰.۵ میلی‌متری' },
      { key: 'ماندگاری', value: 'ضدآب و ضد رطوبت' },
      { key: 'رنگ', value: 'مشکی عمیق یک‌بار گذاشتن' }
    ],
    usage: 'از گوشه داخلی به بیرون، نزدیک به ریشه مژه‌ها بکشید.',
    comments: [
      { id: 'c21', userName: 'نسیم اکبری', rating: 5, date: '۱۴۰۳/۰۲/۲۴', comment: 'ضدآب بودنش واقعیه! استخر هم رفته پاک نشد.', isVerified: true, likes: 41 }
    ]
  },
  {
    id: 'p20',
    title: 'ژل ابرو لیفت و حالت‌دهنده مای مدل Brow Lift',
    englishTitle: 'MY Cosmetics Brow Lift Eyebrow Gel',
    brand: 'مای',
    category: 'آرایش چشم و ابرو',
    categorySlug: 'eyebrow-gel',
    price: 125000,
    originalPrice: 175000,
    discountPercent: 29,
    rating: 4.4,
    reviewCount: 98,
    image: categoryEyeMakeup,
    images: [categoryEyeMakeup, productEyeshadowPalette],
    colors: [
      { name: 'شفاف G1', hex: '#f1f5f9' },
      { name: 'نسکافه‌ای G2', hex: '#7c5a3a' }
    ],
    tags: ['ژل ابرو', 'لیفت ابرو', 'مای', 'آرایش چشم'],
    stock: 26,
    isNew: true,
    description: 'ژل لیفت ابرو مای بدون چسبندگی، ابروها را حالت داده و تمام روز در جای خود نگه می‌دارد؛ حالت شفاف آن نتیجه‌ای کاملاً طبیعی می‌دهد.',
    features: [
      { key: 'حالت', value: 'شفاف و رنگی' },
      { key: 'اثر', value: 'لیفت و حالت‌دهی تمام روز' },
      { key: 'بافت', value: 'سبک بدون چسبندگی' }
    ],
    usage: 'با براش مخصوص از ریشه به سمت بالا و بیرون شانه کنید.',
    comments: [
      { id: 'c22', userName: 'آزاده نوری', rating: 4, date: '۱۴۰۳/۰۲/۰۵', comment: 'ابروها رو روی همون حالت نگه میداره. خوبه.', isVerified: true, likes: 7 }
    ]
  }

  ,
  {
    id: 'p21',
    title: 'مداد ابرو اتوماتیک لورآل مدل Brow Stylist',
    englishTitle: "L'Oréal Paris Brow Stylist Automatic Eyebrow Pencil",
    brand: 'لورآل پاریس',
    category: 'آرایش چشم و ابرو',
    categorySlug: 'eyebrow-pencil',
    price: 148000,
    originalPrice: 200000,
    discountPercent: 26,
    rating: 4.6,
    reviewCount: 174,
    image: categoryEyeMakeup,
    images: [categoryEyeMakeup, productEyeshadowPalette, productBlush],
    colors: [
      { name: 'بلوند BP1', hex: '#a98b62' },
      { name: 'قهوه‌ای BP2', hex: '#6b4a2b' },
      { name: 'مشکی BP3', hex: '#2d2a26' }
    ],
    tags: ['مداد ابرو', 'اتوماتیک', 'لورآل', 'آرایش چشم'],
    stock: 24,
    isBestSeller: true,
    description: 'مداد ابرو اتوماتیک لورآل با نوک ظریف و اسفنجی انتهایی، ابروهایی پرتر و طبیعی می‌سازد؛ نیازی به تیز کردن ندارد.',
    features: [
      { key: 'نوک', value: 'ظریف اتوماتیک + اسفنج سایه‌زن' },
      { key: 'پوشش', value: 'پرکننده فرورفتگی ابرو' },
      { key: 'ماندگاری', value: 'تمام روز ضد پاک شدن' }
    ],
    usage: 'با ضربه‌های کوتاه و رو به بالا ابرو را پر کنید.',
    comments: [
      { id: 'c23', userName: 'الهام رحیمی', rating: 5, date: '۱۴۰۳/۰۲/۱۳', comment: 'ساختنش راحته و نتیجه طبیعیه. پیشنهاد میکنم.', isVerified: true, likes: 12 }
    ]
  },
  {
    id: 'p22',
    title: 'کرم مرطوب‌کننده و آبرسان عمیق کامان مدل Aqua Boost',
    englishTitle: 'Comeon Aqua Boost Deep Moisturizer 50ml',
    brand: 'کامان',
    category: 'مراقبت پوست',
    categorySlug: 'moisturizer',
    price: 265000,
    originalPrice: 360000,
    discountPercent: 26,
    rating: 4.7,
    reviewCount: 229,
    image: heroSerum,
    images: [heroSerum, productSunscreen, productCleanser],
    tags: ['کرم مرطوب کننده', 'آبرسان', 'کامان', 'مراقبت پوست'],
    stock: 21,
    isBestSeller: true,
    isIncredibleOffer: true,
    description: 'کرم آبرسان عمیق کامان با ترکیب سرامید و گلیسیرین، رطوبت را تا ۲۴ ساعت در بافت پوست قفل کرده و پوستی نرم و کشسان برای شما به ارمغان می‌آورد.',
    features: [
      { key: 'حجم', value: '۵۰ میلی‌لیتر' },
      { key: 'ترکیب اصلی', value: 'سرامید + گلیسیرین + شی butter' },
      { key: 'بافت', value: 'کرمی سبک، جذب سریع' },
      { key: 'نوع پوست', value: 'مناسب پوست خشک و معمولی' }
    ],
    skinType: 'پوست خشک و معمولی',
    usage: 'صبح و شب پس از سرم روی پوست تمیز ماساژ دهید.',
    comments: [
      { id: 'c24', userName: 'مینا صادقی', rating: 5, date: '۱۴۰۳/۰۲/۱۷', comment: 'پوستم نرم و آبرسانی شده. بوی ملایم خیلی خوبی داره.', isVerified: true, likes: 22 }
    ]
  },
  {
    id: 'p23',
    title: 'ماسک صورت ورقه‌ای آبرسان و روشن‌کننده سینره',
    englishTitle: 'Cinere Hydrating & Brightening Sheet Mask',
    brand: 'سینره',
    category: 'مراقبت پوست',
    categorySlug: 'face-mask',
    price: 78000,
    originalPrice: 110000,
    discountPercent: 29,
    rating: 4.5,
    reviewCount: 312,
    image: productCleanser,
    images: [productCleanser, heroSerum, productSunscreen],
    tags: ['ماسک صورت', 'ورقه ای', 'سینره', 'آبرسان'],
    stock: 40,
    isNew: true,
    isIncredibleOffer: true,
    description: 'ماسک ورقه‌ای سینره غنی شده با عصاره نیاسینامید و اسید هیالورونیک، در عرض ۱۵ دقیقه پوستی روشن، آبرسانی شده و شاداب به شما می‌بخشد.',
    features: [
      { key: 'تعداد', value: '۱۲ عدد در هر بسته' },
      { key: 'ترکیب اصلی', value: 'نیاسینامید ۲٪ + هیالورونیک اسید' },
      { key: 'زمان استفاده', value: '۱۵ تا ۲۰ دقیقه' },
      { key: 'اثر', value: 'روشن‌کنندگی و آبرسانی فوری' }
    ],
    skinType: 'مناسب انواع پوست',
    usage: 'روی پوست تمیز ۱۵ دقیقه قرار دهید، سپس ماساژ کنید.',
    comments: [
      { id: 'c25', userName: 'تینا مرادی', rating: 4, date: '۱۴۰۳/۰۲/۱۴', comment: 'بعد از ۲۰ دقیقه پوستم درخشید. برای قبل از مهمونی عالیه.', isVerified: true, likes: 28 }
    ]
  },
  {
    id: 'p24',
    title: 'ماسک مو نرم‌کننده و احیا‌کننده کامان بدون آبکشی',
    englishTitle: 'Comeon Repair & Soften Leave-in Hair Mask',
    brand: 'کامان',
    category: 'مراقبت و زیبایی مو',
    categorySlug: 'hair-mask',
    price: 195000,
    originalPrice: 270000,
    discountPercent: 28,
    rating: 4.6,
    reviewCount: 167,
    image: categoryHaircare,
    images: [categoryHaircare, productArganOil],
    tags: ['ماسک مو', 'بدون آبکشی', 'کامان', 'مراقبت مو'],
    stock: 23,
    isNew: true,
    isIncredibleOffer: true,
    description: 'ماسک مو بدون آبکشی کامان با روغن آرگان و کراتین، موهای آسیب‌دیده را احیا کرده، گره‌خوردگی را کاهش داده و نرمی و درخشش به مو می‌بخشد.',
    features: [
      { key: 'حجم', value: '۲۰۰ میلی‌لیتر' },
      { key: 'ترکیب اصلی', value: 'روغن آرگان + کراتین + پانتول' },
      { key: 'کاربرد', value: 'بدون نیاز به آبکشی' },
      { key: 'اثر', value: 'نرمی، درخشش و کاهش وز' }
    ],
    usage: 'مقدار کمی روی مو نمدار از نیمه طول مو به سمت انتها بزنید.',
    comments: [
      { id: 'c26', userName: 'شیما حسن‌زاده', rating: 5, date: '۱۴۰۳/۰۲/۰۹', comment: 'موهام نرم و بدون وز شده. رایحه گلش هم عالیه.', isVerified: true, likes: 16 }
    ]
  }

  ,
  {
    id: 'p25',
    title: 'اسپری محافظت حرارتی مو سینره مدل Heat Shield',
    englishTitle: 'Cinere Heat Shield Thermal Protection Spray',
    brand: 'سینره',
    category: 'مراقبت و زیبایی مو',
    categorySlug: 'heat-protectant',
    price: 168000,
    originalPrice: 235000,
    discountPercent: 29,
    rating: 4.5,
    reviewCount: 134,
    image: productArganOil,
    images: [productArganOil, categoryHaircare],
    tags: ['اسپری مو', 'محافظ حرارتی', 'سینره', 'مراقبت مو'],
    stock: 27,
    isNew: true,
    description: 'اسپری محافظ حرارتی سینره یک لایه محافظ نامرئی روی مو می‌سازد و مو را در برابر آسیب سشوار، اتو و گرمای محیط تا ۲۳۰ درجه حفظ می‌کند.',
    features: [
      { key: 'حجم', value: '۱۵۰ میلی‌لیتر' },
      { key: 'محافظت', value: 'تا ۲۳۰ درجه سانتی‌گراد' },
      { key: 'ترکیب اصلی', value: 'روغن جوجوبا + ویتامین B5' },
      { key: 'اثر', value: 'جلوگیری از شکنندگی و خشکی مو' }
    ],
    usage: 'قبل از استفاده از سشوار یا اتو، روی مو نمدار اسپری کنید.',
    comments: [
      { id: 'c27', userName: 'الهه فرجی', rating: 4, date: '۱۴۰۳/۰۲/۰۶', comment: 'موهام بعد از اتو دوباره خشک و شکننده نشد. خوبه.', isVerified: true, likes: 8 }
    ]
  },
  {
    id: 'p26',
    title: 'ادو تویلت مردانه لورآل مدل Invictus',
    englishTitle: "L'Oréal Men Expert Invictus Eau de Toilette 100ml",
    brand: 'لورآل پاریس',
    category: 'عطر و ادکلن',
    categorySlug: 'men-perfume',
    price: 1250000,
    originalPrice: 1750000,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 278,
    image: heroPerfume,
    images: [heroPerfume, productPerfumeGallery],
    tags: ['ادکلن مردانه', 'ادو تویلت', 'لورآل', 'عطر'],
    stock: 9,
    isBestSeller: true,
    isIncredibleOffer: true,
    description: 'ادو تویلت مردانه لورآل با ترکیبی جسورانه از چوب، کهربا و مرکبات، رایحه‌ای مردانه، باکلاس و ماندگار برای آقایان خوش‌پوش می‌سازد.',
    features: [
      { key: 'حجم', value: '۱۰۰ میلی‌لیتر' },
      { key: 'گروه رایحه', value: 'چوبی – مرکباتی' },
      { key: 'ماندگاری', value: 'تا ۸ ساعت پروژکشن قوی' },
      { key: 'مناسب برای', value: 'استفاده روزانه و رسمی' }
    ],
    volume: '۱۰۰ میلی‌لیتر',
    usage: 'روی نقاط نبض‌دار بدن از فاصله ۲۰ سانتی‌متری اسپری کنید.',
    comments: [
      { id: 'c28', userName: 'آرش محمدی', rating: 5, date: '۱۴۰۳/۰۲/۱۶', comment: 'بوی فوق‌العاده مردانه‌ای داره. همه partout میپرسم چی زدی!', isVerified: true, likes: 36 }
    ]
  },
  {
    id: 'p27',
    title: 'بادی اسپلش و لوشن معطر کامان مدل Vanilla Dream',
    englishTitle: 'Comeon Vanilla Dream Body Splash & Scented Lotion',
    brand: 'کامان',
    category: 'عطر و ادکلن',
    categorySlug: 'body-splash',
    price: 189000,
    originalPrice: 260000,
    discountPercent: 27,
    rating: 4.6,
    reviewCount: 203,
    image: productPerfumeGallery,
    images: [productPerfumeGallery, heroPerfume, productArganOil],
    tags: ['بادی اسپلش', 'لوشن معطر', 'کامان', 'وانیلی'],
    stock: 19,
    isNew: true,
    isIncredibleOffer: true,
    description: 'بادی اسپلش وانیلی کامان با رایحه شیرین و گرم وانیل و کارامل، پوست را آبرسانی کرده و طراوت و بوی دلپذیر را ساعت‌ها همراه شما نگه می‌دارد.',
    features: [
      { key: 'حجم', value: '۲۵۰ میلی‌لیتر' },
      { key: 'گروه رایحه', value: 'شیرین گرم – وانیل و کارامل' },
      { key: 'کاربرد', value: 'آبرسان و معطرکننده بدن' },
      { key: 'ماندگاری', value: 'متوسط و ملایم' }
    ],
    usage: 'بعد از حمام روی کل بدن اسپری یا پخش کنید.',
    comments: [
      { id: 'c29', userName: 'زهرا اکبری', rating: 5, date: '۱۴۰۳/۰۲/۱۲', comment: 'بوی وانیلیهاش خیلی شیرینه و آبرسانی هم میکنه. عاشقشم.', isVerified: true, likes: 24 }
    ]
  },
  {
    id: 'p28',
    title: 'عطر مینیاتوری جیبی کالیستا مدل Mini Joy',
    englishTitle: 'Callista Mini Joy Pocket Perfume 20ml',
    brand: 'کالیستا',
    category: 'عطر و ادکلن',
    categorySlug: 'pocket-perfume',
    price: 145000,
    originalPrice: 200000,
    discountPercent: 28,
    rating: 4.7,
    reviewCount: 189,
    image: productPerfumeGallery,
    images: [productPerfumeGallery, heroPerfume, productLipstickVelvet],
    tags: ['عطر جیبی', 'مینیاتوری', 'کالیستا', 'عطر'],
    stock: 32,
    isNew: true,
    isIncredibleOffer: true,
    description: 'عطر جیبی مینیاتوری کالیستا با حجم کوچک و طراحی شیک، رایحه‌ای گل و میوه‌ای شاداب دارد و به‌راحتی در کیف جا می‌گیرد؛ همراه همیشگی شما در سفر و مهمانی.',
    features: [
      { key: 'حجم', value: '۲۰ میلی‌لیتر' },
      { key: 'گروه رایحه', value: 'گل – میوه‌ای شاداب' },
      { key: 'طراحی', value: 'مینیاتوری و قابل حمل' },
      { key: 'مناسب برای', value: 'استفاده روزانه و جیبی' }
    ],
    volume: '۲۰ میلی‌لیتر',
    usage: 'هر زمان که نیاز بود، روی نبض مچ دست اسپری کنید.',
    comments: [
      { id: 'c30', userName: 'نگار شفیعی', rating: 5, date: '۱۴۰۳/۰۲/۲۵', comment: 'حجمش کوچیکه ولی بویش شیک و ماندگار. همیشه همراهمه.', isVerified: true, likes: 14 }
    ]
  },
  // ============ Batch 2 — filling remaining subcategories ============

  {
    id: 'p29',
    title: 'رژ لب مایع مات کالیستا مدل Liquid Matte',
    englishTitle: 'Callista Liquid Matte Lipstick',
    brand: 'کالیستا',
    category: 'آرایش لب',
    categorySlug: 'liquid-lipstick',
    price: 165000,
    originalPrice: 240000,
    discountPercent: 31,
    rating: 4.5,
    reviewCount: 276,
    image: heroLipstick,
    images: [heroLipstick, productLipstickVelvet, productBlush],
    colors: [
      { name: 'نود روزانه LM1', hex: '#c98a6b', code: 'LM1' },
      { name: 'قهوه‌ای شتری LM2', hex: '#8d5a3c', code: 'LM2' },
      { name: 'زرشکی تیره LM3', hex: '#7f1d2f', code: 'LM3' }
    ],
    tags: ['رژ لب مایع', 'مات', 'کالیستا', 'ماندگار'],
    stock: 17,
    isBestSeller: true,
    isIncredibleOffer: true,
    description: 'رژ لب مایع مات کالیستا با فرمول خشک‌شونده سریع، رنگی یکدست و مخملی روی لب ایجاد می‌کند که تا ۸ ساعت بدون چرب شدن ماندگار است.',
    features: [
      { key: 'بافت', value: 'مایع خشک‌شونده به مات' },
      { key: 'ماندگاری', value: 'تا ۸ ساعت ضد چربی' },
      { key: 'حجم', value: '۶ میلی‌لیتر با برس نرم' },
      { key: 'ویتامین', value: 'حاوی روغن جوجوبا ضد خشکی' }
    ],
    usage: 'از مرکز لب به سمت بیرون بکشید؛ اجازه دهید ۱ دقیقه خشک شود.',
    comments: [
      { id: 'c31', userName: 'الهه کریمی', rating: 5, date: '۱۴۰۳/۰۲/۲۶', comment: 'مات میشه و لبم رو خشک نمیکنه. رنگ LM1 خیلی نازره.', isVerified: true, likes: 18 }
    ]
  },
  {
    id: 'p30',
    title: 'رژ لب مایع براق هدی بیوتی مدل Gloss Bomb',
    englishTitle: 'Huda Beauty Gloss Bomb Liquid Lip Gloss',
    brand: 'هدی بیوتی',
    category: 'آرایش لب',
    categorySlug: 'liquid-lipstick',
    price: 320000,
    originalPrice: 450000,
    discountPercent: 29,
    rating: 4.7,
    reviewCount: 143,
    image: productLipstickVelvet,
    images: [productLipstickVelvet, heroLipstick, productBlush],
    colors: [
      { name: 'صورتی براق G1', hex: '#f9a8c9', code: 'G1' },
      { name: 'شفاف درخشان G2', hex: '#fce7f0', code: 'G2' }
    ],
    tags: ['رژ لب مایع', 'براق', 'هدی بیوتی', 'گلاس لب'],
    stock: 9,
    isNew: true,
    isIncredibleOffer: false,
    description: 'گلاس لب هدی بیوتی با فرمول غنی و براقیت بالا، لب‌هایی حجیم، درخشان و آبرسانی شده به شما می‌بخشد بدون احساس چسبندگی.',
    features: [
      { key: 'حجم لب', value: 'حجیم‌کننده و براق' },
      { key: 'بافت', value: 'ژلی غیرچسبنده' },
      { key: 'ترکیب', value: 'روغن جوجوبا و شی باتر' }
    ],
    usage: 'مستقیم روی لب برهنه یا روی رژ لب جامد بزنید.',
    comments: [
      { id: 'c32', userName: 'نگار موسوی', rating: 4, date: '۱۴۰۳/۰۲/۱۸', comment: 'براقیته عالیه ولی ماندگاریش کدره، باید هر چند ساعت تمدید کنم.', isVerified: true, likes: 7 }
    ]
  },
  {
    id: 'p31',
    title: 'خط لب ضدآب لورآل مدل Infallible Lip Liner',
    englishTitle: "L'Oréal Infallible Waterproof Lip Liner",
    brand: 'لورآل پاریس',
    category: 'آرایش لب',
    categorySlug: 'lip-liner',
    price: 138000,
    originalPrice: 190000,
    discountPercent: 27,
    rating: 4.6,
    reviewCount: 198,
    image: productLipstickVelvet,
    images: [productLipstickVelvet, heroLipstick],
    colors: [
      { name: 'نود طبیعی LL1', hex: '#c0846a', code: 'LL1' },
      { name: 'قرمز کلاسیک LL2', hex: '#b91c1c', code: 'LL2' },
      { name: 'گلبهی LL3', hex: '#e879a8', code: 'LL3' }
    ],
    tags: ['خط لب', 'مداد لب', 'لورآل', 'ضد آب'],
    stock: 28,
    isBestSeller: false,
    isIncredibleOffer: true,
    description: 'خط لب ضدآب لورآل با نوک نرم و روان، خطی دقیق و ماندگار دور لب می‌کشد و از پخش شدن رژ لب جلوگیری می‌کند.',
    features: [
      { key: 'نوک', value: 'نرم و روان، بدون کشیدن لب' },
      { key: 'ماندگاری', value: 'ضدآب تا ۸ ساعت' },
      { key: 'کاربرد', value: 'کنترل فرم لب و جلوگیری از پخش رژ' }
    ],
    usage: 'دور لب را خط بکشید، سپس رژ لب را درون آن پر کنید.',
    comments: [
      { id: 'c33', userName: 'سمیرا رستمی', rating: 5, date: '۱۴۰۳/۰۲/۰۹', comment: 'خط لبام رو مرتب نگه میداره و پخش نمیشه. خوبه.', isVerified: true, likes: 11 }
    ]
  },

  {
    id: 'p32',
    title: 'مداد لب مات مای مدل Soft Matte Lip Pencil',
    englishTitle: 'MY Cosmetics Soft Matte Lip Pencil',
    brand: 'مای',
    category: 'آرایش لب',
    categorySlug: 'lip-liner',
    price: 98000,
    originalPrice: 145000,
    discountPercent: 32,
    rating: 4.4,
    reviewCount: 112,
    image: heroLipstick,
    images: [heroLipstick, productBlush],
    colors: [
      { name: 'ماهاگونی MP1', hex: '#6d2831', code: 'MP1' },
      { name: 'کالباسی MP2', hex: '#c2410c', code: 'MP2' }
    ],
    tags: ['مداد لب', 'مات', 'مای', 'خط لب'],
    stock: 33,
    isNew: true,
    isIncredibleOffer: false,
    description: 'مداد لب مات مای با بافت نرم و رنگدهی بالا، برای خط کشیدن و پر کردن لب عالی است و به‌تنهایی هم می‌توان از آن به عنوان رژ لب مات استفاده کرد.',
    features: [
      { key: 'دوکاره', value: 'خط لب و رژ لب مات' },
      { key: 'بافت', value: 'نرم و بدون چسبندگی' },
      { key: 'ماندگاری', value: 'مات ماندگار نیم‌روزه' }
    ],
    usage: 'برای خط کشیدن یا پر کردن کل لب استفاده کنید.',
    comments: [
      { id: 'c34', userName: 'دنا احمدی', rating: 4, date: '۱۴۰۳/۰۲/۲۱', comment: 'نرمه و خوب پخش میشه. قیمتش هم مناسبه.', isVerified: true, likes: 5 }
    ]
  },
  {
    id: 'p33',
    title: 'ادکلن مردانه لورآل مدل Brave après-rasage ۱۰۰ میلی‌لیتر',
    englishTitle: "L'Oréal Men Expert Brave Eau de Toilette 100ml",
    brand: 'لورآل پاریس',
    category: 'عطر و ادکلن',
    categorySlug: 'men-perfume',
    price: 890000,
    originalPrice: 1250000,
    discountPercent: 29,
    rating: 4.6,
    reviewCount: 234,
    image: heroPerfume,
    images: [heroPerfume, productPerfumeGallery],
    tags: ['عطر مردانه', 'ادکلن', 'لورآل', 'بعد از اصلاح'],
    stock: 11,
    isBestSeller: true,
    isIncredibleOffer: true,
    volume: '۱۰۰ میلی‌لیتر',
    description: 'ادکلن مردانه لورآل با رایحه‌ای چوبی و تازه، مخصوص استفاده روزانه بعد از اصلاح طراحی شده و حس طراوت و تمیزی را ساعت‌ها حفظ می‌کند.',
    features: [
      { key: 'رایحه', value: 'چوبی، تازه و مردانه' },
      { key: 'کاربرد', value: 'بعد از اصلاح، ملایم روی پوست' },
      { key: 'ماندگاری', value: 'متوسط رو به بالا' }
    ],
    usage: 'بعد از اصلاح روی صورت و گردن اسپری کنید.',
    comments: [
      { id: 'c35', userName: 'امیر کریمی', rating: 5, date: '۱۴۰۳/۰۲/۱۵', comment: 'بوی ملایم و مردانه‌ای داره، برای هر روز عالیه.', isVerified: true, likes: 21 }
    ]
  },
  {
    id: 'p34',
    title: 'ادو تویلت مردانه کالیستا مدل Homme Sport ۵۰ میلی‌لیتر',
    englishTitle: 'Callista Homme Sport Eau de Toilette 50ml',
    brand: 'کالیستا',
    category: 'عطر و ادکلن',
    categorySlug: 'men-perfume',
    price: 420000,
    originalPrice: 590000,
    discountPercent: 29,
    rating: 4.5,
    reviewCount: 167,
    image: productPerfumeGallery,
    images: [productPerfumeGallery, heroPerfume],
    tags: ['عطر مردانه', 'ادو تویلت', 'کالیستا', 'اسپرت'],
    stock: 14,
    isNew: true,
    isIncredibleOffer: true,
    volume: '۵۰ میلی‌لیتر',
    description: 'ادو تویلت اسپرت کالیستا با رایحه‌ای مرکباتی و خنک، انتخابی مناسب برای مردان پرانرژی و فعال در طول روز است.',
    features: [
      { key: 'رایحه', value: 'مرکباتی، خنک و باانرژی' },
      { key: 'فصل', value: 'مناسب بهار و تابستان' },
      { key: 'حجم', value: '۵۰ میلی‌لیتر جیبی' }
    ],
    usage: 'روی نقاط نبض‌دار بدن اسپری کنید.',
    comments: [
      { id: 'c36', userName: 'بهزاد قاسمی', rating: 4, date: '۱۴۰۳/۰۲/۱۹', comment: 'بوی خنکی داره برای تابستان خوبه ولی ماندگاریش متوسطه.', isVerified: true, likes: 9 }
    ]
  },
  {
    id: 'p35',
    title: 'اسپری محافظت حرارتی مو سینره مدل Thermal Protector',
    englishTitle: 'Cinere Thermal Protection Hair Spray',
    brand: 'سینره',
    category: 'مراقبت و زیبایی مو',
    categorySlug: 'heat-protectant',
    price: 185000,
    originalPrice: 260000,
    discountPercent: 29,
    rating: 4.5,
    reviewCount: 154,
    image: productArganOil,
    images: [productArganOil, categoryHaircare],
    tags: ['اسپری مو', 'محافظت حرارتی', 'سینره', 'ضد سشوار'],
    stock: 22,
    isNew: true,
    isIncredibleOffer: true,
    volume: '۱۵۰ میلی‌لیتر',
    description: 'اسپری محافظت حرارتی سینره مو را در برابر آسیب سشوار، اتوکشی و دستگاه‌های حرارتی تا ۲۲۰ درجه محافظت می‌کند و از موخوره و شکنندگی جلوگیری می‌نماید.',
    features: [
      { key: 'محافظت', value: 'تا ۲۲۰ درجه سانتی‌گراد' },
      { key: 'ترمیم', value: 'آبرسانی و جلوگیری از موخوره' },
      { key: 'حجم', value: '۱۵۰ میلی‌لیتر اسپری' }
    ],
    usage: 'روی موی نیمه‌خیس قبل از استفاده از سشوار یا اتو اسپری کنید.',
    comments: [
      { id: 'c37', userName: 'فاطمه رحیمی', rating: 5, date: '۱۴۰۳/۰۲/۲۰', comment: 'از وقتی اینو میزنم موهام کمتر سوخته و شکننده شدن.', isVerified: true, likes: 16 }
    ]
  },
  {
    id: 'p36',
    title: 'اسپری دفاع حرارتی و حالت‌دهنده مو کامان مدل Heat Shield',
    englishTitle: 'Comeon Heat Shield Styling Spray',
    brand: 'کامان',
    category: 'مراقبت و زیبایی مو',
    categorySlug: 'heat-protectant',
    price: 148000,
    originalPrice: 205000,
    discountPercent: 28,
    rating: 4.3,
    reviewCount: 98,
    image: categoryHaircare,
    images: [categoryHaircare, productArganOil],
    tags: ['اسپری مو', 'حالت‌دهنده', 'کامان', 'ضد حرارت'],
    stock: 26,
    isNew: true,
    isIncredibleOffer: false,
    volume: '۱۲۰ میلی‌لیتر',
    description: 'اسپری دوکاره کامان، هم از مو در برابر حرارت محافظت می‌کند و هم حالت‌دهی سبک و طبیعی را برای موهای شما فراهم می‌سازد.',
    features: [
      { key: 'دوکاره', value: 'محافظت حرارتی + حالت‌دهی' },
      { key: 'بافت', value: 'سبک و بدون چربی' },
      { key: 'حجم', value: '۱۲۰ میلی‌لیتر' }
    ],
    usage: 'روی موی مرطوب اسپری کنید، سپس حالت دهید.',
    comments: [
      { id: 'c38', userName: 'مریم تقی‌پور', rating: 4, date: '۱۴۰۳/۰۲/۱۲', comment: 'حالت‌دهی خوبیه و مو رو سنگین نمیکنه.', isVerified: true, likes: 6 }
    ]
  },
  {
    id: 'p37',
    title: 'کرم پودر بی‌بی کالر کالیستا مدل BB Cream 5-in-1',
    englishTitle: 'Callista 5-in-1 BB Cream',
    brand: 'کالیستا',
    category: 'آرایشی صورت',
    categorySlug: 'foundation',
    price: 210000,
    originalPrice: 295000,
    discountPercent: 29,
    rating: 4.6,
    reviewCount: 287,
    image: categoryFaceMakeup,
    images: [categoryFaceMakeup, productSunscreen, productCleanser],
    colors: [
      { name: 'روشن BB1', hex: '#f3e0cf', code: 'BB1' },
      { name: 'متوسط BB2', hex: '#e8c9a5', code: 'BB2' },
      { name: 'سبزه BB3', hex: '#d9b08c', code: 'BB3' }
    ],
    tags: ['کرم پودر', 'بی‌بی کرم', 'کالیستا', 'پنج در یک'],
    stock: 19,
    isBestSeller: true,
    isIncredibleOffer: true,
    volume: '۵۰ میلی‌لیتر',
    description: 'کرم پودر پنج در یک کالیستا کارکرده آبرسانی، ضدآفتاب، پرکننده، پوشاننده و کنترل چربی را به صورت همزمان انجام می‌دهد و برای استفاده روزمره عالی است.',
    features: [
      { key: 'کارکرد', value: '۵ کارکرد در یک محصول' },
      { key: 'پوشانندگی', value: 'متوسط و طبیعی' },
      { key: 'ضد آفتاب', value: 'حاوی فیلتر SPF 20' },
      { key: 'مناسب', value: 'تمام انواع پوست' }
    ],
    usage: 'بعد از مرطوب‌کننده به صورت ماساژ دهید.',
    comments: [
      { id: 'c39', userName: 'سحر محمدی', rating: 5, date: '۱۴۰۳/۰۲/۲۴', comment: 'برای روزهای که حس میکاپ کامل ندارم عالیه، یکدست و طبیعی میکنه.', isVerified: true, likes: 24 }
    ]
  },
  {
    id: 'p38',
    title: 'فاندیشن مایع تن‌پذیر لورآل مدل True Match',
    englishTitle: "L'Oréal True Match Liquid Foundation",
    brand: 'لورآل پاریس',
    category: 'آرایشی صورت',
    categorySlug: 'foundation',
    price: 265000,
    originalPrice: 380000,
    discountPercent: 30,
    rating: 4.7,
    reviewCount: 341,
    image: categoryFaceMakeup,
    images: [categoryFaceMakeup, productSunscreen],
    colors: [
      { name: 'عاج روشن N1', hex: '#f6e3cd', code: 'N1' },
      { name: 'بژ متوسط N3', hex: '#e6c5a2', code: 'N3' },
      { name: 'قهوه‌ای روشن N5', hex: '#c99b73', code: 'N5' }
    ],
    tags: ['فاندیشن', 'مایع', 'لورآل', 'تن‌پذیر'],
    stock: 15,
    isBestSeller: true,
    isIncredibleOffer: true,
    volume: '۳۰ میلی‌لیتر',
    description: 'فاندیشن تن‌پذیر لورآل با فرمول فوق‌روان و رنگدانه‌های میکرو، پوششی یکدست، طبیعی و بدون خط افتادگی روی صورت ایجاد می‌کند.',
    features: [
      { key: 'پوشش', value: 'متوسط رو به کامل، طبیعی' },
      { key: 'بافت', value: 'مایع روان و سبک' },
      { key: 'رنگ', value: 'تن‌پذیر با سایه‌های مختلف' }
    ],
    usage: 'با اسفنج یا برس روی صورت پخش کنید.',
    comments: [
      { id: 'c40', userName: 'آرزو سلطانی', rating: 5, date: '۱۴۰۳/۰۲/۲۳', comment: 'بهترین فاندیشنی که استفاده کردم، خط نمیوفته.', isVerified: true, likes: 31 }
    ]
  },
  {
    id: 'p39',
    title: 'پرایمر منافذ باز و خط‌گیر مای مدل Pore Filling Primer',
    englishTitle: 'MY Pore Filling Face Primer',
    brand: 'مای',
    category: 'آرایشی صورت',
    categorySlug: 'concealer-primer',
    price: 175000,
    originalPrice: 250000,
    discountPercent: 30,
    rating: 4.5,
    reviewCount: 176,
    image: productCleanser,
    images: [productCleanser, categoryFaceMakeup],
    tags: ['پرایمر', 'خط‌گیر', 'مای', 'منافذ باز'],
    stock: 24,
    isNew: true,
    isIncredibleOffer: false,
    volume: '۳۰ میلی‌لیتر',
    description: 'پرایمر خط‌گیر مای قبل از کرم پودر استفاده می‌شود، منافذ باز و خطوط ریز را پر می‌کند و ماندگاری و یکدستی میکاپ را به شکل چشمگیری افزایش می‌دهد.',
    features: [
      { key: 'کارکرد', value: 'پر کردن منافذ و خطوط ریز' },
      { key: 'افزایش ماندگاری', value: 'تا ۸ ساعت میکاپ ثابت' },
      { key: 'بافت', value: 'ژلی سبک و سریع‌جذب' }
    ],
    usage: 'بعد از مرطوب‌کننده و قبل از کرم پودر بزنید.',
    comments: [
      { id: 'c41', userName: 'نازنین فرهادی', rating: 4, date: '۱۴۰۳/۰۲/۱۷', comment: 'منافذ بینی رو پر میکنه و میکاپ رو ثابت نگه میداره.', isVerified: true, likes: 13 }
    ]
  },
  {
    id: 'p40',
    title: 'هایلایتر صورت کالیستا مدل Shimmer Glow',
    englishTitle: 'Callista Shimmer Glow Highlighter',
    brand: 'کالیستا',
    category: 'آرایشی صورت',
    categorySlug: 'blush-highlighter',
    price: 155000,
    originalPrice: 220000,
    discountPercent: 30,
    rating: 4.6,
    reviewCount: 203,
    image: productBlush,
    images: [productBlush, categoryFaceMakeup],
    colors: [
      { name: 'شامپاینی H1', hex: '#f7e7c4', code: 'H1' },
      { name: 'رزگلد H2', hex: '#e8b4a0', code: 'H2' }
    ],
    tags: ['هایلایتر', 'درخشش', 'کالیستا', 'شیمر'],
    stock: 21,
    isBestSeller: false,
    isIncredibleOffer: true,
    volume: '۱۲ گرم',
    description: 'هایلایتر شیمر کالیستا درخششی نرم و ابریشمی روی استخوان گونه، گوشه داخلی چشم و قوزک بینی ایجاد می‌کند و ظاهری درخشان و سالم به پوست می‌بخشد.',
    features: [
      { key: 'درخشش', value: 'نرم، ابریشمی و بدون درشت‌نمایی منافذ' },
      { key: 'بافت', value: 'پودری فشرده نرم' },
      { key: 'کاربرد', value: 'گونه، چانه، پیشانی و گوشه چشم' }
    ],
    usage: 'با برس نرم روی نقاط برجسته صورت بزنید.',
    comments: [
      { id: 'c42', userName: 'پگاه یوسفی', rating: 5, date: '۱۴۰۳/۰۲/۲۲', comment: 'درخششش خیلی طبیعیه و دانه‌هایش ریزه.', isVerified: true, likes: 19 }
    ]
  },
  {
    id: 'p41',
    title: 'پالت برنزر و کانتور هدی بیوتی مدل Bronze Edition',
    englishTitle: 'Huda Beauty Bronze Edition Contour Palette',
    brand: 'هدی بیوتی',
    category: 'آرایشی صورت',
    categorySlug: 'contour',
    price: 385000,
    originalPrice: 540000,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 158,
    image: categoryFaceMakeup,
    images: [categoryFaceMakeup, productBlush, productEyeshadowPalette],
    colors: [
      { name: 'برنز روشن B1', hex: '#c68e63', code: 'B1' },
      { name: 'برنز متوسط B2', hex: '#a9714c', code: 'B2' },
      { name: 'برنز تیره B3', hex: '#8a5a3b', code: 'B3' }
    ],
    tags: ['پالت', 'برنزر', 'کانتور', 'هدی بیوتی'],
    stock: 8,
    isNew: true,
    isIncredibleOffer: false,
    volume: '۲۰ گرم',
    description: 'پالت برنزر هدی بیوتی با سه سایه برنز و یک هایلایتر، برای کانتور کردن صورت، سوختن طبیعی پوست و ایجاد ظاهری برنز و تابستانی طراحی شده است.',
    features: [
      { key: 'تعداد رنگ', value: '۳ برنز + ۱ هایلایتر' },
      { key: 'رنگدهی', value: 'بالا و قابل ترکیب' },
      { key: 'کارکرد', value: 'کانتور و برنز کردن صورت' }
    ],
    usage: 'برای کانتور زیر گونه و خط فک از سایه تیره استفاده کنید.',
    comments: [
      { id: 'c43', userName: 'الناز حیدری', rating: 5, date: '۱۴۰۳/۰۲/۱۴', comment: 'رنگش ترکیب میشه و طبیعی میشه. ارزش خرید داره.', isVerified: true, likes: 12 }
    ]
  },
  {
    id: 'p42',
    title: 'میسلار واتر پاککننده آرایش سینره مدل Micellar Water',
    englishTitle: 'Cinere Micellar Cleansing Water',
    brand: 'سینره',
    category: 'مراقبت پوست',
    categorySlug: 'cleanser',
    price: 125000,
    originalPrice: 175000,
    discountPercent: 29,
    rating: 4.6,
    reviewCount: 312,
    image: productCleanser,
    images: [productCleanser, productSunscreen],
    tags: ['میسلار واتر', 'پاککننده', 'سینره', 'بدون نیاز آبکشی'],
    stock: 30,
    isBestSeller: true,
    isIncredibleOffer: true,
    volume: '۴۰۰ میلی‌لیتر',
    description: 'آب میسلار سینره با ذرات میسل میکروسکوپی، آلودگی، چربی و آرایش مقاوم را بدون نیاز به آبکشی و کشیده شدن پوست پاک می‌کند و ملایم و آبرسان است.',
    features: [
      { key: 'پاکسازی', value: 'آرایش مقاوم و آلودگی روزانه' },
      { key: 'ویژگی', value: 'بدون نیاز به آبکشی' },
      { key: 'مناسب', value: 'تمام انواع پوست، حساس و لنز دار' },
      { key: 'حجم', value: '۴۰۰ میلی‌لیتر' }
    ],
    usage: 'روی پنبه بریزید و روی صورت و چشم بکشید.',
    comments: [
      { id: 'c44', userName: 'شادی نظری', rating: 5, date: '۱۴۰۳/۰۲/۲۸', comment: 'آرایش رو کامل پاک میکنه و پوستم رو خشک نمیکنه.', isVerified: true, likes: 27 }
    ]
  },
  {
    id: 'p43',
    title: 'سرم ویتامین C خالص کامان مدل Vitamin C Brightening Serum',
    englishTitle: 'Comeon Vitamin C Brightening Serum',
    brand: 'کامان',
    category: 'مراقبت پوست',
    categorySlug: 'serums',
    price: 245000,
    originalPrice: 350000,
    discountPercent: 30,
    rating: 4.7,
    reviewCount: 268,
    image: heroSerum,
    images: [heroSerum, productSunscreen, productCleanser],
    tags: ['سرم', 'ویتامین C', 'کامان', 'روشن‌کننده'],
    stock: 18,
    isBestSeller: true,
    isIncredibleOffer: true,
    volume: '۳۰ میلی‌لیتر',
    description: 'سرم ویتامین C کامان با غلظت ۱۵ درصد ویتامین C خالص، لک و تیرگی پوست را روشن می‌کند، کلاژن‌سازی را تحریک کرده و چین و چروک را کاهش می‌دهد.',
    features: [
      { key: 'غلظت', value: '۱۵٪ ویتامین C خالص' },
      { key: 'کارکرد', value: 'روشن‌کننده، ضدلک و جوان‌کننده' },
      { key: 'ترکیب', value: 'سرشار از اسید هیالورونیک' },
      { key: 'بافت', value: 'سبک و سریع‌جذب' }
    ],
    usage: 'صبح‌ها قبل از ضدآفتاب روی پوست تمیز بزنید.',
    comments: [
      { id: 'c45', userName: 'الهام صادقی', rating: 5, date: '۱۴۰۳/۰۲/۲۷', comment: 'بعد از یک ماه استفاده لکه‌هام کمرنگ شدن. عالیه.', isVerified: true, likes: 33 }
    ]
  },
  {
    id: 'p44',
    title: 'کرم ضد آفتاب رنگی لورآل مدل BB Sun SPF50',
    englishTitle: "L'Oréal BB Sun Tinted Sunscreen SPF50",
    brand: 'لورآل پاریس',
    category: 'مراقبت پوست',
    categorySlug: 'sunscreen',
    price: 198000,
    originalPrice: 280000,
    discountPercent: 29,
    rating: 4.6,
    reviewCount: 229,
    image: productSunscreen,
    images: [productSunscreen, categoryFaceMakeup],
    colors: [
      { name: 'روشن TS1', hex: '#f5e2cc', code: 'TS1' },
      { name: 'متوسط TS2', hex: '#e9c9a6', code: 'TS2' }
    ],
    tags: ['ضد آفتاب', 'رنگی', 'لورآل', 'SPF50'],
    stock: 25,
    isBestSeller: false,
    isIncredibleOffer: true,
    volume: '۵۰ میلی‌لیتر',
    description: 'ضدآفتاب رنگی لورآل با ضریب محافظت SPF50، پوست را در برابر UVA و UVB محافظت می‌کند و همزمان پوششی سبک و یکدست مانند کرم پودر روی صورت ایجاد می‌نماید.',
    features: [
      { key: 'محافظت', value: 'SPF50 پایدار در برابر UVA/UVB' },
      { key: 'پوشش', value: 'رنگی و یکدست مانند BB کرم' },
      { key: 'بافت', value: 'سبک، بدون چربی و سفیدک' }
    ],
    usage: 'صبح‌ها ۱۵ دقیقه قبل از خروج از خانه بزنید.',
    comments: [
      { id: 'c46', userName: 'بهاره کاظمی', rating: 4, date: '۱۴۰۳/۰۲/۱۳', comment: 'همان ضدآفتابه هم کرم پودر، برای صبحها سرعته.', isVerified: true, likes: 15 }
    ]
  },
  {
    id: 'p45',
    title: 'کرم شب تغذیه‌کننده و ترمیم‌کننده سینره مدل Night Repair',
    englishTitle: 'Cinere Night Repair Nourishing Cream',
    brand: 'سینره',
    category: 'مراقبت پوست',
    categorySlug: 'moisturizer',
    price: 215000,
    originalPrice: 300000,
    discountPercent: 28,
    rating: 4.5,
    reviewCount: 187,
    image: productCleanser,
    images: [productCleanser, heroSerum, productSunscreen],
    tags: ['کرم شب', 'تغذیه‌کننده', 'سینره', 'ترمیم'],
    stock: 16,
    isNew: true,
    isIncredibleOffer: true,
    volume: '۵۰ میلی‌لیتر',
    description: 'کرم شب سینره با ترکیب روغن‌های مغذی و پپتیدها، در طول شب پوست را آبرسانی عمیق می‌کند، چین و چروک را ترمیم کرده و شفافیت و طراوت را به پوست برمی‌گرداند.',
    features: [
      { key: 'کارکرد', value: 'تغذیه، آبرسانی و ترمیم شبانه' },
      { key: 'ترکیب', value: 'پپتیدها + روغن جوجوبا' },
      { key: 'مناسب', value: 'پوست خشک و معمولی' }
    ],
    usage: 'شب‌ها قبل از خواب روی صورت و گردن ماساژ دهید.',
    comments: [
      { id: 'c47', userName: 'پروانه نوری', rating: 5, date: '۱۴۰۳/۰۲/۱۶', comment: 'صبح‌ها پوستم نرم و شاداب میشه. خیلی خوبه.', isVerified: true, likes: 22 }
    ]
  },
  {
    id: 'p46',
    title: 'ماسک کاسه‌ای چربی‌گیر و پاکسازی عمیق لورآل مدل Pure Clay',
    englishTitle: "L'Oréal Pure Clay Detox Face Mask",
    brand: 'لورآل پاریس',
    category: 'مراقبت پوست',
    categorySlug: 'face-mask',
    price: 168000,
    originalPrice: 235000,
    discountPercent: 28,
    rating: 4.5,
    reviewCount: 214,
    image: productCleanser,
    images: [productCleanser, categoryFaceMakeup, productSunscreen],
    tags: ['ماسک صورت', 'چربی‌گیر', 'لورآل', 'پاکسازی'],
    stock: 23,
    isBestSeller: false,
    isIncredibleOffer: true,
    volume: '۱۰۰ میلی‌لیتر',
    description: 'ماسک کاسه‌ای لورآل با سه نوع خاک مجازی، چربی اضافی و آلودگی را از عمق منافذ پوست بیرون می‌کشد و پوستی مات، تمیز و بدون جوش به شما می‌دهد.',
    features: [
      { key: 'کارکرد', value: 'چربی‌گیر و پاکسازی عمیق' },
      { key: 'ترکیب', value: 'خاک کائولن + زغال فعال' },
      { key: 'حجم', value: '۱۰۰ میلی‌لیتر کاسه‌ای' },
      { key: 'مناسب', value: 'پوست چرب و ترکیبی' }
    ],
    usage: 'هفته‌ای ۲ بار به مدت ۱۰ دقیقه روی صورت بگذارید.',
    comments: [
      { id: 'c48', userName: 'هانیه عباسی', rating: 5, date: '۱۴۰۳/۰۲/۱۱', comment: 'موهام رو چرب میکنه و جوش ندارم. ماسک خوبیه.', isVerified: true, likes: 18 }
    ]
  },
  {
    id: 'p47',
    title: 'نرم‌کننده و ماسک موی عمیق هدی بیوتی مدل Deep Repair',
    englishTitle: 'Huda Beauty Deep Repair Hair Mask',
    brand: 'هدی بیوتی',
    category: 'مراقبت و زیبایی مو',
    categorySlug: 'hair-mask',
    price: 285000,
    originalPrice: 400000,
    discountPercent: 29,
    rating: 4.7,
    reviewCount: 192,
    image: productArganOil,
    images: [productArganOil, categoryHaircare],
    tags: ['ماسک مو', 'نرم‌کننده', 'هدی بیوتی', 'ترمیم'],
    stock: 13,
    isNew: true,
    isIncredibleOffer: true,
    volume: '۲۵۰ میلی‌لیتر',
    description: 'ماسک موی ترمیم‌کننده هدی بیوتی با روغن آرگان و کراتین، موهای آسیب‌دیده و رنگ‌شده را در عمق ترمیم می‌کند، نرمی و درخشش فوق‌العاده‌ای به مو می‌بخشد.',
    features: [
      { key: 'کارکرد', value: 'ترمیم عمیق موی آسیب‌دیده' },
      { key: 'ترکیب', value: 'روغن آرگان + کراتین' },
      { key: 'حجم', value: '۲۵۰ میلی‌لیتر' }
    ],
    usage: 'هفته‌ای ۲ بار به مدت ۵ دقیقه روی موی شسته‌شده بگذارید.',
    comments: [
      { id: 'c49', userName: 'آزاده موسوی', rating: 5, date: '۱۴۰۳/۰۲/۲۵', comment: 'موهام که رنگ کردم اینو میزنم، نرم و درخشان میشه.', isVerified: true, likes: 26 }
    ]
  },
  {
    id: 'p48',
    title: 'شامپو ضد ریزش و تقویت‌کننده کالیستا مدل Anti-Hair Loss',
    englishTitle: 'Callista Anti-Hair Loss Strengthening Shampoo',
    brand: 'کالیستا',
    category: 'مراقبت و زیبایی مو',
    categorySlug: 'shampoo',
    price: 158000,
    originalPrice: 225000,
    discountPercent: 30,
    rating: 4.4,
    reviewCount: 245,
    image: categoryHaircare,
    images: [categoryHaircare, productArganOil],
    tags: ['شامپو', 'ضد ریزش', 'کالیستا', 'تقویت‌کننده'],
    stock: 27,
    isBestSeller: true,
    isIncredibleOffer: true,
    volume: '۴۰۰ میلی‌لیتر',
    description: 'شامپو ضد ریزش کالیستا با عصاره رزماری و کافئین، ریشه مو را تقویت می‌کند، ریزش مو را کاهش داده و رشد موهای ضعیف را تحریک می‌نماید.',
    features: [
      { key: 'کارکرد', value: 'کاهش ریزش و تقویت ریشه' },
      { key: 'ترکیب', value: 'عصاره رزماری + کافئین' },
      { key: 'بدون', value: 'فری سولفات و پارابن' },
      { key: 'حجم', value: '۴۰۰ میلی‌لیتر' }
    ],
    usage: 'هفته‌ای ۳ بار روی کف سر ماساژ دهید و آبکشی کنید.',
    comments: [
      { id: 'c50', userName: 'زهرا حسینی', rating: 4, date: '۱۴۰۳/۰۲/۲۱', comment: 'بعد از یک ماه ریزشم خیلی کمتر شد. موثره.', isVerified: true, likes: 29 }
    ]
  }
];

export const ARTICLES: BeautyArticle[] = [
  {
    id: 'art-1',
    title: 'راهنمای کامل انتخاب رنگ رژ لب مناسب با تناژ پوست',
    excerpt: 'چگونه بهترین رنگ رژ لب را متناسب با زیرتن (Undertone) گرم، سرد یا خنثی پوست خود انتخاب کنیم؟',
    content: [
      'انتخاب رنگ رژ لب مناسب یکی از مهم‌ترین رازهای داشتن یک آرایش شیک و جذاب است. برای این کار ابتدا باید زیرتن پوست خود را بشناسید.',
      'اگر رگ‌های مچ دست شما آبی یا بنفش هستند، زیرتن پوست شما سرد است و رژ لب‌های با پایه صورتی، یاقوتی و زرشکی فوق‌العاده روی چهره شما می‌نشینند.',
      'اگر رگ‌های دست سبز رنگ هستند، پوست گرم دارید و رژ لب‌های کالباسی گرم، هلویی، مرجانی و قرمز آجری بهترین گزینه خواهند بود.',
      'یکی دیگر از نکات مهم این است که رنگ رژ لب را حتماً در نور طبیعی روز امتحان کنید؛ نور گرم و زرد فروشگاه‌ها همیشه رنگ واقعی محصول را به شما نشان نمی‌دهد.',
      'برای پوست‌هایی با زیرتن خنثی، تقریباً همه خانواده‌های رنگی رژ لب مناسب است اما بهترین انتخاب‌ها، رنگ‌های میوه‌ای، هلویی و نود هستند.',
      'سعی کنید رنگ رژ لب را با رنگ لباس و استایل روزانه خود هماهنگ کنید تا یکپارچگی و هارمونی چهره حفظ بماند.',
      'اگر موهای تیره و پوست روشن دارید، رژ لب‌های یاقوتی و زرشکی تیره چهره شما را درخشان‌تر و جذاب‌تر نشان می‌دهند.',
      'برای موهای بلوند و پوست بسیار روشن، رنگ‌های صورتی کم‌رنگ، هلویی و برهنه نود بهترین و امن‌ترین گزینه‌ها هستند.',
      'داشتن حداقل دو رنگ رژ لب برای روز و شب ضروری است؛ رنگ‌های ملایم و خنثی برای روز و رنگ‌های جیغ‌تر و تیره‌تر برای شب.',
      'حتماً قبل از زدن رژ لب از بالم لب آبرسان استفاده کنید تا لب‌هایتان خشک و پوسته‌پوسته نشود و رنگ یکدست‌تری روی لب بنشیند.',
      'ماندگاری رژ لب مات معمولاً بیشتر از نوع براق است، اما اگر لب‌های خشکی دارید ترکیب رژ مات با یک لایه نازک برق لب پیشنهاد می‌شود.',
      'فراموش نکنید که خط لب هم‌رنگ یا یک درجه تیره‌تر از رژ لب، هم حجم لب‌ها را پرتر نشان می‌دهد و هم ماندگاری رنگ را افزایش می‌دهد.',
      'اگر چشم‌های سبز یا آبی دارید، رژ لب‌های صورتی و فابی چهره شما را فوق‌العاده جذاب می‌کنند.',
      'در نهایت، بهترین رنگ رژ لب رنگی است که وقتی به آن نگاه می‌کنید احساس اعتماد به نفس می‌کنید؛ این قوانین فقط راهنما هستند و سلیقه شخصی شما در اولویت است.'
    ],
    author: 'دکتر مریم نوری (متخصص پوست و زیبایی)',
    readTime: '۵ دقیقه مطالعه',
    date: '۲۲ اردیبهشت ۱۴۰۳',
    image: heroLipstick,
    category: 'آموزش آرایش',
    tags: ['رژ لب', 'تکنیک میکاپ', 'تناژ پوست']
  },
  {
    id: 'art-2',
    title: '۷ گام طلایی برای درمان خشکی و دهیدراته بودن پوست در تابستان',
    excerpt: 'خشکی پوست فقط در زمستان رخ نمی‌دهد! آفتاب شدید و کولر گازی نیز رطوبت پوست را تبخیر می‌کنند.',
    content: [
      'یکی از اشتباهات رایج این است که تصور کنیم پوست چرب نیازی به آبرسان ندارد. همه انواع پوست ممکن است دچار کم‌آبی (دهیدراتاسیون) شوند.',
      'استفاده روزانه از سرم هیالورونیک اسید بلافاصله بعد از شستشوی صورت و روی پوست نم‌دار، رطوبت را درون بافت پوست قفل می‌کند.',
      'همچنین نوشیدن حداقل ۸ لیوان آب و استفاده مداوم از ضد آفتاب بی‌رنگ فاقد چربی کلید داشتن پوستی شفاف است.',
      'نشانه‌های بارز پوست دهیدراته شامل احساس کشیدگی بعد از شستشو، کدر و مات شدن پوست و ایجاد خطوط ریز و گذرا است.',
      'یکی از راه‌های ساده برای تشخیص کم‌آبی پوست، فشار دادن ملایم پوست گونه است؛ اگر چین و چروک آن سریع برنگردد، پوست شما به آبرسانی نیاز دارد.',
      'آبرسان‌های حاوی گلیسیرین و سرامید، سد دفاعی پوست را ترمیم می‌کنند و از تبخیر سریع رطوبت جلوگیری می‌کنند.',
      'شستشوی صورت با آب خنک یا ولرم به جای آب داغ، سد چربی طبیعی پوست را حفظ کرده و از خشکی بیشتر جلوگیری می‌کند.',
      'استفاده از دستگاه بخور سرد در اتاق خواب، به ویژه در محیط‌های خشک، رطوبت محیط را بالا برده و پوست را سالم نگه می‌دارد.',
      'اگر پوست بسیار خشکی دارید، یک قطره روغن آرگان یا جوجوبا را با کرم مرطوب‌کننده شبانه ترکیب کنید تا آبرسانی عمیق‌تری داشته باشید.',
      'بهتر است آبرسان را بلافاصله بعد از دوش گرفتن و روی پوست کمی نم‌دار بزنید تا رطوبت درون بافت پوست قفل شود.',
      'خوردن غذاهای سرشار از اسیدهای چرب امگا ۳ مانند گردو، دانه کتان و ماهی، به آبرسانی پوست از درون بدن کمک شایانی می‌کند.',
      'استفاده از ماسک آبرسان هفته‌ای یک تا دو بار، در کنار روتین روزانه، تاثیر قابل توجهی روی شفافیت و طراوت پوست دارد.',
      'یادتان باشد پوست خشک مستعد حساسیت بیشتری است، پس از محصولات حاوی الکل، عطر قوی و مواد خشن پرهیز کنید.',
      'در نهایت، اگر بعد از یک ماه آبرسانی مداوم همچنان احساس خشکی شدید دارید، حتماً با یک متخصص پوست مشورت کنید.'
    ],
    author: 'پریسا کاظمی (مشاور سلامت پوست)',
    readTime: '۷ دقیقه مطالعه',
    date: '۱۸ اردیبهشت ۱۴۰۳',
    image: heroSerum,
    category: 'مراقبت پوست',
    tags: ['هیالورونیک اسید', 'آبرسانی', 'روتین پوست']
  },
  {
    id: 'art-3',
    title: 'چگونه بوی عطر را بیش از ۲۴ ساعت روی بدن ماندگار کنیم؟',
    excerpt: 'با این چند ترفند ساده، خط بوی ادکلن خود را دوبرابر کنید و در طول روز بدرخشید.',
    content: [
      'اسپری کردن عطر روی نقاط نبض‌دار بدن مانند مچ دست، پشت گوش‌ها، روی گردن و پشت زانوها باعث پخش بهتر بوی عطر به دلیل گرمای نبض می‌شود.',
      'همچنین قبل از اسپری عطر، حتما مقداری لوشن بی‌بو یا وازلین روی پوست مرطوب بزنید؛ پوست چرب و مرطوب مولکول‌های عطر را خیلی بهتر نگه می‌دارد.',
      'نوع پوست شما نقش مهمی در ماندگاری عطر دارد؛ روی پوست چرب و مرطوب رایحه‌ها بسیار بیشتر از پوست خشک دوام می‌آورند.',
      'عطرها بر اساس غلظت اسانس دسته‌بندی می‌شوند؛ ادو پارفوم به دلیل درصد اسانس بالاتر، ماندگاری بسیار بیشتری نسبت به ادوتویلت دارد.',
      'اسپری کردن عطر روی لباس‌های تیره و پنبه‌ای باعث می‌شود رایحه تا پایان روز با شما بماند، اما از اسپری روی ابریشم و جواهرات پرهیز کنید.',
      'اصلاً عطر را روی مچ دست‌ها را به هم مالش ندهید؛ این کار باعث شکسته شدن زنجیره مولکولی و از بین رفتن سریع نت‌های بالایی می‌شود.',
      'ذخیره عطر در جای خشک، خنک و دور از نور مستقیم خورشید، عمر آن را افزایش می‌دهد و از اکسید شدن اسانس جلوگیری می‌کند.',
      'برای روزهای طولانی، از ترکیب لوشن هم‌رایحه با ادکلن استفاده کنید تا لایه‌بندی بوی شما را تقویت و ماندگاری آن را چند برابر کند.',
      'مو و شال گردن نیز جای خوبی برای نگه داشتن بو هستند؛ یک اسپری از فاصله ۲۰ سانتی‌متری روی موها کاملاً کافی است.',
      'یکی از ترفندهای حرفه‌ای، اسپری کردن عطر روی یک دستمال تمیز داخل کیف یا روی کمربند است که رایحه را ملایم و در عین حال طولانی‌مدت نگه می‌دارد.',
      'اگر می‌خواهید رایحه دوام بیشتری داشته باشد، قبل از عطر زدن مقداری وازلین بی‌بو روی نقاط نبض‌دار بزنید تا بوی شما را قفل کند.',
      'بهتر است عطر را ۱۵ تا ۲۰ دقیقه قبل از خروج از خانه بزنید تا نت‌های تند اولیه آرام شوند و رایحه پایینی دل‌نشین‌تر به مشام برسد.',
      'یادتان باشد که بوی عطر در طول روز برای شما منفعل و عادی می‌شود، پس از زیاده‌روی بپرهیزید تا اطرافیان آزار نبینند.'
    ],
    author: 'ارسلان کریمی (کارشناس عطر و رایحه)',
    readTime: '۴ دقیقه مطالعه',
    date: '۱۰ اردیبهشت ۱۴۰۳',
    image: heroPerfume,
    category: 'عطر و ادکلن',
    tags: ['ماندگاری عطر', 'ادکلن زنانه', 'تکنیک عطر']
  },
  {
    id: 'art-4',
    title: '۵ ماسک صورت خانگی با مواد طبیعی برای هر نوع پوست',
    excerpt: 'از آشپزخانه تا حمام! با همین مواد ساده و در دسترس، ماسک‌های صورت موثری بسازید.',
    content: [
      'ماسک صورت خانگی تنها راهنمای اقتصادی نیست، بلکه به دلیل نداشتن مواد نگهدارنده شیمیایی برای پوست‌های حساس هم مناسب است.',
      'ماسک عسل و ماست برای پوست خشک: یک قاشق عسل را با دو قاشق ماست ساده مخلوط کنید، ۱۵ دقیقه روی صورت بگذارید و سپس با آب ولرم بشویید. عسل آبرسان طبیعی است.',
      'ماسک زردچوبه و گلاب برای پوست چرب: نصف قاشق زردچوبه با مقداری گلاب ترکیب کنید. این ماسک چربی اضافی را جذب کرده و جوش را کاهش می‌دهد.',
      'ماسک خیار و آلوئهورا برای پوست حساس: خیار رنده شده با ژل آلوئهورا ترکیبی خنک‌کننده و ضدالتهاب برای پوست‌های قرمز و ملتهب است.',
      'ماسک پاپایا و عسل برای روشن‌تر کردن پوست خسته: چند تکه پاپایا رسیده را پوره کرده با یک قاشق عسل مخلوط کنید، ۱۵ دقیقه روی صورت بگذارید و سپس بشویید.',
      'ماسک موز و روغن نارگیل برای تغذیه عمیق پوست خشک: یک موز رسیده را له کرده با یک قاشق چای‌خوری روغن نارگیل ترکیب کنید؛ این ترکیب سرشار از پتاسیم و ویتامین E است.',
      'ماسک چای سبز و عسل برای پوست مستعد جوش: چای سبز دم‌کرده و سرد شده را با عسل و چند قطره آب لیموترش تازه ترکیب کنید و ۱۰ دقیقه روی صورت قرار دهید.',
      'برای پوست کدر و خسته، ماسک قهوه و شیر را امتحان کنید؛ قهوه لایه‌برداری ملایم انجام می‌دهد و شیر آبرسانی پوست را تامین می‌کند.',
      'همه ماسک‌های خانگی را روی پوست کاملاً تمیز و ترجیحاً قبل از استراحت شب استفاده کنید تا پوست فرصت کافی برای ترمیم داشته باشد.',
      'توصیه می‌شود قبل از استفاده از هر ماسک جدید، تست حساسیت روی بخش داخلی بازو انجام شود تا از واکنش آلرژیک پیشگیری شود.',
      'از ماسک‌های خانگی نباید انتظار معجزه یک‌شبه داشت؛ استفاده منظم و هفته‌ای دو بار پس از چند هفته نتیجه ملموسی به همراه دارد.',
      'بهتر است ماسک‌های خانگی را همیشه تازه و به اندازه مصرف یک بار آماده کنید تا خواص مواد طبیعی آن‌ها حفظ شود.',
      'بعد از شستشوی ماسک، یک لایه نازک کرم مرطوب‌کننده بزنید تا رطوبت به دست آمده در بافت پوست قفل شود و اثر ماسک دوچندان شود.',
      'هنگام استفاده از ماسک‌ها، از ناحیه حساس دور چشم و لب خودداری کنید مگر اینکه ماسک مخصوص این نواحی باشد.',
      'به یاد داشته باشید که آلرژی به مواد طبیعی مثل عسل، گلاب یا لیمو هم امکان‌پذیر است، پس در صورت بروز سوزش سریعاً صورت را بشویید.'
    ],
    author: 'پریسا کاظمی (مشاور سلامت پوست)',
    readTime: '۶ دقیقه مطالعه',
    date: '۵ اردیبهشت ۱۴۰۳',
    image: productCleanser,
    category: 'مراقبت پوست',
    tags: ['ماسک خانگی', 'مواد طبیعی', 'روتین پوست']
  },
  {
    id: 'art-5',
    title: 'روتین شب پوست؛ ۶ گام طلایی برای بیدار شدن با پوستی جوان',
    excerpt: 'شب زمان اصلی ترمیم پوست است. با این روال ساده، اثر محصولات را دوچندان کنید.',
    content: [
      'در طول شب، پوست به طور فعال سلول‌های آسیب‌دیده را ترمیم و کلاژن جدید می‌سازد؛ به همین دلیل محصولات شبانه اهمیت ویژه‌ای دارند.',
      'گام اول شستشوی دقیق با شوینده ملایم یا آب میسلار برای پاک کردن آرایش، آلودگی و چربی انباشته شده در طول روز است.',
      'گام دوم استفاده از تونر بدون الکل برای تنظیم pH پوست و آماده‌سازی آن برای جذب بهتر محصولات بعدی است.',
      'گام سوم سرم درمانی (مانند رتینول یا ویتامین C) است که در ترکیب با گام چهارم یعنی کرم مرطوب‌کننده غنی، رطوبت مورد نیاز شبانه را تامین می‌کند.',
      'گام پنجم و ششم شامل کرم دور چشم و یک بار در هفته ماسک آبرسان است. یک هفته پس از شروع این روال، تفاوت طراوت پوست خود را خواهید دید.',
      'استفاده از رتینول را با غلظت پایین و هر سه شب یک بار شروع کنید تا پوست به تدریج به آن عادت کند و دچار سوزش و قرمزی نشود.',
      'هیچ‌گاه رتینول را با ویتامین C در یک شب ترکیب نکنید؛ این دو ماده می‌توانند باعث تحریک شدید پوست شوند.',
      'یکی از اشتباهات رایج، استفاده از آب داغ برای شستشوی شبانه است که چربی طبیعی و سد دفاعی پوست را از بین می‌برد.',
      'اگر از درمان‌های ضدجوش حاوی سالیسیلیک اسید استفاده می‌کنید، فقط نواحی چرب خط T (پیشانی، بینی و چانه) را هدف قرار دهید.',
      'روی یک لایه نازک و یکدست از هر محصول بزنید؛ استفاده زیاد نه تنها نتیجه بهتر نمی‌دهد، بلکه منافذ پوست را می‌بندد.',
      'در فصول سرد سال، کرم مرطوب‌کننده غلیظ‌تر و در فصول گرم، فرمول سبک‌تر و ژلی انتخاب کنید تا پوست تعادل خود را حفظ کند.',
      'کرم دور چشم را با حرکت دایره‌ای ملایم و انگشت حلقه به دور چشم بزنید؛ این ناحیه حساس‌ترین و نازک‌ترین پوست صورت است.',
      'یک بار در هفته لایه‌برداری ملایم با اسیدهای AHA انجام دهید تا سلول‌های مرده پوست کنده شوند و محصولات بهتر جذب شوند.',
      'کیفیت خواب ۷ تا ۸ ساعته در یک اتاق تاریک و خنک، نقش اصلی را در فرآیند ترمیم شبانه پوست بازی می‌کند.',
      'فراموش نکنید که روبالشی را هر هفته تعویض کنید تا چربی و آلودگی مو به پوست صورت منتقل نشود و جوش ایجاد نکند.',
      'در نهایت، صبور باشید؛ روتین شبانه موثر معمولاً بعد از چهار تا شش هفته استفاده منظم، نتایج شگفت‌انگیز خود را نشان می‌دهد.'
    ],
    author: 'دکتر مریم نوری (متخصص پوست و زیبایی)',
    readTime: '۸ دقیقه مطالعه',
    date: '۲ اردیبهشت ۱۴۰۳',
    image: heroSerum,
    category: 'مراقبت پوست',
    tags: ['روتین شب', 'رتینول', 'آبرسانی', 'جوان‌سازی']
  },
  {
    id: 'art-6',
    title: 'راهنمای انتخاب عطر متناسب با شخصیت و فصل',
    excerpt: 'عطر برگزار شناسنامه نامرئی شماست؛ چگونه رایحه‌ای را انتخاب کنیم که جاودانه و در ذهن بماند؟',
    content: [
      'عطر تنها یک بو نیست؛ اولین چیزی است که از شما به یاد می‌ماند و می‌تواند احساسات، خاطرات و حتی شخصیت شما را منتقل کند.',
      'رایحه‌های گل و شیرین برای افراد رمانتیک و اجتماعی مناسب‌اند، در حالی که رایحه‌های چوبی و کهربایی حس قدرت و آرامش را القا می‌کنند.',
      'در تابستان به سراغ رایحه‌های خنک مرکباتی و آبی بروید و در زمستان رایحه‌های گرم چوبی، وانیلی و ادویه‌ای انتخاب بهتری هستند.',
      'برای محیط کار، عطرهایی با پخش ملایم و در حجم جیبی همراه داشته باشید تا در طول روز تمدید کنید؛ نقاط نبض‌دار مانند مچ دست و پشت گوش بهترین جای اسپری هستند.',
      'هنگام انتخاب عطر، هر بار بین بو کردن دو نمونه، چند دانه قهوه بو کنید تا حس بویایی شما ریست و آماده تست بعدی شود.',
      'عطرهای گرم و شیرین برای جمع‌های عاشقانه و شبانه عالی هستند، اما برای روزهای گرم و استرس‌زا انتخاب مناسب محسوب نمی‌شوند.',
      'رایحه‌های مرکباتی و سبک برای روزهای گرم تابستانی و محیط‌های شلوغ و بسته مناسب‌ترند و حس طراوت و انرژی می‌بخشند.',
      'عطرهای چوبی و کهربایی برای پاییز و زمستان گزینه‌ای کلاسیک و شیک هستند و حس گرمی و صمیمیت منتقل می‌کنند.',
      'هرگز بیش از سه عطر را در یک جلسه تست نکنید؛ حس بویایی شما سریعاً خسته می‌شود و تشخیص خوب از بد سخت می‌شود.',
      'عطر را حداقل ۳۰ دقیقه روی پوست خود بگذارید تا نت‌های پایانی خود را نشان دهد، سپس تصمیم به خرید بگیرید.',
      'انتخاب حجم مناسب عطر مهم است؛ اگر روزانه استفاده می‌کنید حجم بزرگ اقتصادی‌تر است و اگر گهگاه، حجم کوچک‌تر بخرید.',
      'یک عطر امضای شخصی داشته باشید که اطرافیان شما را با آن بشناسند، اما برای مناسبت‌های مختلف کمی تنوع ایجاد کنید.',
      'یادتان باشد که بوی عطر روی پوست هر فرد متفاوت است، پس هرگز بدون تست روی پوست خودتان اقدام به خرید نکنید.',
      'اگر به دنبال عطر ماندگارتری هستید، به سراغ ادو پارفوم یا پارفوم خالص بروید که غلظت اسانس بالاتری دارند.',
      'در نهایت عطری را بخرید که حس خوبی به شما می‌دهد؛ رایحه مستقیماً با حافظه، خاطرات و احساسات شما در ارتباط است.'
    ],
    author: 'ارسلان کریمی (کارشناس عطر و رایحه)',
    readTime: '۷ دقیقه مطالعه',
    date: '۲۸ فروردین ۱۴۰۳',
    image: heroPerfume,
    category: 'عطر و ادکلن',
    tags: ['انتخاب عطر', 'رایحه', 'فصل', 'ادکلن']
  },
  {
    id: 'art-7',
    title: 'مراقبت از مو رنگ شده؛ از رنگ‌گیری تا ماسک‌های تقویتی',
    excerpt: 'رنگ کردن مو آسیب جدی به بافت مو وارد می‌کند، اما با این مراقبت‌ها مویی سالم و درخشان داشته باشید.',
    content: [
      'رنگ‌های شیمیایی لایه خارجی مو (کوتیکول) را باز می‌کنند تا رنگ به داخل نفوذ کند؛ همین موضوع مو را در برابر آسیب، خشکی و شکستگی آسیب‌پذیرتر می‌سازد.',
      'اولین قانون: از شامپوهای مخصوص مو رنگ شده استفاده کنید چون PH ملایم‌تری دارند و از رنگ‌پریدگی زودرس جلوگیری می‌کنند.',
      'هفته‌ای یک تا دو بار ماسک موی عمیق یا روغن آرگان را روی ساقه مو بگذارید؛ این کار کوتیکول‌های آسیب‌دیده را ترمیم و رطوبت را قفل می‌کند.',
      'همیشه قبل از سشوار و اتوکشی از اسپری محافظت حرارتی استفاده کنید و تا حد امکان خشک کردن با حرارت زیاد را به حداقل برسانید.',
      'نکته طلایی: موی رنگ شده در برابر آفتاب حساس‌تر است، پس در استخر از کلاه و در آفتاب شدید از محصولات محافظ UV استفاده کنید.',
      'در ۴۸ ساعت اول بعد از رنگ کردن مو، به هیچ وجه نباید شامپو بزنید؛ این مدت زمان برای تثبیت کامل رنگ در بافت مو ضروری است.',
      'استفاده از آب خنک یا ولرم برای شستشوی مو، رنگ را بسیار بیشتر از آب داغ حفظ می‌کند و از رنگ‌پریدگی زودرس جلوگیری می‌کند.',
      'ماسک موی حاوی روغن آرگان و کراتین، هفته‌ای یک بار، ساقه موی آسیب‌دیده را عمیقاً بازسازی و ترمیم می‌کند.',
      'از برس‌های دندانه باز و چوبی استفاده کنید تا موی رنگ شده کمتر گره بخورد و بشکند.',
      'هفته‌ای یک تا دو بار از روغن‌های گیاهی مثل روغن نارگیل یا جوجوبا برای آبرسانی عمقی ساقه مو استفاده کنید.',
      'تا حد امکان خیس بستن مو و خوابیدن با موی خیس را ترک کنید؛ موی خیس بسیار مستعد شکستگی و آسیب است.',
      'استفاده از سرم‌های بدون آبکشی حاوی پروتئین ابریشم، درخشندگی و نرمی موی رنگ شده را به طرز چشمگیری بالا می‌برد.',
      'دوری از آب استخر کلردار یا استفاده از کلاه شنا، از رنگ‌پریدگی زودرس و خشکی شدید مو جلوگیری می‌کند.',
      'رنگ موی ریشه‌دوخته باید هر ۴ تا ۶ هفته ترمیم شود تا خط ریشه همرنگ و ظاهر مو مرتب بماند.',
      'یادتان باشد که تغذیه سرشار از پروتئین، آهن و ویتامین‌ها، از درون بدن مو را تقویت و رشد را تحریک می‌کند.',
      'در نهایت، اگر موی شما به شدت آسیب‌دیده است، قبل از رنگ مجدد حتماً با متخصص مو مشورت کنید تا درمان‌های تقویتی انجام شود.'
    ],
    author: 'لیلا فروزش (متخصص مو و کلاسه)',
    readTime: '۹ دقیقه مطالعه',
    date: '۲۵ فروردین ۱۴۰۳',
    image: categoryHaircare,
    category: 'مراقبت و زیبایی مو',
    tags: ['موی رنگ شده', 'ماسک مو', 'روغن آرگان', 'مراقبت مو']
  },
  {
    id: 'art-8',
    title: 'میکاپ طبیعی روزانه در فقط ۵ دقیقه؛ آموزش گام‌به‌گام',
    excerpt: 'برو به سر کار یا دانشگاه با ظاهری مرتب و طبیعی، بدون اینکه ساعت‌ها جلوی آینه بگذرانی.',
    content: [
      'میکاپ طبیعی به معنای پنهان کردن صورت نیست، بلکه تقویت زیبایی‌های طبیعی و ایجاد ظاهری مرتب و آرامش‌بخش است.',
      'گام اول: ۵ ثانیه پرایمر خط‌گیر یا BB کرم را روی صورت پخش کنید تا یکدستی ایجاد شود و ماندگاری محصولات بعدی بیشتر شود.',
      'گام دوم: کرم پودر یا کانسیلر را فقط زیر چشم و روی لک‌ها بزنید؛ نیازی به پوشاندن کل صورت نیست.',
      'گام سوم: یک خط چشم ظریف یا ماسکارا را فقط روی lashes بالا بزنید و انتهای ابروها را با ژل ابرو شفاف حالت دهید.',
      'گام چهارم: کمی رژ لب نود یا برق لب مات و یک پینک از هایلایتر روی استخوان گونه. همین! اکنون ظاهری تازه و طبیعی دارید.',
      'انتخاب کرم پودر یک درجه روشن‌تر یا تیره‌تر از رنگ پوست باعث می‌شود ظاهر طبیعی میکاپ کاملاً از بین برود.',
      'کانسیلر را با یک اسفنج مرطوب و به صورت ضربه‌ای و محو بزنید تا مرز بین کانسیلر و پوست اصلاً دیده نشود.',
      'ابروها نقش اصلی در طبیعی بودن چهره دارند؛ فقط نقاط خالی ابرو را با مداد ابرو و به صورت رشته‌رشته پر کنید.',
      'برای رژگونه طبیعی، رنگ رژگونه را روی سیب گونه و به سمت شقیقه‌ها به آرامی محو کنید تا ظاهری شاداب و طبیعی بسازید.',
      'استفاده از اسپری تثبیت‌کننده آرایش، میکاپ طبیعی شما را تا پایان روز تازه و بدون نیاز به ترمیم نگه می‌دارد.',
      'ماسکارا را فقط روی مژه‌های بالا بزنید تا چشم‌ها باز، خسته‌به‌نظرنرسیده و طبیعی به نظر برسند.',
      'یک اشارهٔ ظریف از هایلایتر روی استخوان گونه، نوک بینی و قوس کوپیدون، عمق و شفافیت زیبایی به صورت می‌بخشد.',
      'انتخاب رژ لب نود یا برق لب صورتی ملایم، بهترین و امن‌ترین گزینه برای تکمیل میکاپ طبیعی روزانه است.',
      'یادتان باشد که پیش از آرایش، پوست باید تمیز و آبرسان شده باشد تا محصولات یکدست بنشینند و خط نیفتند.',
      'همیشه کرم پودر را از مرکز صورت به سمت بیرون و خط فک بزنید تا پوشش یکدست و طبیعی ایجاد شود.',
      'در نهایت، میکاپ طبیعی یعنی اینکه کسی متوجه نشود شما آرایش دارید؛ قانون طلایی این است که کمتر، همیشه بهتر است.'
    ],
    author: 'سارا قنبری (آرایشگر حرفه‌ای)',
    readTime: '۵ دقیقه مطالعه',
    date: '۲۰ فروردین ۱۴۰۳',
    image: categoryFaceMakeup,
    category: 'آموزش آرایش',
    tags: ['میکاپ طبیعی', 'آموزش میکاپ', 'روزانه', 'تکنیک']
  },
  {
    id: 'art-9',
    title: 'فواید جادویی ویتامین C برای پوست؛ چرا باید حتما استفاده کنید؟',
    excerpt: 'از روشن کردن لک تا تحریک کلاژن‌سازی؛ با همه خواص ویتامین C و نحوه درست مصرف آن آشنا شوید.',
    content: [
      'ویتامین C یکی از قوی‌ترین آنتی‌اکسیدان‌های موجود در محصولات آرایشی بهداشتی است و نقش حیاتی در سلامت و جوانی پوست دارد.',
      'این ویتامین با مهار آنزیم تیروزیناز از تولید ملانین اضافی جلوگیری کرده و لک، تیرگی و کک‌ومک را به مرور روشن می‌کند.',
      'ویتامین C ساخت کلاژن را تحریک می‌کند که به نوبه خود چین و چروک‌های ریز را پر کرده و خاصیت ارتجاعی پوست را بهبود می‌بخشد.',
      'بهترین زمان استفاده صبح‌ها قبل از ضدآفتاب است چون اثر محافظت در برابر آسیب رادیکال‌های آزاد آفتاب را تقویت می‌کند.',
      'نکته مهم: سرم ویتامین C باید در ظروف تیره و دور از نور نگهداری شود و اگر رنگ آن تیره شد یعنی اکسید شده و اثر خود را از دست داده است.',
      'سرم ویتامین C با غلظت ۱۰ تا ۲۰ درصد برای شروع استفاده مناسب است؛ غلظت بالاتر می‌تواند باعث تحریک و سوزش پوست شود.',
      'ترکیب ویتامین C با ویتامین E و اسید فرولیک، اثر محافظتی و روشن‌کنندگی آن را چندین برابر می‌کند.',
      'هرگز سرم ویتامین C را در حمام یا کنار پنجره نگه ندارید؛ نور و گرما به سرعت آن را اکسید و بی‌اثر می‌کند.',
      'استفاده از ویتامین C صبح و رتینول در شب، یکی از موثرترین و شناخته‌شده‌ترین ترکیب‌های مراقبت از پوست است.',
      'اگر پوست حساسی دارید، از فرمول‌های ملایم و مشتق شده ویتامین C مانند اسید آسکوربیل گلوکزاید استفاده کنید.',
      'معمولاً پس از ۴ تا ۶ هفته استفاده منظم، روشن شدن لک‌ها و یکدست شدن رنگ پوست کاملاً قابل مشاهده است.',
      'حتماً بعد از ویتامین C از ضدآفتاب استفاده کنید؛ در غیر این صورت پوست شما مستعد لک و تیرگی بیشتری می‌شود.',
      'سرم ویتامین C را فقط روی پوست تمیز و خشک بزنید و اجازه دهید کاملاً جذب شود تا بیشترین بازدهی را داشته باشد.',
      'ترکیب ویتامین C با نیاسینامید برای روشن‌سازی لک و کنترل چربی و جوش پوست بسیار موثر است.',
      'اگر از رتینول استفاده می‌کنید، این دو را در دو زمان متفاوت روز استفاده کنید تا از تداخل و تحریک جلوگیری شود.',
      'یادتان باشد که ویتامین C هرگز جایگزین ضدآفتاب نیست، بلکه مکمل آن در روند روشن‌سازی و جوان‌سازی پوست محسوب می‌شود.'
    ],
    author: 'دکتر مریم نوری (متخصص پوست و زیبایی)',
    readTime: '۸ دقیقه مطالعه',
    date: '۱۵ فروردین ۱۴۰۳',
    image: heroSerum,
    category: 'مراقبت پوست',
    tags: ['ویتامین C', 'ضدلک', 'کلاژن', 'سرم صورت']
  },
];

export const getArticleSuggestedProduct = (article: BeautyArticle): Product | null => {
  const text = [article.title, article.excerpt, article.category, ...article.tags].join(' ');
  const keywordMap: { keyword: string; terms: string[] }[] = [
    { keyword: 'رژ لب', terms: ['رژ لب', 'لب', 'lipstick'] },
    { keyword: 'سرم', terms: ['سرم', 'هیالورونیک', 'آبرسان'] },
    { keyword: 'عطر', terms: ['عطر', 'ادکلن', 'پرفیوم', 'اسپری'] },
    { keyword: 'کرم پودر', terms: ['پودر', 'کرم پودر', 'فاندیشن', 'پنکک'] },
    { keyword: 'ریمل', terms: ['ریمل', 'ماژیک', 'چشم'] },
    { keyword: 'ضد آفتاب', terms: ['ضد آفتاب', 'اسکرین'] }
  ];
  for (const { keyword, terms } of keywordMap) {
    if (terms.some((t) => text.includes(t))) {
      const match = PRODUCTS.find((p) => p.title.includes(keyword) || p.tags?.some((t) => t.includes(keyword)));
      if (match) return match;
    }
  }
  return PRODUCTS.find((p) => p.isBestSeller) || PRODUCTS[0] || null;
};

export const TRUST_BADGES = [
  {
    icon: 'ShieldCheck',
    title: 'ضمانت اصالت ۱۰۰٪ کالا',
    subtitle: 'ضمانت بازگشت وجه در صورت عدم اصالت'
  },
  {
    icon: 'Truck',
    title: 'ارسال سریع و اکسپرس',
    subtitle: 'تحویل در کوتاه‌ترین زمان در سراسر کشور'
  },
  {
    icon: 'RotateCcw',
    title: '۷ روز ضمانت بازگشت',
    subtitle: 'بازگشت بی‌قید و شرط طبق قوانین'
  },
  {
    icon: 'Headphones',
    title: 'پشتیبانی ۲۴ ساعته ۷ روز هفته',
    subtitle: 'پاسخگویی سریع توسط مشاوران زیبایی'
  }
];
