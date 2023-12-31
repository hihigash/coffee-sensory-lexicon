type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`
type Color = RGB | RGBA | HEX;

type LexiconItem = {
    id: string;
    color: Color;
    displayName_en: string;
    displayName_ja: string;
    description_en: string;
    description_ja: string;
    items?: LexiconItem[];
};

type LexiconCategory = {
    id: string;
    image: string;
    displayName_en: string;
    displayName_ja: string;
    items: LexiconItem[];
};
