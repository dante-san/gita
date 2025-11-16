import React, { useState } from "react";
import toast from "react-hot-toast";
import { chaptersData } from "../constants/gitaData";

const SearchBox = ({ onVerseData, setLoading }) => {
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");

  // Get max verses for selected chapter
  const maxVerses = chapter ? chaptersData.chapters.find((ch) => ch.number === parseInt(chapter))?.verses || 0 : 0;

  const submitSearch = async () => {
    try {
      if (!chapter) {
        toast.error("Please select a chapter!");
        return;
      }

      if (!verse) {
        toast.error("Please select a verse!");
        return;
      }

      setLoading(true);

      const apiUrl = import.meta.env.VITE_API_URL;
      const url = `${apiUrl}/${chapter}/${verse}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      onVerseData(data);

      toast.success("Verse loaded successfully! 🙏");
    } catch (error) {
      console.error(error);
      onVerseData(null);
      toast.error("Failed to fetch verse. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 flex-shrink-0">
      <div className="bg-white bg-opacity-80 rounded-lg p-3 shadow-lg border-2 border-amber-600">
        <h2 className="font-decorative text-lg text-amber-900 text-center mb-2 embossed">🔍 Search Verses</h2>

        <div className="grid grid-cols-2 gap-2 mb-2">
          {/* Chapter Dropdown */}
          <div>
            <label className="block text-rose-900 font-crimson font-semibold text-xs mb-1">ଅଧ୍ୟାୟ (Chapter)</label>
            <select
              value={chapter}
              onChange={(e) => {
                setChapter(e.target.value);
                setVerse(""); // Reset verse when chapter changes
              }}
              className="w-full px-2 py-1.5 border-2 border-amber-500 rounded bg-orange-50 focus:outline-none focus:border-rose-600 text-sm font-crimson text-amber-900 shadow-inner cursor-pointer"
            >
              <option value="">Select Chapter</option>
              {chaptersData.chapters.map((ch) => (
                <option key={ch.number} value={ch.number}>
                  {ch.number}. {ch.nameOdia}
                </option>
              ))}
            </select>
          </div>

          {/* Verse Dropdown */}
          <div>
            <label className="block text-rose-900 font-crimson font-semibold text-xs mb-1">ଶ୍ଲୋକ (Verse)</label>
            <select
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
              disabled={!chapter}
              className="w-full px-2 py-1.5 border-2 border-amber-500 rounded bg-orange-50 focus:outline-none focus:border-rose-600 text-sm font-crimson text-amber-900 shadow-inner cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Select Verse</option>
              {chapter &&
                Array.from({ length: maxVerses }, (_, i) => i + 1).map((v) => (
                  <option key={v} value={v}>
                    Verse {v}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <button
          className="w-full cursor-pointer bg-gradient-to-r from-rose-700 to-amber-700 hover:from-rose-800 hover:to-amber-800 text-white font-decorative text-sm py-1.5 rounded-lg shadow-xl border-2 border-amber-900 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={submitSearch}
          disabled={!chapter || !verse}
        >
          🕉️ Search
        </button>

        {/* Helper text */}
        {chapter && (
          <p className="text-xs text-amber-800 text-center mt-2 font-crimson">
            Chapter {chapter} has {maxVerses} verses
          </p>
        )}
      </div>
    </section>
  );
};

export default SearchBox;
