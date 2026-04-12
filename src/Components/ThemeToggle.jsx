import {useTheme} from "../Context/ThemeContext.jsx";

export default function ThemeToggle() {
    const { dark, setDark } = useTheme();

    return (
        <button
            onClick={() => setDark(prev => !prev)}
            className="px-4 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors"
        >
            {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
}