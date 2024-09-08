export interface ClothingItem {
  type: string;
  brand: string;
  color: string;
  size?: string;
  price: string;
  link: string;
}
export interface RecommendationsResponse {
  style: ClothingItem[];
  description: string;
}