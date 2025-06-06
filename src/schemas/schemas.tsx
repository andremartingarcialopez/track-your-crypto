import { z } from "zod";

export const SchemaCurrency = z.object({
    code: z.string(),
    name: z.string()
});

export const SchemaCryptoSelect = z.array(
    z.object({
        CoinInfo: z.object({
            FullName: z.string(),
            Name: z.string(),
        })
    })
)