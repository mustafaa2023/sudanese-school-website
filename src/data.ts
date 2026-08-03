import { Department, Announcement, GalleryGroup } from './types';

// ✏️ EDIT: School Educational Departments
// Add, edit, or remove department cards shown in the Academics section.
export const DEPARTMENTS: Department[] = [
  {
    id: 'kindergarten',
    name: 'Kindergarten & Preschool',
    arabicName: 'مرحلة رياض الأطفال',
    iconName: 'Baby',
    gradeRange: 'Ages 3 - 5',
    gradeRangeAr: 'الأعمار من ٣ إلى ٥ سنوات',
    curriculum: 'Activity-Based & Bilingual (English & Arabic)',
    curriculumAr: 'تعليم قائم على الأنشطة وثنائي اللغة بالكامل',
    focus: 'Social-emotional development, motor skills, basic language phonics, Quran memorization, and creative play.',
    focusAr: 'التركيز على التطور الاجتماعي والعاطفي، المهارات الحركية، صوتيات اللغة الأساسية، تحفيظ القرآن، واللعب الابتكاري.',
    subjects: ['English (Jolly Phonics)', 'Arabic (Nour El-Bayan)', 'Islamics', ' Mathematics (First smart)', 'Physical Coordination', 'Quran'],
    subjectsAr: ['(Jolly Phonics) اللغة الإنجليزية', 'اللغة العربية (نور البيان)', 'تربية اسلامية','تحفيظ القران', 'مبادئ الرياضيات (First smart) المبسطة', 'التناسق والتربية البدنية'],
  },
  {
    id: 'primary',
    name: 'Primary School (Grades 1-6)',
    arabicName: 'المرحلة الابتدائية',
    iconName: 'BookOpen',
    gradeRange: 'Grades 1 - 6',
    gradeRangeAr: 'الصفوف من الأول إلى السادس',
    curriculum: 'Sudanese National Curriculum',
    curriculumAr: 'المنهج الوطني السوداني',
    focus: 'Strong foundational literacy, rigorous mathematical skills, scientific inquiry, and robust character-building.',
    focusAr: 'التأسيس المتين لمهارات القراءة والكتابة واللغويات، المهارات الرياضية والحسابية، والتفكير العلمي وبناء الشخصية المتوازنة.',
    subjects: ['Arabic Language', 'Mathematics', 'Information Technology and communications', 'Islamic Religious Studies', 'English Language (Smile)', 'History'],
    subjectsAr: ['اللغة العربية', 'الرياضيات', 'تكنولوجيا المعلومات و الاتصالات', 'التربية الاسلامية', 'اللغة الانجليزية(Smile)', 'التاريخ'],
  },
  {
    id: 'middle',
    name: 'Middle School (Grades 1-3)',
    arabicName: 'المرحلة المتوسطة',
    iconName: 'Compass',
    gradeRange: 'Grades 1 - 3',
    gradeRangeAr: 'الصفوف من الاول إلى الثالث',
    curriculum: 'Advanced Sudanese Curriculum to enhance crtical thinking skills',
    curriculumAr: 'المنهج السوداني الوطني يقوي المهارات الفكرية',
    focus: 'Transition from rote learning to analytical thinkings, and moral leadership.',
    focusAr: 'الانتقال المنهجي من الحفظ والتلقين إلى التفكير النقدي والتحليلي، وبناء المبادئ القيادية والأخلاقية.',
    subjects: ['Arabic language', 'Mathematics', 'Natural sciences', 'Islamic studies', 'English(smile)', 'History', 'Geography', 'Information Technology'],
    subjectsAr: ['اللغة العربية', 'الرياضيات ', 'العلوم الطبيعية', 'التربية التقنية', 'الأدب الإنجليزي وتعبيراته (Smile)', 'التاريخ', 'الجغرافيا', 'التربية الاسلامية'],
  },
  {
    id: 'high',
    name: 'High School (Grades 10-12)',
    arabicName: 'المرحلة الثانوية',
    iconName: 'GraduationCap',
    gradeRange: 'Grades 10 - 12',
    gradeRangeAr: 'الصفوف من العاشر إلى الثاني عشر',
    curriculum: 'Academic Sudanese School Certificate (Scientific & Literary Tracks)',
    curriculumAr: 'شهادة الثانوية السودانية الرسمية (المسارين العلمي والأدبي)',
    focus: 'Rigorous preparation for university entrance exams, leadership, independent research, and civic service.',
    focusAr: 'التحضير والتأهيل الأكاديمي الصارم لامتحانات الشهادة الثانوية والقبول الجامعي، القيادة الإيجابية، البحث العلمي المستقل، والخدمة المجتمعية.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English Language (Spine)', 'Arabic Classical Literature', 'Biology', 'Fundamentals of engineering', 'Computer Science & Coding'],
    subjectsAr: ['الرياضيات', 'الفيزياء', 'الكيمياء', 'اللغة الإنجليزية(spine)', 'الأدب العربي البليغ والبلاغة', 'علم الاحياء', 'اساسيات العلوم الهندسية', 'علوم الحاسوب وهندسة البرمجيات'],
  },
  // ✏️ EDIT: English Curriculum Department
  {
    id: 'english',
    name: 'English Language Curriculum',
    arabicName: 'المنهج الإنجليزي',
    iconName: 'Languages',
    gradeRange: 'All Grades',
    gradeRangeAr: 'جميع المراحل الدراسية',
    curriculum: 'British-Aligned English Language Programme',
    curriculumAr: 'البرنامج الإنجليزي المتوافق مع المنهج البريطاني',
    focus: 'Comprehensive English language acquisition across all grades: reading, writing, speaking, and listening — aligned with international Cambridge standards.',
    focusAr: 'اكتساب شامل للغة الإنجليزية عبر جميع المراحل: قراءة وكتابة ومحادثة واستماع — متوافق مع معايير كامبريدج الدولية.',
    subjects: ['English', 'Social studies', 'ICT', 'Islamic studies', 'Arabic', 'Physics and Chemistry'],
    subjectsAr: ['علوم اجتماعية', 'علوم حاسوب', 'إنجليزي منهج كامبرج', 'اللغة العربية', 'الكيمياء و الفيزياء', 'دراسات اسلامية'],
  }
];

