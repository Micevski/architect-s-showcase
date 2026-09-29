import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, translations } from '@/lib/i18n';
import { Header } from './Header';

function LocationProbe() {
  const { pathname, hash } = useLocation();
  return <div data-testid="location">{`${pathname}${hash}`}</div>;
}

function renderAt(route: string) {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[route]}>
        <Header />
        <LocationProbe />
        <Routes>
          <Route path="/" element={<div id="projects" />} />
          <Route path="/project/:id" element={null} />
        </Routes>
      </MemoryRouter>
    </LanguageProvider>
  );
}

const projectsLabel = translations.mk['nav.projects'];

describe('Header navigation', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('routes home with the section hash when on a project page', () => {
    renderAt('/project/winery');

    fireEvent.click(screen.getAllByRole('link', { name: projectsLabel })[0]);

    expect(screen.getByTestId('location')).toHaveTextContent('/#projects');
  });

  it('scrolls in place instead of routing when already home', () => {
    renderAt('/');

    fireEvent.click(screen.getAllByRole('link', { name: projectsLabel })[0]);

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(screen.getByTestId('location')).toHaveTextContent('/');
  });
});
