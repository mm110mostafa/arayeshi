// Converts English numbers to Persian digits
export function toPersianDigits(n: number | string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n
    .toString()
    .replace(/\d/g, (x) => persianDigits[parseInt(x, 10)]);
}

// Formats number to price in Toman with thousand separators and Persian numbers
export function formatPrice(price: number): string {
  const formatted = price.toLocaleString('fa-IR');
  return `${formatted} تومان`;
}

// Creates a clean URL slug from a Persian/English title
export function slugify(text: string): string {
  return text
    .toString()
    .trim()
    .replace(/[()'',.!؟?%-]/g, '') // remove punctuation
    .replace(/\s+/g, '-')          // spaces -> dash
    .replace(/-+/g, '-')           // collapse dashes
    .replace(/^-+|-+$/g, '');      // trim leading/trailing dashes
}

// Format seconds into MM:SS or HH:MM:SS
export function formatTimeLeft(seconds: number): { hours: string; minutes: string; seconds: string } {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return {
    hours: toPersianDigits(h.toString().padStart(2, '0')),
    minutes: toPersianDigits(m.toString().padStart(2, '0')),
    seconds: toPersianDigits(s.toString().padStart(2, '0'))
  };
}