// ✏️ EDIT: School Announcements & Bulletin News
// Add or edit notices appearing on the Bulletin Board in the Community section.
export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'a1',
    title: 'Admissions Open for Academic Year 2026-2027',
    titleAr: 'فتح باب القبول والتسجيل للعام الأكاديمي ٢٠٢٦ - ٢٠٢٧ م',
    category: 'Academic',
    categoryAr: 'أكاديمي',
    date: '2026-07-01',
    summary: 'The registration window for new students (Kindergarten through Grade 12) is officially open. Limited slots available.',
    summaryAr: 'تم فتح باب التسجيل والقبول للطلاب الجدد من مرحلة رياض الأطفال وحتى الصف الثاني عشر رسمياً. المقاعد محدودة.',
    content: 'We are pleased to welcome applications for the upcoming 2026-2027 school year. Parents can fill out the online admission form or schedule a tour of our Al-Ajami campus. We offer a balanced tuition plan with discounts of up to 15%.',
    contentAr: 'يسعدنا أن نعلن عن استقبال طلبات الالتحاق للعام الدراسي القادم ٢٠٢٦ - ٢٠٢٧ م. يرجى من أولياء الأمور تعبئة طلب القبول الإلكتروني أو تنسيق موعد لزيارة مبنى المدرسة بحي العجمي. نوفر تسهيلات ميسرة في السداد مع تقديم خصومات تصل إلى ١٥٪ .',
    tags: ['Admissions', 'Enrollment', 'Registration'],
    tagsAr: ['القبول والتسجيل', 'تسجيل جديد', 'المستندات']
  },
   {
    id: 'a4',
    title: 'Graduation congratulations 2026',
    titleAr: 'مباركة التحريج 2026',
    category: 'Event',
    categoryAr: 'فعالية',
    date: '2026-07-28',
    summary: 'We were pleased to celebrate the graduation for students from middle and primary school.',
    summaryAr: 'يسعدنا ان نعلن عن تخرج طلاب المرحلة الابتدائية و المرحلة المتوسطة',
    content: 'This year we were pleased to celebrate the success rate of 100% for our students in both the middle school and the primary school, and the graduation was filled with joy and happiness, thanks for the attending parents.',
    contentAr: 'هذه السنة يسعدنا الاحتفال بنسبة نجاح 100% لطلبتنا في المرحلتين الابتدائية و المتوسطة. و كان الاحتفال وسط اجواء من البهجة و الفرح و الفضل يرجع للاهلي الحاضرين.',
    tags: ['Graduation', '100%', 'Learning'],
    tagsAr: ['تخريج', '100%', 'التعليم'],
  },
];

