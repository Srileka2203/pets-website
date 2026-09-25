import Card from "@/components/ui/Card";

interface ServiceGalleryProps {
    image: string;
    serviceName: string;
}

export default function ServiceGallery({
    image,
    serviceName,
}: ServiceGalleryProps) {
    return (
        <Card
            className={`
                overflow-hidden
                rounded-[32px]
                border-[#D8E8E3]
                bg-[#F3F8F6]
                shadow-sm
            `}
        >
            <div
                className={`
                    relative
                    flex
                    min-h-[420px]
                    items-center
                    justify-center
                    overflow-hidden
                    bg-[#F3F8F6]
                `}
            >
                {/* Decorative Shapes */}
                <div
                    aria-hidden="true"
                    className={`
                        pointer-events-none
                        absolute
                        -right-16
                        -top-16
                        h-40
                        w-40
                        rounded-full
                        bg-[#DCEFE9]
                    `}
                />

                <div
                    aria-hidden="true"
                    className={`
                        pointer-events-none
                        absolute
                        -bottom-20
                        -left-16
                        h-44
                        w-44
                        rounded-full
                        bg-[#E9E3F4]
                    `}
                />

                {/* Image Placeholder */}
                <div className="relative z-10 text-center">
                    <div
                        className={`
                            mx-auto
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#D8E8E3]
                            bg-white
                            text-[#5F7D73]
                            shadow-sm
                        `}
                    >
                        <span className="text-3xl">🐾</span>
                    </div>

                    <p
                        className={`
                            mt-5
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[#5F7D73]
                        `}
                    >
                        {serviceName}
                    </p>

                    <p className="mt-2 text-sm text-[#8A9A94]">
                        Service image coming soon
                    </p>
                </div>
            </div>
        </Card>
    );
}