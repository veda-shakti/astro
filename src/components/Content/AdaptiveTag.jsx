import React, { useContext } from 'react';
import LanguageContext from '../LanguageContext';

function AdaptiveTag({ tag: Tag, translations, className, onClick }) {
    const { language } = useContext(LanguageContext);

    return <Tag className={className} onClick={onClick}>{translations[language]}</Tag>;
}

export default AdaptiveTag;