// ✏️ EDIT: Student & Community Clubs
// Edit student activities and leadership committees.
// Class definition to manage Student Gallery groups
export class StudentGalleryItem implements GalleryGroup {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  images: string[];

  constructor(id: string, title: string, titleAr: string, description: string, descriptionAr: string, images: string[]) {
    this.id = id;
    this.title = title;
    this.titleAr = titleAr;
    this.description = description;
    this.descriptionAr = descriptionAr;
    this.images = images;
  }
}

// ✏️ EDIT: Student Gallery Groups
// Duplicate or edit StudentGalleryItem entries below to update the gallery.
// ✏️ HOW TO ADD PHOTOS:
//   1. Copy your image files into the "public/images/" folder of this project.
//   2. Add the path as "./images/YourFileName.jpg" in the images array below.
export const STUDENT_GALLERY_GROUPS: GalleryGroup[] = [
  new StudentGalleryItem(
    'g1',
    'Graduation Ceremony',
    'حفلة تخرج طلبة المتوسط و الابتدائي',
    'The joy and the happiness of our students after they passed their exams!',
    'البهجة و السرور على وجوه الطلبة بعد النجاح الباهر الذي حققوه',
    [
      './images/Graduation.jpeg',
      './images/Graduation (2).jpeg',
      './images/Graduation (3).jpeg',
      './images/Graduation (4).jpeg',
    ]
  ),
new StudentGalleryItem(
    'g2',
    'Swimming day',
    'يوم السباحة',
    'The joy and the happiness of our students on a day full of fun, playing, and water of course',
    'يوم جميل في حوض السباحة حيث استمتع التلاميذ بأجواء مليئة بالفرح و البهجة',
    [
      './images/swimming.jpg',
      './images/swimming1.jpeg',
      './images/swimming2.jpeg',
    ]
  ),
new StudentGalleryItem(
    'g3',
    'Science fair',
    'يوم العلوم',
    'A day full of experiments and science, made the students minds glow. This day inspires them to search more and understand our world further',
    'من الايام المليئة بالتعلم و التجارب و يظهر مدى ابداع الطلبة في مدرستنا. مثل هذه الايام تمثل الهام للكثير منهم للبحث و محاولة فهم كوكبنا بطريقة افضل.',
    [
      './images/Science.jpg',
      './images/Science1.jpg',
      './images/Science2.jpg',
    ]
  ),

];

// ✏️ EDIT: Campus Tour Photos
// Replace the filenames below with your actual school photos.
// Steps:
//   1. Copy your 4 image files into the "public/images/" folder.
//   2. Replace the filename in each src below (keep the ./images/ prefix).
//   3. Edit caption / captionAr to describe each photo.
export interface CampusPhoto {
  id: string;
  src: string;
  caption: string;
  captionAr: string;
}

export const CAMPUS_TOUR_PHOTOS: CampusPhoto[] = [
  {
    id: 'cp1',
    src: './images/Hero.jpg',       // ✏️ Replace with your photo filename
    caption: 'Main Entrance & Reception',
    captionAr: 'المدخل الرئيسي والاستقبال',
  },
  {
    id: 'cp2',
    src: './images/Class.png',       // ✏️ Replace with your photo filename
    caption: 'Classrooms & Learning Spaces',
    captionAr: 'الفصول الدراسية وبيئة التعلم',
  },
  {
    id: 'cp3',
    src: './images/office.png',       // ✏️ Replace with your photo filename
    caption: 'Offices',
    captionAr: 'المكاتب',
  },
  {
    id: 'cp4',
    src: './images/Class2.png',       // ✏️ Replace with your photo filename
    caption: 'Classroom 2',
    captionAr: 'فصل دراسي 2',
  },
];
