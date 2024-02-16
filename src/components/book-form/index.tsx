import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import CustomButton from "../custom-button";
import CustomUpload from "../custom-upload";
import CustomInput from "../forms/input";
import { useState } from "react";
import toast from "react-hot-toast";

interface BookingFormType {
  full_name: string;
  dob: string;
  phone_number: string;
  reservation_start: string;
  reservation_end: string;
}

export const BookForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<BookingFormType>();

  const [loading, setLoading] = useState(false);

  const handleBookingSubmit: SubmitHandler<BookingFormType> = async (data) => {
    try {
      setLoading(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...data },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Booking successful");
      reset();
    } catch (error) {
      toast.error("Something went wrong, try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="mb-10">
        <h1 className="block text-3xl font-bold   mb-6  text-[#0075E2]">
          Fame Connect
        </h1>
        <h1 className="text-lg md:text-xl font-bold mb-1">Book A Session</h1>
        <p className="text-gray-600 text-xs md:text-sm ">
          Create a time with your favourite celebrity and let's connect you 😊
        </p>
      </div>
      <form
        className="flex flex-col gap-y-4"
        onSubmit={handleSubmit(handleBookingSubmit)}
      >
        <CustomInput
          label="Full name"
          {...register("full_name", { required: true })}
          error={errors.full_name}
        />
        <CustomInput
          label="Date of birth"
          type="date"
          {...register("dob", { required: true })}
          error={errors.dob}
        />
        <CustomInput
          label="Phone Number"
          {...register("phone_number", { required: true })}
          error={errors.phone_number}
        />
        <CustomInput
          label="Reservation start date"
          type="date"
          {...register("reservation_start", { required: true })}
          error={errors.reservation_start}
        />
        <CustomInput
          label="Reservation end date"
          type="date"
          {...register("reservation_end", { required: true })}
          error={errors.reservation_end}
        />
        <CustomUpload
          name="upload"
          accept={{
            "image/png": [".png"],
          }}
        />
        <CustomButton isloading={loading}>Submit</CustomButton>
      </form>
    </div>
  );
};
