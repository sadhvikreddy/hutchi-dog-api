import { AnimatePresence, motion } from "framer-motion";

export default function AnimationWrapper({ children, delay, id }) {
    return <AnimatePresence>
        <motion.div
            key={id}
            initial={{ translateX: 50, opacity: 0 }}
            animate={{ translateX: 0, opacity: 100 }}
            exit={{ scaleZ: 0, opacity: 0 }}
            transition={{
                delay,
                duration: 0.2,
                ease: "easeIn"
            }}
        >
            {children}
        </motion.div>
    </AnimatePresence>
}