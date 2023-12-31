type LexiconItem = {
    id: string;
    displayName_en: string;
    displayName_ja: string;
    description_en: string;
    description_ja: string;
    items?: LexiconItem[];
};

type LexiconCategory = {
    id: string;
    displayName_en: string;
    displayName_ja: string;
    items: LexiconItem[];
};
