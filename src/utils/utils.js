export const formatVerse = (verse) => {
  if (!verse) return "";

  // If array → join each verse with newline between them
  if (Array.isArray(verse)) {
    return verse
      .map((v) => v.replace(/([୦-୯]+।।)\s*/g, "$1\n"))
      .join("\n")
      .trim();
  }

  // If single string
  return verse.replace(/([୦-୯]+।।)\s*/g, "$1\n").trim();
};
