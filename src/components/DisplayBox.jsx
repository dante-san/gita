import React from "react";
import { formatVerse } from "../utils/utils";

const DisplayBox = ({ verseData, loading, onPrevious, onNext }) => {
  if (loading) {
    return (
      <section className="relative flex-1 min-h-0 overflow-hidden">
        <div className="verse-mandala"></div>
        <div className="relative z-10 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 rounded-lg p-3 shadow-2xl border-4 border-double border-amber-700 h-full flex items-center justify-center">
          <p className="font-crimson text-lg text-amber-900">⏳ Loading verse...</p>
        </div>
      </section>
    );
  }

  if (!verseData) {
    return (
      <section className="relative flex-1 min-h-0 overflow-hidden">
        <div className="verse-mandala"></div>
        <div className="relative z-10 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 rounded-lg p-3 shadow-2xl border-4 border-double border-amber-700 h-full flex items-center justify-center">
          <p className="font-crimson text-lg text-amber-900 text-center">
            🪷 Search for a verse to begin your spiritual journey
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex-1 min-h-0 overflow-hidden">
      <div className="verse-mandala"></div>

      <div className="relative z-10 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 rounded-lg p-3 shadow-2xl border-4 border-double border-amber-700 h-full overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-2 flex-shrink-0">
          <button
            onClick={onPrevious}
            className="bg-rose-600 hover:bg-rose-800 text-white px-3 py-0.5 rounded-full font-crimson font-bold text-sm shadow-lg cursor-pointer transition-colors"
          >
            ⏮ ପୂର୍ବବର୍ତ୍ତୀ
          </button>

          <div className="flex flex-col gap-1 items-center">
            <span className="inline-block bg-rose-700 text-white px-3 py-0.5 rounded-full font-crimson font-bold text-xs shadow-lg">
              ଅଧ୍ୟାୟ {verseData?.chapter_no} • ଶ୍ଲୋକ {verseData?.verse_no}
            </span>
            <span className="inline-block bg-rose-700 text-white px-2 py-0.5 rounded-full font-crimson font-semibold text-xs shadow-lg">
              {verseData?.chapter_name}
            </span>
          </div>

          <button
            onClick={onNext}
            className="bg-rose-600 hover:bg-rose-800 text-white px-3 py-0.5 rounded-full font-crimson font-bold text-sm shadow-lg cursor-pointer transition-colors"
          >
            ପରବର୍ତ୍ତୀ ⏭
          </button>
        </div>

        {/* Sanskrit Verse */}
        <div className="mb-2 pb-2 border-b border-amber-400 flex-shrink-0">
          <p className="text-center text-base font-semibold text-rose-900 leading-snug font-crimson whitespace-pre-line">
            {formatVerse(verseData?.verse)}
          </p>
        </div>

        {/* Synonyms (ପର୍ଯ୍ୟାୟବାଚୀ) */}
        <div className="mb-2 pb-2 border-b border-amber-400 flex-shrink-0">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-xs">📖</span>
            <h3 className="font-crimson text-sm font-extrabold text-amber-900">ପର୍ଯ୍ୟାୟବାଚୀ</h3>
          </div>
          <p className="text-sm font-extrabold text-amber-950 leading-snug font-crimson">{verseData?.synonyms}</p>
        </div>

        {/* Translation (ଅନୁବାଦ) */}
        <div className="mb-2 pb-2 border-b border-amber-400 flex-shrink-0">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-xs">📜</span>
            <h3 className="font-crimson text-sm font-extrabold text-amber-900">ଅନୁବାଦ</h3>
          </div>
          <p className="text-sm text-amber-950 leading-snug font-crimson font-bold">{verseData?.translation}</p>
        </div>

        {/* Purport (ଅର୍ଥ / ତାତ୍ପର୍ୟ) - SCROLLABLE */}
        {/* Purport with FIXED HEIGHT for testing */}
        <div className="flex-1 min-h-0 flex flex-col">
          <div className="flex items-center gap-1 mb-1 flex-shrink-0">
            <span className="text-sm">✨</span>
            <h3 className="font-decorative text-sm font-extrabold text-amber-900 embossed">ଅର୍ଥ / ତାତ୍ପର୍ୟ</h3>
          </div>

          {/* With explicit max-height to force scrolling */}
          <div className="overflow-y-scroll bg-gradient-to-br from-yellow-50 to-orange-100 rounded-lg p-3 shadow-lg border-2 border-amber-500 purport-scroll max-h-[15.25rem]">
            <p className="text-sm font-semibold text-amber-950 leading-relaxed font-crimson whitespace-pre-line">
              {verseData?.purport}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayBox;
