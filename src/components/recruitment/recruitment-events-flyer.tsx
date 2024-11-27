"use client";
import Image from "next/image";

export function RecruitmentEventsFlyer() {
    const imageUrl = "/Fall-24-Rush-Flyer-Color-v4-667x1024.png";

    return (
        <section className="container max-w-7xl mx-auto py-36">
            <Image
                src={imageUrl}
                alt="Rush Flyer"
                width={300}
                height={450}
                className="w-auto h-auto object-contain mx-auto"
            />
        </section>
    );
}