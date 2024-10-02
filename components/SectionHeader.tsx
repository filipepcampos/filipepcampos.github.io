import { Colors } from "@/lib/colors";

export default function SectionHeader ({text}: {text: string}) {
    return (
        <h2 className={`text-xl md:text-2xl mb-4 font-bold ${Colors.accent}`}>
            { text }
        </h2>
    );
    }