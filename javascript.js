import React, { useState } from 'react';

function ExperienceSection({ title, description }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="experience-section">
      <button className="toggle-button" onClick={() => setOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && <p className="description">{description}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ExperienceSection
        title="Trainer & Coach / EDI Champion - Generation UK and Ireland (Jan 2023 - Present)"
        description="Supported large numbers of graduates into long-term aspirational job roles through placement phase workshops and coaching."
      />
      {/* Additional sections would be added here */}
    </div>
  );
}

export default App;
