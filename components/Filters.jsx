'use client';

export default function Filters({ filters, onFilterChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Rechercher
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Nom ou ville..."
            value={filters.search}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-bespot-blue focus:border-bespot-blue"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Catégorie
          </label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-bespot-blue focus:border-bespot-blue"
          >
            <option value="">Toutes</option>
            <option value="restaurant">Restaurants</option>
            <option value="hotel">Hôtels</option>
            <option value="loisir">Loisirs</option>
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            Ville
          </label>
          <select
            id="city"
            name="city"
            value={filters.city}
            onChange={(e) => onFilterChange({ ...filters, city: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-bespot-blue focus:border-bespot-blue"
          >
            <option value="">Toutes les villes</option>
            <option value="Paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="Cannes">Cannes</option>
            <option value="Nice">Nice</option>
            <option value="Biarritz">Biarritz</option>
            <option value="La Rochelle">La Rochelle</option>
            <option value="Deauville">Deauville</option>
            <option value="Carcassonne">Carcassonne</option>
            <option value="Poitiers">Poitiers</option>
            <option value="Plailly">Plailly</option>
            <option value="Metz">Metz</option>
            <option value="Saint-Jean-Cap-Ferrat">Saint-Jean-Cap-Ferrat</option>
            <option value="Saint-Aignan">Saint-Aignan</option>
          </select>
        </div>

        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
            Trier par
          </label>
          <select
            id="sort"
            name="sort"
            value={filters.sort}
            onChange={(e) => onFilterChange({ ...filters, sort: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-bespot-blue focus:border-bespot-blue"
          >
            <option value="partner">Partenaires d&apos;abord</option>
            <option value="rating">Meilleure note</option>
            <option value="name">Alphabétique</option>
          </select>
        </div>
      </div>
    </div>
  );
}