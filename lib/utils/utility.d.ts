export declare class Utility {
    static locale: string;
    static version: string;
    static googleInitialize(provider_id: string, clientId: string, opt?: {
        scope: string;
    }): Promise<void>;
    static fbInitialize(provider_id: string, clientId: string, opt?: {
        scope: string;
    }): Promise<void>;
    static loadScript(id: string, src: string, onload: any, async?: boolean, inner_text_content?: string): void;
}
//# sourceMappingURL=utility.d.ts.map