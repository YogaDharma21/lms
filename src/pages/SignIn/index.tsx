import { Link, useNavigate } from "react-router";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../utils/zodSchema";
import { setSecureItem } from "../../utils/secureStorage";
import { STORAGE_KEY } from "../../utils/const";
import { useMutation } from "@tanstack/react-query";
import { postSignIn } from "../../services/authService";

export default function SignInPage({ type = "manager" }: { type: string }) {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signInSchema),
    });

    const { isPending, mutateAsync } = useMutation({
        mutationFn: (data: { email: string; password: string }) =>
            postSignIn(data),
    });

    const onSubmit = async (data: { email: string; password: string }) => {
        try {
            const response = await mutateAsync(data);
            setSecureItem(STORAGE_KEY, response.data);

            if (response.data.role === "manager") {
                navigate("/manager");
            } else {
                navigate("/student");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="relative flex flex-col flex-1">
            <div className="absolute inset-0 bg-[#060A23] -z-10 rounded-none h-screen">
                <img
                    src="/assets/images/backgrounds/background-glow.png"
                    className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
                    alt=""
                />
            </div>
            <nav className="flex items-center justify-between p-[30px]">
                <Navbar />
                <div className="flex items-center gap-3">
                    {type === "manager" && (
                        <Link to="/manager/sign-up">
                            <div className="flex items-center gap-3 w-fit rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                                <span className="font-semibold text-white">
                                    Sign Up
                                </span>
                            </div>
                        </Link>
                    )}
                </div>
            </nav>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-[400px] h-fit rounded-[20px] border border-[#262A56] p-[30px] gap-[30px] bg-[#080A2A] m-auto"
            >
                <div>
                    <h1 className="font-bold text-[26px] leading-[39px] text-white">
                        Welcome Back!
                    </h1>
                    <p className="text-[#6B6C7F]">
                        Manage your employees easily
                    </p>
                </div>
                <hr className="border-[#262A56]" />
                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                    <img
                        src="/assets/images/icons/sms-white.svg"
                        className="w-6 h-6 flex shrink-0"
                        alt="icon"
                    />
                    <input
                        type="email"
                        id="email"
                        className="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]"
                        placeholder="Write your email address"
                        {...register("email")}
                    />
                </div>
                {errors.email?.message && (
                    <p className="text-red-500 text-xs -mt-5">
                        {errors.email?.message}
                    </p>
                )}

                <div>
                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                        <img
                            src="/assets/images/icons/key-white.svg"
                            className="w-6 h-6 flex shrink-0"
                            alt="icon"
                        />
                        <input
                            type="password"
                            id="password"
                            className="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]"
                            placeholder="Type your secure password"
                            {...register("password")}
                        />
                    </div>
                    {errors.password?.message && (
                        <p className="text-red-500 text-xs mt-3">
                            {errors.password?.message}
                        </p>
                    )}
                    <div className="flex justify-end mt-[10px]">
                        <a
                            href="#"
                            className="text-sm leading-[21px] text-[#662FFF] hover:underline"
                        >
                            Forgot Password
                        </a>
                    </div>
                </div>
                <hr className="border-[#262A56]" />
                <button
                    disabled={isPending}
                    type="submit"
                    className="w-full rounded-full border p-[14px_20px] text-center font-semibold text-white bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]"
                >
                    {isPending
                        ? "Signing In..."
                        : `Sign In to ${type === "manager" ? "Manage" : "View"}`}
                </button>
            </form>
        </div>
    );
}
