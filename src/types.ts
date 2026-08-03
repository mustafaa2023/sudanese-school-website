export interface Announcement {
  id: string;
  title: string;
  titleAr?: string;
  category: 'Event' | 'Academic' | 'Community' | 'Urgent';
  categoryAr?: string;
  date: string;
  summary: string;
  summaryAr?: string;
  content: string;
  contentAr?: string;
  tags: string[];
  tagsAr?: string[];
}

export interface Department {
  id: string;
  name: string;
  arabicName: string;
  iconName: string;
  gradeRange: string;
  gradeRangeAr?: string;
  curriculum: string;
  curriculumAr?: string;
  focus: string;
  focusAr?: string;
  subjects: string[];
  subjectsAr?: string[];
}

export interface Booking {
  id: string;
  parentName: string;
  studentName: string;
  timeSlot: string;
  topic: string;
  status: 'Confirmed' | 'Pending';
  date: string;
}

export interface Club {
  name: string;
  arabic: string;
  desc: string;
  size: string;
  lead: string;
}

export interface GalleryGroup {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  images: string[];
}
