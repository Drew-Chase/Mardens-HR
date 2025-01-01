"use client";

import {Button, Card, CardBody, CardProps, Image, Link} from "@nextui-org/react";

import {Icon} from "@iconify/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMobileScreen} from "@fortawesome/free-solid-svg-icons";

interface ContactCardProps extends CardProps {
    name: string;
    description: string;
    image?: string;
    email: string;
    phone?: string;
    cellphone?: string;
}

export default function ContactCard(props: ContactCardProps) {
    return (
        <Card className={"w-full h-64 grow"} {...props}>
            <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
                <Image
                    removeWrapper
                    className="h-auto w-full flex-none object-cover object-top md:w-48 lg:flex hidden"
                    src={props.image}
                />
                <div className="px-4 py-5">
                    <h3 className="text-2xl font-medium">{props.name}</h3>
                    <div className="flex flex-col gap-3 pt-2 text-small text-default-400">
                        <div className={"flex flex-col gap-2"}>
                            <Button
                                className={"text-start justify-start"}
                                color="primary"
                                size="lg"
                                as={Link}
                                href={`mailto:${props.email}`}
                                variant={"light"}
                                startContent={<FontAwesomeIcon icon={faEnvelope}/>}
                            >
                                {props.email}
                            </Button>

                            {props.phone && (
                                <Button
                                    className={"text-start justify-start"}
                                    size="lg"
                                    as={Link}
                                    href={`tel:${props.phone}`}
                                    variant={"light"}
                                    startContent={<Icon icon="mdi:phone" width={20}/>}
                                >
                                    {props.phone}
                                </Button>
                            )}
                            {props.cellphone && (
                                <Button
                                    className={"text-start justify-start"}
                                    size="lg"
                                    as={Link}
                                    variant={"light"}
                                    href={`tel:${props.cellphone}`}
                                    startContent={<FontAwesomeIcon icon={faMobileScreen}/>}
                                >
                                    {props.cellphone}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
