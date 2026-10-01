export interface ProductColor {
  name: string;
  hex: string;
  code?: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  isVerified: boolean;
  likes: number;
}

export interface Product {
  id: string;
  title: string;
  englishTitle: string;
  brand: string;
  category: string;
  categorySlug: string;
  price: number; // Toman
  originalPrice: number; // Toman
  discountPercent: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  colors?: ProductColor[];
  tags: string[];
  stock: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  isIncredibleOffer?: boolean;
  description: string;
  features: { key: string; value: string }[];
  usage?: string;
  skinType?: string;
  volume?: string;
  comments: ProductReview[];
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  image: string;
  description: string;
  subcategories: SubCategory[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: ProductColor;
}

export interface Story {
  id: string;
  title: string;
  image: string;
  videoUrl?: string;
  hasSeen?: boolean;
  badge?: string;
  linkUrl?: string;
  contentTitle?: string;
  description?: string;
  products?: Product[];
}

export interface Brand {
  id: string;
  name: string;
  persianName: string;
  logo: string;
  banner: string;
  description: string;
  country: string;
}

export interface BeautyArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  comments?: ArticleComment[];
}

export interface ArticleComment {
  id: string;
  userName: string;
  date: string;
  comment: string;
  likes: number;
  isVerified?: boolean;
}

export type ActiveTab = 'home' | 'store' | 'about' | 'contact' | 'mag' | 'wishlist' | 'orders' | 'login' | 'register';

export interface FilterState {
  searchQuery: string;
  selectedCategory: string;
  selectedSubcategory: string;
  selectedBrands: string[];
  priceRange: [number, number];
  onlyInStock: boolean;
  onlyDiscounted: boolean;
  onlyIncredible: boolean;
  sortBy: 'popular' | 'newest' | 'price-asc' | 'price-desc' | 'rating' | 'discount';
}
