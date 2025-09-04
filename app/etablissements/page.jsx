'use client';
import { useState, useMemo } from 'react';
import CardPlace from '@/components/CardPlace';
import Filters from '@/components/Filters';
import Pagination from '@/components/Pagination';
import etablissements from '@/data/etablissements.json';

export default function Etablissements() {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    city: '',
    sort: 'partner'
  });
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredAndSortedEtablissements = useMemo(() => {
    let filtered = [...etablissements];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(e => 
        e.name.toLowerCase().includes(searchLower) ||
        e.city.toLowerCase().includes(searchLower)
      );
    }

    if (filters.category) {
      filtered = filtered.filter(e => e.category === filters.category);
    }

    if (filters.city) {
      filtered = filtered.filter(e => e.city === filters.city);
    }

    filtered.sort((a, b) => {
      switch (filters.sort) {
        case 'partner':
          if (a.isPartner && !b.isPartner) return -1;
          if (!a.isPartner && b.isPartner) return 1;
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters]);

  const totalPages = Math.ceil(filteredAndSortedEtablissements.length / itemsPerPage);
  const paginatedEtablissements = filteredAndSortedEtablissements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-bespot-dark mb-8">
        Tous les établissements
      </h1>

      <Filters filters={filters} onFilterChange={handleFilterChange} />

      {filteredAndSortedEtablissements.length === 0 ? (
        <div className="text-center py-16">
          <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xl text-gray-600">
            Aucun établissement trouvé avec ces critères
          </p>
          <button
            onClick={() => setFilters({ search: '', category: '', city: '', sort: 'partner' })}
            className="mt-4 px-6 py-2 bg-bespot-blue text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4 text-gray-600">
            {filteredAndSortedEtablissements.length} établissement{filteredAndSortedEtablissements.length > 1 ? 's' : ''} trouvé{filteredAndSortedEtablissements.length > 1 ? 's' : ''}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedEtablissements.map((etablissement) => (
              <CardPlace key={etablissement.id} etablissement={etablissement} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
}