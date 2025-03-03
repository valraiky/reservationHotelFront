export const  validateEmail= {
    required: "ce champ est requis",
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Email est incorrect exemple@gmail.com"
    }
}