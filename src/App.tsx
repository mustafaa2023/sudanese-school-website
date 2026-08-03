import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SchoolLogo from './components/SchoolLogo';
import { HeroSection, PhilosophySection, AcademicsSection, CommunitySection, GallerySection, ContactSection, CampusTourSection } from './components/Sections';
import { useLanguage } from './context/LanguageContext';
import { Menu, X, Globe, Facebook, Instagram } from 'lucide-react';

// ✏️ EDIT: Add or remove navigation links by editing this array.
// Each item needs an 'id' that matches the section's id="..." attribute in Sections.tsx
const NAV_IDS = ['hero', 'philosophy', 'academics', 'campus-tour', 'community', 'gallery', 'contact'];

export default function App() {
  const { t, language, setLanguage, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero',        label: t('nav.home') },
    { id: 'philosophy',  label: t('nav.philosophy') },
    { id: 'academics',   label: t('nav.academics') },
    { id: 'campus-tour', label: isRtl ? 'جولة المدرسة' : 'Campus Tour' },
    { id: 'community',   label: t('nav.community') },
    { id: 'gallery',     label: isRtl ? 'معرض الصور' : 'Gallery' },
    { id: 'contact',     label: t('nav.contact') },
  ];

  // Tracks scroll position to highlight the active nav link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');

  return (
    <div className="app">

      {/* ================================================================
          HEADER / NAVIGATION BAR
          ✏️ EDIT: Nav links → navLinks array above.
          ✏️ EDIT: Logo text → src/components/SchoolLogo.tsx
          ✏️ EDIT: "Contact Us" button text → isRtl ternary below
          ================================================================ */}
      <header className="site-header">
        <div className="container site-header__inner">

          {/* Logo */}
          <div className="site-header__logo" onClick={() => scrollTo('hero')}>
            <SchoolLogo size={110} showText={true} />
          </div>

          {/* Desktop nav links */}
          <nav className="site-nav">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`site-nav__link ${activeSection === link.id ? 'site-nav__link--active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop action buttons */}
          <div className="site-header__actions">
            {/* Language switcher */}
            <button onClick={toggleLanguage} className="lang-btn">
              <Globe className="icon icon--amber" />
              {/* ✏️ EDIT: Language switcher button labels below */}
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
            {/* Contact Us CTA button */}
            <button id="header-apply-btn" onClick={() => scrollTo('contact')} className="btn btn--primary btn--sm">
              {/* ✏️ EDIT: Change this button text */}
              {isRtl ? 'تواصل معنا' : 'Contact Us'}
            </button>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="site-header__mobile-actions">
            <button onClick={toggleLanguage} className="icon-btn">
              <Globe className="icon icon--amber" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="icon-btn">
              {mobileMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-nav"
            >
              <div className="mobile-nav__links">
                {navLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`mobile-nav__link ${activeSection === link.id ? 'mobile-nav__link--active' : ''}`}
                  >
                    <span>{link.label}</span>
                    <span className="mobile-nav__dot" />
                  </button>
                ))}
                <div className="mobile-nav__footer">
                  <button onClick={() => scrollTo('contact')} className="btn btn--primary btn--full">
                    {isRtl ? 'تواصل معنا' : 'Contact Us'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================================================================
          MAIN CONTENT — Page sections in order
          ✏️ EDIT: Reorder or remove sections by moving/deleting lines below.
          ================================================================ */}
      <main>
        <HeroSection
          onApplyClick={() => window.open('https://wa.me/201118279989', '_blank')}
          onExploreAcademics={() => scrollTo('academics')}
        />
        <PhilosophySection />
        <AcademicsSection />
        <CampusTourSection />
        <CommunitySection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* ================================================================
          FOOTER
          ✏️ EDIT: Footer school name, tagline, and description below.
          ✏️ EDIT: Social media links — change the href="..." values.
          ✏️ EDIT: Copyright text → translations.ts → 'footer.copyright'
          ================================================================ */}
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="footer-grid">

            {/* Branding block */}
            <div className="footer-brand">
              <div className="footer-brand__logo">
                <SchoolLogo size={110} showText={false} />
                <div>
                  {/* ✏️ EDIT: Change the school name and location text */}
                  <h3 className="footer-brand__name">
                    {isRtl ? 'مدرسة الجالية السودانية' : 'Sudanese Community School'}
                  </h3>
                  <span className="footer-brand__location">
                    {isRtl ? 'حي اكتوبر النخيل شارع 25/6، الإسكندرية • فرع المدرسة' : 'October, Elnakil st 25/6, ALEXANDRIA • SCHOOL BRANCH'}
                  </span>
                </div>
              </div>
              {/* ✏️ EDIT: Footer description in translations.ts → 'footer.description' */}
              <p className="footer-brand__desc">{t('footer.description')}</p>
              <div className="footer-brand__accredited">
                <span className="footer-brand__accredited-dot" />
                {/* ✏️ EDIT: Accreditation label in translations.ts → 'footer.accredited' */}
                <span>{t('footer.accredited')}</span>
              </div>
            </div>

            {/* Quick navigation links */}
            <div className="footer-nav">
              {/* ✏️ EDIT: Navigation section title in translations.ts → 'footer.navigation' */}
              <h4 className="footer-nav__title">{t('footer.navigation')}</h4>
              <ul className="footer-nav__list">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button onClick={() => scrollTo(link.id)} className="footer-nav__link">{link.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social media block */}
            <div className="footer-social">
              <h4 className="footer-social__title">
                {/* ✏️ EDIT: Social section title */}
                {isRtl ? 'منصات التواصل الاجتماعي' : 'Social Communities'}
              </h4>
              <p className="footer-social__desc">
                {/* ✏️ EDIT: Social description text */}
                {isRtl
                  ? 'تابعوا حساباتنا الرسمية على شبكات التواصل الاجتماعي.'
                  : 'Follow our official social media channels to stay updated.'}
              </p>
              <div className="footer-social__icons">
                {/* ✏️ EDIT: Change the href links for each social network */}
                <a href="https://www.facebook.com/people/El-Jalia/61591766037810/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook"><Facebook className="icon" /></a>
                <a href="https://www.instagram.com/sudanese_community_school/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram"><Instagram className="icon" /></a>
                <a href="https://www.tiktok.com/@eljaliia_sd" target="_blank" rel="noreferrer" className="social-icon" aria-label="TikTok"><svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          {/* Copyright bar */}
          <div className="footer-copyright">
            {/* ✏️ EDIT: Copyright text in translations.ts → 'footer.copyright' */}
            <p>{t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}</p>
            <p className="footer-copyright__sub">
              {/* ✏️ EDIT: Footer subtext in translations.ts → 'footer.subtext' */}
              {t('footer.subtext')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
