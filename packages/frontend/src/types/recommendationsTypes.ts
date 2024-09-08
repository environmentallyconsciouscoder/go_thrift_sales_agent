
export interface ClothingItem {
  type: string;
  brand: string;
  color: string;
  size?: string; // Making size optional
  price: string;
  link: string;
}


  export interface RecommendationsResponse {
    style: ClothingItem[];
    description: string;
  }