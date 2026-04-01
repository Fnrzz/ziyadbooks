export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  price_formatted: string;
  image: string;
  diskon: string;
  weight: number;
  type: number;
  preorder: boolean;
  mulai: string | null;
  selesai: string | null;
  sisastok: number;
  sisastok_label: number;
  jenispotongan: string | null;
  potongan: number | null;
  image_url: string;
  final_price: number;
  final_price_formatted: string;
  video_available: boolean;
  video: string | null;
}

export interface ProductResponse {
  current_page: number;
  data: Product[];
  first_page_url: string;
  from: number;
  last_page: number;
  next_page_url: string | null;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface ApiResponse {
  status: boolean;
  message: string;
  code: number;
  data: ProductResponse;
}
