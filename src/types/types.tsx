import type { z } from "zod";
import type { SchemaCryptoInfo, SchemaCryptoSelect, SchemaCurrency, SchemaSelectForm } from "../schemas/schemas";

export type Currency = z.infer<typeof SchemaCurrency>;
export type CryptoSelect = z.infer<typeof SchemaCryptoSelect>
export type SelectForm = z.infer<typeof SchemaSelectForm>
export type CryptoInfo = z.infer<typeof SchemaCryptoInfo>