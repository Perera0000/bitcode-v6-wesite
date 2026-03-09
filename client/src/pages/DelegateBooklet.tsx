import { motion } from "framer-motion";
import { Download, FileText, Settings, Layers, ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function DelegateBooklet() {
    return (
        <div
            className="min-h-screen text-white relative pt-24 pb-12 px-4"
            style={{
                background: "#0B0F19",
                backgroundImage: "radial-gradient(circle at 50% 0%, rgba(106,0,255,0.15) 0%, transparent 70%)",
            }}
        >
            <div className="max-w-5xl mx-auto relative z-10">
                <Link href="/">
                    <a className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00E5FF] transition-colors mb-8 font-grotesk text-sm font-bold tracking-widest cursor-pointer group">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        BACK TO HOME
                    </a>
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1
                        className="font-orbitron font-black text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text text-center sm:text-left"
                        style={{ backgroundImage: "linear-gradient(135deg, #00E5FF, #6A00FF, #9333EA)" }}
                    >
                        DELEGATE <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Booklet</span>
                    </h1>
                    <p className="mt-4 text-gray-400 font-sans text-sm sm:text-base max-w-2xl text-center sm:text-left">
                        Everything you need to know about BITCODE V6.0. Read the rules, timeline, format, and more.
                    </p>
                </motion.div>

                {/* Metadata and Download Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
                >
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#ffffff05] border border-white/10 rounded-lg backdrop-blur-md">
                            <FileText className="w-4 h-4 text-[#00E5FF]" />
                            <span className="font-grotesk font-bold text-xs tracking-widest text-gray-300">01 DOCUMENT</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#ffffff05] border border-white/10 rounded-lg backdrop-blur-md">
                            <Settings className="w-4 h-4 text-[#6A00FF]" />
                            <span className="font-grotesk font-bold text-xs tracking-widest text-gray-300">V6.0 REVISION</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#ffffff05] border border-white/10 rounded-lg backdrop-blur-md">
                            <Layers className="w-4 h-4 text-[#9333EA]" />
                            <span className="font-grotesk font-bold text-xs tracking-widest text-gray-300">16 PAGES</span>
                        </div>
                    </div>

                    <a
                        href="/delegate-booklet.pdf"
                        download
                        className="flex items-center gap-2 px-6 py-3 rounded-lg font-grotesk font-bold text-sm tracking-widest text-white border border-[#00E5FF]/40 bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 transition-all duration-300 relative overflow-hidden group shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/0 via-[#00E5FF]/20 to-[#00E5FF]/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        <Download className="w-4 h-4" />
                        DOWNLOAD PDF
                    </a>
                </motion.div>

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hidden md:block w-full h-[80vh] rounded-2xl overflow-hidden border border-[#00E5FF]/40 bg-[#0B0F19]/50 backdrop-blur-md shadow-[0_0_40px_rgba(106,0,255,0.4),0_0_20px_rgba(0,229,255,0.3)] relative"
                >
                    {/* Decorative glows for the viewer container */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6A00FF]/20 rounded-full blur-[100px] pointer-events-none" />

                    <iframe
                        src="/delegate-booklet.pdf#toolbar=0&navpanes=0&scrollbar=0"
                        title="Delegate Booklet Preview"
                        className="w-full h-full relative z-10"
                        style={{ backgroundColor: "transparent" }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
