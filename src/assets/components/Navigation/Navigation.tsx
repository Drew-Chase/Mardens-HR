import React from "react";
import {Image, Navbar, NavbarContent, NavbarMenu, NavbarMenuToggle} from "@nextui-org/react";
import Logo from "../../images/mardens-hr-logo.svg"
import NavbarItemDropdown from "./NavbarItemDropdown.tsx";
import {Icon} from "@iconify/react";

export default function Navigation() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            maxWidth={"full"}
            className={"bg-primary/90 text-white font-bold uppercase"}
        >
            <NavbarContent className={"shrink-0"}>
                <Image src={Logo} alt="Marden's HR Logo" height={35} removeWrapper radius={"none"} className={"shrink-0"}/>
                <div className="hidden md:flex gap-4">

                    <NavbarItemDropdown
                        label={"HR Links"}
                        description={<>Find important HR resources and links<br/>by selecting a category to the right</>}
                        items={[
                            {
                                name: "orientation",
                                href: "https://docs.google.com/forms/d/1n3gS1f2QBY7TA5nOBZjgaR6bo9qPJmaeD-_gY_25Km0/edit",
                                icon: <Icon icon="streamline:startup"/>
                            },

                            {
                                name: <>Kronos Payroll</>,
                                href: "https://secure6.saashr.com/ta/6127576.login",
                                icon: <Icon icon="uiw:pay"/>
                            },
                            {
                                name: <>401k Basic Info<br/>(Lebel & Harriman)</>,
                                href: "/assets/pdf/Our%20New%20Digital%20401(k)%20Education%20Platform%20-%20Marden's.pdf",
                                icon: <Icon icon="bytesize:info"/>
                            },
                            {
                                name: <>401K Empower<br/>Account Login</>,
                                href: "http://participant.empower-retirement.com/participant/#/login",
                                icon: <Icon icon="carbon:piggy-bank"/>
                            },
                            {
                                name: <>Meritain Health</>,
                                href: "https://www.meritain.com/",
                                icon: <Icon icon="fluent-mdl2:health"/>
                            },
                            {
                                name: <>Ameritas<br/>(Dental/Vision)</>,
                                href: "https://www.ameritas.com/sign-in/",
                                icon: <Icon icon="healthicons:dental-hygiene-outline"/>
                            },
                            {
                                name: <>Lincoln<br/>(STD/Life)</>,
                                href: "https://www.lincolnfinancial.com/public/individuals",
                                icon: <Icon icon="cil:life-ring"/>
                            },
                            {
                                name: <>Social<br/>Security</>,
                                href: "https://ssa.gov",
                                icon: <Icon icon="hugeicons:security-lock"/>
                            },
                        ]}
                    />
                    <NavbarItemDropdown
                        label={"Safety Links"}
                        description={<>Find important safety resources and links<br/>by selecting a category to the right</>}
                        items={[
                            {
                                name: <>Safety Logs<br/>Dashboard</>,
                                subtext: <>Works Only at<br/>Marden's Locations</>,
                                href: "https://safety.mardens.com",
                                icon: <Icon icon="icon-park-outline:upload-logs"/>
                            },
                            {
                                name: <>SDS Safety<br/>Sheets</>,
                                href: "https://mardens-my.sharepoint.com/personal/kira_estes_mardens_com/Lists/Approved%20SDS?env=WebViewList",
                                icon: <Icon icon="icon-park-outline:data-sheet"/>
                            },
                            {
                                name: <>Marden's<br/>Training Videos</>,
                                href: "https://mardens.sharepoint.com/sites/TrainingTeam/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x012000E71DBA1EEBFFBA4E81FC1B197DA1E444&viewid=1c091beb%2D7a2b%2D46e9%2D8315%2De5e9ecaa7c3f",
                                icon: <Icon icon="mage:video"/>
                            },
                            {
                                name: <>Daily Safety<br/>Sweep Form</>,
                                href: "https://forms.gle/TJwpzgX9YSmPVk7t9",
                                icon: <Icon icon="uiw:safety"/>
                            },
                        ]}
                    />

                    <NavbarItemDropdown
                        label={"Manager Resources"}
                        description={<>Find important resources and tools for managers<br/>by selecting a category to the right</>}
                        items={[
                            {
                                name: <>Vangent</>,
                                href: "https://www.rlhonline.net/mardens.asp",
                                icon: <Icon icon="mdi:briefcase-outline"/>
                            },
                            {
                                name: <>Math Test</>,
                                href: "https://forms.office.com/r/vh0znQT7gh",
                                icon: <Icon icon="iconoir:calculator"/>
                            },
                            {
                                name: <>HR & Safety Resources</>,
                                href: "https://mardens.sharepoint.com/sites/HRandSafety",
                                icon: <Icon icon="mdi:shield-account-outline"/>
                            },
                            {
                                name: <>Buyer/Merchandising<br/>Presentations</>,
                                href: "https://mardens.sharepoint.com/sites/MardensGeneral",
                                icon: <Icon icon="iconoir:presentation"/>
                            },
                            {
                                name: <>Managers Documents</>,
                                href: "https://mardens.sharepoint.com/sites/HRandSafety/Shared%20Documents/Forms/AllItems.aspx?newTargetListUrl=%2Fsites%2FHRandSafety%2FShared%20Documents&viewpath=%2Fsites%2FHRandSafety%2FShared%20Documents%2FForms%2FAllItems%2Easpx&id=%2Fsites%2FHRandSafety%2FShared%20Documents%2FManager%20Docs&viewid=558dd156%2D4b00%2D4035%2D9233%2D1c13fa6ff200",
                                icon: <Icon icon="mdi:file-document-outline"/>
                            },
                        ]}
                    />
                </div>
            </NavbarContent>

            <NavbarContent justify={'end'}>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden"/>
            </NavbarContent>

            <NavbarMenu>

                <NavbarMenu>
                    <div className="py-4 px-6">
                        <h2 className="text-lg font-bold uppercase mb-2">HR Links</h2>
                        <ul className="space-y-2">
                            <li><a href="https://docs.google.com/forms/d/1n3gS1f2QBY7TA5nOBZjgaR6bo9qPJmaeD-_gY_25Km0/edit">Orientation</a></li>
                            <li><a href="https://secure6.saashr.com/ta/6127576.login">Kronos Payroll</a></li>
                            <li><a href="/assets/pdf/Our%20New%20Digital%20401(k)%20Education%20Platform%20-%20Marden's.pdf">401k Basic Info (Lebel & Harriman)</a></li>
                            <li><a href="http://participant.empower-retirement.com/participant/#/login">401K Empower Account Login</a></li>
                            <li><a href="https://www.meritain.com/">Meritain Health</a></li>
                            <li><a href="https://www.ameritas.com/sign-in/">Ameritas (Dental/Vision)</a></li>
                            <li><a href="https://www.lincolnfinancial.com/public/individuals">Lincoln (STD/Life)</a></li>
                            <li><a href="https://ssa.gov">Social Security</a></li>
                        </ul>
                    </div>
                    <div className="py-4 px-6">
                        <h2 className="text-lg font-bold uppercase mb-2">Safety Links</h2>
                        <ul className="space-y-2">
                            <li><a href="https://safety.mardens.com">Safety Logs Dashboard</a></li>
                            <li><a href="https://mardens-my.sharepoint.com/personal/kira_estes_mardens_com/Lists/Approved%20SDS?env=WebViewList">SDS Safety Sheets</a></li>
                            <li><a href="https://mardens.sharepoint.com/sites/TrainingTeam/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x012000E71DBA1EEBFFBA4E81FC1B197DA1E444&viewid=1c091beb%2D7a2b%2D46e9%2D8315%2De5e9ecaa7c3f">Marden's Training Videos</a></li>
                            <li><a href="https://forms.gle/TJwpzgX9YSmPVk7t9">Daily Safety Sweep Form</a></li>
                        </ul>
                    </div>
                    <div className="py-4 px-6">
                        <h2 className="text-lg font-bold uppercase mb-2">Manager Resources</h2>
                        <ul className="space-y-2">
                            <li><a href="https://www.rlhonline.net/mardens.asp">Vangent</a></li>
                            <li><a href="https://forms.office.com/r/vh0znQT7gh">Math Test</a></li>
                            <li><a href="https://mardens.sharepoint.com/sites/HRandSafety">HR & Safety Resources</a></li>
                            <li><a href="https://mardens.sharepoint.com/sites/MardensGeneral">Buyer/Merchandising Presentations</a></li>
                            <li><a href="https://mardens.sharepoint.com/sites/HRandSafety/Shared%20Documents/Forms/AllItems.aspx?newTargetListUrl=%2Fsites%2FHRandSafety%2FShared%20Documents&viewpath=%2Fsites%2FHRandSafety%2FShared%20Documents%2FForms%2FAllItems%2Easpx&id=%2Fsites%2FHRandSafety%2FShared%20Documents%2FManager%20Docs&viewid=558dd156%2D4b00%2D4035%2D9233%2D1c13fa6ff200">Managers Documents</a></li>
                        </ul>
                    </div>
                </NavbarMenu>
            </NavbarMenu>
        </Navbar>);
}