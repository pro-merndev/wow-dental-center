import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Textarea } from "@/shadcn/ui/textarea";
import Image from "next/image";

const HomeContact = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 py-20 gap-10">
      <div className="flex justify-center items-center">
        <Image src="/images/map-img.png" alt="logo" width={750} height={530} className="lg:rounded-e-3xl shadow-2xl" />
      </div>

      <div className="flex justify-center items-center max-lg:container">
        <div className="w-fit">
          <h3 className="text-primary xl:text-[32px] text-xl  font-bold lg:text-left text-center">Got More Questions?</h3>
          <h2 className="xl:text-[64px] text-[32px] font-bold lg:text-left text-center">Say Hi To The Team</h2>
          <p className="xl:text-[20px] text-sm  max-w-xl lg:text-left text-center mb-5 lg:mb-0">
            Reach out to our dedicated team for any inquiries or support, and let&apos;s start a conversation that makes a difference.
          </p>
          <div className="mt-2 flex flex-col lg:max-w-lg  gap-6">
            <div className="">
              <Input placeholder="Name" />
            </div>
            <div className="">
              <Input placeholder="Email" />
            </div>
            <div className="">
              <Textarea placeholder="Message" rows={5} />
            </div>
          </div>
          <div className="lg:max-w-lg w-full mt-3">
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
