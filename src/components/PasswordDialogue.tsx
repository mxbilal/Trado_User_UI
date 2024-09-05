import React, { useState } from "react";
import FiCopy from '../assets/copy-svgrepo-com.svg' // Importing a copy icon from react-icons

interface PasswordDialogueProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PasswordDialogue({ open, setOpen }: PasswordDialogueProps) {
    const handleClose = () => setOpen(false);

    const handleOverlayClick = (e: React.MouseEvent) => {
        // Close the dialog when clicking on the overlay (background)
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };
    interface InputProps {
        type: string;
        label: string;
        placeholder: string;
        setValue: (val: string) => void;
        value: string;
    }

    const ContactInput = ({ type, label, placeholder, setValue, value }: InputProps) => {
        const handleCopy = () => {
            navigator.clipboard.writeText(value);

        };

        return (
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor={label} className="font-poppins font-thin text-white text-sm md:text-md">
                    {label}
                </label>
                <div className="relative">
                    <input
                        id={label}
                        type={type}
                        placeholder={placeholder}
                        // value={value}
                        className="bg-black rounded-lg text-sm sm:text-base text-white placeholder:text-gray-700 py-3.5 px-4 focus:outline-0 border border-gray-800 focus:border-blue w-full pr-10"
                        required
                        // onChange={(e) => setValue(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                        <img src={FiCopy} width={20} className="hover:opacity-50" />
                    </button>
                </div>
            </div>
        );
    };

    const [serverName, setServerName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
            <div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-md mx-auto p-6" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col gap-4">
                    <h4 className="text-white text-lg font-semibold">Trading Credentials</h4>
                    <ContactInput
                        type="text"
                        label="Server Name"
                        placeholder="MonevisBrokers-Live"
                        setValue={setServerName}
                        value={serverName}
                    />
                    <ContactInput
                        type="text"
                        label="Login"
                        placeholder="104551"
                        setValue={setLogin}
                        value={login}
                    />
                    <ContactInput
                        type="password"
                        label="Password"
                        placeholder="Cu^Y3%M$"
                        setValue={setPassword}
                        value={password}
                    />

                </div>
            </div>
        </div>
    );
}
