import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

export default function FAQ() {
    return (
        <>
            <section id="faq">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-4xl font-medium">FAQ</h2>
                    <Button color={"primary"}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Button>
                </div>
                <Accordion>
                    <AccordionItem key={"what-is-hr-dashboard"} title={"What is the HR dashboard"}>
                        The HR dashboard is a comprehensive human resource page designed for all Marden’s employees. It serves as a central hub where you can access various resources such as Kronos, the employee handbook, and health insurance login. It also provides HR contact information and other relevant details. It's designed to streamline your access to important HR-related information and tools.
                    </AccordionItem>

                    <AccordionItem key={"where-is-employee-handbook"} title={"Where is the employee handbook"}>
                        The "Current Employee Handbook" is conveniently located in the middle of the HR dashboard page under the section titled "HR News &amp; Alerts". To view the handbook, simply click the red 'view' button.
                    </AccordionItem>

                    <AccordionItem key={"where-can-i-find-my-pay-stub"} title={"Where can I find my pay stub"}>
                        To find your pay stub, you need to log in to Kronos. Once logged in, click the three bars (located in the upper left corner), then click the individual person icon. Navigate to 'My pay' &gt; 'Pay history'. Here, you'll see your last three paychecks. If you need to view pay stubs from previous pay periods, click 'Historical'.
                    </AccordionItem>

                    <AccordionItem key={"where-is-my-schedule"} title={"Where is my schedule"}>
                        Your schedule can also be found in Kronos. After logging in, click the three bars, then click the individual person icon. From there, click 'Schedule' to view your current work schedule.
                    </AccordionItem>

                    <AccordionItem key={"how-to-download-kronos"} title={"How do I download Kronos on my phone"}>
                        To download Kronos on your phone, search for "UKG Ready" in your phone's app store and install it. To log in, use Marden's access code 6127576 and your user ID, which is your first name and last name separated by a hyphen. Use the password you created during orientation.
                    </AccordionItem>

                    <AccordionItem key={"what-is-the-bell"} title={"What is the bell"}>
                        The bell icon, located in the top right hand corner in Kronos, is your notification center. It indicates any pending HR actions that need to be completed. It's a handy tool to keep track of any tasks or updates related to your employment.
                    </AccordionItem>

                    <AccordionItem key={"how-to-enroll-in-benefits"} title={"How do I enroll in benefits"}>
                        If you are a full-time employee, your manager will provide you with the Employee Benefits Summary Booklet. Please take the time to review it thoroughly. HR will contact you within a few weeks to assist you in enrolling in (or declining) benefits.
                    </AccordionItem>
                </Accordion>
            </section>
        </>
    );
}