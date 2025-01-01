import {Button, Link} from "@nextui-org/react";

export default function HRNewsAlerts() {
    return (
        <section id="hr-news-alerts" className="flex flex-col gap-4">
            <h2 className="text-4xl font-medium">HR News and Alerts</h2>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-col gap-2 w-full"}>
                    <p className={"text-2xl font-medium"}>Handbook</p>
                    Click below to check out our current Employee Handbook
                    <Button
                        as={Link}
                        href="https://mardens.sharepoint.com/:w:/r/sites/HRandSafety/_layouts/15/Doc.aspx?sourcedoc=%7BE08E1368-D5CF-4D0D-A630-083E87B930C0%7D&amp;file=Marden%27s%20Employee%20Handbook.docx&amp;fromShare=true&amp;action=default&amp;mobileredirect=true"
                        target="_blank"
                        color={"primary"}
                        showAnchorIcon
                        variant={"light"}
                        isExternal
                        className={"w-fit"}
                    >
                        View
                    </Button>
                </div>
                <div className={"flex flex-col gap-2 w-full"}>
                    <p className={"text-2xl font-medium"}>Employment Opportunities</p>
                    <p>Looking for a change? Moving to new location? Marden's has job opportunities available on our website for you to consider. We like hiring from within Marden's and want you to be aware of any positions that might be of interest.
                        Check out what we currently are looking for.</p>
                    <Button
                        as={Link}
                        href="https://secure3.saashr.com/ta/6127576.jobs?ShowAllOpenings"
                        target="_blank"
                        color={"primary"}
                        showAnchorIcon
                        isExternal
                        variant={"light"}
                        className={"w-fit"}
                    >
                        Positions Available Now!
                    </Button>
                </div>
            </div>

        </section>
    );
}