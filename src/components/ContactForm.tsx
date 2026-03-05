import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://souravahmed-backend.vercel.app/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'sec-ch-ua-platform': '"Linux"',
                    'Referer': 'https://souravahmed.vercel.app/',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: "Contact us",
                    message: `Phone: ${formData.phone}\n\n${formData.message}`,
                }),
            });

            if (response.ok) {
                toast({
                    title: "Message sent!",
                    description: "We'll get back to you within 1 business day.",
                });
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex flex-col gap-2">
                <Label className="text-white">Name</Label>
                <Input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your name"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label className="text-white">Email</Label>
                <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="your@email.com"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label className="text-white">Phone</Label>
                <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your phone number"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label className="text-white">Message</Label>
                <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                    placeholder="Tell us about your project..."
                />
            </div>
            <Button
                className="w-full button-gradient"
                type="submit"
                disabled={loading}
            >
                {loading ? "Sending..." : "Submit"}
            </Button>
        </form>
    );
};

export default ContactForm;
