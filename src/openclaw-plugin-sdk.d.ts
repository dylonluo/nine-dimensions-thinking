declare module "openclaw/plugin-sdk" {
  interface SchemaBuilder<T = unknown> {
    describe(description: string): SchemaBuilder<T>;
    optional(): SchemaBuilder<T | undefined>;
  }

  interface SchemaApi {
    string(): SchemaBuilder<string>;
    enum<T extends readonly string[]>(values: T): SchemaBuilder<T[number]>;
  }

  export interface OpenClawPluginApi {
    schema: SchemaApi;
    tool(
      name: string,
      description: string,
      parameters: Record<string, SchemaBuilder>,
      handler: (args: Record<string, unknown>) => Promise<unknown> | unknown
    ): void;
  }
}
