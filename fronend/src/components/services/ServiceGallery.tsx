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
        <Card className="overflow-hidden rounded-[32px] border-gray-200 bg-gray-50">
            <div className="flex min-h-[420px] items-center justify-center">
                <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                        <span className="text-3xl">🐾</span>
                    </div>

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                        {serviceName}
                    </p>

                    <p className="mt-2 text-sm text-gray-400">
                        Service image coming soon
                    </p>
                </div>
            </div>
        </Card>
    );
}