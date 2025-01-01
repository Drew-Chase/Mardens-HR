import {Button, cn, Image, NavbarItem, NavbarItemProps} from "@nextui-org/react";
import BannerBackground from "../../images/banner-background.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {JSX, useEffect, useState} from "react";

export type DropDownItem = {
    name: string | JSX.Element;
    subtext?: string | JSX.Element;
    href: string;
    icon?: string | JSX.Element;
}

export interface NavItemDropdownProps extends NavbarItemProps {
    label: string;
    description?: string | JSX.Element;
    icon?: string | JSX.Element;
    items: DropDownItem[];
}

export default function NavbarItemDropdown(props: NavItemDropdownProps) {
    const {label, description, icon, items, ...navbarItemProps} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [id] = useState(navbarItemProps.id || `nav-dropdown-${Math.random().toString(36).substring(2, 15)}`)
    const [hoveredElement, setHoveredElement] = useState<number | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!document.getElementById(id)?.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleFocusChange = (e: FocusEvent) => {
            if (!document.getElementById(id)?.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
            document.addEventListener("focusin", handleFocusChange);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("focusin", handleFocusChange);
        };
    }, [isOpen, id]);


    return (
        <NavbarItem {...navbarItemProps} id={id}>
            <Button
                variant={"light"}
                color={"primary"}
                radius={"none"}
                className={"text-white uppercase font-bold text-medium"}
                endContent={<FontAwesomeIcon icon={faChevronDown}/>}
                onPress={() => setIsOpen(prev => !prev)}
            >
                {label}
            </Button>
            <div
                className={
                    cn(
                        "absolute left-0 mt-3",
                        "flex flex-row gap-4 justify-start items-start overflow-hidden",
                        "bg-background shadow-2xl p-0 z-50",
                        "w-full min-w-[800px] h-screen max-h-0 opacity-0",
                        "data-[open=true]:max-h-[364.78px] data-[open=true]:opacity-100",
                        "transition-all duration-300 ease-in-out"
                    )
                }
                data-open={isOpen}
            >
                <div className={"flex flex-col gap-4 max-w-[479px] min-w-[265px] w-1/2 h-full relative"}>
                    <Image src={BannerBackground} className={"bg-primary absolute left-0 top-0"} radius={"none"} width={479} height={364.78}/>
                    <div className={"z-10 w-full my-auto flex flex-col justify-center items-center text-white"}>
                        <p className={"font-light text-2xl uppercase"}>Select a</p>
                        <p className={"font-bold text-4xl uppercase text-wrap text-center"}>{label}</p>
                        <p className={"font-light text-white text-tiny mt-4 normal-case text-center"}>{description}</p>
                    </div>
                </div>

                <div className={"flex flex-row gap-1 p-4 w-full min-w-[320px] h-full flex-wrap justify-start items-start uppercase text-black overflow-y-auto"}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex flex-row gap-4 p-4 border-primary border-2",
                                "w-56 h-1/2",
                                "hover:bg-primary hover:text-white",
                                "cursor-pointer transition-all"
                            )}
                            onMouseEnter={() => setHoveredElement(index)}
                            onMouseLeave={() => setHoveredElement(null)}
                            data-hovered={hoveredElement === index}
                        >
                            <div className={"flex flex-col gap-1 justify-center items-center w-full h-full text-center"}>
                                {item.icon && (typeof item.icon === "string" ? <Image src={item.icon} width={64} height={64}/> :
                                    <div
                                        className={"text-4xl text-primary data-[hovered=true]:text-white"}
                                        data-hovered={hoveredElement === index}
                                    >
                                        {item.icon}
                                    </div>)}
                                {item.name}
                                {item.subtext && (
                                    <p className={"text-tiny font-medium text-center"}>{item.subtext}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </NavbarItem>
    );
}