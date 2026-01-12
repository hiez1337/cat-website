export interface Cat {
  id: string;
  name: string;
  breed: string;
  age: number;
  image: string;
  description: string;
  personality: string[];
  adoptable: boolean;
  likes: number;
  story: string;
  galleryImages?: string[];
  energy: number; // 1-5 scale
  playfulness: number; // 1-5 scale
  friendliness: number; // 1-5 scale
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
