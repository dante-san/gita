import React, { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import DisplayBox from "./components/DisplayBox";
import AskAi from "./components/AskAi";
import AiExplanation from "./components/AiExplanation";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [verseData, setVerseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(0);
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "font-crimson text-orange-900",
          style: {
            background: "#fce9d8",
            border: "2px solid #e07a5f",
            padding: "12px 16px",
            borderRadius: "8px",
          },
        }}
      />

      {/* // OM Watermark */}
      <div class="om-watermark">ॐ</div>
      {/* // Main Container */}
      <div class="h-screen flex flex-col overflow-hidden px-6 pt-4 pb-1 relative z-10">
        {/* <!-- Header --> */}
        <Header />

        {/* <!-- Main Content Container with Kumkum Border --> */}
        <div class="kumkum-border bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 p-3 rounded-lg shadow-2xl relative overflow-hidden flex-1 flex flex-col min-h-0">
          {/* <!-- Mandala corners --> */}
          <div class="mandala-corner mandala-tl"></div>
          <div class="mandala-corner mandala-tr"></div>
          <div class="mandala-corner mandala-bl"></div>
          <div class="mandala-corner mandala-br"></div>

          {/* <!-- Lotus pattern overlay --> */}
          <div class="lotus-pattern"></div>

          <div class="flex-1 overflow-hidden">
            <div class="grid grid-cols-2 gap-3 h-full">
              {/* <!-- Left Column: Search & Verse --> */}
              <div class="flex flex-col gap-3 h-full">
                {/* <!-- Search Section --> */}
                <SearchBox onVerseData={setVerseData} setLoading={setLoading} />

                {/* <!-- Verse Display Box --> */}
                <DisplayBox verseData={verseData} loading={loading} onPrevious={setPrevious} onNext={setNext} />
              </div>

              {/* <!-- Right Column: Ask the API Section --> */}
              <div class="relative z-10 h-full">
                <div class="bg-white bg-opacity-80 rounded-lg p-3 shadow-lg border-2 border-rose-600 h-full flex flex-col">
                  <AskAi />

                  {/* <!-- Palm Leaf Response Box - ONLY SCROLLABLE AREA --> */}
                  <AiExplanation />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
