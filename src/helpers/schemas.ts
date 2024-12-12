import * as yup from "yup";

export const registerSchema = yup.object( {
    name: yup.string().min( 1, "Name must contain more than 1 character" )
        .max( 32, "Name must contain less than 32" ).required(),
    email: yup.string().email( "Email is not valid" ).required( "Email is required" ).matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Email must match the format: example@mail.com"
    ),
    password: yup.string().min( 8, "Enter a valid Password" )
        .max( 64, "Enter a valid Password" ).required(),
} ).required();

export const loginSchema = yup.object( {
    email: yup.string().email( "Email is not valid" ).required( "Email is required" ).matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Email must match the format: example@mail.com"
    ),
    password: yup.string().min( 8, "Enter a valid Password" )
        .max( 64, "Enter a valid Password" ).required(),
} ).required();