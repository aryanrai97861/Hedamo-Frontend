'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check localStorage or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        
        if (newTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    // Prevent flash of wrong theme
    if (!mounted) {
        return <div className={styles.toggle} aria-hidden="true"></div>;
    }

    return (
        <button
            onClick={toggleTheme}
            className={styles.toggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {isDark ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M10 3V1M10 19V17M17 10H19M1 10H3M15.657 4.343L17.071 2.929M2.929 17.071L4.343 15.657M15.657 15.657L17.071 17.071M2.929 2.929L4.343 4.343M13 10C13 11.657 11.657 13 10 13C8.343 13 7 11.657 7 10C7 8.343 8.343 7 10 7C11.657 7 13 8.343 13 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M17.293 13.293C16.235 13.748 15.064 14 13.833 14C9.231 14 5.5 10.269 5.5 5.667C5.5 4.436 5.752 3.265 6.207 2.207C3.338 3.579 1.333 6.543 1.333 10C1.333 14.602 5.064 18.333 9.666 18.333C13.123 18.333 16.087 16.328 17.459 13.459L17.293 13.293Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </button>
    );
}
