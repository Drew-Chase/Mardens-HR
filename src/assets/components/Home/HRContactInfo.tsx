import ContactCard from "../ContactCard.tsx";
import TiffanyBernatchezProfile from "../../images/Tiffany Bernatchez.jpg"

export default function HRContactInfo() {
    return (
        <section id="hr-contact-info" className="flex flex-col gap-4 w-full">
            <h2 className="text-4xl font-medium">HR Contact Information</h2>
            <ContactCard
                name="Cathy Callahan"
                description="HR Manager"
                email="ccallahan@mardens.com"
                phone="(207) 660-9218"
                cellphone="(207) 649-3067"
                image="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/hero-card-complete.jpeg"
            />
            <ContactCard
                name="Tiffany Bernatchez"
                description="HR Assistant"
                email="tiffany.bernatchez@mardens.com"
                phone="(207) 830-4045"
                image={TiffanyBernatchezProfile}
            />
        </section>
    );
}