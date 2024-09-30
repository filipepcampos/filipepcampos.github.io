export default function SectionHeader ({text}: {text: string}) {
    return (
        <h2 className="text-xl md:text-2xl mb-4 text-2xl font-bold text-blue-800 dark:text-orange-500">
            { text }
        </h2>
    );
    }