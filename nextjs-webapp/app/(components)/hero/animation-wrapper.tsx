import { AnimatePresence, motion } from "framer-motion";

export default function AnimationWrapper({ children, delay, id }) {
    return <motion.div
        key={`aw:${id}`}
        layout
        initial={{ translateX: 50, opacity: 0, scaleY: 0 }}
        animate={{ translateX: 0, opacity: 1, scaleY: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
            delay,
            duration: 0.2,
            ease: "easeIn"
        }}
    >
        {children}
    </motion.div>
}