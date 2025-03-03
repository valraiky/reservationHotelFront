export const validatePassword =  {
    required: "ce champ est requis",
    pattern: {
      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/,
      message: " au moins 8 caractères,MAJ,min,0-9 et caractere  special"
    }
  }