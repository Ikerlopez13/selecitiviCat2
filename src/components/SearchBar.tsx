"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { searchSubjects, getCategoryById, Subject, Category, categories } from '@/data/subjects';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (results: Subject[]) => void;
}

export default function SearchBar({ placeholder = "Cerca itineraris, assignatures...", onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Subject[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Realizar búsqueda cuando cambia el término o la categoría
  useEffect(() => {
    if (searchTerm.trim() || selectedCategory) {
      const searchResults = searchSubjects(searchTerm, selectedCategory || undefined);
      setResults(searchResults);
      if (onSearch) onSearch(searchResults);
    } else {
      setResults([]);
      if (onSearch) onSearch([]);
    }
  }, [searchTerm, selectedCategory, onSearch]);
  
  // Cerrar resultados al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Agrupar resultados por categoría
  const groupedResults = results.reduce((acc, subject) => {
    const category = subject.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(subject);
    return acc;
  }, {} as Record<string, Subject[]>);
  
  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="join w-full">
        <input 
          className="input join-item w-full md:w-80 focus:outline-none focus:border-white" 
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
        />
        <button 
          className="btn join-item bg-white text-selectivi-yellow hover:bg-white/90 flex items-center gap-2 border-none"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filtra
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button 
          className="btn join-item bg-white text-selectivi-yellow hover:bg-white/90 border-none"
          onClick={() => {
            setShowResults(true);
            if (searchTerm.trim() || selectedCategory) {
              const searchResults = searchSubjects(searchTerm, selectedCategory || undefined);
              setResults(searchResults);
              if (onSearch) onSearch(searchResults);
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      
      {/* Filtros de categoría */}
      {showFilters && (
        <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-lg p-4">
          <h3 className="font-semibold mb-2">Filtrar per categoria:</h3>
          <div className="flex flex-wrap gap-2">
            <button 
              className={`px-3 py-1 rounded-full text-sm ${selectedCategory === null ? 'bg-selectivi-yellow text-white' : 'bg-gray-100'}`}
              onClick={() => setSelectedCategory(null)}
            >
              Totes les categories
            </button>
            {categories.map((category) => (
              <button 
                key={category.id}
                className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${selectedCategory === category.id ? 'bg-selectivi-yellow text-white' : 'bg-gray-100'}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Resultados de búsqueda */}
      {showResults && results.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold mb-2">Resultats ({results.length}):</h3>
            
            {Object.entries(groupedResults).map(([categoryId, subjects]) => {
              const category = getCategoryById(categoryId);
              return (
                <div key={categoryId} className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-1">
                    <span>{category?.icon}</span>
                    <span>{category?.name}</span>
                  </h4>
                  <ul className="space-y-2">
                    {subjects.map((subject) => (
                      <li key={subject.id}>
                        <Link 
                          href={`/assignatura/${subject.id}`}
                          className="block p-2 hover:bg-gray-50 rounded-md"
                          onClick={() => setShowResults(false)}
                        >
                          <div className="font-medium">{subject.name}</div>
                          <div className="text-sm text-gray-500">{subject.description}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      {/* Mensaje de no resultados */}
      {showResults && searchTerm && results.length === 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg p-4">
          <p className="text-gray-500">No s'han trobat resultats per "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
} 