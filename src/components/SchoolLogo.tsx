
interface SchoolLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

// ✏️ EDIT: Change 'showText' to true/false in App.tsx when using this component.
// ✏️ EDIT: To change the text that appears next to the logo, edit the <h1> and <span> below (lines ~170-180).
export default function SchoolLogo({ size = 80, className = '', showText = false }: SchoolLogoProps) {
  return (
    <div className={`logo-container ${className}`}>
      <img
        src="./images/school-logo.jpg"
        alt="Sudanese Community School Al-Ajami Logo"
        width={size}
        height={size}
        className="school-logo-img"
        style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain', borderRadius: '50%', flexShrink: 0 }}
      />

      {/* ✏️ EDIT: Side text next to the logo (only shown when showText=true) */}
      {showText && (
        <div className="logo-text">
          <h1 className="logo-school-name">Sudanese Community School</h1>
          <span className="logo-school-location">AL-AJAMI, ALEXANDRIA • مدارس الجالية السودانية</span>
        </div>
      )}
    </div>
  );
}
