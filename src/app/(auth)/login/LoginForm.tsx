'use client'
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from './../../../lib/schemas/LoginSchema';
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver:zodResolver(loginSchema)
    });

    const onSubmit = (data:LoginSchema) => {
        console.log(data);
    };

    return (
        <Card className="w-full max-w-sm space-y-6 p-8 bg-gray-100 shadow-lg rounded-xl mx-auto mt-10 text-gray-900">
            <h1 className="text-3xl font-extrabold text-center text-gray-800">Welcome Back! ❤️</h1>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className={`block w-full border rounded-lg px-4 py-2 text-gray-900 focus:border-red-300 focus:ring-red-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format"
                            }
                        })}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className={`block w-full border rounded-lg px-4 py-2 text-gray-900 focus:border-red-300 focus:ring-red-300 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long"
                            }
                        })}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    ❤️ Login
                </button>
            </form>
            <div className="text-center mt-6">
                <a href="/register" className="text-red-500 hover:underline">
                    New here? Create an account 🥰
                </a>
            </div>
           
        </Card>
    );
}