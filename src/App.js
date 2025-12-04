import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // We'll create this
import Welcome from './Welcome';
import RentalForm from './RentalForm';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/form/:building/:unit" element={<RentalForm />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;