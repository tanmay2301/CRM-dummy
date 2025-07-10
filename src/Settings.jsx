import React, { useState } from "react";
import Header from "./custom-components/Header";
import SideBar from "./custom-components/SideBar";

function Settings() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [autoUpdateEnabled, setAutoUpdateEnabled] = useState(false);
    const [language, setLanguage] = useState("English");
    const [textSize, setTextSize] = useState("Medium");
    const [isProfilePrivate, setIsProfilePrivate] = useState(false);

    const handleSave = () => {
        console.log("Settings saved:", {
            notificationsEnabled,
            darkModeEnabled,
            autoUpdateEnabled,
            language,
            textSize,
            isProfilePrivate,
        });
    };

    return (
        <>
            <Header />
            <SideBar />
            <div className="flex justify-center items-start min-h-screen w-full pt-2">
                <div className="w-full max-w-6xl p-6">
                    <h2 className="text-3xl font-bold text-black mb-6">Settings</h2>
                    <form className="space-y-6">
                        <div className="flex items-center justify-between">
                            <label className="block text-l font-medium text-gray-700">Enable Notifications:</label>
                            <input
                                type="checkbox"
                                checked={notificationsEnabled}
                                onChange={(e) => setNotificationsEnabled(e.target.checked)}
                                className="toggle-checkbox h-6 w-6"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block text-l font-medium text-gray-700">Enable Dark Mode:</label>
                            <input
                                type="checkbox"
                                checked={darkModeEnabled}
                                onChange={(e) => setDarkModeEnabled(e.target.checked)}
                                className="toggle-checkbox h-6 w-6"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block text-l font-medium text-gray-700">Enable Auto Update:</label>
                            <input
                                type="checkbox"
                                checked={autoUpdateEnabled}
                                onChange={(e) => setAutoUpdateEnabled(e.target.checked)}
                                className="toggle-checkbox h-6 w-6"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block text-l font-medium text-gray-700">Language:</label>
                            <div className="flex space-x-4">
                                {["English", "Spanish", "French", "German"].map((lang) => (
                                    <button
                                        key={lang}
                                        type="button"
                                        onClick={() => setLanguage(lang)}
                                        className={`px-3 py-1 rounded-md ${language === lang ? 'bg-gray-600 text-white' : 'bg-gray-500 text-gray-200'}`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block text-l font-medium text-gray-700">Text Size:</label>
                            <div className="flex space-x-4">
                                {["Small", "Medium", "Large"].map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => setTextSize(size)}
                                        className={`px-3 py-1 rounded-md ${textSize === size ? 'bg-gray-600 text-white' : 'bg-gray-500 text-gray-200'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={handleSave}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-l font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Settings;