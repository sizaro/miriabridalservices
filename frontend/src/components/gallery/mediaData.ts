import type { GalleryMediaItem } from "./types";

export const cloudinaryPlaceholderUrl =
  "https://player.cloudinary.com/embed/?cloud_name=dp76nuyie&public_id=mhstrial_geiacr";

export const galleryFilters = [
  "All",
  "Bridal Makeup",
  "Hair Styling",
  "Traditional Ceremonies",
  "Modern Weddings",
  "Bridesmaids",
  "Engagements",
  "Training Academy",
  "Behind the Scenes",
  "Before and After",
  "Videos",
] as const;

export const featuredMedia: GalleryMediaItem[] = [
  {
    id: "feat-video-1",
    type: "video",
    title: "Wedding morning final reveal",
    description: "From preparation to a confident final entrance.",
    category: "Modern Weddings",
    videoUrl: cloudinaryPlaceholderUrl,
    cloudinaryPublicId: "mhstrial_geiacr",
    alt: "Featured wedding morning reveal video",
    eventType: "Church wedding",
    location: "Provo, Utah",
    featured: true,
  },
  {
    id: "feat-img-1",
    type: "image",
    title: "Traditional bride portrait",
    description: "Elegant cultural styling with modern finish.",
    category: "Traditional Ceremonies",
    imageUrl:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional bride portrait with accessories",
    featured: true,
  },
  {
    id: "feat-img-2",
    type: "image",
    title: "Studio preparation details",
    description: "Professional setup before bridal styling.",
    category: "Behind the Scenes",
    imageUrl:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    alt: "Bridal tools and preparation setup",
    featured: true,
  },
  {
    id: "feat-img-3",
    type: "image",
    title: "Outdoor bridal moment",
    description: "Soft glam captured in natural light.",
    category: "Modern Weddings",
    imageUrl:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
    alt: "Bride smiling outdoors in wedding dress",
    featured: true,
  },
];

export const mixedMediaItems: GalleryMediaItem[] = [
  {
    id: "mix-1",
    type: "image",
    title: "Soft glam bridal finish",
    description: "Camera-ready skin and balanced eye detail.",
    category: "Bridal Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1300&q=80",
    alt: "Soft glam bridal makeup close-up",
    eventType: "Engagement",
  },
  {
    id: "mix-2",
    type: "video",
    title: "Hair placement story",
    description: "From preparation to final accessory placement.",
    category: "Hair Styling",
    videoUrl: cloudinaryPlaceholderUrl,
    cloudinaryPublicId: "mhstrial_geiacr",
    alt: "Hair styling process video",
    eventType: "Modern wedding",
  },
  {
    id: "mix-3",
    type: "image",
    title: "Traditional bridal attire",
    description: "Cultural accessories and coordinated look direction.",
    category: "Traditional Ceremonies",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1300&q=80",
    alt: "Traditional bridal attire portrait",
    location: "Salt Lake City",
  },
  {
    id: "mix-4",
    type: "image",
    title: "Bridesmaids coordination",
    description: "Consistent styling for bridal party harmony.",
    category: "Bridesmaids",
    imageUrl:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1300&q=80",
    alt: "Bridesmaids preparation moment",
  },
  {
    id: "mix-5",
    type: "video",
    title: "Training demonstration",
    description: "Practical bridal makeup teaching session.",
    category: "Training Academy",
    videoUrl: cloudinaryPlaceholderUrl,
    cloudinaryPublicId: "mhstrial_geiacr",
    alt: "Training academy demonstration video",
  },
  {
    id: "mix-6",
    type: "image",
    title: "Behind-the-scenes prep",
    description: "Product setup and session planning board.",
    category: "Behind the Scenes",
    imageUrl:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1300&q=80",
    alt: "Behind-the-scenes bridal preparation",
  },
  {
    id: "mix-7",
    type: "image",
    title: "Before and after beauty",
    description: "Transformation from prep stage to final reveal.",
    category: "Before and After",
    imageUrl:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1300&q=80",
    alt: "Before and after transformation portrait",
  },
  {
    id: "mix-8",
    type: "video",
    title: "Ceremony preparation reel",
    description: "Quick timeline of bridal morning moments.",
    category: "Videos",
    videoUrl: cloudinaryPlaceholderUrl,
    cloudinaryPublicId: "mhstrial_geiacr",
    alt: "Ceremony preparation video",
  },
  {
    id: "mix-9",
    type: "image",
    title: "Garden wedding portrait",
    description: "Natural light photography-ready finish.",
    category: "Modern Weddings",
    imageUrl:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1300&q=80",
    alt: "Garden wedding bridal portrait",
  },
  {
    id: "mix-10",
    type: "image",
    title: "Engagement session glow",
    description: "Subtle elegance for pre-wedding storytelling.",
    category: "Engagements",
    imageUrl:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1300&q=80",
    alt: "Engagement makeup and portrait",
  },
];

