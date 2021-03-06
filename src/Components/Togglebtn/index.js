import { useTranslation } from 'react-i18next';

import "./style.css";

export default function ToggleBtn() {
    const { t, i18n } = useTranslation();
    return (
        <div className="toggle-btn-wrapper">
            <span className="toggle-btn-desc">{t('theme.label')}</span>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}