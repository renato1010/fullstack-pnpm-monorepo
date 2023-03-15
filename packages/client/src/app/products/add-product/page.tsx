"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { SaveProductFormData, useSaveProduct } from "@api";
import { useEffect } from "react";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SaveProductFormData>();

  const { data: responseData, status, saveProduct } = useSaveProduct();
  const router = useRouter();

  useEffect(() => {
    if (status === "SUCCESS") {
      router.push("/products");
    }
  }, [status, router]);

  const onSubmit: SubmitHandler<SaveProductFormData> = (data) => {
    saveProduct(data);
  };

  return (
    <article className="h-full w-full flex flex-col justify-center items-center">
      <h2 className="text-xl font-bolder text-center mb-10">Create Product</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[94%] lg:w-4/5 p-8 border border-slate-400 rounded-md shadow-lg"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Product Name
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 
              rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                errors.name && "border border-red-300"
              }`}
              type="text"
              placeholder="Komodo grill"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-300 text-xs italic">Please fill out this field.</p>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-description"
            >
              Product description
            </label>
            <textarea
              className={`appearance-none block w-full bg-gray-200 text-gray-700 
              rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                errors.description && "border border-red-300"
              }`}
              placeholder="product description"
              {...register("description", { required: true })}
            />
            {errors.description && <p className="text-red-300 text-xs italic">Please fill out this field.</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-department"
            >
              Department
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 
              rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                errors.department && "border border-red-300"
              }`}
              type="text"
              placeholder="Department"
              {...register("department", { required: true })}
            />
            {errors.department && <p className="text-red-300 text-xs italic">Please fill out this field.</p>}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-price"
            >
              Price $
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 
              rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                errors.price && "border border-red-300 "
              }`}
              type="text"
              placeholder="price"
              {...register("price", { required: true })}
            />
            {errors.price && <p className="text-red-300 text-xs italic">Please fill out this field.</p>}
          </div>
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className=" flex gap-2 items-center text-green-700 hover:text-white border border-green-700 
        hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm 
        px-4 py-2 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white 
        dark:hover:bg-green-600 dark:focus:ring-green-800 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          create product
        </button>
      </form>
    </article>
  );
}
