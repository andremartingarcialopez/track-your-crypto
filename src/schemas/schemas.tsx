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

export const SchemaSelectForm = z.object({
    currency: z.string(),
    cryptoCurrency: z.string(),
});

export const SchemaCryptoInfo = z.object({
    PRICE: z.string(),
    LOWDAY: z.string(),
    HIGHDAY: z.string(),
    IMAGEURL: z.string(),
    LASTUPDATE: z.string(),
    CHANGE24HOUR: z.string(),
})
