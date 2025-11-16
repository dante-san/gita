import React from "react";

const AskAi = () => {
  return (
    <>
      <div class="text-center mb-2 flex-shrink-0">
        <h2 class="font-decorative text-lg text-rose-900 embossed mb-0.5">🔥 Ask for Insights</h2>
        <p class="font-crimson text-xs text-amber-800 italic">Seek divine wisdom</p>
      </div>

      <div class="mb-2 flex-shrink-0">
        <label class="block text-rose-900 font-crimson font-semibold text-xs mb-1">Your Question:</label>
        <textarea
          rows="2"
          placeholder="How can I apply this in daily life?"
          class="w-full px-2 py-1.5 border-2 border-amber-500 rounded bg-orange-50 focus:outline-none focus:border-rose-600 text-xs font-crimson text-amber-900 resize-none shadow-inner"
        ></textarea>
      </div>

      <button class="w-full bg-gradient-to-r from-amber-700 to-rose-700 hover:from-amber-800 hover:to-rose-800 text-white font-decorative text-sm py-1.5 rounded-lg shadow-xl border-2 border-rose-900 mb-2 flex-shrink-0">
        💬 Explain
      </button>
    </>
  );
};

export default AskAi;
