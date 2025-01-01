import {Button, Link} from "@nextui-org/react";
import {Icon} from "@iconify/react";

export default function HotLines() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h2 className="text-4xl font-medium">Hotlines</h2>
            {/* Tip Line Card */}
            <div className="w-full">
                <p className="text-2xl font-medium">Employee "Tip" Hotline</p>
                <div className={"flex flex-col gap-2"}>
                    <p>See something suspicious? Report it anonymously</p>
                    <Button
                        as={Link}
                        href="tel:240-800-6273"
                        color={"primary"}
                        className={"w-fit justify-start"}
                        variant={"light"}
                        startContent={<Icon icon="mdi:phone" width={20}/>}
                    >
                        240-800-6273
                    </Button>
                </div>
            </div>

            {/* EAP Banner Card */}
            <div className="w-full">
                <p className="text-2xl font-medium">Employee Assistance Program</p>
                <div className={"flex flex-col gap-2"}>
                    <p>Counseling/Daily Life Assistance/Legal &amp; Financial Services</p>
                </div>
                <div className="flex flex-row gap-2 mt-4">
                    <Button
                        as={Link}
                        href="tel:1-888-628-4824"
                        color={"primary"}
                        className={"justify-start w-fit"}
                        target={"_blank"}
                        variant={"light"}
                        startContent={<Icon icon="mdi:phone" width={20}/>}
                    >
                        1-888-628-4824
                    </Button>
                    <Button
                        as={Link}
                        href={"src/assets/pdf/Lincoln EAP - PDF 2025.pdf"}
                        isExternal
                        showAnchorIcon
                        target={"_blank"}
                        variant={"light"}
                        className={"w-fit"}
                    >
                        View the EAP PDF
                    </Button>
                </div>
            </div>
        </div>
    );
}