const videoItem = (
  id: string,
  title: string,
  category: string,
  description: string,
): GalleryMediaItem => ({
  id,
  type: "video",
  title,
  category,
  description,
  videoUrl: cloudinaryPlaceholderUrl,
  cloudinaryPublicId: "mhstrial_geiacr",
  alt: `${title} video`,
});

export const bridalMakeupMedia: GalleryMediaItem[] = [
  {
    id: "bm-1",
    type: "image",
    title: "Soft glam",
    description: "Balanced radiance and fine skin finish.",
    category: "Bridal Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1100&q=80",
    alt: "Soft glam bridal makeup",
  },
  {
    id: "bm-2",
    type: "image",
    title: "Natural radiance",
    description: "Hydrated skin preparation and subtle enhancement.",
    category: "Bridal Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1100&q=80",
    alt: "Natural radiant bridal finish",
  },
  {
    id: "bm-3",
    type: "image",
    title: "Luxury glam",
    description: "High-detail finish for evening portraits.",
    category: "Bridal Makeup",
    imageUrl:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1100&q=80",
    alt: "Luxury glam bridal portrait",
  },
  videoItem(
    "bm-v1",
    "Camera-ready makeup",
    "Bridal Makeup",
    "Process clip from skin prep to final touch.",
  ),
];

export const hairStylingMedia: GalleryMediaItem[] = [
  {
    id: "hs-1",
    type: "image",
    title: "Classic updo",
    description: "Structured updo for ceremony durability.",
    category: "Hair Styling",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80",
    alt: "Classic bridal updo",
  },
  {
    id: "hs-2",
    type: "image",
    title: "Veil placement",
    description: "Secure veil and accessory positioning.",
    category: "Hair Styling",
    imageUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1100&q=80",
    alt: "Veil placement preparation",
  },
  videoItem(
    "hs-v1",
    "Hair process story",
    "Hair Styling",
    "From preparation to final placement.",
  ),
];

export const traditionalCeremonyMedia: GalleryMediaItem[] = [
  {
    id: "tr-1",
    type: "image",
    title: "Introduction ceremony look",
    description: "Cultural styling and accessories.",
    category: "Traditional Ceremonies",
    imageUrl:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional ceremony bridal look",
  },
  {
    id: "tr-2",
    type: "image",
    title: "Family preparation moment",
    description: "Shared bridal preparation before ceremony.",
    category: "Traditional Ceremonies",
    imageUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    alt: "Family support during traditional preparation",
  },
  videoItem(
    "tr-v1",
    "Ceremony prep clip",
    "Traditional Ceremonies",
    "Preparation and accessory coordination.",
  ),
];

export const modernWeddingMedia: GalleryMediaItem[] = [
  {
    id: "mw-1",
    type: "image",
    title: "Church wedding portrait",
    description: "Classic church ceremony elegance.",
    category: "Modern Weddings",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "Church wedding portrait",
  },
  {
    id: "mw-2",
    type: "image",
    title: "Garden reception styling",
    description: "Soft glam and outdoor-ready finish.",
    category: "Modern Weddings",
    imageUrl:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
    alt: "Garden wedding reception look",
  },
  videoItem(
    "mw-v1",
    "Cinematic bridal walk",
    "Modern Weddings",
    "Bride entrance and dress reveal moment.",
  ),
];

export const bridalPartyMedia: GalleryMediaItem[] = [
  {
    id: "bp-1",
    type: "image",
    title: "Bridesmaids prep",
    description: "Coordinated party styling workflow.",
    category: "Bridesmaids",
    imageUrl:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=80",
    alt: "Bridesmaids makeup session",
  },
  {
    id: "bp-2",
    type: "image",
    title: "Group final portraits",
    description: "Unified finishing details for bridal party.",
    category: "Bridesmaids",
    imageUrl:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1100&q=80",
    alt: "Bridal party group portrait",
  },
  videoItem(
    "bp-v1",
    "Team styling in action",
    "Bridesmaids",
    "Short clip of multi-client preparation.",
  ),
];

export const trainingGalleryMedia: GalleryMediaItem[] = [
  {
    id: "ta-1",
    type: "image",
    title: "Classroom teaching",
    description: "Foundational theory and live demonstration.",
    category: "Training Academy",
    imageUrl:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1100&q=80",
    alt: "Training classroom instruction",
  },
  {
    id: "ta-2",
    type: "image",
    title: "Student practical",
    description: "Hands-on assignments on live models.",
    category: "Training Academy",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80",
    alt: "Student practical bridal assignment",
  },
  videoItem(
    "ta-v1",
    "Student demonstration session",
    "Training Academy",
    "Practical bridal training clip.",
  ),
];

