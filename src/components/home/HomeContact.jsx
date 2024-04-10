import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Textarea } from "@/shadcn/ui/textarea";
import Image from "next/image";

const HomeContact = () => {
  return (
    <div className="grid grid-cols-2 py-20">
      <div>
        <Image src="/images/map-img.png" alt="logo" width={800} height={570} />
      </div>
      <div className="py-10 px-5">
        <h3 className="text-primary text-[32px] font-bold">Got More Questions?</h3>
        <h2 className="text-[64px] font-bold">Say Hi To The Team</h2>
        <p className="text-[20px] max-w-xl">
          Reach out to our dedicated team for any inquiries or support, and let&apos;s start a conversation that makes a difference.
        </p>
        <div className="mt-2 flex flex-col gap-6">
          <div className="max-w-lg">
            <Input placeholder="Name" />
          </div>
          <div className="max-w-lg">
            <Input placeholder="Email" />
          </div>
          <div className="max-w-lg">
            <Textarea placeholder="Message" rows={5} />
          </div>
        </div>
        <div className="max-w-lg mt-3">
          <Button>Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
