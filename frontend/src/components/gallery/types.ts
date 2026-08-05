export type MediaType = "image" | "video";

export type GalleryMediaItem = {
  id: string;
  type: MediaType;
  title: string;
  description: string;
  category: string;
  thumbnail?: string;
  imageUrl?: string;
  videoUrl?: string;
  cloudinaryPublicId?: string;
  alt: string;
  eventType?: string;
  location?: string;
  featured?: boolean;
};
