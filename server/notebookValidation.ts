import { z } from "zod";

export const notebookSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Notebook adı boş olamaz." })
    .max(100, { message: "Notebook adı en fazla 100 karakter olabilir." }),
  userId: z.string().min(1, { message: "userId alanı zorunlu." }),
  // Ek alanlar varsa burada ekle
});
