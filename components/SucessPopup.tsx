// components/SuccessPopup.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface SuccessPopupProps {
  show: boolean;
  onClose: () => void;
}

export default function SuccessPopup({ show, onClose }: SuccessPopupProps) {
  const router = useRouter();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
        router.push("/login"); // redirect after popup closes
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose, router]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-3"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500" />
            </motion.div>
            <p className="text-gray-800 font-semibold text-center">
              Registration successful 🎉 <br />
              Redirecting to login...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
