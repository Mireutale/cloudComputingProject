'use client';

import { useState } from 'react';

interface Props {
  onSearch: (location: string) => void;
}

export default function WeatherForm({ onSearch }: Props) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="지역을 입력하세요 (예: Seoul)"
        className="p-3 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        옷차림 추천 받기
      </button>
    </form>
  );
}
