import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLang, setSelectedLang] = useState('English');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const languages = [
    { name: 'English', code: 'EN' },
    { name: 'اردو (Urdu)', code: 'UR' },
    { name: 'العربية (Arabic)', code: 'AR' },
    { name: 'বাংলা (Bengali)', code: 'BN' },
    { name: '中文 (Chinese)', code: 'ZH' },
    { name: '日本語 (Japanese)', code: 'JA' }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <header className="navbar-container">
      {/* LEFT SECTION: Logo & Hamburger / Mobile Search */}
      <div className="navbar-left">
        <div className="logo-box" onClick={() => alert('Home Clicked')}>
          <svg className="logo-svg" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" fill="#673AB7" />
            <path d="M14 26C14 26 17 29 22 26C27 23 28 17 28 17" stroke="#00E676" strokeWidth="3" strokeLinecap="round" />
            <circle cx="16" cy="16" r="3" fill="#ffffff" />
            <circle cx="25" cy="14" r="2" fill="#ffffff" />
          </svg>
          <span className="logo-text">BERRY</span>
        </div>

        <button className="menu-btn" onClick={() => alert('Sidebar Toggle')} aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>

        {/* Mobile Only Search Icon */}
        <button 
          className="icon-btn bg-purple search-btn-mobile" 
          onClick={() => alert('Search Clicked')}
          aria-label="Search"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* CENTER SECTION: Search Bar (Desktop Only) */}
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9e9e9e" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" className="filter-btn" onClick={() => alert('Filter Clicked')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />
          </svg>
        </button>
      </form>

      {/* RIGHT SECTION: Actions */}
      <div className="navbar-right">
        {/* Live Broadcast */}
        <button className="icon-btn bg-purple desktop-only" onClick={() => alert('Live Stream Window')} title="Live">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
            <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" strokeLinecap="round" />
          </svg>
        </button>

        {/* Multi-Language Dropdown */}
        <div className="lang-dropdown-wrapper desktop-only">
          <button 
            className="icon-btn bg-cyan" 
            onClick={() => setIsLangOpen(!isLangOpen)} 
            title="Language"
          >
            <span style={{ fontWeight: 'bold', fontSize: '13px' }}>文A</span>
          </button>

          {isLangOpen && (
            <div className="lang-menu">
              {languages.map((lang, index) => (
                <div 
                  key={index} 
                  className={`lang-option ${selectedLang === lang.name ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLang(lang.name);
                    setIsLangOpen(false);
                    alert(`Selected Language: ${lang.name}`);
                  }}
                >
                  <span>{lang.name}</span>
                  <span className="lang-code">{lang.code}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Notifications Icon */}
        <button className="icon-btn bg-amber" onClick={() => alert('Notifications Clicked')} title="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Fullscreen Icon */}
        <button className="icon-btn bg-cyan desktop-only" onClick={toggleFullscreen} title="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Profile Pill */}
        <div className="profile-pill" onClick={() => alert('User Profile Clicked')}>
          <div className="avatar-circle">
            <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" />
          </div>
          <div className="settings-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          </div>
        </div>

        {/* Mobile Three Dots Menu */}
        <button 
          className="more-btn-mobile" 
          onClick={() => setIsMoreOpen(!isMoreOpen)}
          aria-label="More"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;