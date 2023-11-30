import React, { useContext } from 'react';
import  LanguageContext from '../LanguageContext';

function AdaptiveTag ({ tag: Tag, translations, className }) {
    const { language } = useContext(LanguageContext);

    return <Tag className={className}>{translations[language]}</Tag>;
}

export default AdaptiveTag;