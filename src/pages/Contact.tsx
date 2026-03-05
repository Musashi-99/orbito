import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
	return (
		<div className="min-h-screen bg-black text-foreground">
			<Navigation />

			<main className="relative flex w-full items-center justify-center p-4 pt-32 pb-20">
				<div className="mx-auto max-w-5xl w-full">
					<ContactCard
						title="Contact Us"
						description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
						contactInfo={[
							{
								icon: MailIcon,
								label: 'Email',
								value: 'orbitohq@gmail.com',
							},
							{
								icon: PhoneIcon,
								label: 'Phone',
								value: '+92 312 1234567',
							},
							{
								icon: MapPinIcon,
								label: 'Address',
								value: 'Remote Global Team',
								className: 'col-span-2',
							}
						]}
					>
						<ContactForm />
					</ContactCard>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Contact;