"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-background-light dark:bg-background-dark flex flex-col items-center justify-center z-[100]">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 1], opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                className="flex items-center justify-center bg-primary text-white rounded-2xl w-24 h-24 mb-6 shadow-2xl shadow-primary/30"
            >
                <span className="material-symbols-outlined text-5xl">shield_lock</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-col items-center gap-3"
            >
                <h2 className="text-2xl font-black tracking-tight text-primary dark:text-slate-100">TrialLock</h2>
                <div className="flex gap-1.5 items-center justify-center h-4">
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 rounded-full bg-primary"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 rounded-full bg-primary"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 rounded-full bg-primary"
                    />
                </div>
            </motion.div>
        </div>
    );
}