export const behindScenesMedia: GalleryMediaItem[] = [
  {
    id: "bs-1",
    type: "image",
    title: "Product setup",
    description: "Tools organized before client arrival.",
    category: "Behind the Scenes",
    imageUrl:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1100&q=80",
    alt: "Product setup and organization",
  },
  {
    id: "bs-2",
    type: "image",
    title: "Team discussion",
    description: "Coordinating timelines and styling sequence.",
    category: "Behind the Scenes",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=80",
    alt: "Team planning discussion",
  },
  videoItem(
    "bs-v1",
    "Wedding morning coordination",
    "Behind the Scenes",
    "Preparation and timing coordination.",
  ),
];

export const beforeAfterMedia: GalleryMediaItem[] = [
  {
    id: "ba-before-1",
    type: "image",
    title: "Preparation stage",
    description: "Before styling and final detail work.",
    category: "Before and After",
    imageUrl:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    alt: "Before styling portrait",
  },
  {
    id: "ba-after-1",
    type: "image",
    title: "Final reveal",
    description: "Completed look with polished finish.",
    category: "Before and After",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    alt: "After styling portrait",
  },
  videoItem(
    "ba-v1",
    "Final reveal clip",
    "Before and After",
    "Reveal video from prep to final look.",
  ),
];

export const videoStoriesMedia: GalleryMediaItem[] = [
  videoItem(
    "vs-1",
    "Bridal preparation",
    "Videos",
    "Preparation highlights before ceremony.",
  ),
  videoItem(
    "vs-2",
    "Final reveal",
    "Videos",
    "The final beauty reveal moment.",
  ),
  videoItem(
    "vs-3",
    "Wedding morning",
    "Videos",
    "Morning workflow and team coordination.",
  ),
  videoItem(
    "vs-4",
    "Traditional ceremony",
    "Videos",
    "Cultural look and accessory transitions.",
  ),
  videoItem(
    "vs-5",
    "Makeup process",
    "Videos",
    "From base preparation to final blend.",
  ),
  videoItem(
    "vs-6",
    "Hair styling",
    "Videos",
    "Texturing and accessory placement.",
  ),
  videoItem(
    "vs-7",
    "Training session",
    "Videos",
    "Classroom and practical demonstrations.",
  ),
  videoItem("vs-8", "Student work", "Videos", "Model-based student execution."),
  videoItem(
    "vs-9",
    "Studio tour",
    "Videos",
    "Walkthrough of consultation and prep space.",
  ),
  videoItem(
    "vs-10",
    "Client testimonial",
    "Videos",
    "Client feedback and experience recap.",
  ),
];

export const clientHighlightsMedia: GalleryMediaItem[] = [
  {
    id: "ch-1",
    type: "image",
    title: "Client story highlight",
    description: "Church wedding preparation and final confidence reveal.",
    category: "Modern Weddings",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "Client story wedding highlight image",
    eventType: "Church wedding",
    location: "Provo, Utah",
  },
  videoItem(
    "ch-v1",
    "Client preparation clip",
    "Videos",
    "Short preparation highlight from client story.",
  ),
];

export const socialPreviewMedia: GalleryMediaItem[] = [
  {
    id: "sm-1",
    type: "image",
    title: "Recent post",
    description: "Bridal glow update",
    category: "Social",
    imageUrl:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    alt: "Social preview bridal post",
  },
  {
    id: "sm-2",
    type: "video",
    title: "Reel preview",
    description: "Quick prep clip",
    category: "Social",
    videoUrl: cloudinaryPlaceholderUrl,
    cloudinaryPublicId: "mhstrial_geiacr",
    alt: "Social preview reel",
  },
  {
    id: "sm-3",
    type: "image",
    title: "BTS update",
    description: "Studio morning setup",
    category: "Social",
    imageUrl:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    alt: "Social preview behind-the-scenes post",
  },
  {
    id: "sm-4",
    type: "video",
    title: "Training update",
    description: "Classroom clip",
    category: "Social",
    videoUrl: cloudinaryPlaceholderUrl,
    cloudinaryPublicId: "mhstrial_geiacr",
    alt: "Social preview training clip",
  },
  {
    id: "sm-5",
    type: "image",
    title: "Portrait post",
    description: "Final reveal frame",
    category: "Social",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    alt: "Social preview bridal portrait",
  },
  {
    id: "sm-6",
    type: "image",
    title: "Team moment",
    description: "Coordination and timing",
    category: "Social",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    alt: "Social preview team coordination",
  },
];

export const studioMedia: GalleryMediaItem[] = [
  {
    id: "st-1",
    type: "image",
    title: "Consultation area",
    description: "Private planning and client briefing space.",
    category: "Studio",
    imageUrl:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    alt: "Studio consultation area",
  },
  {
    id: "st-2",
    type: "image",
    title: "Makeup stations",
    description: "Professional lighting and organized setup.",
    category: "Studio",
    imageUrl:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
    alt: "Studio makeup station",
  },
  videoItem(
    "st-v1",
    "Studio tour",
    "Studio",
    "Inline walkthrough of prep and waiting areas.",
  ),
];
