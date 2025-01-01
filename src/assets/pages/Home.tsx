import FAQ from "../components/Home/FAQ.tsx";
import HRNewsAlerts from "../components/Home/HRNewsAlerts.tsx";
import HotLines from "../components/Home/HotLines.tsx";
import HRContactInfo from "../components/Home/HRContactInfo.tsx";
import {Button, Divider, Form, Input, Tab, Tabs, Textarea, Tooltip} from "@nextui-org/react";
import {Icon} from "@iconify/react";

export default function Home() {
    return (
        <div className={"flex flex-col mx-4 gap-8 py-8"}>
            <div className={"flex flex-row gap-4"}>
                <HRContactInfo/>
                <div className={"flex flex-col gap-8 w-full"}>
                    <HotLines/>
                    <Divider/>
                    <HRNewsAlerts/>
                </div>
            </div>

            <Tabs variant={"underlined"} color={"primary"}>
                <Tab title={"Contact HR"}>
                    <Form className={"flex flex-col gap-4 w-full"}>
                        <div className={"flex flex-row gap-4 grow w-full"}>
                            <Input
                                label={"First Name"}
                                autoComplete={"given-name"}
                                isRequired
                                endContent={<Icon icon="akar-icons:person" width="24" height="24"/>}
                                classNames={{
                                    base: "w-full"
                                }}
                            />
                            <Input
                                label={"Last Name"}
                                autoComplete={"family-name"}
                                isRequired
                                endContent={<Icon icon="fluent-mdl2:family" width="24" height="24"/>}
                                classNames={{
                                    base: "w-full"
                                }}
                            />
                        </div>
                        <div className={"flex flex-row gap-4 grow w-full"}>
                            <Input
                                label={"Email"}
                                autoComplete={"email"}
                                type={"email"}
                                endContent={<Icon icon="ic:outline-email" width="24" height="24"/>}
                                classNames={{
                                    base: "w-full"
                                }}
                            />
                            <Input
                                label={"Phone"}
                                autoComplete={"mobile tel"}
                                type={"tel"}
                                endContent={<Icon icon="lucide:phone" width="24" height="24"/>}
                                classNames={{
                                    base: "w-full"
                                }}
                            />
                        </div>
                        <Input
                            label={"Subject"}
                            autoComplete={"off"}
                            isRequired
                            endContent={<Icon icon="material-symbols:subject" width="24" height="24"/>}
                            classNames={{
                                base: "w-full"
                            }}
                        />
                        <Textarea
                            label={"Message"}
                            isRequired
                        />

                        <Tooltip content={"Submit this form to HR for further processing."}>
                            <Button
                                type={"submit"}
                                endContent={<Icon icon="proicons:send" width="24" height="24"/>}
                                color={"primary"}
                            >
                                Send
                            </Button>
                        </Tooltip>
                    </Form>
                </Tab>

            </Tabs>

            <FAQ/>
        </div>
    );
}