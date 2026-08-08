import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Users, Languages, ShieldCheck, HeartHandshake, Sparkles, BookOpen, Compass, Baby, Megaphone, Search, Filter, X, Mail, Phone, MapPin, Image, Layers, Camera, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DEPARTMENTS, INITIAL_ANNOUNCEMENTS, STUDENT_GALLERY_GROUPS, CAMPUS_TOUR_PHOTOS } from '../data';
import { Announcement } from '../types';

/* ============================================================
   HERO SECTION
   ✏️ EDIT: Change the school stats in the 'stats' array below.
   ✏️ EDIT: Change the hero image path in <img src="..." />
   ✏️ EDIT: All hero text comes from src/translations.ts (key: 'hero.*')
   ============================================================ */
export function HeroSection({ onApplyClick, onExploreAcademics }: { onApplyClick: () => void; onExploreAcademics: () => void }) {
  const { t, isRtl } = useLanguage();

  // ✏️ EDIT: Change the labels and descriptions for each stat card below
  const stats = [
    { id: 's1', icon: GraduationCap, label: t('stats.graduationRate'), desc: t('stats.graduationDesc') },
    { id: 's2', icon: Users,         label: t('stats.classRatio'),      desc: t('stats.classDesc') },
    { id: 's3', icon: Languages,     label: t('stats.bilingual'),       desc: t('stats.bilingualDesc') },
  ];

  return (
    <section id="hero" className="section-hero">
      {/* Decorative background blobs */}
      <div className="hero-blob hero-blob--top" />
      <div className="hero-blob hero-blob--bottom" />

      <div className="container section-hero__inner">
        <div className="hero-grid">

          {/* ── Left: Text Content ── */}
          <div className="hero-content">
            {/* Admission badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hero-badge">
              {/* ✏️ EDIT: Change the badge text in translations.ts → 'hero.admissionsOpen' */}
              <span className="hero-badge__dot" />
              <span className="hero-badge__text">{t('hero.admissionsOpen')}</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="hero-title">
              {/* ✏️ EDIT: Change headline text in translations.ts → 'hero.titleLine1', 'hero.titleItalic', etc. */}
              {t('hero.titleLine1')}{' '}
              <span className="hero-title--italic">{t('hero.titleItalic')}</span>{' '}
              {t('hero.titleLine2')}{' '}
              <span className="hero-title--bold">{t('hero.titleBold')}</span>
            </motion.h1>

            {/* Description paragraph */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hero-desc">
              {/* ✏️ EDIT: Change description text in translations.ts → 'hero.desc' */}
              {t('hero.desc')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="hero-buttons">
              {/* ✏️ EDIT: Change button labels in translations.ts → 'hero.applyBtn' / 'hero.exploreBtn' */}
              <button id="hero-apply-btn" onClick={onApplyClick} className="btn btn--primary">{t('hero.applyBtn')}</button>
              <button id="hero-explore-btn" onClick={onExploreAcademics} className="btn btn--outline">{t('hero.exploreBtn')}</button>
            </motion.div>
          </div>

          {/* ── Right: Hero Image Panel ── */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="hero-image-wrap">
            <div className="hero-image-frame">
              {/* ✏️ EDIT: Replace the src below with your own campus image path */}
              <img
                src="./images/Hero.jpg"
                alt="Sudanese Community School Al-Ajami Campus"
                className="hero-image"
              />
              <div className="hero-image-overlay" />

              {/* Overlay text on the image */}
              <div className="hero-image-caption">
                {/* ✏️ EDIT: Change caption text in translations.ts → 'hero.accreditedProgram' / 'hero.spotlightQuote' */}
                <p className="hero-image-caption__label">{t('hero.accreditedProgram')}</p>
                <h3 className="hero-image-caption__quote">{t('hero.spotlightQuote')}</h3>
                <p className="hero-image-caption__author">— {t('hero.spotlightAuthor')}</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className={`hero-float-badge ${isRtl ? 'hero-float-badge--rtl' : 'hero-float-badge--ltr'}`}>
              <div className="hero-float-badge__icon">
                <GraduationCap className="icon" />
              </div>
              <div>
                {/* ✏️ EDIT: Change the percentage and label in the floating badge */}
                <p className="hero-float-badge__value">100%</p>
                <p className="hero-float-badge__label">{t('hero.universityEntry')}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stat Cards Row ── */}
        <div className="hero-stats">
          {stats.map((stat, i) => (
            <motion.div key={stat.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="stat-card">
              <div className="stat-card__icon">
                <stat.icon className="icon" />
              </div>
              <div>
                {/* ✏️ EDIT: Change stat labels in translations.ts → 'stats.*' */}
                <h3 className="stat-card__label">{stat.label}</h3>
                <p className="stat-card__desc">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PHILOSOPHY SECTION
   ✏️ EDIT: Change pillar details in the 'pillars' array below.
   ✏️ EDIT: Change section headings in translations.ts → 'philosophy.*'
   ============================================================ */
export function PhilosophySection() {
  const { t, isRtl } = useLanguage();

  // ✏️ EDIT: Change the bullet points inside each pillar's 'details' array
  const pillars = [
    {
      id: 'discipline',
      title: isRtl ? 'الانضباط الأكاديمي وبناء الشخصية' : 'Academic Discipline & Character',
      subtitle: isRtl ? 'Academic Discipline & Character' : 'الانضباط الأكاديمي وبناء الشخصية',
      icon: ShieldCheck,
      colorClass: 'pillar-card--blue',
      iconClass: 'pillar-card__icon--blue',
      dotClass: 'pillar-card__dot--blue',
      quote: t('philosophy.disciplineQuote'),
      details: isRtl ? [
        'تركيز كامل داخل الفصول الدراسية وسياسات حضور وانضباط صارمة.',
        'بناء السلوك والأخلاق الراسخة المستمدة من قيم مجتمعنا الأصيلة.',
        'برنامج دراسي ثنائي اللغة صارم يغطي العلوم التجريبية، النحو العربي و اللغة الانجليزية المتقدمة.',
        'تنمية مهارات المبادرة الشخصية، الرقابة الذاتية، والانضباط الواعي.',
      ] : [
        'Structured classroom focus and strict attendance policies ensuring zero learning interruptions.',
        'Moral grounding rooted in classical community virtues, respect for elders, and peer support.',
        'Bilingual academic rigor covering analytical sciences, classical Arabic syntax, Advanced English.',
        'Development of personal responsibility, self-monitoring, and active study hygiene.',
      ],
    },
    {
      id: 'community',
      title: isRtl ? 'الترابط المجتمعي وإحياء التراث' : 'Warm Community & Heritage',
      subtitle: isRtl ? 'Warm Community & Heritage' : 'الترابط المجتمعي وإحياء التراث',
      icon: HeartHandshake,
      colorClass: 'pillar-card--amber',
      iconClass: 'pillar-card__icon--amber',
      dotClass: 'pillar-card__dot--amber',
      quote: t('philosophy.communityQuote'),
      details: isRtl ? [
        'بيئة حاضنة تحتفي بالهوية والتراث السوداني العريق وتعزز الروابط الاجتماعية بالإسكندرية.',
        'مجلس تعاون فاعل يجمع المدرسة وأولياء الأمور مع قنوات استشارية مفتوحة.',
        'مبادرات طلابية نشطة، مسرح مدرسي ثقافي، وندوات إلقاء الشعر.',
        'شبكات مراجعة ودعم بين الأقران وبرامج رعاية نفسية واجتماعية.',
      ] : [
        'An inclusive environment celebrating Sudanese identity and cultural connections in Al-Ajami.',
        'Active Parent & School Alliance with open-door consultation and collaborative event committees.',
        'Social student initiatives, cultural theater, poetry recitals, and regional traditional cuisine festivals.',
        'Peer tutoring networks and psychological support counseling to make sure no child feels left behind.',
      ],
    },
  ];

  return (
    <section id="philosophy" className="section section--sand">
      {/* Decorative blobs */}
      <div className="section-blob section-blob--left" />
      <div className="section-blob section-blob--right" />

      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-tagline">
            {/* ✏️ EDIT: Change tagline in translations.ts → 'philosophy.tagline' */}
            {t('philosophy.tagline')}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">
            {/* ✏️ EDIT: Change heading text in translations.ts → 'philosophy.titleExcellence' / 'philosophy.titleUnity' */}
            {isRtl
              ? <span>حيث يلتقي <em className="text-italic-amber">{t('philosophy.titleExcellence')}</em> بروح <strong>{t('philosophy.titleUnity')}</strong></span>
              : <span>Where <em className="text-italic-amber">{t('philosophy.titleExcellence')}</em> Meets <strong>{t('philosophy.titleUnity')}</strong></span>
            }
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-desc">
            {t('philosophy.desc')}
          </motion.p>
        </div>

        {/* Two pillar cards */}
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`pillar-card ${pillar.colorClass}`}
            >
              {/* Pillar header */}
              <div className="pillar-card__header">
                <div className={`pillar-card__icon ${pillar.iconClass}`}>
                  <pillar.icon className="icon" />
                </div>
                <div>
                  {/* ✏️ EDIT: Change pillar title in the pillars array above */}
                  <h3 className="pillar-card__title">{pillar.title}</h3>
                  <p className="pillar-card__subtitle">{pillar.subtitle}</p>
                </div>
              </div>

              {/* Bullet details */}
              <ul className="pillar-card__list">
                {pillar.details.map((detail, idx) => (
                  <li key={idx} className="pillar-card__list-item">
                    {/* ✏️ EDIT: Change bullet text in the pillars array above → pillar.details */}
                    <span className={`pillar-card__dot ${pillar.dotClass}`} />
                    <p className="pillar-card__detail">{detail}</p>
                  </li>
                ))}
              </ul>

              {/* Footer quote */}
              <div className="pillar-card__footer">
                <span className="pillar-card__focus-label">{t('philosophy.pillarFocus')}</span>
                {/* ✏️ EDIT: Change quotes in translations.ts → 'philosophy.disciplineQuote' / 'philosophy.communityQuote' */}
                <p className="pillar-card__quote">{pillar.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

/* ============================================================
   ACADEMICS SECTION
   ✏️ EDIT: Change department data in src/data.ts → DEPARTMENTS array.
   ✏️ EDIT: To add/remove departments, add/remove items from DEPARTMENTS.
   ============================================================ */
export function AcademicsSection() {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState('kindergarten');

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      Baby, BookOpen, Compass, GraduationCap,
    };
    return icons[iconName] || BookOpen;
  };

  const currentDept = DEPARTMENTS.find(d => d.id === activeTab) || DEPARTMENTS[0];

  return (
    <section id="academics" className="section section--sand">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <div className="section-tagline">{t('academics.tagline')}</div>
          <h2 className="section-title">
            {/* ✏️ EDIT: Change heading in translations.ts → 'academics.title' / 'academics.titleBold' */}
            {isRtl
              ? <span>المراحل و<strong>{t('academics.titleBold')}</strong></span>
              : <span>Our Educational <strong>{t('academics.titleBold')}</strong></span>
            }
          </h2>
          <p className="section-desc">{t('academics.desc')}</p>
        </div>

        {/* Department Tabs */}
        <div className="dept-tabs">
          {/* ✏️ EDIT: Department tab labels come from src/data.ts → DEPARTMENTS[i].name / .arabicName */}
          {DEPARTMENTS.map((dept) => {
            const IconComponent = getIcon(dept.iconName);
            return (
              <button
                key={dept.id}
                onClick={() => setActiveTab(dept.id)}
                className={`dept-tab ${dept.id === activeTab ? 'dept-tab--active' : ''}`}
              >
                <IconComponent className="icon" />
                <span>{isRtl ? dept.arabicName : dept.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Department Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="dept-panel"
          >
            {/* Left: Dept Details */}
            <div className="dept-panel__details">
              <div className="dept-panel__meta">
                <span className="dept-panel__grade-badge">
                  {/* ✏️ EDIT: Grade range comes from src/data.ts → dept.gradeRange / .gradeRangeAr */}
                  {isRtl ? currentDept.gradeRangeAr || currentDept.gradeRange : currentDept.gradeRange}
                </span>
                <span className="dept-panel__separator">|</span>
                <span className="dept-panel__alt-name">
                  {isRtl ? currentDept.name : currentDept.arabicName}
                </span>
              </div>

              <h3 className="dept-panel__title">
                {isRtl ? currentDept.arabicName : currentDept.name.split(' (')[0]}
              </h3>

              {/* Curriculum block */}
              <div className="dept-curriculum-card">
                <h4 className="dept-curriculum-card__label">{t('academics.curriculumStandard')}</h4>
                {/* ✏️ EDIT: Curriculum text comes from src/data.ts → dept.curriculum / .curriculumAr */}
                <p className="dept-curriculum-card__title">{isRtl ? currentDept.curriculumAr || currentDept.curriculum : currentDept.curriculum}</p>
                <p className="dept-curriculum-card__focus">{isRtl ? currentDept.focusAr || currentDept.focus : currentDept.focus}</p>
              </div>

              {/* Subjects grid */}
              <div className="dept-subjects">
                <h4 className="dept-subjects__label">{t('academics.coreSubjects')}</h4>
                <div className="dept-subjects__grid">
                  {/* ✏️ EDIT: Subjects list comes from src/data.ts → dept.subjects / .subjectsAr */}
                  {(isRtl ? currentDept.subjectsAr || currentDept.subjects : currentDept.subjects).map((subject, idx) => (
                    <div key={idx} className="subject-chip">
                      <span className="subject-chip__dot" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ============================================================
   COMMUNITY SECTION
   ✏️ EDIT: Change announcements in src/data.ts → INITIAL_ANNOUNCEMENTS
   ✏️ EDIT: Change clubs in src/data.ts → CLUBS
   ============================================================ */
export function CommunitySection() {
  const { t, isRtl } = useLanguage();
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [selectedNews, setSelectedNews] = useState<Announcement | null>(null);

  const filteredAnnouncements = INITIAL_ANNOUNCEMENTS.filter(news => {
    const title = (isRtl ? news.titleAr || news.title : news.title).toLowerCase();
    const summary = (isRtl ? news.summaryAr || news.summary : news.summary).toLowerCase();
    const matchesCategory = filter === 'all' || news.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = title.includes(search.toLowerCase()) || summary.includes(search.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="community" className="section section--white">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <div className="section-tagline">{t('community.tagline')}</div>
          <h2 className="section-title">
            {isRtl
              ? <span>مجتمعنا المدرسي وبوابة <strong>{t('community.titleBold')}</strong></span>
              : <span>Vibrant Community & <strong>{t('community.titleBold')}</strong></span>
            }
          </h2>
          <p className="section-desc">{t('community.desc')}</p>
        </div>

        {/* Bulletin Board */}
        <div className="community-grid">

          {/* ── Bulletin Board ── */}
          <div className="bulletin-board">
            {/* Header */}
            <div className="bulletin-board__header">
              <div className="bulletin-board__title-group">
                <div className="bulletin-board__icon">
                  <Megaphone className="icon" />
                </div>
                <div>
                  {/* ✏️ EDIT: Bulletin title in translations.ts → 'community.bulletinTitle' */}
                  <h3 className="bulletin-board__title">{t('community.bulletinTitle')}</h3>
                  <p className="bulletin-board__subtitle">{t('community.bulletinSubtitle')}</p>
                </div>
              </div>
              {/* Category filter */}
              <div className="bulletin-board__filter">
                <Filter className="icon icon--muted" />
                {/* ✏️ EDIT: Category options below — change labels as needed */}
                <select value={filter} onChange={e => setFilter(e.target.value)} className="bulletin-filter-select">
                  <option value="all">{isRtl ? 'الكل' : 'All Category'}</option>
                  <option value="urgent">{isRtl ? 'تنبيه عاجل' : 'Urgent Alert'}</option>
                  <option value="academic">{isRtl ? 'أكاديمي' : 'Academic'}</option>
                  <option value="community">{isRtl ? 'المجتمع' : 'Community'}</option>
                  <option value="event">{isRtl ? 'فعاليات' : 'Campus Event'}</option>
                </select>
              </div>
            </div>

            {/* Search bar */}
            <div className="bulletin-board__search">
              <Search className="bulletin-board__search-icon" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={isRtl ? 'ابحث في الأخبار والإعلانات...' : 'Search announcements...'}
                className="bulletin-search-input"
              />
            </div>

            {/* Announcement cards feed */}
            <div className="bulletin-feed">
              {filteredAnnouncements.length > 0 ? filteredAnnouncements.map(news => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedNews(news)}
                  className={`announcement-card ${news.category === 'Urgent' ? 'announcement-card--urgent' : ''}`}
                >
                  <div className="announcement-card__meta">
                    <span className={`announcement-card__category announcement-card__category--${news.category.toLowerCase()}`}>
                      {/* ✏️ EDIT: Category labels come from src/data.ts → news.category / .categoryAr */}
                      {isRtl ? news.categoryAr || news.category : news.category}
                    </span>
                    <span className="announcement-card__date">{news.date}</span>
                  </div>
                  <h4 className="announcement-card__title">{isRtl ? news.titleAr || news.title : news.title}</h4>
                  <p className="announcement-card__summary">{isRtl ? news.summaryAr || news.summary : news.summary}</p>
                  <div className="announcement-card__tags">
                    {(isRtl ? news.tagsAr || news.tags : news.tags).map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                </motion.div>
              )) : (
                <div className="bulletin-empty">
                  <Megaphone className="bulletin-empty__icon" />
                  <p>{isRtl ? 'لم يتم العثور على إعلانات.' : 'No announcements found.'}</p>
                </div>
              )}
            </div>
          </div>
        </div>


      </div>

      {/* Announcement Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div className="modal-overlay" onClick={() => setSelectedNews(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={e => e.stopPropagation()}
              className="modal"
            >
              <button className="modal__close" onClick={() => setSelectedNews(null)}>
                <X className="icon" />
              </button>
              <div className="modal__meta">
                <span className={`announcement-card__category announcement-card__category--${selectedNews.category.toLowerCase()}`}>
                  {isRtl ? selectedNews.categoryAr || selectedNews.category : selectedNews.category}
                </span>
                <span className="announcement-card__date">{selectedNews.date}</span>
              </div>
              <h3 className="modal__title">{isRtl ? selectedNews.titleAr || selectedNews.title : selectedNews.title}</h3>
              <p className="modal__body">{isRtl ? selectedNews.contentAr || selectedNews.content : selectedNews.content}</p>
              <div className="modal__tags">
                {(isRtl ? selectedNews.tagsAr || selectedNews.tags : selectedNews.tags).map(tag => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>
              <div className="modal__actions">
                <button className="btn btn--primary" onClick={() => setSelectedNews(null)}>{isRtl ? 'إغلاق' : 'Close'}</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ============================================================
   GALLERY SECTION
   ✏️ EDIT: Change gallery groups in src/data.ts → STUDENT_GALLERY_GROUPS
   ✏️ EDIT: To add a new gallery group, copy an existing item and change the images array.
   ============================================================ */
export function GallerySection() {
  const { isRtl } = useLanguage();

  return (
    <section id="gallery" className="section section--sand">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <div className="section-tagline">
            <Sparkles className="icon icon--amber" />
            {/* ✏️ EDIT: Tagline text in translations.ts → 'gallery.*' keys don't exist yet, edit inline below */}
            {isRtl ? 'معرض الأنشطة والفعاليات • School Gallery' : 'Student Activities & School Gallery'}
          </div>
          <h2 className="section-title">
            {isRtl
              ? <span>لقطات حية من <strong>مسيرة وتفوق طلابنا</strong></span>
              : <span>Moments of Student <strong>Life & Milestones</strong></span>
            }
          </h2>
          <p className="section-desc">
            {/* ✏️ EDIT: Gallery description — change inline text below */}
            {isRtl
              ? 'تصفح توثيق الأنشطة الميدانية والمهرجانات الثقافية والتجارب الأكاديمية.'
              : 'Browse our documented field activities, cultural celebrations, laboratory studies, and creative teamwork.'}
          </p>
        </div>

        {/* Gallery Groups */}
        <div className="gallery-groups">
          {/* ✏️ EDIT: Gallery group data comes from src/data.ts → STUDENT_GALLERY_GROUPS */}
          {STUDENT_GALLERY_GROUPS.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gallery-group"
            >
              {/* Group header */}
              <div className="gallery-group__header">
                <div>
                  <h3 className="gallery-group__title">
                    <Layers className="icon icon--amber" />
                    {/* ✏️ EDIT: Group title in src/data.ts → group.title / .titleAr */}
                    {isRtl ? group.titleAr : group.title}
                  </h3>
                  <p className="gallery-group__desc">
                    {/* ✏️ EDIT: Group description in src/data.ts → group.description / .descriptionAr */}
                    {isRtl ? group.descriptionAr : group.description}
                  </p>
                </div>
                <div className="gallery-group__count">
                  <Image className="icon icon--amber" />
                  <span>{group.images.length} {isRtl ? 'صور' : group.images.length === 1 ? 'Photo' : 'Photos'}</span>
                </div>
              </div>

              {/* Images grid */}
              <div className={`gallery-images gallery-images--${group.images.length === 1 ? 'single' : group.images.length === 2 ? 'double' : 'triple'}`}>
                {group.images.map((imgUrl, imgIndex) => (
                  <div key={imgIndex} className="gallery-image-wrap">
                    {/* ✏️ EDIT: Image URLs come from src/data.ts → group.images array */}
                    <img src={imgUrl} alt={`${isRtl ? group.titleAr : group.title} - ${imgIndex + 1}`} referrerPolicy="no-referrer" className="gallery-image" />
                    <div className="gallery-image-hover">
                      <span>{isRtl ? `صورة ${imgIndex + 1}` : `Photo ${imgIndex + 1}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT SECTION
   ✏️ EDIT: Change contact information in translations.ts → 'contact.*'
   ✏️ EDIT: Phone number, email, address → translations.ts 'contact.helplineDesc', 'contact.inboxDesc', 'contact.locationDesc'
   ============================================================ */
export function ContactSection() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="contact" className="section section--sand">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <div className="section-tagline">{t('contact.tagline')}</div>
          <h2 className="section-title">
            {isRtl
              ? <span>تواصل مع مكتب تسجيل <strong>{t('contact.titleBold')}</strong></span>
              : <span>Connect With Our <strong>{t('contact.titleBold')}</strong></span>
            }
          </h2>
          <p className="section-desc">{t('contact.desc')}</p>
        </div>

        {/* Office hours banner */}
        <div className="contact-office-banner">
          {/* ✏️ EDIT: Office title & description in translations.ts → 'contact.officeTitle' / 'contact.officeDesc' */}
          <h3 className="contact-office-banner__title">{t('contact.officeTitle')}</h3>
          <p className="contact-office-banner__desc">{t('contact.officeDesc')}</p>
        </div>

        {/* Info cards row */}
        <div className="contact-cards">
          {/* ✏️ EDIT: Location address in translations.ts → 'contact.locationDesc' */}
          <div className="contact-card">
            <div className="contact-card__icon"><MapPin className="icon icon--amber" /></div>
            <h4 className="contact-card__title">{t('contact.locationTitle')}</h4>
            <p className="contact-card__body">{t('contact.locationDesc')}</p>
            <a
              href="https://maps.app.goo.gl/Dx7WuZBy2ssBppet8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm map-card-btn"
            >
              <span>{isRtl ? 'عرض في الخرائط' : 'View on Maps'}</span>
              <ExternalLink className="icon icon--sm" />
            </a>
          </div>

          {/* ✏️ EDIT: Phone number in translations.ts → 'contact.helplineDesc' */}
          <div className="contact-card">
            <div className="contact-card__icon"><Phone className="icon icon--amber" /></div>
            <h4 className="contact-card__title">{t('contact.helplineTitle')}</h4>
            <p className="contact-card__body contact-card__body--mono">{t('contact.helplineDesc')}</p>
            <p className="contact-card__hours">{t('contact.helplineHours')}</p>
          </div>

          {/* ✏️ EDIT: Email in translations.ts → 'contact.inboxDesc' */}
          <div className="contact-card">
            <div className="contact-card__icon"><Mail className="icon icon--amber" /></div>
            <h4 className="contact-card__title">{t('contact.inboxTitle')}</h4>
            <p className="contact-card__body contact-card__body--mono">{t('contact.inboxDesc')}</p>
            <p className="contact-card__hours">{t('contact.inboxHours')}</p>
          </div>
        </div>

        {/* Embedded Interactive Google Map */}
        <div className="contact-map-wrapper">
          <div className="contact-map-header">
            <div>
              <h3 className="contact-map-title">
                <MapPin className="icon icon--amber" />
                {isRtl ? 'موقع المدرسة على الخريطة' : 'School Location Map'}
              </h3>
              <p className="contact-map-address">
                {isRtl ? 'حي اكتوبر النخيل شارع 25/6، الإسكندرية' : 'October, Elnakil st 25/6, Alexandria, Egypt'}
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/Dx7WuZBy2ssBppet8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm contact-map-direct-btn"
            >
              <span>{isRtl ? 'فتح تطبيق الخرائط' : 'Open in Google Maps'}</span>
              <ExternalLink className="icon icon--sm" />
            </a>
          </div>
          <div className="contact-map-iframe-box">
            <iframe
              title="Sudanese Community School Google Map"
              src="https://maps.google.com/maps?q=Sudanese%20Community%20School%20Alexandria%20October%20Elnakil%20st%2025/6&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>


      </div>
    </section>
  );
}

/* ============================================================
   CAMPUS TOUR SECTION
   ✏️ EDIT: Photo captions and image paths in src/data.ts → CAMPUS_TOUR_PHOTOS
   ✏️ EDIT: Section title and description — change inline text below
   ============================================================ */
export function CampusTourSection() {
  const { isRtl } = useLanguage();

  return (
    <section id="campus-tour" className="section section--white">
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <div className="section-tagline">
            <Camera className="icon icon--amber" />
            {/* ✏️ EDIT: Tagline text below */}
            {isRtl ? 'جولة داخل المدرسة • Campus Tour' : 'Explore Our School • Campus Tour'}
          </div>
          <h2 className="section-title">
            {isRtl
              ? <span>جولة داخل <strong>مبنى مدرستنا</strong></span>
              : <span>A Tour Inside Our <strong>School Campus</strong></span>
            }
          </h2>
          <p className="section-desc">
            {/* ✏️ EDIT: Section description below */}
            {isRtl
              ? 'تفضلوا بجولة بصرية لاستكشاف بيئتنا التعليمية الآمنة والمجهزة.'
              : 'Take a visual tour through our safe, welcoming, and well-equipped learning environment.'}
          </p>
        </div>

        {/* 2×2 Photo Mosaic */}
        <div className="campus-tour-grid">
          {CAMPUS_TOUR_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="campus-tour-card"
            >
              {/* ✏️ EDIT: Image src in data.ts → CAMPUS_TOUR_PHOTOS[n].src */}
              <img
                src={photo.src}
                alt={isRtl ? photo.captionAr : photo.caption}
                className="campus-tour-card__img"
              />
              <div className="campus-tour-card__overlay">
                <span className="campus-tour-card__caption">
                  {/* ✏️ EDIT: Caption text in data.ts → CAMPUS_TOUR_PHOTOS[n].caption / .captionAr */}
                  {isRtl ? photo.captionAr : photo.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
